'use client';

import { useState } from 'react';

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Como RastroZap rastreia leads?',
      a: 'Criamos links únicos e rastreáveis que capturam dados de UTM. Quando alguém clica e chega ao WhatsApp, vinculamos via UazAPI para saber qual lead chegou.',
    },
    {
      q: 'Qual é o limite de leads?',
      a: 'O plano Starter permite até 500 leads por dia. Se precisar de mais, entre em contato para um plano customizado.',
    },
    {
      q: 'Preciso de conhecimento técnico?',
      a: 'Não. Nossa interface é simples e intuitiva. Você gera um link, compartilha no anúncio, e pronto. Dados aparecem em tempo real no dashboard.',
    },
    {
      q: 'Funciona com Meta Ads?',
      a: 'Sim! Funciona com Meta Ads, Facebook Ads, Google Ads, e qualquer plataforma que permita links customizados.',
    },
    {
      q: 'E se cancelo minha assinatura?',
      a: 'Sem problemas. Seus dados ficam acessíveis por 30 dias. Você pode exportar tudo em CSV antes de perder acesso.',
    },
    {
      q: 'Como faço para integrar ao WhatsApp?',
      a: 'Você faz login via UazAPI (é grátis). Depois, RastroZap sincroniza e rastreia mensagens automaticamente.',
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenId(openId === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-slate-900 text-left">{faq.q}</h3>
                <span
                  className={`text-blue-600 font-bold transition-transform ${openId === idx ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>

              {openId === idx && (
                <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
