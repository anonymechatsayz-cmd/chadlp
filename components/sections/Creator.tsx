'use client';

import { motion } from 'motion/react';
import { Zap } from 'lucide-react';
import Image from 'next/image';
import { WaveSeparatorBottom } from '@/components/ui';

export function Creator() {
  return (
    <>
      {/* 6. LE CRÉATEUR (Autorité) */}
      <section className="py-24 px-4 md:px-8 bg-[#FF6B1A] text-white overflow-hidden relative">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="w-full md:w-1/2 relative">
            <div className="absolute inset-0 bg-[#FFE066] rounded-[3rem] transform -rotate-6 border-4 border-[#1A1A1A] shadow-cartoon-lg"></div>
            {/* Stylized Creator Element */}
            <div className="relative aspect-square bg-[#FFF5E6] rounded-[3rem] border-4 border-[#1A1A1A] overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
              {/* Background Math Symbols */}
              <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none text-[#1A1A1A] select-none">
                <div className="absolute top-10 left-10 text-6xl font-extrabold rotate-12">∑</div>
                <div className="absolute top-20 right-20 text-6xl font-extrabold -rotate-12">∫</div>
                <div className="absolute bottom-20 left-20 text-6xl font-extrabold rotate-45">π</div>
                <div className="absolute bottom-10 right-10 text-6xl font-extrabold -rotate-12">√</div>
                <div className="absolute top-1/2 left-1/2 text-8xl font-extrabold -translate-x-1/2 -translate-y-1/2">∞</div>
              </div>
              
              {/* Main Icon */}
              <div className="w-40 h-40 rounded-full border-4 border-[#1A1A1A] flex items-center justify-center shadow-cartoon mb-6 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 overflow-hidden bg-white">
                <Image src="/chadlogo.jpeg" alt="ChadSciences Logo" width={160} height={160} className="object-cover w-full h-full" />
              </div>
              
              <h3 className="text-4xl font-extrabold text-[#1A1A1A] uppercase tracking-tight relative z-10">ChadSciences</h3>
              <p className="text-[#1A1A1A]/60 font-bold uppercase tracking-widest mt-2 relative z-10 bg-white px-3 py-1 rounded-full border-2 border-[#1A1A1A]">Créateur du Guide</p>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="absolute top-12 right-12 bg-[#FFE066] border-4 border-[#1A1A1A] rounded-full p-3 shadow-cartoon"
              >
                <Zap className="w-8 h-8 text-[#1A1A1A] fill-current" />
              </motion.div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="flex flex-wrap justify-start items-center gap-x-4 gap-y-6 text-5xl md:text-6xl font-black uppercase mb-8 text-white tracking-tight">
              <span>Pourquoi tu devrais</span>
              <span className="bg-[#FFE066] text-[#1A1A1A] px-6 py-2 border-4 border-[#1A1A1A] transform -rotate-2 shadow-[8px_8px_0_#1A1A1A]">m&apos;écouter</span>
              <span>?</span>
            </h2>
            <div className="bg-[#1A1A1A] p-6 rounded-3xl border-4 border-white shadow-[4px_4px_0_#FFE066] mb-8 transform rotate-1">
              <p className="text-xl font-bold leading-relaxed">
                J&apos;ai passé des années à voir des élèves brillants se faire broyer par un système scolaire qui explique mal.
              </p>
            </div>
            <p className="text-xl font-bold mb-10 opacity-90 leading-relaxed px-2">
              Sur YouTube, on est plus de 100 000. Mon super-pouvoir ? Prendre les concepts les plus éclatés au sol et les rendre logiques, simples et (presque) fun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-white text-[#1A1A1A] p-6 rounded-2xl border-4 border-[#1A1A1A] text-center flex-1 shadow-cartoon transform hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-extrabold text-[#FF6B1A] mb-1">100k+</div>
                <div className="text-sm font-black uppercase tracking-widest opacity-60">Abonnés</div>
              </div>
              <div className="bg-white text-[#1A1A1A] p-6 rounded-2xl border-4 border-[#1A1A1A] text-center flex-1 shadow-cartoon transform hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-extrabold text-[#FF6B1A] mb-1">5M+</div>
                <div className="text-sm font-black uppercase tracking-widest opacity-60">Vues</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSeparatorBottom bgColorClass="bg-transparent" fillClass="fill-[#FF6B1A]" className="-mt-1" />
    </>
  );
}
