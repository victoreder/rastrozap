'use client';

import { useAuth } from '@/lib/auth-context';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAuth();

  const metrics = [
    { label: 'Links Criados', value: '0', color: 'bg-blue-50' },
    { label: 'Leads Rastreados', value: '0', color: 'bg-green-50' },
    { label: 'Leads Hoje', value: '0', color: 'bg-purple-50' },
    { label: 'Taxa de Conversão', value: '0%', color: 'bg-orange-50' },
  ];

  return (
    <div className="p-6 md:p-8">
      {/* Welcome Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Bem-vindo, {user?.email?.split('@')[0]}!
        </h1>
        <p className="text-slate-600 mt-2">
          Acompanhe o desempenho de suas campanhas em tempo real
        </p>
      </section>

      {/* Metrics Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className={`${metric.color} rounded-lg p-6 border border-slate-200`}>
            <p className="text-sm font-medium text-slate-600 mb-2">{metric.label}</p>
            <p className="text-3xl font-bold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </section>

      {/* Recent Activity Section */}
      <section className="grid lg:grid-cols-3 gap-8 mb-8">
        {/* Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900">Atividade Recente</h2>
          </div>
          <div className="p-6">
            <p className="text-center text-slate-500 py-8">
              Nenhuma atividade registrada ainda. Crie seu primeiro link para começar.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg border border-slate-200 p-6 h-fit">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Ações Rápidas</h2>
          <div className="space-y-3">
            <Link
              href="/app/links"
              className="block w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center transition-colors"
            >
              Criar Link
            </Link>
            <Link
              href="/app/leads"
              className="block w-full px-4 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg text-center transition-colors"
            >
              Ver Leads
            </Link>
            <Link
              href="/app/jornada"
              className="block w-full px-4 py-3 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg text-center transition-colors"
            >
              Configurar Jornada
            </Link>
          </div>
        </div>
      </section>

      {/* Empty State Prompt */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          Pronto para começar?
        </h3>
        <p className="text-slate-700 mb-6">
          Crie seu primeiro link rastreável e comece a medir o ROI de suas campanhas
        </p>
        <Link
          href="/app/links"
          className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
        >
          Criar Primeiro Link
        </Link>
      </section>
    </div>
  );
}
