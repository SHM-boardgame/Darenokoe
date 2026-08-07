import './globals.css';
export const metadata = { title: '誰の声｜お題テーマ', description: 'ボードゲームのお題作成支援' };
export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ja"><body><div className="flex min-h-screen flex-col"><div className="flex-1">{children}</div><footer className="mt-8 border-t border-slate-200 px-4 py-5 text-center text-xs text-slate-500">© 2026 SHM ｜ <a className="underline underline-offset-2" href="https://x.com/SHM_boardgame" target="_blank" rel="noreferrer">お問い合わせ（X（旧Twitter））</a></footer></div></body></html>; }
