import fs from 'node:fs';
import path from 'node:path';
import type { ProfileData, ProfileOption, ProfileType } from '@/types/profile';

const sourcePath = path.join(process.cwd(), 'docs', 'Profile-list-v2.md');

function optionId(type: ProfileType, name: string) {
  const encoded = Array.from(name).map((character) => character.codePointAt(0)!.toString(36)).join('-');
  return `profile-${type}-${encoded}`;
}

function cleanName(value: string) {
  return value.replace(/^\d+\.\s*/, '').trim();
}

/** docs/Profile-list-v2.md を唯一のプロフィール候補データとして読む。 */
export function loadProfileData(): ProfileData {
  const markdown = fs.readFileSync(sourcePath, 'utf8');
  const sections: Record<ProfileType, ProfileOption[]> = { personality: [], value: [] };
  let type: ProfileType | undefined;
  let name: string | undefined;
  let descriptionLines: string[] = [];

  const commit = () => {
    if (!type || !name) return;
    const description = descriptionLines
      .join(' ')
      .replace(/^[-*]\s*説明[：:]\s*/, '')
      .trim();
    if (!description) throw new Error(`プロフィール説明がありません: ${name}`);
    sections[type].push({ id: optionId(type, name), name, description, type });
    name = undefined;
    descriptionLines = [];
  };

  for (const line of markdown.split(/\r?\n/)) {
    if (line === '# 性格') {
      commit();
      type = 'personality';
      continue;
    }
    if (line === '# 価値観') {
      commit();
      type = 'value';
      continue;
    }
    const heading = line.match(/^##\s+(.+)$/);
    if (heading && type) {
      commit();
      name = cleanName(heading[1]);
      continue;
    }
    if (name && line.trim()) descriptionLines.push(line.trim());
  }
  commit();

  if (!sections.personality.length || !sections.value.length) {
    throw new Error('性格または価値観の候補が取得できません。');
  }
  return { personalities: sections.personality, values: sections.value };
}
