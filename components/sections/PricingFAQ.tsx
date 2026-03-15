import { Play, CheckCircle2, Infinity, ShieldCheck } from 'lucide-react';
import { WaveSeparatorBottom, BrutalistButton } from '@/components/ui';

export function PricingFAQ() {
  return (
    <>
      {/* 8. VALUE STACKING & PRICING (L'Offre Irrésistible) */}
      <section id="pricing" className="py-24 px-4 md:px-8 bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 text-5xl md:text-7xl font-black uppercase mb-6 tracking-tight text-white text-center pb-4">
              <span>L&apos;offre</span>
              <span className="bg-[#FF6B1A] text-[#1A1A1A] px-6 py-2 border-4 border-[#1A1A1A] transform -rotate-2 shadow-[8px_8px_0_white]">INDÉCENTE</span>
            </h2>
            <p className="text-2xl font-bold opacity-80 bg-white/10 inline-block px-6 py-2 rounded-full border-2 border-white/20">Tout ce dont tu as besoin pour plier le game.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Value Stack */}
            <div className="space-y-6 bg-white/5 p-8 md:p-10 rounded-[3rem] border-4 border-white/20 backdrop-blur-sm">
              <div className="flex justify-between items-center border-b-4 border-white/10 pb-6">
                <span className="text-xl md:text-2xl font-bold flex items-center gap-4"><div className="bg-[#FF6B1A] p-2 rounded-lg border-2 border-white"><Play className="w-6 h-6 text-white fill-current" /></div> Le Guide Vidéo Complet</span>
                <span className="text-2xl font-extrabold opacity-50 line-through decoration-4 decoration-[#FF4D4D]">197€</span>
              </div>
              <div className="flex justify-between items-center border-b-4 border-white/10 pb-6">
                <span className="text-xl md:text-2xl font-bold flex items-center gap-4"><div className="bg-[#FF6B1A] p-2 rounded-lg border-2 border-white"><CheckCircle2 className="w-6 h-6 text-white" /></div> Fiches Récapitulatives</span>
                <span className="text-2xl font-extrabold opacity-50 line-through decoration-4 decoration-[#FF4D4D]">47€</span>
              </div>
              <div className="flex justify-between items-center border-b-4 border-white/10 pb-6">
                <span className="text-xl md:text-2xl font-bold flex items-center gap-4"><div className="bg-[#FF6B1A] p-2 rounded-lg border-2 border-white"><Infinity className="w-6 h-6 text-white" /></div> Mises à jour à vie</span>
                <span className="text-2xl font-extrabold opacity-50 line-through decoration-4 decoration-[#FF4D4D]">Inestimable</span>
              </div>
              <div className="flex justify-between items-center pt-6 bg-[#FFE066] text-[#1A1A1A] p-6 rounded-2xl border-4 border-white transform -rotate-1 shadow-cartoon">
                <span className="text-2xl md:text-3xl font-extrabold uppercase">Valeur Totale</span>
                <span className="text-4xl md:text-5xl font-extrabold line-through decoration-4 decoration-[#FF4D4D]">244€</span>
              </div>
            </div>

            {/* Right: Pricing Box */}
            <div className="bg-[#FF6B1A] rounded-[3rem] p-8 md:p-12 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] text-center transform md:rotate-2 hover:rotate-0 transition-transform duration-300 relative">
              <h3 className="text-3xl font-extrabold uppercase mb-4">Paiement Unique</h3>
              <p className="font-bold text-lg opacity-90 mb-8 bg-black/20 inline-block px-4 py-2 rounded-xl">Soit le prix d&apos;1h30 de cours particulier...</p>
              <div className="text-8xl md:text-9xl font-black mb-10 drop-shadow-[4px_4px_0_#1A1A1A]">67€</div>
              
              <div className="mb-6">
                <BrutalistButton href="#pricing" className="w-full">
                  Rejoindre le Guide
                </BrutalistButton>
              </div>
              <p className="font-bold text-sm md:text-base flex items-center justify-center gap-2 opacity-90">
                <ShieldCheck className="w-6 h-6" /> 14 Jours Satisfait ou Remboursé
              </p>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparatorBottom bgColorClass="bg-[#FFD4A8]" fillClass="fill-[#1A1A1A]" className="-mt-1" />

      {/* 9. FAQ */}
      <section className="py-24 px-4 md:px-8 bg-[#FFD4A8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 text-5xl md:text-7xl font-black text-center mb-16 uppercase text-[#1A1A1A] tracking-tight">
            <span>T&apos;hésites</span>
            <span className="bg-white text-[#1A1A1A] px-6 py-2 border-4 border-[#1A1A1A] transform rotate-2 shadow-[8px_8px_0_#1A1A1A]">ENCORE ?</span>
          </h2>
        <div className="space-y-4">
          {[
            { q: "J'ai pas le temps, j'ai trop de devoirs.", a: "Justement. Le but c'est de te faire GAGNER du temps. Une vidéo de 10 min remplace 2h de révisions dans le vide." },
            { q: "Je suis vraiment le pire de ma classe en maths.", a: "Parfait. J'ai conçu ce guide en partant de zéro. On n'utilise pas de mots compliqués, on fait des dessins et on utilise la logique." },
            { q: "C'est un abonnement ?", a: "Non ! Tu paies 67€ UNE SEULE FOIS et tu gardes l'accès jusqu'à ton bac (et même après)." },
            { q: "Et si ça marche pas pour moi ?", a: "T'as 14 jours pour tester. Si t'aimes pas ma tête ou mes explications, tu m'envoies un mail et je te rembourse direct. 0 risque." }
          ].map((faq, i) => (
            <details key={i} className="group bg-white rounded-2xl border-4 border-[#1A1A1A] shadow-cartoon overflow-hidden outline-none focus-visible:ring-4 focus-visible:ring-[#FF6B1A] transition-all duration-300">
              <summary className="font-extrabold text-xl uppercase p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden flex justify-between items-center outline-none">
                {faq.q}
                <span className="transform group-open:rotate-45 transition-transform duration-300 text-[#FF6B1A] text-3xl">+</span>
              </summary>
              <div className="p-6 pt-0 font-bold text-[#1A1A1A]/80 text-lg opacity-0 group-open:opacity-100 transition-opacity duration-300">
                <div className="border-t-4 border-[#1A1A1A]/10 pt-4 mt-2">
                  {faq.a}
                </div>
              </div>
            </details>
          ))}
        </div>
        </div>
      </section>

      <WaveSeparatorBottom bgColorClass="bg-[#FFF5E6]" fillClass="fill-[#FFD4A8]" className="-mt-1" />
    </>
  );
}
