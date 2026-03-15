import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Creator } from '@/components/sections/Creator';
import { Testimonials } from '@/components/sections/Testimonials';
import { PricingFAQ } from '@/components/sections/PricingFAQ';
import { CTA } from '@/components/sections/CTA';
import { starPatternBg } from '@/components/ui';

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FFF5E6] text-[#1A1A1A] selection:bg-[#FF6B1A] selection:text-white" style={starPatternBg}>
      <Hero />
      <Features />
      <Creator />
      <Testimonials />
      <PricingFAQ />
      <CTA />
    </main>
  );
}
