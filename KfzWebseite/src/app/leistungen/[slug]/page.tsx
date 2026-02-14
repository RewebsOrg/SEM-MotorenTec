import type { Metadata } from 'next';
import { services } from '@/data/services';
import ServicePageClient from './ServicePageClient';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {
            title: 'Service nicht gefunden',
            description: 'Die angeforderte Leistung wurde nicht gefunden.',
        };
    }

    return {
        title: `${service.title} - Professioneller Service`,
        description: `${service.description} ✓ Meisterbetrieb in Bielefeld ✓ Bundesweiter Abholservice ✓ 12 Monate Gewährleistung. Jetzt anfragen!`,
        openGraph: {
            title: `${service.title} | SEM MotorenTec`,
            description: service.description,
            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                }
            ],
        },
    };
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    return <ServicePageClient slug={slug} />;
}
