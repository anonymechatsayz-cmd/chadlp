'use client';

import { motion } from 'motion/react';
import { X, Calculator, Compass, Dices, Smartphone, Info, Gamepad2 } from 'lucide-react';
import { CloudCharacter, WaveSeparatorBottom, WaveSeparator, BrutalistButton } from '@/components/ui';

export function Features() {
  return (
    <>
      {/* 4. LE PROBLÈME (Storytelling) */}
      <section className="py-24 px-4 md:px-8 bg-[#FFD4A8] relative overflow-hidden text-[#1A1A1A]">
        {/* Chibi Colère (Left) */}
        <CloudCharacter 
          src="/contrarié colère.png" 
          alt="ChadScience en colère" 
          className="hidden 2xl:flex 2xl:left-8 top-20 w-64 2xl:w-80 z-10 transform rotate-6" 
        />
        
        {/* Nouveau Wojak (Right) - Placeholder */}
        <CloudCharacter 
          src="/thinking.png" 
          alt="Nouveau Wojak" 
          className="hidden 2xl:flex 2xl:right-16 bottom-6 w-56 2xl:w-72 z-10" 
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-20">
          <div>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-block bg-[#1A1A1A] text-[#FFE066] px-4 py-2 border-4 border-[#1A1A1A] transform -rotate-3 shadow-[4px_4px_0_#FFFFFF] text-2xl font-black tracking-widest">POV</span>
              <h2 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight text-[#1A1A1A]">
                Le prof parle chinois
              </h2>
            </div>
            
            <p className="text-xl font-bold text-[#1A1A1A] mb-10 leading-relaxed">
              Il enchaîne les théorèmes à la vitesse de la lumière. Il efface avant même que t&apos;aies fini de copier le titre. Tu lèves la main en PLS, et il te lâche son fameux : <br/>
              <span className="italic font-black bg-[#FFE066] px-3 py-1 mt-4 inline-block border-4 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] transform rotate-1 text-2xl">&quot;Mais enfin, c&apos;est trivial !&quot;</span>
            </p>
            
            <ul className="space-y-5 font-bold text-lg text-[#1A1A1A]">
              <li className="flex gap-4 items-start">
                <div className="bg-[#FF4D4D] p-1.5 border-2 border-[#1A1A1A] rounded shadow-[2px_2px_0_#1A1A1A] shrink-0 transform -rotate-3 mt-0.5">
                  <X className="w-5 h-5 text-white stroke-[3]" />
                </div> 
                <span className="pt-0.5">Tu <span className="underline decoration-wavy decoration-[#FF4D4D] underline-offset-4">tryhard</span> pendant des heures pour te taper un 6/20.</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-[#FF4D4D] p-1.5 border-2 border-[#1A1A1A] rounded shadow-[2px_2px_0_#1A1A1A] shrink-0 transform rotate-2 mt-0.5">
                  <X className="w-5 h-5 text-white stroke-[3]" />
                </div> 
                <span className="pt-0.5">Parcoursup approche et ton dossier te fait bader.</span>
              </li>
              <li className="flex gap-4 items-start">
                <div className="bg-[#FF4D4D] p-1.5 border-2 border-[#1A1A1A] rounded shadow-[2px_2px_0_#1A1A1A] shrink-0 transform -rotate-1 mt-0.5">
                  <X className="w-5 h-5 text-white stroke-[3]" />
                </div> 
                <span className="pt-0.5">Tu finis par croire que t&apos;es juste &quot;nul de naissance&quot;.</span>
              </li>
            </ul>
          </div>
          
          <div className="relative mt-8 md:mt-0">
            <div className="absolute inset-0 bg-[#1A1A1A] rounded-[3rem] transform rotate-3 shadow-cartoon-lg"></div>
            <div className="bg-white text-[#1A1A1A] p-8 md:p-10 rounded-[3rem] border-4 border-[#1A1A1A] relative transform -rotate-2 h-full flex flex-col justify-center">
              <div className="absolute -top-6 -right-4 md:-right-6 bg-[#FFE066] border-4 border-[#1A1A1A] rounded-full p-4 shadow-cartoon transform rotate-12 z-20">
                <Gamepad2 className="w-8 h-8 text-[#1A1A1A]" />
              </div>
              
              <div className="inline-block mb-6">
                <h3 className="text-3xl font-black uppercase bg-[#FF4D4D] text-white px-4 py-2 border-4 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] transform -rotate-1 inline-block">
                  SPOILER : C&apos;EST FAUX.
                </h3>
              </div>
              
              <p className="text-xl font-bold leading-relaxed">
                Les maths, c&apos;est littéralement un jeu vidéo. Si on te jette direct contre le boss final sans t&apos;expliquer les combos, tu vas te faire soulever en boucle.<br/><br/>
                Mon but ? Te filer la manette, t&apos;apprendre les mécaniques, et te donner les <span className="bg-[#1A1A1A] text-[#FFE066] px-2 py-0.5 border-2 border-[#1A1A1A] rounded font-mono uppercase tracking-widest shadow-[2px_2px_0_#FF6B1A] transform inline-block -rotate-2">cheat codes</span>.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center relative z-20">
          <BrutalistButton href="#pricing">
            Je veux les cheat codes <Gamepad2 className="w-8 h-8 ml-2 inline" />
          </BrutalistButton>
        </div>
      </section>

      <WaveSeparatorBottom bgColorClass="bg-transparent" fillClass="fill-[#FFD4A8]" className="-mt-1" />

      {/* 5. LE PRODUIT (Timeline) */}
      <section className="py-24 px-4 md:px-8 max-w-6xl mx-auto bg-transparent relative overflow-hidden">
        <div className="text-center mb-24 relative z-10 flex flex-col items-center">
          <h2 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 text-5xl md:text-7xl font-black uppercase mb-8 text-center text-[#1A1A1A] tracking-tight">
            <span>À L&apos;INTÉRIEUR DU</span>
            <span className="bg-[#FF6B1A] text-white px-6 py-2 border-4 border-[#1A1A1A] transform rotate-2 shadow-[8px_8px_0_#1A1A1A]">PROGRAMME</span>
          </h2>
          <p className="text-xl md:text-2xl font-black text-[#1A1A1A] uppercase tracking-wide max-w-2xl bg-white p-4 border-4 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] transform -rotate-1">
            Pas de blabla. Que du concret, organisé comme sur <span className="text-[#E50914] underline decoration-4 underline-offset-4">Netflix</span>.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Ligne verticale (Timeline) - Dashed for brutalism */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0 border-l-8 border-dashed border-[#1A1A1A] transform md:-translate-x-1/2"></div>
          
          {[
            { title: "Niveau 1 : L'Algèbre", desc: "Dérivées, limites, équations. On casse les calculs pour ne plus jamais faire d'erreur de signe.", icon: <Calculator className="w-8 h-8" />, color: "bg-white", textColor: "text-[#1A1A1A]", rotate: 2 },
            { title: "Niveau 2 : Géo", desc: "Vecteurs & Espace. Visualise enfin ce que tu calcules au lieu d'apprendre par cœur.", icon: <Compass className="w-8 h-8" />, color: "bg-[#FFE066]", textColor: "text-[#1A1A1A]", rotate: -2 },
            { title: "Niveau 3 : Probas", desc: "Lois & Stats. Trouve la bonne formule en 2 secondes chrono.", icon: <Dices className="w-8 h-8" />, color: "bg-[#FFD4A8]", textColor: "text-[#1A1A1A]", rotate: 2 },
            { title: "Le Format", desc: "Vidéos courtes, fiches récap, accessible à vie sur PC, tel ou tablette.", icon: <Smartphone className="w-8 h-8" />, color: "bg-[#1A1A1A]", textColor: "text-white", rotate: -1 }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-15%" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className={`relative flex items-center justify-between md:justify-normal mb-24 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''} group`}
            >
              {/* Point sur la timeline - Square instead of circle */}
              <motion.div 
                style={{ x: "-50%" }}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: "spring", bounce: 0.4 } }
                }}
                whileHover={{ scale: 1.2, rotate: 12 }}
                className="absolute left-6 md:left-1/2 w-10 h-10 border-4 border-[#1A1A1A] bg-white flex items-center justify-center z-10 shadow-[4px_4px_0_#1A1A1A] hover:bg-[#FF6B1A] transition-colors duration-300 cursor-pointer"
              >
                <div className="w-3 h-3 bg-[#1A1A1A]"></div>
              </motion.div>
              
              {/* Carte */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 50, x: i % 2 === 0 ? -30 : 30, rotate: item.rotate * 2 },
                  visible: { opacity: 1, y: 0, x: 0, rotate: item.rotate, transition: { duration: 0.5, type: "spring", bounce: 0.3 } }
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`w-[calc(100%-4rem)] md:w-[45%] ml-auto md:ml-0 ${item.color} ${item.textColor} p-8 rounded-2xl border-4 border-[#1A1A1A] shadow-[6px_6px_0_#1A1A1A] hover:shadow-[10px_10px_0_#1A1A1A] transition-shadow duration-300 relative z-20 cursor-pointer`}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl border-4 border-[#1A1A1A] transform -rotate-3 shadow-[2px_2px_0_#1A1A1A] ${item.color === 'bg-[#1A1A1A]' ? 'bg-white text-[#1A1A1A]' : 'bg-[#1A1A1A] text-white'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black uppercase leading-tight">{item.title}</h3>
                </div>
                <p className="font-bold text-lg">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <WaveSeparator bgColorClass="bg-transparent" fillClass="fill-[#FFD4A8]" className="-mb-1" />

      {/* 5.5 MESSAGE AUX PARENTS */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-[#FFD4A8] relative overflow-hidden">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] border-4 border-[#1A1A1A] p-8 md:p-12 shadow-cartoon relative transform rotate-1 hover:rotate-0 transition-transform duration-300">
          {/* Chibi Innocent Fier (Parents) */}
          <CloudCharacter 
            src="/innocent fier.png" 
            alt="ChadScience Fier" 
            className="hidden lg:flex absolute -top-24 -right-12 w-48 lg:w-64 z-20 transform rotate-6" 
          />
          <div className="absolute -top-6 -left-6 bg-[#FFE066] border-4 border-[#1A1A1A] rounded-full p-4 shadow-cartoon transform -rotate-12 z-20">
            <Info className="w-8 h-8 text-[#1A1A1A]" />
          </div>
          <div className="mb-10 ml-8 md:ml-12 flex items-center gap-4">
            <div className="h-2 w-12 bg-[#FF6B1A] rounded-full"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#1A1A1A]">
              Un mot pour les parents
            </h2>
          </div>
          <div className="space-y-6 text-lg font-bold text-[#1A1A1A]/80 relative z-10">
            <p className="bg-gray-50 p-6 rounded-2xl border-4 border-[#1A1A1A] shadow-[4px_4px_0_#1A1A1A] text-xl leading-relaxed">
              Si vous lisez ceci, c&apos;est probablement que vous cherchez une solution pour aider votre enfant en mathématiques. Les cours particuliers coûtent cher (souvent plus de 20€/heure) et ne sont pas toujours flexibles.
            </p>
            <p className="text-xl leading-relaxed">
              Ce guide vidéo a été conçu avec une <span className="text-[#1A1A1A] font-black bg-[#FFE066] px-2 py-1 border-2 border-[#1A1A1A] rounded-lg shadow-[2px_2px_0_#1A1A1A] inline-block transform rotate-1">rigueur pédagogique stricte</span>, tout en utilisant les codes de la génération de votre enfant pour capter son attention.
            </p>
            <p className="text-xl leading-relaxed">
              L&apos;objectif n&apos;est pas de remplacer le professeur, mais d&apos;offrir un outil de soutien accessible 24h/24, qui dédramatise la matière et redonne confiance. C&apos;est un investissement unique pour toute la durée du lycée.
            </p>
          </div>
        </div>
      </section>

      <WaveSeparatorBottom bgColorClass="bg-[#FF6B1A]" fillClass="fill-[#FFD4A8]" className="-mt-1" />
    </>
  );
}
