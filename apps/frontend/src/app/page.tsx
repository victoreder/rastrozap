import { HeroSection } from './components/HeroSection';
import { ProblemSolution } from './components/ProblemSolution';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from '@/components/layout/Footer';

export const metadata = {
  title: 'RastroZap - Rastreie Leads do WhatsApp com Precisão',
  description: 'Saiba exatamente qual anúncio trouxe cada lead para seu WhatsApp e otimize suas campanhas em tempo real.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSolution />
      <FeaturesSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
