import { Star } from 'lucide-react';
import Image from 'next/image';

export const BrutalistButton = ({ href, children, className = "" }: { href: string, children: React.ReactNode, className?: string }) => (
  <a href={href} className={`relative group inline-block ${className} outline-none focus-visible:ring-4 focus-visible:ring-[#FFE066] rounded-full`}>
    <div className="absolute inset-0 bg-[#1A1A1A] rounded-full translate-y-2 translate-x-2"></div>
    <div className="relative bg-[#FF6B1A] text-white text-2xl md:text-3xl font-extrabold px-8 md:px-12 py-4 rounded-full border-4 border-[#1A1A1A] uppercase tracking-wide flex items-center justify-center gap-3 transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
      {children}
    </div>
  </a>
);

export const WaveSeparator = ({ className = "", fillClass = "", bgColorClass = "", style = {} }: any) => (
  <div className={`w-full overflow-hidden leading-none ${bgColorClass} ${className}`} style={style}>
    <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
      <path d="M0,40 C200,100 400,0 600,60 C800,120 1000,20 1200,70 C1350,100 1400,50 1440,60 L1440,120 L0,120 Z" className={fillClass} />
      <path d="M0,40 C200,100 400,0 600,60 C800,120 1000,20 1200,70 C1350,100 1400,50 1440,60" fill="none" stroke="#1A1A1A" strokeWidth="4" />
    </svg>
  </div>
);

export const WaveSeparatorBottom = ({ className = "", fillClass = "", bgColorClass = "", style = {} }: any) => (
  <div className={`w-full overflow-hidden leading-none rotate-180 ${bgColorClass} ${className}`} style={style}>
    <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px]">
      <path d="M0,40 C200,100 400,0 600,60 C800,120 1000,20 1200,70 C1350,100 1400,50 1440,60 L1440,120 L0,120 Z" className={fillClass} />
      <path d="M0,40 C200,100 400,0 600,60 C800,120 1000,20 1200,70 C1350,100 1400,50 1440,60" fill="none" stroke="#1A1A1A" strokeWidth="4" />
    </svg>
  </div>
);

export const Marquee = ({ reverse = false, text = "" }: any) => (
  <div className="w-full bg-[#1A1A1A] text-[#FFE066] py-3 overflow-hidden border-y-4 border-[#1A1A1A] flex whitespace-nowrap transform -rotate-1 scale-105 z-20 relative hover:[&>div]:[animation-play-state:paused]">
    <div className={`flex gap-8 items-center text-xl font-extrabold uppercase tracking-wider ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: '20s' }}>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="flex gap-8 items-center">
          <span>{text}</span>
          <Star className="w-5 h-5 fill-current" />
        </div>
      ))}
    </div>
  </div>
);

export const ReviewMarquee = () => {
  const reviews = [
    "Incroyable, j'ai eu 18 au bac !",
    "Le meilleur guide de maths",
    "J'ai enfin compris les fonctions",
    "Merci ChadSciences !",
    "Je suis passé de 7 à 15 de moyenne",
    "Explications super claires"
  ];

  return (
    <div className="w-full bg-[#FF6B1A] text-white py-4 overflow-hidden border-y-4 border-[#1A1A1A] flex whitespace-nowrap z-20 relative hover:[&>div]:[animation-play-state:paused]">
      <div className="flex gap-12 items-center text-xl font-extrabold uppercase tracking-wider animate-marquee" style={{ animationDuration: '80s' }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {reviews.map((review, j) => (
              <div key={j} className="flex gap-12 items-center">
                <span>{review}</span>
                <Star className="w-6 h-6 fill-current text-[#FFE066]" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CloudCharacter = ({ src, alt, className = "" }: { src: string, alt: string, className?: string }) => (
  <div className={`absolute flex-col items-center z-0 ${className}`}>
    <Image src={src} alt={alt} width={500} height={500} className="w-full h-auto drop-shadow-2xl relative z-0" style={{ transformOrigin: 'bottom center' }} referrerPolicy="no-referrer" unoptimized />
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] z-10 pointer-events-none">
      <svg viewBox="-15 -15 230 80" preserveAspectRatio="none" className="w-full h-16 drop-shadow-sm">
        <path d="M -10 60 C -10 20, 20 10, 40 30 C 60 -10, 110 -10, 140 20 C 160 0, 210 10, 210 60 Z" fill="white" stroke="#1A1A1A" strokeWidth="4" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

export const starPatternBg = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg width='1200' height='1200' viewBox='0 0 1200 1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FDE3B4' stroke='%23FDE3B4' stroke-width='8' stroke-linejoin='round'%3E%3Cpath d='M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z' transform='translate(150, 200) scale(2.5) rotate(15 50 50)'/%3E%3Cpath d='M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z' transform='translate(800, 150) scale(2) rotate(-20 50 50)'/%3E%3Cpath d='M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z' transform='translate(450, 700) scale(3) rotate(45 50 50)'/%3E%3Cpath d='M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z' transform='translate(1000, 850) scale(2.2) rotate(-15 50 50)'/%3E%3Cpath d='M50 5 L61 39 L97 39 L68 60 L79 95 L50 74 L21 95 L32 60 L3 39 L39 39 Z' transform='translate(-50, 900) scale(1.8) rotate(70 50 50)'/%3E%3C/g%3E%3C/svg%3E")`,
  backgroundSize: '1200px 1200px'
};
