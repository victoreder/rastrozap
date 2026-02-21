'use client';

import { ReactNode, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { href: '/app/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/app/links', label: 'Meus Links', icon: '🔗' },
  { href: '/app/leads', label: 'Leads', icon: '📱' },
  { href: '/app/jornada', label: 'Jornada', icon: '🎯' },
  { href: '/app/configuracoes', label: 'Configurações', icon: '⚙️' },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const { user, signOut } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await signOut();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 right-0 left-0 h-16 bg-white border-b border-slate-200 z-40 md:left-64">
        <div className="h-full px-6 flex items-center justify-between">
          {/* Left */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900"
          >
            ☰
          </button>

          {/* Right */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                {user?.email?.[0].toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-900">
                  {user?.email?.split('@')[0]}
                </span>
                <span className="text-xs text-slate-600">{user?.email}</span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white pt-20 z-50 md:z-30 transition-transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-white mb-8">RastroZap</h1>

          <nav className="space-y-2">
            {navItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-100 hover:text-white"
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Close button on mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 md:hidden text-white"
        >
          ✕
        </button>
      </aside>

      {/* Main Content */}
      <main className="pt-16 md:ml-64">
        {children}
      </main>
    </div>
  );
}
