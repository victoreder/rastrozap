export interface MetricsCardProps {
  title: string;
  value: string | number;
  description?: string;
}

export default function MetricsCard({ title, value, description }: MetricsCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <p className="text-sm text-slate-600 mb-2">{title}</p>
      <p className="text-3xl font-bold text-slate-900">{value}</p>
      {description && <p className="text-xs text-slate-500 mt-2">{description}</p>}
    </div>
  );
}
