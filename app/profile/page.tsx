import type { Metadata } from 'next';
import { ProfileBuilder } from '@/components/ProfileBuilder';
import { loadProfileData } from '@/lib/parse-profile-list';

export const metadata: Metadata = { title: '誰かの声｜プロフィールを作ろう！', description: 'なりきりプロフィールモードの性格・価値観作成支援' };

export default function ProfilePage() {
  const { personalities, values } = loadProfileData();
  return <main id="profile-top" className="mx-auto max-w-4xl p-4 sm:p-6">
    <header className="rounded-2xl bg-cyan-800 p-5 text-white sm:p-7">
      <p className="text-sm font-medium">閑さや　岩にしみ入る　誰の声</p>
      <h1 className="mt-1 text-3xl font-bold">誰かの声<br />プロフィールを作ろう！</h1>
      <p className="mt-4 leading-7">「性格」と「価値観」を1つずつ選んで、なりきる人物のプロフィールを作ろう！</p>
    </header>
    <ProfileBuilder personalities={personalities} values={values} />
  </main>;
}
