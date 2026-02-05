import type { Metadata } from 'next';
import AngebotePageClient from './AngebotePageClient';

export const metadata: Metadata = {
    title: 'Angebote - Austauschmotoren & Ersatzteile',
    description: 'Aktuelle Angebote für Austauschmotoren und Ersatzteile von SEM MotorenTec. ✓ Faire Preise ✓ Geprüfte Qualität ✓ Bundesweiter Versand. Jetzt entdecken!',
    openGraph: {
        title: 'Angebote | SEM MotorenTec',
        description: 'Aktuelle Angebote für Austauschmotoren und Ersatzteile. Faire Preise, geprüfte Qualität.',
    },
};

export default function AngebotePage() {
    return <AngebotePageClient />;
}
