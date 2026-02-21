import { ReactNode } from 'react';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="fixed top-0 right-0 left-0 h-16 bg-white border-b border-slate-200 z-40">
        <div className="h-full px-6 flex items-center justify-between">
          <h1 className="text-lg font-bold">RastroZap</h1>
          <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
            Sair
          </button>
        </div>
      </header>
      
      <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white pt-20 hidden md:block">
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold mb-8">RastroZap</h1>
          <nav className="space-y-2">
            <a href="/app/dashboard" className="block px-4 py-3 rounded hover:bg-slate-800">Dashboard</a>
            <a href="/app/links" className="block px-4 py-3 rounded hover:bg-slate-800">Meus Links</a>
            <a href="/app/leads" className="block px-4 py-3 rounded hover:bg-slate-800">Leads</a>
            <a href="/app/jornada" className="block px-4 py-3 rounded hover:bg-slate-800">Jornada</a>
            <a href="/app/configuracoes" className="block px-4 py-3 rounded hover:bg-slate-800">Configurações</a>
          </nav>
        </div>
      </aside>

      <main className="pt-16 md:ml-64 p-6">
        {children}
      </main>
    </div>
  );
}
