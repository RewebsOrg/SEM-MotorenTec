import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | SEM MotorenTec - Schutz Ihrer Daten',
    description: 'Informationen zum Datenschutz und zur Verarbeitung Ihrer Daten bei SEM MotorenTec.',
};

export default function DatenschutzPage() {
    return (
        <main className="min-h-screen bg-anthracite text-white selection:bg-accent selection:text-white">
            <Navbar />

            <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-black mb-10 text-accent">Datenschutzerklärung</h1>

                <div className="prose prose-invert prose-lg max-w-none space-y-8 text-white/80">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Verantwortlicher</h2>
                        <p>
                            Name der Werkstatt: SEM MotorenTec<br />
                            Anschrift: Windelsbleicherstr. 188a, 33659 Bielefeld<br />
                            Telefon: 0521 97795644<br />
                            E-Mail: info@sem-motorentec.de
                        </p>
                        <p className="mt-4 text-sm text-white/60">
                            Der Verantwortliche ist die natürliche oder juristische Person, die über die Zwecke und Mittel der Verarbeitung personenbezogener Daten entscheidet.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Hosting</h2>
                        <p>
                            Diese Website wird gehostet bei Netlify, Inc., 2325 3rd Street, Suite 296, San Francisco, California 94107, USA.
                            Beim Besuch unserer Website erfasst Netlify automatisch Server-Logfiles inklusive IP-Adressen. Wir haben mit Netlify einen Auftragsverarbeitungsvertrag geschlossen.
                            <br /><br />
                            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO<br />
                            <strong>Weitere Infos:</strong> <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://www.netlify.com/privacy/</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
                        <p>
                            Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie zur Erbringung unserer Dienstleistungen erforderlich ist.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-6 mb-2">a) Beim Besuch der Website</h3>
                        <p>
                            Beim Aufruf unserer Website werden automatisch folgende Daten verarbeitet:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>IP-Adresse (gekürzt bzw. anonymisiert, sofern technisch möglich)</li>
                            <li>Datum und Uhrzeit des Zugriffs</li>
                            <li>Verwendeter Browser und Betriebssystem</li>
                            <li>Referrer-URL</li>
                        </ul>
                        <p className="mt-4 italic text-sm">
                            Die Verarbeitung erfolgt zur Sicherstellung eines störungsfreien Betriebs der Website und zur Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-2">b) Bei Kontaktaufnahme</h3>
                        <p>
                            Bei Kontaktaufnahme per Telefon, E-Mail oder Kontaktformular verarbeiten wir die von Ihnen mitgeteilten Daten (z. B. Name, Telefonnummer, E-Mail-Adresse), um Ihre Anfrage zu bearbeiten (Art. 6 Abs. 1 lit. b DSGVO).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Datenverarbeitung im Werkstattbetrieb</h2>
                        <p>
                            Im Rahmen der Auftragsabwicklung verarbeiten wir insbesondere:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Stammdaten (Name, Anschrift)</li>
                            <li>Kontaktdaten</li>
                            <li>Fahrzeug- und Auftragsdaten</li>
                            <li>Abrechnungs- und Zahlungsdaten</li>
                        </ul>
                        <p className="mt-4 italic text-sm text-balance">
                            Die Verarbeitung erfolgt zur Vertragserfüllung sowie zur Erfüllung gesetzlicher Pflichten (Art. 6 Abs. 1 lit. b und c DSGVO).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Weitergabe von Daten</h2>
                        <p>
                            Eine Weitergabe personenbezogener Daten erfolgt nur, wenn:
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>dies zur Vertragserfüllung erforderlich ist (z. B. Teilelieferanten, Prüforganisationen)</li>
                            <li>eine gesetzliche Verpflichtung besteht</li>
                            <li>der Kunde eingewilligt hat</li>
                        </ul>
                        <p className="mt-4">
                            Eine Übermittlung in Drittstaaten findet nicht statt, sofern nicht ausdrücklich darauf hingewiesen wird.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Cookies und ähnliche Technologien</h2>
                        <p>
                            Unsere Website verwendet folgende Cookies:
                        </p>

                        <div className="space-y-6 mt-6">
                            <div>
                                <h4 className="text-lg font-bold text-white/90">Technisch notwendige Cookies:</h4>
                                <p className="text-sm mt-1">
                                    Diese sind erforderlich, um die Website funktionsfähig bereitzustellen. Sie können nicht deaktiviert werden.
                                </p>
                                <ul className="list-disc pl-6 mt-2 text-sm">
                                    <li>Cookie-Consent (speichert Ihre Cookie-Einstellungen)</li>
                                </ul>
                                <p className="mt-2 italic text-xs">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO</p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-white/90">Analyse-Cookies (nur mit Einwilligung):</h4>
                                <p className="text-sm mt-1">
                                    Google Analytics: Zur Analyse des Nutzerverhaltens auf unserer Website. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die IP-Adresse wird vor der Verarbeitung anonymisiert.
                                </p>
                                <p className="mt-2 text-sm italic">
                                    Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO<br />
                                    Widerruf jederzeit über Cookie-Einstellungen im Footer möglich.
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-white/90">Karten-Cookies (nur mit Einwilligung):</h4>
                                <p className="text-sm mt-1">
                                    Google Maps: Zur Darstellung von Karten auf unserer Website.
                                </p>
                                <p className="mt-2 text-sm italic">
                                    Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO<br />
                                    Widerruf jederzeit über Cookie-Einstellungen im Footer möglich.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Speicherdauer</h2>
                        <p>
                            Personenbezogene Daten werden nur so lange gespeichert, wie dies für die jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Ihre Rechte</h2>
                        <p>
                            Sie haben das Recht:
                        </p>
                        <ul className="list-disc pl-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                            <li>auf Auskunft über Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
                            <li>auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
                            <li>auf Löschung (Art. 17 DSGVO)</li>
                            <li>auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                            <li>auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                            <li>auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
                        </ul>
                        <p className="mt-6">
                            Zur Ausübung Ihrer Rechte genügt eine formlose Mitteilung an: <a href="mailto:info@sem-motorentec.de" className="text-accent hover:underline font-bold">info@sem-motorentec.de</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Widerruf von Einwilligungen</h2>
                        <p>
                            Erteilte Einwilligungen können jederzeit mit Wirkung für die Zukunft widerrufen werden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Beschwerderecht</h2>
                        <p>
                            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO).
                            <br /><br />
                            Zuständig für Nordrhein-Westfalen:<br />
                            Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />
                            Postfach 20 04 44, 40102 Düsseldorf<br />
                            <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.ldi.nrw.de</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">11. Datensicherheit</h2>
                        <p>
                            Wir verwenden geeignete technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen.
                            Die Website ist SSL/TLS-verschlüsselt (erkennbar an "https://" und dem Schloss-Symbol im Browser).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">12. WhatsApp-Kommunikation</h2>
                        <p>
                            Wir bieten die Möglichkeit, mit uns über WhatsApp in Kontakt zu treten. Anbieter ist WhatsApp Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland.
                            <br /><br />
                            Bei Nutzung von WhatsApp werden personenbezogene Daten (z. B. Telefonnummer, Nachrichteninhalte, Metadaten) verarbeitet. Die Nutzung erfolgt freiwillig auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) oder zur Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO).
                            <br /><br />
                            WhatsApp kann Daten auch in Drittländern (z. B. USA) verarbeiten. WhatsApp verwendet Standardvertragsklauseln der EU.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">13. Google Maps</h2>
                        <p>
                            Auf unserer Website ist Google Maps eingebunden. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                            Die Einbindung erfolgt nur nach Ihrer Einwilligung über unser Cookie-Consent-Tool (Art. 6 Abs. 1 lit. a DSGVO).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">14. Google Analytics</h2>
                        <p>
                            Diese Website nutzt Google Analytics der Google Ireland Limited.
                            Google Analytics verwendet Cookies zur Analyse der Websitenutzung. Die IP-Adresse wird vor der Verarbeitung anonymisiert (IP-Anonymisierung).
                            <br /><br />
                            Die Nutzung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die Einwilligung kann jederzeit widerrufen werden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">15. Kontaktformular / Online-Anfragen</h2>
                        <p>
                            Wenn Sie uns über unser Online-Formular Anfragen senden, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert. Die Verarbeitung erfolgt zur Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO).
                            <br /><br />
                            Für den E-Mail-Versand nutzen wir den Dienst Resend (Resend Inc., 2261 Market Street, San Francisco, CA 94114, USA). Ihre Daten werden dabei an Server in der EU (Irland) übertragen.
                            <br /><br />
                            Weitere Informationen: <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://resend.com/privacy</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">16. Social-Media-Plugins</h2>
                        <p>
                            Auf unserer Website sind Links zu sozialen Netzwerken (Instagram) eingebunden. Beim Anklicken kann eine Verbindung zu den Servern des jeweiligen Netzwerks hergestellt werden. Wir haben keinen Einfluss auf Umfang und Art der Datenverarbeitung durch die jeweiligen Anbieter.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">17. Aktualität und Änderung dieser Datenschutzerklärung</h2>
                        <p>
                            Diese Datenschutzerklärung ist aktuell gültig. Durch Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung erforderlich werden.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
