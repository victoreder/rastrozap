import Link from 'next/link';

export default function QuickActions() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Ações Rápidas</h3>
      <div className="flex gap-3">
        <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Criar Novo Link
        </button>
        <button className="flex-1 px-4 py-2 bg-slate-200 text-slate-900 rounded-lg hover:bg-slate-300">
          Ver Relatórios
        </button>
      </div>
    </div>
  );
}
