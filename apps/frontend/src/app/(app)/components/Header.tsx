'use client';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="fixed top-0 right-0 left-0 h-16 bg-white border-b border-slate-200 z-40 md:left-64">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="md:hidden">
          <h1 className="text-lg font-bold">RastroZap</h1>
        </div>
        <div className="flex-1 hidden md:block" />
        <div className="flex items-center space-x-4">
          <span className="text-sm text-slate-600">{user?.email}</span>
          <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700">
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}
