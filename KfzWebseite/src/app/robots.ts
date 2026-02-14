import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/impressum', '/datenschutz', '/agb'],
        },
        sitemap: 'https://www.sem-motorentec.de/sitemap.xml',
    };
}
