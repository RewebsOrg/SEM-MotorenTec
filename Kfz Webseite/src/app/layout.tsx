import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sem-motorentec.de'),
  title: {
    default: "SEM MotorenTec | Motorinstandsetzung Bielefeld - Bundesweiter Service",
    template: "%s | SEM MotorenTec"
  },
  description: "Professionelle Motorinstandsetzung & Motorüberholung in Bielefeld. ✓ Meisterbetrieb ✓ Bundesweiter Abholservice ✓ 12 Monate Garantie ✓ Alle Marken. Jetzt anfragen!",
  keywords: ["Motorinstandsetzung", "Motorüberholung", "Bielefeld", "Steuerkettenwechsel", "KFZ Werkstatt", "Motorreparatur", "Austauschmotor"],
  authors: [{ name: "SEM MotorenTec" }],
  creator: "SEM MotorenTec",
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.sem-motorentec.de',
    siteName: 'SEM MotorenTec',
    title: 'SEM MotorenTec | Motorinstandsetzung Bielefeld',
    description: 'Professionelle Motorinstandsetzung & Motorüberholung in Bielefeld. Bundesweiter Abholservice, 12 Monate Garantie.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SEM MotorenTec - Motorinstandsetzung',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEM MotorenTec | Motorinstandsetzung Bielefeld',
    description: 'Professionelle Motorinstandsetzung & Motorüberholung. Bundesweiter Service.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Google Search Console verification (to be added later)
    // google: 'your-verification-code',
  },
};

// LocalBusiness Schema for better local SEO
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "SEM MotorenTec",
  "description": "Professionelle Motorinstandsetzung, Motorüberholung und Steuerkettenwechsel in Bielefeld. Bundesweiter Abholservice.",
  "url": "https://www.sem-motorentec.de",
  "telephone": "+49 160 3872886",
  "email": "info@sem-motorentec.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Windelsbleicherstr. 188a",
    "addressLocality": "Bielefeld",
    "postalCode": "33659",
    "addressCountry": "DE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.0302,
    "longitude": 8.5325
  },
  "areaServed": {
    "@type": "Country",
    "name": "Deutschland"
  },
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-14:00"],
  "priceRange": "€€",
  "image": "https://www.sem-motorentec.de/images/logo.JPG",
  "sameAs": [
    "https://www.instagram.com/sem_motorentec/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
