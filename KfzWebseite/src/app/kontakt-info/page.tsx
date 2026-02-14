import type { Metadata } from 'next';
import KontaktInfoPageClient from './KontaktInfoPageClient';

export const metadata: Metadata = {
    title: 'Kontakt & Anfahrt | SEM MotorenTec',
    description: 'Alle Kontaktmöglichkeiten auf einen Blick: Telefon, WhatsApp, E-Mail, Instagram. Standort Bielefeld mit Anfahrt. Bundesweiter Abholservice.',
    keywords: ['Kontakt SEM MotorenTec', 'Anfahrt Bielefeld', 'WhatsApp Motorenwerkstatt', 'Öffnungszeiten'],
    openGraph: {
        title: 'Kontakt & Anfahrt | SEM MotorenTec',
        description: 'Alle Kontaktmöglichkeiten: Telefon, WhatsApp, E-Mail, Instagram. Standort Bielefeld.',
    },
};

export default function KontaktInfoPage() {
    return <KontaktInfoPageClient />;
}
