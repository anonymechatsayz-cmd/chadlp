import type {Metadata} from 'next';
import { Baloo_2 } from 'next/font/google';
import './globals.css'; // Global styles

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'ChadSciences | Guide Vidéo Maths Lycée',
  description: 'Comprends enfin toutes tes maths de lycée sans te cramer le cerveau avec le Guide Vidéo Maths de ChadSciences.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className={`${baloo.variable} scroll-smooth`}>
      <body className="antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
