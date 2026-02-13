import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AGB - Allgemeine Geschäftsbedingungen | SEM MotorenTec',
    description: 'Allgemeine Geschäftsbedingungen von SEM MotorenTec – Ihr Meisterbetrieb für Motoreninstandsetzung in Bielefeld.',
};

export default function AgbPage() {
    return (
        <main className="min-h-screen bg-anthracite text-white selection:bg-accent selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black mb-10 text-accent">Allgemeine Geschäftsbedingungen</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 1 Geltungsbereich</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Diese AGB gelten für sämtliche Verträge über Reparatur, Wartungs, Diagnose, Prüf, Pflege und sonstige Dienstleistungen an Kraftfahrzeugen sowie für den Verkauf von Ersatzteilen zwischen der KFZ-Werkstatt (nachfolgend „Werkstatt“) und ihren Kunden.</li>
                            <li>Entgegenstehende oder abweichende Bedingungen des Kunden werden nicht Vertragsbestandteil, auch wenn die Werkstatt ihnen nicht ausdrücklich widerspricht.</li>
                            <li>Es gilt ausschließlich deutsches Recht unter Ausschluss des UN-Kaufrechts.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 2 Vertragsschluss</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Ein Vertrag kommt durch schriftliche, elektronische, telefonische oder mündliche Auftragserteilung und deren Annahme durch die Werkstatt zustande.</li>
                            <li>Kostenvoranschläge sind unverbindlich und stellen lediglich eine überschlägige Einschätzung dar, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind.</li>
                            <li>Überschreitungen eines unverbindlichen Kostenvoranschlags bis zu 20 % gelten als genehmigt. Bei darüberhinausgehenden Kosten wird der Kunde – soweit möglich – informiert.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 3 Leistungsumfang und Durchführung</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Der Leistungsumfang ergibt sich ausschließlich aus dem erteilten Auftrag.</li>
                            <li>Die Werkstatt ist berechtigt, erforderliche Zusatzarbeiten auch ohne vorherige Rücksprache durchzuführen, wenn diese zur Betriebssicherheit oder zur Vermeidung größerer Schäden notwendig sind.</li>
                            <li>Die Werkstatt ist berechtigt, fachkundige Dritte als Erfüllungsgehilfen einzusetzen.</li>
                            <li>Probe, Überführungs- und Einstellfahrten gelten als genehmigt.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Es gelten die bei Auftragserteilung gültigen Preise.</li>
                            <li>Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer.</li>
                            <li>Rechnungen sind sofort bei Abholung des Fahrzeugs ohne Abzug fällig.</li>
                            <li>Die Werkstatt ist berechtigt, angemessene Vorschüsse zu verlangen.</li>
                            <li>Die Herausgabe des Fahrzeugs kann bis zur vollständigen Bezahlung verweigert werden.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 5 Fertigstellung</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Angaben zu Fertigstellungsterminen sind unverbindlich, es sei denn, sie wurden ausdrücklich schriftlich als verbindlich zugesagt.</li>
                            <li>Verzögerungen aufgrund höherer Gewalt, Lieferproblemen von Ersatzteilen oder unvorhersehbarer Umstände berechtigen nicht zu Schadensersatzansprüchen.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 6 Abnahme</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Die Abnahme des Fahrzeugs erfolgt bei Übergabe.</li>
                            <li>Unterlässt der Kunde die Abnahme trotz Fertigstellung, kann die Werkstatt Stand- und Verwahrkosten berechnen.</li>
                            <li>Die Abnahme gilt spätestens mit Ingebrauchnahme oder Ablauf von 7 Kalendertagen nach Fertigstellungsanzeige als erfolgt.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 7 Gewährleistung</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Es gelten die gesetzlichen Gewährleistungsrechte.</li>
                            <li>Die Werkstatt hat das Recht zur Nacherfüllung. Erst bei Fehlschlagen bestehen weitere Ansprüche.</li>
                            <li>Keine Gewährleistung besteht für:
                                <ul className="list-disc pl-6 mt-2">
                                    <li>normale Abnutzung</li>
                                    <li>Schäden aufgrund unsachgemäßer Nutzung oder fehlender Wartung</li>
                                    <li>vom Kunden gestellte Teile</li>
                                    <li>Folgeschäden außerhalb des Reparaturumfangs</li>
                                </ul>
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 8 Haftung</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Die Werkstatt haftet uneingeschränkt nur bei Vorsatz und grober Fahrlässigkeit.</li>
                            <li>Bei einfacher Fahrlässigkeit haftet die Werkstatt ausschließlich bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vorhersehbaren, vertragstypischen Schaden.</li>
                            <li>Eine Haftung für mittelbare Schäden, Nutzungsausfall oder entgangenen Gewinn ist ausgeschlossen, soweit gesetzlich zulässig.</li>
                            <li>Die Haftung für Schäden aus der Verletzung von Leben, Körper oder Gesundheit bleibt unberührt.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 9 Eigentumsvorbehalt und Pfandrecht</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Sämtliche eingebauten Ersatzteile bleiben bis zur vollständigen Zahlung Eigentum der Werkstatt.</li>
                            <li>Der Werkstatt steht ein gesetzliches sowie vertragliches Pfandrecht am Fahrzeug zu.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 10 Altteile</h2>
                        <p>
                            Ausgebaute Teile gehen ohne gesonderte Vereinbarung in das Eigentum der Werkstatt über. Eine Herausgabepflicht besteht nicht.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 11 Haftung für im Fahrzeug befindliche Gegenstände</h2>
                        <p>
                            Für im Fahrzeug zurückgelassene Gegenstände wird nur bei Vorsatz oder grober Fahrlässigkeit gehaftet. Der Kunde ist verpflichtet, Wertgegenstände vor Übergabe zu entfernen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 12 Datenschutz</h2>
                        <p>
                            Die Verarbeitung personenbezogener Daten erfolgt gemäß DSGVO und BDSG. Details sind der Datenschutzerklärung der Werkstatt zu entnehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 13 Streitbeilegung</h2>
                        <p>
                            Die Werkstatt ist weder verpflichtet noch bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">§ 14 Schlussbestimmungen</h2>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.</li>
                            <li>Erfüllungsort ist der Sitz der Werkstatt.</li>
                        </ul>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
