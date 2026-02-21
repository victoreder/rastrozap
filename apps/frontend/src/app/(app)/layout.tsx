import { ReactNode } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Sidebar />
      <main className="pt-16 md:ml-64 p-6">
        {children}
      </main>
    </div>
  );
}
