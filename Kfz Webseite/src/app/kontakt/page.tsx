import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
    title: 'Kontakt & Anfrage | Motorschaden beheben',
    description: 'Motorschaden? Schnelle Antwort garantiert. Bundesweiter Abholservice. Kontaktieren Sie unseren Meisterbetrieb für Motorinstandsetzung. ☎ 0521 97795644',
    keywords: ['Motorschaden beheben', 'bundesweiter Abholservice', 'Fahrzeug Abholung', 'Meisterbetrieb Motor', 'Motorinstandsetzung Kontakt'],
    openGraph: {
        title: 'Kontakt | SEM MotorenTec',
        description: 'Motorschaden? Schnelle Antwort garantiert. Bundesweiter Abholservice. ☎ 0521 97795644',
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
