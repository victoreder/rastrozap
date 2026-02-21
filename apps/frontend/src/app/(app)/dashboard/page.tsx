'use client';

export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { createBrowserClient } from '@supabase/ssr';
import MetricsCard from '../components/MetricsCard';
import RecentActivity from '../components/RecentActivity';
import QuickActions from '../components/QuickActions';

interface Metrics {
  totalLinks: number;
  totalLeads: number;
  leadsToday: number;
  conversionRate: number;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState<Metrics>({
    totalLinks: 0,
    totalLeads: 0,
    leadsToday: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      if (!user?.id) return;

      try {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // Fetch account data to get metrics
        const { data: accountData } = await supabase
          .from('accounts')
          .select('*')
          .eq('user_id', user.id)
          .single();

        if (accountData) {
          // Fetch links count
          const { count: linksCount } = await supabase
            .from('links')
            .select('*', { count: 'exact', head: true })
            .eq('account_id', accountData.id);

          // Fetch leads count
          const { count: leadsCount } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('account_id', accountData.id);

          // Fetch leads today count
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          const { count: leadsCountToday } = await supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('account_id', accountData.id)
            .gte('created_at', today.toISOString());

          // Calculate conversion rate (leads / links)
          const totalLinks = linksCount || 0;
          const totalLeads = leadsCount || 0;
          const conversionRate = totalLinks > 0 ? (totalLeads / totalLinks) * 100 : 0;

          setMetrics({
            totalLinks,
            totalLeads,
            leadsToday: leadsCountToday || 0,
            conversionRate: Math.round(conversionRate * 10) / 10,
          });
        }
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, [user?.id]);

  const userName = user?.user_metadata?.name || user?.email?.split('@')[0] || 'Usuário';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-600 mt-2">Bem-vindo, {userName}!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <MetricsCard
          title="Links Criados"
          value={loading ? '-' : metrics.totalLinks}
        />
        <MetricsCard
          title="Leads Rastreados"
          value={loading ? '-' : metrics.totalLeads}
        />
        <MetricsCard
          title="Leads Hoje"
          value={loading ? '-' : metrics.leadsToday}
        />
        <MetricsCard
          title="Taxa de Conversão"
          value={loading ? '-' : `${metrics.conversionRate}%`}
        />
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
