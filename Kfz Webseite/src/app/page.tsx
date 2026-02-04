import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import Promise from '@/components/Promise';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="startseite" className="min-h-screen bg-anthracite">
      <Navbar />
      <Hero />
      <Services />
      <ContactForm />
      <Promise />
      <FAQ />
      <Footer />
    </main>
  );
}