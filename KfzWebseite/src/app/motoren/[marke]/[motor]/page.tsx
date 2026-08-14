import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brands, getEngine } from '@/data/engines';
import EnginePageClient from './EnginePageClient';

type Props = {
  params: Promise<{ marke: string; motor: string }>;
};

export async function generateStaticParams() {
  return brands.flatMap((brand) =>
    brand.engines.map((engine) => ({ marke: brand.slug, motor: engine.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { marke, motor } = await params;
  const found = getEngine(marke, motor);

  if (!found) {
    return {
      title: 'Motor nicht gefunden',
      description: 'Die angeforderte Baureihe wurde nicht gefunden.',
    };
  }

  const { brand, engine } = found;

  return {
    title: `${brand.name} ${engine.code} Instandsetzung (${engine.eyebrow})`,
    description: `${engine.short} ✓ Meisterbetrieb ✓ bundesweiter Abholservice ✓ 12 Monate Gewährleistung. Jetzt ${brand.name} ${engine.code} anfragen!`,
    keywords: [
      `${brand.name} ${engine.code}`,
      `${engine.code} Motorschaden`,
      `${engine.code} Instandsetzung`,
      `${brand.name} Motorinstandsetzung`,
    ],
    alternates: {
      canonical: `https://www.sem-motorentec.de/motoren/${brand.slug}/${engine.slug}`,
    },
    openGraph: {
      title: `${brand.name} ${engine.code} | SEM MotorenTec`,
      description: engine.short,
      images: [engine.images?.[0] ?? engine.image ?? brand.image ?? '/images/logo.JPG'],
    },
  };
}

export default async function EnginePage({ params }: Props) {
  const { marke, motor } = await params;
  const found = getEngine(marke, motor);

  if (!found) notFound();

  return <EnginePageClient brand={found.brand} engine={found.engine} />;
}
