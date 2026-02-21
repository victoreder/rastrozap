export default function RecentActivity() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
      <h3 className="text-lg font-semibold mb-4">Atividade Recente</h3>
      <div className="space-y-3">
        <p className="text-sm text-slate-600 text-center py-8">
          Nenhuma atividade recente
        </p>
      </div>
    </div>
  );
}
