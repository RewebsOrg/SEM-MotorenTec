import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
    title: 'Kontakt - Motorinstandsetzung anfragen',
    description: 'Kontaktieren Sie SEM MotorenTec für Motorinstandsetzung in Bielefeld. ✓ Kostenlose Beratung ✓ Bundesweiter Abholservice ✓ Schnelle Antwort. Jetzt Anfrage senden!',
    openGraph: {
        title: 'Kontakt | SEM MotorenTec',
        description: 'Kontaktieren Sie uns für Motorinstandsetzung. Kostenlose Beratung, bundesweiter Abholservice.',
    },
};

export default function ContactPage() {
    return <ContactPageClient />;
}
