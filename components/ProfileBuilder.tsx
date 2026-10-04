'use client';

import { useState } from 'react';
import type { ProfileOption, ProfileType } from '@/types/profile';

const chooseRandom = (options: ProfileOption[]) => options[Math.floor(Math.random() * options.length)];

export function ProfileBuilder({ personalities, values }: { personalities: ProfileOption[]; values: ProfileOption[] }) {
  const [personality, setPersonality] = useState<ProfileOption | undefined>();
  const [value, setValue] = useState<ProfileOption | undefined>();

  return <>
    <ProfileSection title="性格を選ぼう" type="personality" options={personalities} selected={personality} onSelect={setPersonality} />
    <ProfileSection title="価値観を選ぼう" type="value" options={values} selected={value} onSelect={setValue} />
    <section aria-live="polite" className="mt-10 rounded-2xl border-2 border-cyan-700 bg-cyan-50 p-5">
      <h2 className="text-xl font-bold">あなたのプロフィール</h2>
      {!personality && !value ? <p className="mt-3 text-slate-700">性格または価値観を選ぶと、ここにプロフィールが表示されます。</p> : <>
        <p className="mt-4 text-2xl font-bold leading-relaxed">{personality?.name}{personality && value ? ' × ' : ''}{value?.name}</p>
        {personality && <p className="mt-3 leading-7"><strong>{personality.name}</strong>：{personality.description}</p>}
        {value && <p className="mt-3 leading-7"><strong>{value.name}</strong>：{value.description}</p>}
      </>}
    </section>
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-xl font-bold">ゲームで使う</h2>
      <p className="mt-2 font-bold text-cyan-800">プロフィールが決まったら、上五作句カードまたは中七作句カードに書こう！</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">短い名称だけを書いても大丈夫です。書いたカードを、変更したいキャラクターのプロフィールの上に重ねてください。</p>
      <ol className="mt-5 grid gap-3 sm:grid-cols-3">
        <li className="rounded-xl border p-3"><span className="font-bold text-cyan-700">1.</span> 性格・価値観を選ぶ</li>
        <li className="rounded-xl border p-3"><span className="font-bold text-cyan-700">2.</span> 作句カードに書く</li>
        <li className="rounded-xl border p-3"><span className="font-bold text-cyan-700">3.</span> キャラクターのプロフィールに重ねる</li>
      </ol>
    </section>
  </>;
}

function ProfileSection({ title, type, options, selected, onSelect }: { title: string; type: ProfileType; options: ProfileOption[]; selected?: ProfileOption; onSelect: (option: ProfileOption) => void }) {
  const label = type === 'personality' ? '性格' : '価値観';
  return <section className="mt-9">
    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
      <div><h2 className="text-xl font-bold">{title}</h2><p className="mt-1 text-sm text-slate-600">1つ選ぶか、ランダムに決められます。</p></div>
      <button className="min-h-11 rounded-lg border border-cyan-700 bg-white px-4 font-medium text-cyan-800" onClick={() => onSelect(chooseRandom(options))}>🎲 {label}をランダムに選ぶ</button>
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => <button key={option.id} onClick={() => onSelect(option)} className={`min-h-24 rounded-xl border-2 p-4 text-left ${selected?.id === option.id ? 'border-cyan-700 bg-cyan-50' : 'border-slate-200 bg-white'}`}>
        <span className="flex items-start justify-between gap-3 text-lg font-bold">{option.name}{selected?.id === option.id && <span aria-label="選択中">✓</span>}</span>
        <span className="mt-2 block text-sm leading-6 text-slate-700">{option.description}</span>
      </button>)}
    </div>
  </section>;
}
