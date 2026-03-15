import { Star, Target, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { WaveSeparator, BrutalistButton } from '@/components/ui';

export function CTA() {
  return (
    <>
      {/* 10. FINAL CTA */}
      <section className="py-32 px-4 md:px-8 bg-[#FFF5E6] text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 animate-bounce opacity-50">
          <Star className="w-full h-full text-[#FF6B1A] fill-current" />
        </div>
        <div className="absolute bottom-10 right-10 w-32 h-32 animate-pulse opacity-50">
          <Target className="w-full h-full text-[#FFE066] fill-current" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 text-5xl md:text-7xl font-black uppercase mb-8 text-[#1A1A1A] tracking-tight text-center">
            <span>Prêt à</span>
            <span className="bg-[#FF6B1A] text-white px-6 py-2 border-4 border-[#1A1A1A] transform -rotate-2 shadow-[8px_8px_0_#1A1A1A]">HACKER</span>
            <span>tes notes ?</span>
          </h2>
          <p className="text-2xl font-bold text-[#1A1A1A]/80 mb-12 max-w-2xl mx-auto">
            Rejoins plus de 5,000 élèves qui ont déjà craqué le code des maths.
          </p>
          <BrutalistButton href="#pricing">
            Je rejoins le Guide <ArrowRight className="w-10 h-10" />
          </BrutalistButton>
          <p className="mt-6 text-lg font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
            Accès immédiat • 14 Jours Satisfait ou Remboursé
          </p>
        </div>
      </section>

      <WaveSeparator bgColorClass="bg-[#FFF5E6]" fillClass="fill-[#1A1A1A]" className="-mb-1" />

      {/* 11. FOOTER */}
      <footer className="bg-[#1A1A1A] text-white py-12 px-4 md:px-8 text-center border-t-4 border-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Image src="/chadlogo.jpeg" alt="ChadSciences Logo" width={48} height={48} className="rounded-full border-2 border-white" />
            <h2 className="text-3xl font-extrabold text-[#FF6B1A] uppercase">ChadSciences</h2>
          </div>
          <div className="flex justify-center gap-6 mb-8 font-bold text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-[#FF6B1A] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#FF6B1A] transition-colors">CGV</a>
            <a href="#" className="hover:text-[#FF6B1A] transition-colors">Contact</a>
          </div>
          <p className="text-sm opacity-50 font-bold">© {new Date().getFullYear()} ChadSciences. Tous droits réservés.</p>
        </div>
      </footer>
    </>
  );
}
