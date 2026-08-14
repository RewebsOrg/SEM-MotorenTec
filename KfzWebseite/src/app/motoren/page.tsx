import type { Metadata } from 'next';
import MotorenOverviewClient from './MotorenOverviewClient';
import { brands } from '@/data/engines';

export const metadata: Metadata = {
  title: 'Motoren: BMW, Mercedes, VW, Range Rover & Porsche',
  description:
    'Motorinstandsetzung nach Marke und Baureihe: BMW N47D20 & B58, Mercedes OM651 & M177, VW T5/T6, Range Rover 306DT, Porsche 911 und mehr. ✓ Meisterbetrieb ✓ bundesweiter Abholservice.',
  keywords: [
    'Motoren',
    'Motorinstandsetzung',
    'Steuerkette',
    ...brands.flatMap((brand) => [
      `${brand.name} Motorinstandsetzung`,
      ...brand.engines.map((engine) => `${brand.name} ${engine.code}`),
    ]),
  ],
  alternates: {
    canonical: 'https://www.sem-motorentec.de/motoren',
  },
  openGraph: {
    title: 'Motoren & Baureihen | SEM MotorenTec',
    description:
      'Ein Einblick in die Motoren, die wir instand setzen – von BMW und Mercedes über Audi bis VW und Nutzfahrzeuge.',
    images: ['/images/logo.JPG'],
  },
};

export default function MotorenPage() {
  return <MotorenOverviewClient />;
}
