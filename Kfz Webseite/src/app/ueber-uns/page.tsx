import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
    title: 'Über uns - Ihr Meisterbetrieb für Motoren',
    description: 'Erfahren Sie mehr über SEM MotorenTec - Ihr Spezialist für Motorinstandsetzung in Bielefeld. ✓ Meisterbetrieb ✓ Langjährige Erfahrung ✓ Qualität & Zuverlässigkeit.',
    openGraph: {
        title: 'Über uns | SEM MotorenTec',
        description: 'Ihr Meisterbetrieb für Motorinstandsetzung in Bielefeld. Qualität und Erfahrung.',
    },
};

export default function AboutPage() {
    return <AboutPageClient />;
}
