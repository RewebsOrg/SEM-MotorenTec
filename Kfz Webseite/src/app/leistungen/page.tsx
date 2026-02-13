import type { Metadata } from 'next';
import ServicesOverviewClient from './ServicesOverviewClient';

export const metadata: Metadata = {
    title: 'Unsere Leistungen: Motorinstandsetzung, Steuerkette, Zylinderkopf',
    description: 'Motor reparieren: Steuerkettenwechsel, Zylinderkopf Reparatur, Kolben wechseln, Kurbelwelle schleifen, Dieselmotor & Benzinmotor Reparatur. Bundesweiter Service.',
    keywords: ['Zylinderkopf Reparatur', 'Kolben wechseln', 'Kurbelwelle schleifen', 'Nockenwelle erneuern', 'Dieselmotor Reparatur', 'Benzinmotor Reparatur', 'Steuerkettenwechsel', 'Lagerschaden'],
    openGraph: {
        title: 'Unsere Leistungen | SEM MotorenTec',
        description: 'Motor reparieren: Steuerkettenwechsel, Zylinderkopf Reparatur, Kolben wechseln. Bundesweiter Abholservice.',
    },
};

export default function ServicesPage() {
    return <ServicesOverviewClient />;
}
