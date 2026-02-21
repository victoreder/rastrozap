import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed top-0 right-0 left-0 h-16 bg-white border-b border-slate-200 z-40 md:left-64">
        <div className="h-full px-6 flex items-center justify-between">
          <div>RastroZap</div>
        </div>
      </header>
      <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white pt-20 hidden md:block">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold mb-8">RastroZap</h1>
          <nav className="space-y-2">
            <a href="/app/dashboard" className="block px-4 py-3 rounded hover:bg-slate-800">Dashboard</a>
          </nav>
        </div>
      </aside>
      <main className="pt-16 md:ml-64 p-6">{children}</main>
    </div>
  );
}
