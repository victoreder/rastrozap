import MetricsCard from '../components/MetricsCard';
import RecentActivity from '../components/RecentActivity';
import QuickActions from '../components/QuickActions';

export const metadata = {
  title: 'Dashboard - RastroZap',
  description: 'Seu dashboard RastroZap',
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-600 mt-2">Bem-vindo ao RastroZap!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricsCard title="Links Criados" value={0} />
        <MetricsCard title="Leads Rastreados" value={0} />
        <MetricsCard title="Leads Hoje" value={0} />
        <MetricsCard title="Taxa de Conversão" value="0%" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <QuickActions />
        </div>
      </div>
    </div>
  );
}
