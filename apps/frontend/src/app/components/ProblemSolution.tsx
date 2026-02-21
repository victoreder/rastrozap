export function ProblemSolution() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Problem */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            O Problema
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-8 md:p-12">
            <p className="text-lg text-slate-700 mb-6">
              Você investe milhares em campanhas de anúncios (Meta Ads, Facebook Ads), mas enfrenta um grande problema:
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <p className="text-slate-600">Não sabe quantos leads reais chegam ao seu WhatsApp</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <p className="text-slate-600">Não consegue atribuir cada lead ao anúncio que o trouxe</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <p className="text-slate-600">Não consegue otimizar campanhas sem dados reais</p>
              </div>
              <div className="flex gap-3">
                <span className="text-red-600 font-bold">✗</span>
                <p className="text-slate-600">Perde dinheiro com anúncios pouco eficientes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            A Solução: RastroZap
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Rastreie Cliques</h3>
              <p className="text-slate-600">
                Cada clique em seus anúncios gera um link rastreável que captura UTMs e informações da campanha
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-full font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Vincule ao WhatsApp</h3>
              <p className="text-slate-600">
                Cruzamos dados de clique com mensagens do WhatsApp via UazAPI para identificar exatamente qual lead chegou
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 text-white rounded-full font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Analise Resultados</h3>
              <p className="text-slate-600">
                Veja em tempo real qual anúncio trouxe mais leads, qual converteu melhor, e otimize suas campanhas
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-center text-slate-700">
              <strong>Resultado:</strong> Aumento de até 40% em ROI de campanhas e redução de 30% em custos de aquisição
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
