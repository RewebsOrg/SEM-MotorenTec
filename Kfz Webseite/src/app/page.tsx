import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'SEM MotorenTec | Ihr Meisterbetrieb für Motoreninstandsetzung in Bielefeld',
  description: 'Professionelle Motorinstandsetzung, Steuerkettenwechsel und Motorüberholung. ✓ Meisterbetrieb ✓ Bundesweiter Abholservice ✓ 12 Monate Gewährleistung. Jetzt anfragen!',
  keywords: ['Motorinstandsetzung', 'Bielefeld', 'Steuerkettenwechsel', 'Motorschaden', 'Motorüberholung', 'Meisterbetrieb'],
  openGraph: {
    title: 'SEM MotorenTec | Motoreninstandsetzung Meisterbetrieb',
    description: 'Ihr Spezialist für Motorinstandsetzung und Steuerkettenwechsel. Bundesweiter Service.',
    images: ['/images/logo.JPG'],
  },
};

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

// Deferred loading for below-the-fold components
const ProcessSteps = dynamic(
  () => import('@/components/ProcessSteps'),
  { loading: () => <div className="min-h-[400px] bg-anthracite" />, ssr: true }
);
const Services = dynamic(
  () => import('@/components/Services'),
  { loading: () => <div className="min-h-[600px] bg-anthracite" />, ssr: true }
);
const FAQ = dynamic(
  () => import('@/components/FAQ'),
  { loading: () => <div className="min-h-[400px] bg-anthracite" />, ssr: true }
);
const Footer = dynamic(
  () => import('@/components/Footer'),
  { loading: () => <div className="min-h-[300px] bg-anthracite" />, ssr: true }
);

export default function Home() {
  return (
    <main id="startseite" className="min-h-screen bg-anthracite">
      <Navbar />
      <Hero />
      <ProcessSteps />
      <Services />

      {/* Short About Teaser instead of full Promise component */}
      <section className="py-10 md:py-20 bg-anthracite-light">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-6">Wer wir sind</h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-4 md:mb-8 text-sm md:text-base">
            SEM MotorenTec steht für Qualität, Erfahrung und Leidenschaft. Erfahren Sie mehr über unsere Philosophie und unser Team.
          </p>
          <a href="/ueber-uns" className="inline-block bg-white/10 hover:bg-white/20 text-white px-5 py-2 md:px-8 md:py-3 rounded-lg font-semibold transition-all text-sm md:text-base">
            Mehr über uns erfahren
          </a>
        </div>
      </section>

      {/* Short Contact Teaser */}
      <section className="py-10 md:py-20 bg-accent relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-white mb-3 md:mb-6">BEREIT FÜR EINE REPARATUR?</h2>
          <p className="text-white/90 text-sm md:text-lg max-w-2xl mx-auto mb-4 md:mb-8">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot. Wir kümmern uns um den Rest.
          </p>
          <a href="/kontakt" className="inline-block bg-white text-accent hover:bg-gray-100 px-5 py-3 md:px-8 md:py-4 rounded-lg font-bold text-sm md:text-lg shadow-xl transition-all transform hover:scale-105">
            Zum Anfrage-Formular
          </a>
        </div>
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}