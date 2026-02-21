'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/app/dashboard', label: 'Dashboard' },
    { href: '/app/links', label: 'Meus Links' },
    { href: '/app/leads', label: 'Leads' },
    { href: '/app/jornada', label: 'Jornada' },
    { href: '/app/configuracoes', label: 'Configurações' },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white pt-20 hidden md:block">
      <div className="px-6 py-8">
        <h1 className="text-2xl font-bold mb-8">RastroZap</h1>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded transition ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-slate-800'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
