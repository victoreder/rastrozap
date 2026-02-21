export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded border"><p className="text-sm text-slate-600">Links</p><p className="text-3xl font-bold">0</p></div>
        <div className="bg-white p-6 rounded border"><p className="text-sm text-slate-600">Leads</p><p className="text-3xl font-bold">0</p></div>
        <div className="bg-white p-6 rounded border"><p className="text-sm text-slate-600">Hoje</p><p className="text-3xl font-bold">0</p></div>
        <div className="bg-white p-6 rounded border"><p className="text-sm text-slate-600">Taxa</p><p className="text-3xl font-bold">0%</p></div>
      </div>
    </div>
  );
}
