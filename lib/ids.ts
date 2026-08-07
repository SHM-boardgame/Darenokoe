import type { ThemeType } from '@/types/community';
export function makePageId(slugs: string[]) { return slugs.join('-'); }
export function makeThemeId(communityId: string, type: ThemeType, text: string) {
  // 将来、Markdownの明示IDやID対応表へ差し替える唯一の入口。
  const encoded = Array.from(text.trim()).map((c) => c.codePointAt(0)!.toString(36)).join('-');
  return `${communityId}/${type}/${encoded}`;
}
