export function FeaturesSection() {
  const features = [
    {
      title: 'Links Rastreáveis',
      description: 'Crie links com short codes que capturam UTMs e dados da campanha automaticamente',
    },
    {
      title: 'Jornada Automática',
      description: 'Defina etapas de conversão e rastreie cada lead através do funil de vendas',
    },
    {
      title: 'Relatórios Acionáveis',
      description: 'Dashboard em tempo real mostra qual anúncio trouxe mais leads e conversões',
    },
    {
      title: 'Integração WhatsApp',
      description: 'Conecte à UazAPI para vincular cliques com mensagens reais do WhatsApp',
    },
    {
      title: 'Exportação de Dados',
      description: 'Exporte relatórios em CSV e integre com suas ferramentas favoritas',
    },
    {
      title: 'Suporte 24/7',
      description: 'Equipe dedicada para ajudar você a configurar e otimizar suas campanhas',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Funcionalidades Principais
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
