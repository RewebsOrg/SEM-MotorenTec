import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung - SEM MotorenTec',
    description: 'Informationen zum Datenschutz bei SEM MotorenTec.',
};

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-anthracite text-white selection:bg-accent selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black mb-10 text-accent">Datenschutzerklärung</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                        <h3 className="text-xl font-bold text-white mt-6 mb-2">Allgemeine Hinweise</h3>
                        <p>
                            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-6 mb-2">Datenerfassung auf dieser Website</h3>
                        <p>
                            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                        </p>
                        <p>
                            <strong>Wie erfassen wir Ihre Daten?</strong><br />
                            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br />
                            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                        <p>
                            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
                            <strong>Netlify</strong><br />
                            Anbieter ist die Netlify, Inc., 2325 3rd Street, Suite 296, San Francisco, California 94107, USA.<br />
                            Wenn Sie unsere Website besuchen, erfasst Netlify verschiedene Logfiles inklusive Ihrer IP-Adressen.
                            Weitere Details entnehmen Sie der Datenschutzerklärung von Netlify: <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://www.netlify.com/privacy/</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                        <h3 className="text-xl font-bold text-white mt-6 mb-2">Datenschutz</h3>
                        <p>
                            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                        <p>
                            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            SEM MotorenTec<br />
                            Windelsbleicherstr. 188a<br />
                            33659 Bielefeld<br /><br />
                            Telefon: 0160 3872886<br />
                            E-Mail: info@sem-motorentec.com
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                        <h3 className="text-xl font-bold text-white mt-6 mb-2">Kontaktformular</h3>
                        <p>
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Analyse-Tools und Werbung</h2>
                        <h3 className="text-xl font-bold text-white mt-6 mb-2">Google Maps</h3>
                        <p>
                            Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.<br />
                            Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
