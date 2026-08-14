import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brands, getBrand } from '@/data/engines';
import BrandPageClient from './BrandPageClient';

type Props = {
  params: Promise<{ marke: string }>;
};

export async function generateStaticParams() {
  return brands.map((brand) => ({ marke: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marke } = await params;
  const brand = getBrand(marke);

  if (!brand) {
    return {
      title: 'Marke nicht gefunden',
      description: 'Der angeforderte Markenbereich wurde nicht gefunden.',
    };
  }

  const codes = brand.engines.map((engine) => engine.code).join(', ');

  return {
    title: `${brand.name} Motorinstandsetzung: ${codes}`,
    description: `${brand.name} Motorschaden? Wir setzen ${codes} fachgerecht instand – Steuerkette, Lagerschaden, Ölverbrauch. ✓ Meisterbetrieb ✓ bundesweiter Abholservice.`,
    keywords: [
      `${brand.name} Motorinstandsetzung`,
      `${brand.name} Motorschaden`,
      ...brand.engines.map((engine) => `${brand.name} ${engine.code}`),
    ],
    alternates: {
      canonical: `https://www.sem-motorentec.de/motoren/${brand.slug}`,
    },
    openGraph: {
      title: `${brand.name} Motoren | SEM MotorenTec`,
      description: brand.tagline,
      images: [brand.image ?? '/images/logo.JPG'],
    },
  };
}

export default async function BrandPage({ params }: Props) {
  const { marke } = await params;
  const brand = getBrand(marke);

  if (!brand) notFound();

  return <BrandPageClient brand={brand} />;
}
