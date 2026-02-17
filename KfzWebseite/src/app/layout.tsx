import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "../components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";

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
    default: "Motorinstandsetzung & Motorüberholung | SEM MotorenTec | Bundesweit",
    template: "%s | SEM MotorenTec"
  },
  description: "Professionelle Motorinstandsetzung mit 20+ Jahren Erfahrung. Motorschaden, Steuerkettenwechsel, Austauschmotor. 12 Monate Gewährleistung. Bundesweiter Abholservice. Meisterbetrieb.",
  keywords: [
    "Motorinstandsetzung",
    "Motoreninstandsetzung",
    "Motorüberholung",
    "Steuerkettenwechsel",
    "Steuerkettenschaden",
    "Kettenschaden",
    "Steuerkette gerissen",
    "Steuerkette übersprungen",
    "Motor springt nicht an",
    "Lagerschaden",
    "Pleuellagerschaden",
    "N57 Lagerschaden",
    "Kurbelwellen Lagerschaden",
    "Ölverbrauch",
    "VW Ölverbrauch",
    "Ölverbrauch Reparatur",
    "KFZ Werkstatt",
    "Motorreparatur",
    "Austauschmotor",
    "Motorschaden",
    "Motor reparieren",
    "Motorblock instandsetzen",
    "Zylinderkopf Reparatur",
    "Kolben wechseln",
    "Kurbelwelle schleifen",
    "Nockenwelle erneuern",
    "Dieselmotor Reparatur",
    "Benzinmotor Reparatur",
    "Motorinstandsetzung Deutschland",
    "bundesweiter Abholservice",
    "Fahrzeug Abholung",
    "Meisterbetrieb Motor",
    "Motorenservice",
    "Generalüberholung Motor",
    "Motor Gewährleistung",
    "Motorschaden beheben",
    "Verschleißteile Motor"
  ],
  authors: [{ name: "SEM MotorenTec" }],
  creator: "SEM MotorenTec",
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.sem-motorentec.de',
    siteName: 'SEM MotorenTec',
    title: 'SEM MotorenTec | Motorinstandsetzung Bielefeld',
    description: 'Professionelle Motorinstandsetzung & Motorüberholung in Bielefeld. Bundesweiter Abholservice, 12 Monate Gewährleistung.',
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
  icons: {
    icon: [
      { url: '/icon.jpg' },
      { url: '/images/logo.JPG' }
    ],
    apple: [
      { url: '/icon.jpg' },
      { url: '/images/logo.JPG' }
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// AutomotiveBusiness Schema for better SEO
const automotiveBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "SEM MotorenTec",
  "description": "Meisterbetrieb für Motorinstandsetzung und Motorüberholung mit über 20 Jahren Erfahrung",
  "url": "https://www.sem-motorentec.de",
  "image": "https://www.sem-motorentec.de/images/logo.JPG",
  "telephone": "+49-521-97795644",
  "email": "info@sem-motorentec.de",
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
  "areaServed": "DE",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "12:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/sem_motorentec/"
  ]
};

// Service Schemas for main services
const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Motorinstandsetzung",
    "description": "Professionelle Motorinstandsetzung für alle Marken. Komplette Motoranalyse und Ersatz verschlissener Teile.",
    "provider": { "@type": "AutomotiveBusiness", "name": "SEM MotorenTec" },
    "areaServed": "DE"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Motorüberholung",
    "description": "Generalüberholung Ihres Motors mit neuen Kolben, Lagern und Zylinderkopfbearbeitung.",
    "provider": { "@type": "AutomotiveBusiness", "name": "SEM MotorenTec" },
    "areaServed": "DE"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steuerkettenwechsel",
    "description": "Steuerkettenwechsel zur Vermeidung von Motorschäden. Kettenschaden, Steuerkette gerissen oder übersprungen.",
    "provider": { "@type": "AutomotiveBusiness", "name": "SEM MotorenTec" },
    "areaServed": "DE"
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Motorschaden Reparatur",
    "description": "Reparatur von Lagerschäden, Pleuellagerschaden, N57 Lagerschaden, Kurbelwellen Lagerschaden und Ölverbrauch.",
    "provider": { "@type": "AutomotiveBusiness", "name": "SEM MotorenTec" },
    "areaServed": "DE"
  }
];

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(automotiveBusinessSchema) }}
        />
        {serviceSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          {children}
          <CookieConsent />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  );
}

