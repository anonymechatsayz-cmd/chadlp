import { Heart, MessageCircle, Share2, Play } from 'lucide-react';
import { CloudCharacter, WaveSeparator } from '@/components/ui';
import Image from 'next/image';

export function Testimonials() {
  return (
    <>
      {/* 7. WALL OF LOVE (Témoignages) */}
      <section className="py-24 px-4 md:px-8 bg-transparent text-center relative">
        {/* Chibi Akward */}
        <CloudCharacter 
          src="/akward.png" 
          alt="ChadScience Akward" 
          className="hidden xl:flex left-4 xl:left-12 top-10 w-56 xl:w-72 z-0 transform -rotate-6" 
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="flex flex-wrap justify-center items-center gap-x-4 gap-y-6 text-5xl md:text-7xl font-black uppercase mb-16 text-[#1A1A1A] tracking-tight text-center">
            <span>Ils ont</span>
            <span className="bg-[#FFE066] text-[#1A1A1A] px-6 py-2 border-4 border-[#1A1A1A] transform rotate-2 shadow-[8px_8px_0_#1A1A1A]">HACKÉ</span>
            <span>le système</span>
          </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "@lucas_trm", time: "Il y a 2h", note: "16/20 au Bac", text: "J'ai enfin compris les probas en 20 minutes alors que je galérais depuis 2 mois. Le goat absolu.", likes: "1.2k", avatar: "https://picsum.photos/seed/lucas/100/100" },
            { name: "@emma_maths", time: "Hier", note: "Passée de 8 à 14", text: "Les vidéos sont incroyables. C'est drôle, c'est clair, et surtout ça va droit au but. Merci Chad !", likes: "856", avatar: "https://picsum.photos/seed/emma/100/100" },
            { name: "@thomas_sec", time: "Il y a 3j", note: "Aime les maths", text: "Le seul mec qui arrive à me faire regarder des maths le week-end sans que j'ai envie de pleurer.", likes: "3.4k", avatar: "https://picsum.photos/seed/thomas/100/100" }
          ].map((testi, i) => (
            <div key={i} className="bg-white rounded-[2rem] border-4 border-[#1A1A1A] shadow-cartoon text-left overflow-hidden flex flex-col transform hover:-translate-y-2 transition-transform">
              {/* Header style réseau social */}
              <div className="p-4 border-b-2 border-[#1A1A1A]/10 flex items-center gap-3 bg-gray-50">
                <Image src={testi.avatar} alt={testi.name} width={48} height={48} className="w-12 h-12 rounded-full border-2 border-[#1A1A1A]" referrerPolicy="no-referrer" />
                <div>
                  <p className="font-extrabold text-sm">{testi.name}</p>
                  <p className="text-xs font-bold text-gray-500">{testi.time}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs font-extrabold text-green-700 bg-green-200 px-2 py-1 rounded-full border-2 border-green-700">{testi.note}</span>
                </div>
              </div>
              
              {/* Contenu */}
              <div className="p-6 flex-grow">
                <p className="font-bold text-lg leading-snug">&quot;{testi.text}&quot;</p>
              </div>
              
              {/* Footer style réseau social */}
              <div className="p-4 border-t-2 border-[#1A1A1A]/10 flex items-center gap-6 text-gray-500 bg-gray-50">
                <div className="flex items-center gap-1 font-bold text-sm hover:text-red-500 cursor-pointer transition-colors">
                  <Heart className="w-5 h-5" /> {testi.likes}
                </div>
                <div className="flex items-center gap-1 font-bold text-sm hover:text-blue-500 cursor-pointer transition-colors">
                  <MessageCircle className="w-5 h-5" /> Répondre
                </div>
                <div className="ml-auto hover:text-[#1A1A1A] cursor-pointer transition-colors">
                  <Share2 className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-4xl md:text-5xl font-black uppercase mb-12 text-[#1A1A1A] tracking-tight text-center">
            Et ils en parlent !
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto pb-8">
            {[
              '1509228468518-180dd4864904',
              '1632516444028-f4b62d2919d7',
              '1518133910546-b6c2fb7d79e3',
              '1596495578065-6e0763fa1178'
            ].map((imgId, i) => (
              <div key={i} className="aspect-[9/16] bg-[#1A1A1A] rounded-3xl border-4 border-[#1A1A1A] shadow-cartoon relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url('https://images.unsplash.com/photo-${imgId}?w=400&h=700&fit=crop')` }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1 fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-bold text-sm line-clamp-2 text-left">Comment j&apos;ai hacké mes notes en maths 🚀</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <WaveSeparator bgColorClass="bg-transparent" fillClass="fill-[#1A1A1A]" className="-mb-1" />
    </>
  );
}
