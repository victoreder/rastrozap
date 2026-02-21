import Link from 'next/link';

export function PricingSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16">Planos Simples e Transparentes</h2>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 md:p-12 border-2 border-blue-200 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Plano Mais Popular
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2">Starter</h3>
          <p className="text-slate-600 mb-8">Perfeito para agências e gestores de tráfego independentes</p>

          <div className="mb-8">
            <div className="inline-block">
              <span className="text-5xl font-bold text-blue-600">R$ 97</span>
              <span className="text-slate-600 ml-2">/mês</span>
            </div>
          </div>

          <ul className="space-y-4 mb-12 text-left max-w-sm mx-auto">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-slate-700">Até 500 leads por dia</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-slate-700">Links rastreáveis ilimitados</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-slate-700">Integração WhatsApp (UazAPI)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-slate-700">Dashboard com relatórios em tempo real</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-slate-700">Suporte por email</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-slate-700">Primeiro mês grátis</span>
            </li>
          </ul>

          <Link
            href="/registro"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Comece Agora (Grátis)
          </Link>

          <p className="text-slate-600 text-sm mt-6">Sem cartão de crédito obrigatório. Cancele a qualquer momento.</p>
        </div>
      </div>
    </section>
  );
}
