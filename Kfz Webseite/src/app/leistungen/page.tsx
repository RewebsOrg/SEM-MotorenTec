import type { Metadata } from 'next';
import ServicesOverviewClient from './ServicesOverviewClient';

export const metadata: Metadata = {
    title: 'Unsere Leistungen - SEM MotorenTec',
    description: 'Entdecken Sie unser umfangreiches Leistungsangebot: Motorinstandsetzung, Motorüberholung, Steuerkettenwechsel und bundesweiter Abholservice. Wir sind Ihr Spezialist.',
    openGraph: {
        title: 'Unsere Leistungen | SEM MotorenTec',
        description: 'Motorinstandsetzung, Überholung und mehr. Ihr Spezialist für Motorentechnik.',
    },
};

export default function ServicesPage() {
    return <ServicesOverviewClient />;
}
