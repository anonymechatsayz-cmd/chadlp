'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame, Lock, Trophy, Play, RotateCcw, RotateCw, Volume2, Settings, Maximize, Star, Unlock, Instagram, Youtube } from 'lucide-react';
import { CloudCharacter, ReviewMarquee, WaveSeparator, BrutalistButton } from '@/components/ui';
import Image from 'next/image';

export function Hero() {
  const [painIndex, setPainIndex] = useState(0);
  const pains = [
    "même si t'as des lacunes depuis le collège",
    "même si ton prof explique mal",
    "même si tu paniques devant ta copie",
    "même si tu penses être nul en maths"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPainIndex((prev) => (prev + 1) % pains.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* 1. HEADER (Logo) */}
      <header className="w-full pt-6 px-4 flex justify-center z-50 relative">
        <div className="bg-[#FFE066] border-4 border-[#1A1A1A] rounded-full px-6 py-2 flex justify-between items-center w-full max-w-5xl shadow-cartoon">
          <div className="font-extrabold text-3xl uppercase tracking-tighter transform -rotate-2 flex items-center gap-3">
            <Image src="/chadlogo.jpeg" alt="ChadSciences Logo" width={40} height={40} className="rounded-full border-2 border-[#1A1A1A]" />
            <div>
              <span className="text-[#1A1A1A]">Chad</span><span className="text-[#FF6B1A]">Sciences</span>
            </div>
          </div>
          <div className="flex gap-2 sm:gap-3">
            <div className="bg-[#1A1A1A] text-white px-3 sm:px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 border-2 border-transparent hover:border-white cursor-pointer transition-colors">
              <Flame className="w-4 h-4 text-[#FF6B1A] fill-current" /> <span className="hidden sm:inline">CS TV</span><span className="sm:hidden">TV</span>
            </div>
            <div className="bg-white text-[#1A1A1A] px-3 sm:px-4 py-1.5 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 border-2 border-[#1A1A1A] hover:bg-gray-100 cursor-pointer transition-colors shadow-[2px_2px_0_#1A1A1A]">
              <Lock className="w-4 h-4 text-[#FF6B1A]" /> Membres
            </div>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Focus Vidéo & Hook) */}
      <section className="pt-6 md:pt-8 pb-16 px-4 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Subtle Math Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none -z-10 hidden md:block">
          <div className="absolute top-10 left-4 xl:left-12 text-6xl text-[#1A1A1A] opacity-[0.03] font-serif transform -rotate-12">∫</div>
          <div className="absolute top-40 right-4 xl:right-12 text-7xl text-[#1A1A1A] opacity-[0.03] font-serif transform rotate-12">∑</div>
          <div className="absolute bottom-1/3 left-2 xl:left-8 text-8xl text-[#1A1A1A] opacity-[0.03] font-serif transform -rotate-6">π</div>
          <div className="absolute bottom-1/4 right-2 xl:right-8 text-6xl text-[#1A1A1A] opacity-[0.03] font-serif transform rotate-6">√</div>
          <div className="absolute top-1/3 left-12 xl:left-24 text-5xl text-[#1A1A1A] opacity-[0.03] font-serif transform rotate-45">∞</div>
          <div className="absolute top-1/2 right-12 xl:right-24 text-5xl text-[#1A1A1A] opacity-[0.03] font-serif transform -rotate-12">Δ</div>
          <div className="absolute bottom-10 left-1/4 text-4xl text-[#1A1A1A] opacity-[0.03] font-serif transform rotate-12">θ</div>
          <div className="absolute top-20 right-1/4 text-5xl text-[#1A1A1A] opacity-[0.03] font-serif transform -rotate-45">α</div>
        </div>

        {/* Mobile Character (Visible only on small screens) */}
        <div className="md:hidden w-full flex justify-center mb-6 relative z-10">
          <CloudCharacter 
            src="/innocent fier.png" 
            alt="ChadScience Fier" 
            className="w-40 rotate-3" 
          />
        </div>

        {/* Chibi Innocent Fier (Hero Desktop) */}
        <CloudCharacter 
          src="/innocent fier.png" 
          alt="ChadScience Fier" 
          className="hidden md:flex absolute -right-4 lg:right-4 xl:right-12 top-12 lg:top-20 w-48 lg:w-64 rotate-6 z-20" 
        />

        {/* Nouveau Wojak (Hero Bottom Left) - Placeholder */}
        <CloudCharacter 
          src="/thinking.png" 
          alt="Nouveau Wojak" 
          className="hidden lg:flex absolute left-0 lg:left-4 xl:left-12 bottom-32 w-40 lg:w-56 -rotate-12 z-20" 
        />

        <h1 
          className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tight mb-6 relative z-10 text-[#1A1A1A] text-center max-w-5xl mx-auto"
        >
          <span>Avoir</span>
          <span className="bg-[#FFE066] px-4 md:px-6 py-1 md:py-2 border-4 border-[#1A1A1A] shadow-[8px_8px_0_#1A1A1A] text-[#1A1A1A] transform -rotate-2">20/20</span>
          <span>en maths c&apos;est facile.</span>
        </h1>
        
        <div className="flex justify-center mb-6 w-full px-2 sm:px-4">
          <div className="bg-white border-4 border-[#1A1A1A] rounded-full px-4 sm:px-6 py-2 shadow-cartoon relative overflow-hidden flex items-center justify-center min-h-[3.5rem] md:min-h-[5rem] max-w-fit text-center transform rotate-1 hover:-rotate-1 transition-transform duration-300">
            {/* Hidden placeholder to keep the pill width stable based on the longest text */}
            <div className="invisible text-sm sm:text-lg md:text-2xl font-black uppercase tracking-tight pointer-events-none">
              même si t&apos;as des lacunes depuis le collège
            </div>
            
            <AnimatePresence>
              <motion.div
                key={painIndex}
                initial={{ y: 60 }}
                animate={{ y: 0 }}
                exit={{ y: -60 }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                className="absolute text-center text-sm sm:text-lg md:text-2xl font-black text-[#1A1A1A] uppercase tracking-tight w-full px-4 sm:px-6"
              >
                {pains[painIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Video Wrapper */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16 mb-8">
           
           {/* Left Badge */}
           <div className="hidden xl:flex flex-1 justify-center">
              <div className="bg-[#FFB84D] border-4 border-[#1A1A1A] rounded-2xl p-5 text-center shadow-cartoon w-52 relative transform -rotate-3">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white font-extrabold rounded-full w-12 h-12 flex items-center justify-center border-2 border-white text-lg">N°1</div>
                <p className="font-extrabold text-sm leading-tight mt-4 mb-3 uppercase">Le guide de survie au lycée en France</p>
                <Trophy className="w-8 h-8 mx-auto text-[#1A1A1A]" />
              </div>
           </div>

           {/* Video */}
           <div className="w-full max-w-2xl xl:max-w-3xl aspect-[4/3] bg-[#1A1A1A] rounded-[2rem] border-8 border-[#1A1A1A] overflow-hidden relative shadow-[8px_8px_0_#FF6B1A] group cursor-pointer shrink-0 z-10 transform transition-transform hover:-translate-y-2 hover:shadow-[12px_12px_0_#FF6B1A]">
              <div className="absolute inset-0 opacity-60 bg-[url('https://picsum.photos/seed/maths/800/600')] bg-cover bg-center mix-blend-overlay transition-opacity group-hover:opacity-40"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#FF0000] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-4 border-white">
                  <Play className="w-8 h-8 text-white ml-1 fill-current" />
                </div>
              </div>
              
              {/* Fake progress bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center gap-4">
                <Play className="w-5 h-5 text-white fill-current" />
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold">
                  <span>10</span>
                  <RotateCcw className="w-4 h-4" />
                  <RotateCw className="w-4 h-4" />
                  <span>10</span>
                  <span>00:56</span>
                </div>
                <Volume2 className="w-5 h-5 text-white" />
                <div className="flex-1 h-1.5 bg-white/30 rounded-full overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-[#FF0000]"></div>
                </div>
                <Settings className="w-5 h-5 text-white" />
                <Maximize className="w-5 h-5 text-white" />
              </div>
           </div>

           {/* Right Badge */}
           <div className="hidden xl:flex flex-1 justify-center relative">
              <div className="bg-[#FFB84D] border-4 border-[#1A1A1A] rounded-2xl p-5 text-center shadow-cartoon w-52 relative transform rotate-3 z-10">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white font-extrabold rounded-full w-12 h-12 flex items-center justify-center border-2 border-white">
                  <Star className="w-6 h-6 fill-current"/>
                </div>
                <p className="font-extrabold text-4xl mt-4 mb-1 text-[#1A1A1A]">+5,000</p>
                <p className="font-extrabold text-xs leading-tight uppercase">Élèves accompagnés</p>
              </div>
           </div>
        </div>

        {/* CTA */}
        <div className="mb-8">
          <BrutalistButton href="#pricing">
            Rejoindre le Guide <Unlock className="w-6 h-6" />
          </BrutalistButton>
        </div>

        {/* Bottom Banner */}
        <div className="w-full max-w-4xl bg-white border-4 border-[#1A1A1A] rounded-full px-6 py-3 flex flex-col md:flex-row justify-between items-center shadow-cartoon gap-4">
          <div className="flex gap-4 items-center">
            <Instagram className="w-7 h-7 hover:text-[#FF6B1A] cursor-pointer transition-colors" />
            <Youtube className="w-8 h-8 hover:text-[#FF6B1A] cursor-pointer transition-colors" />
            {/* TikTok icon approximation */}
            <svg className="w-6 h-6 hover:text-[#FF6B1A] cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </div>
          <div className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-center">
            LE GUIDE EST ACTUELLEMENT OUVERT
          </div>
          <div className="flex items-center gap-3">
             <div className="flex -space-x-3">
               <Image src="https://picsum.photos/seed/1/40/40" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" alt="user" referrerPolicy="no-referrer" />
               <Image src="https://picsum.photos/seed/2/40/40" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[#1A1A1A]" alt="user" referrerPolicy="no-referrer" />
               <div className="w-10 h-10 rounded-full border-2 border-[#1A1A1A] bg-[#FFE066] flex items-center justify-center font-extrabold text-xs z-10">+</div>
             </div>
             <div className="text-xs font-extrabold leading-tight text-right hidden sm:block">
               Rejoins le top<br/>de ta classe
             </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL PROOF LOGOS */}
      <ReviewMarquee />

      <WaveSeparator bgColorClass="bg-white" fillClass="fill-[#FFD4A8]" className="-mb-1" />
    </>
  );
}
