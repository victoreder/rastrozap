import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Rastreie Leads do WhatsApp com Precisão
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Saiba exatamente qual anúncio trouxe cada lead e otimize suas campanhas em tempo real
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              href="/registro"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              Começar Grátis
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 hover:border-slate-400 text-slate-700 font-semibold rounded-lg transition-colors"
            >
              Saiba Mais
            </Link>
          </div>

          {/* Trust badges */}
          <div className="pt-12 border-t border-slate-200 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <p className="text-sm text-slate-600">Leads por dia</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">R$ 97</div>
              <p className="text-sm text-slate-600">Plano Starter/mês</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">0% Taxa</div>
              <p className="text-sm text-slate-600">Primeiro mês</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
