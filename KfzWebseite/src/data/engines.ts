/**
 * Datenbasis für die Motoren-Seiten (/motoren).
 *
 * BILDER: Alle Bild-Felder sind optional. Solange kein Bild hinterlegt ist,
 * zeigt die Seite eine typografische Platzhalter-Kachel. Fotos einfach nach
 * `public/images/motoren/` legen und den Pfad hier eintragen, z.B.
 *   image: '/images/motoren/bmw-n47d20.jpg'
 *
 * INHALTE: Texte sind ein Entwurf – technische Angaben, Schadensbilder und
 * Fahrzeugzuordnungen bitte gegenlesen und bei Bedarf korrigieren.
 */

export interface Engine {
  /** URL-Segment, z.B. 'n47d20' */
  slug: string;
  /** Anzeigename, z.B. 'N47D20' */
  code: string;
  /** Kleine Zeile über dem Titel, z.B. '2.0 Diesel · Reihenvierzylinder' */
  eyebrow: string;
  /** Kurztext für die Kachel */
  short: string;
  /** Einleitung auf der Detailseite */
  intro: string;
  /** Typische Schadensbilder */
  symptoms: string[];
  /** Was wir an diesem Motor machen */
  works: string[];
  /** Typische Fahrzeuge */
  models: string[];
  /** Einzelbild – wird auch für Metadaten genutzt. */
  image?: string;
  /** Mehrere Bilder: erscheinen auf der Detailseite als Slideshow. */
  images?: string[];
}

export interface Brand {
  /** URL-Segment, z.B. 'bmw' */
  slug: string;
  /** Anzeigename, z.B. 'Mercedes-Benz' */
  name: string;
  /** Kurzform für Buttons und Überschriften, z.B. 'VW' statt 'Volkswagen' */
  shortName: string;
  /** Herkunft, erscheint im Hero über dem Titel */
  country: string;
  /** Ein Satz für die Übersichtskachel */
  tagline: string;
  /** Längerer Text für den Marken-Hero */
  description: string;
  /** Herstellerlogo, erscheint oben rechts im Hero. Fehlt es, wird nichts angezeigt. */
  logo?: string;
  image?: string;
  engines: Engine[];
}

export const brands: Brand[] = [
  {
    slug: 'bmw',
    name: 'BMW',
    shortName: 'BMW',
    country: 'Deutschland · BMW',
    tagline:
      'Vom Steuerkettenschaden am N47 über die Reihensechszylinder bis zum V8-Biturbo: BMW-Motoren stehen bei uns am häufigsten auf dem Montagebock.',
    description:
      'BMW-Motoren sind technisch anspruchsvoll und verzeihen wenig, wenn Wartung oder Steuertrieb vernachlässigt werden. Wir kennen die typischen Schwachstellen der gängigen Baureihen – vom rasselnden Steuertrieb über Lagerschäden bis zum erhöhten Ölverbrauch – und setzen sie fachgerecht instand.',
    logo: '/images/marken/bmw.png',
    engines: [
      {
        slug: 'n47d20',
        code: 'N47D20',
        eyebrow: '2.0 Diesel · Reihenvierzylinder',
        short:
          'Der Klassiker unter den Steuerkettenschäden: Die Kette sitzt an der Schwungradseite, der Wechsel erfordert den Ausbau von Motor bzw. Getriebe.',
        intro:
          'Der N47D20 ist einer der meistverbauten BMW-Dieselmotoren – und der Motor, bei dem wir am häufigsten den kompletten Steuertrieb erneuern. Weil die Kette motorseitig hinten sitzt, ist der Wechsel deutlich aufwendiger als bei anderen Aggregaten. Sauber ausgeführt hält das Ergebnis dafür dauerhaft.',
        symptoms: [
          'Rasseln oder Kettenklappern beim Kaltstart',
          'Metallspäne im Motoröl oder im Ölfilter',
          'Fehlercodes zur Nockenwellen-/Kurbelwellenstellung',
          'Leistungsverlust und unruhiger Motorlauf',
        ],
        works: [
          'Kompletter Steuerkettensatz inkl. Spanner und Gleitschienen',
          'Prüfung von Kurbelwelle, Lagern und Ölpumpenantrieb',
          'Gründliche Reinigung des kompletten Ölkreislaufs',
          'Instandsetzung oder Austauschmotor – je nach Schadensbild',
        ],
        models: ['1er E87/F20', '3er E90/F30', '5er F10', 'X1 E84', 'X3 F25'],
        images: [
          '/images/motoren/bmw-n47/n47-01-steuertrieb-getriebeseite.jpeg',
          '/images/motoren/bmw-n47/n47-02-motor-zerlegt.jpeg',
          '/images/motoren/bmw-n47/n47-03-block-kopf-teilewaescher.jpeg',
          '/images/motoren/bmw-n47/n47-04-neue-hauptlagerschalen.jpeg',
          '/images/motoren/bmw-n47/n47-05-kolben-pleuel.jpeg',
          '/images/motoren/bmw-n47/n47-06-zylinderkopf-nockenwellen.jpeg',
          '/images/motoren/bmw-n47/n47-07-motor-fertig-steuertrieb.jpeg',
        ],
      },
      {
        slug: 'b47d20',
        code: 'B47D20',
        eyebrow: '2.0 Diesel · Baukastenmotor',
        short:
          'Nachfolger des N47 aus der modularen Motorenfamilie – moderner aufgebaut, aber ebenfalls empfindlich gegenüber überzogenen Ölwechselintervallen.',
        intro:
          'Der B47D20 gehört zum modularen Baukasten von BMW und steckt in unzähligen Modellen. Bei hoher Laufleistung sehen wir vor allem Verschleiß am Steuertrieb, an den Lagerstellen und Folgeschäden durch verschlepptes Öl.',
        symptoms: [
          'Geräusche aus dem Steuertrieb',
          'Erhöhter Ölverbrauch',
          'Leistungsverlust, Notlauf, Fehlerspeichereinträge',
          'Starker oder bläulicher Rauch aus dem Auspuff',
        ],
        works: [
          'Steuerkettensatz komplett erneuern',
          'Lagerschalen und Verschleißteile ersetzen',
          'Zylinderkopf planen und überarbeiten',
          'Komplette Instandsetzung oder geprüfter Austauschmotor',
        ],
        models: ['1er F20/F40', '3er F30/G20', '5er G30', 'X1 F48', 'X3 G01'],
      },
      {
        slug: 'n57d30',
        code: 'N57D30',
        eyebrow: '3.0 Diesel · Reihensechszylinder',
        short:
          'Der große Sechszylinder-Diesel: kräftig und langlebig, bei hoher Laufleistung aber anfällig für Lagerschäden und Verschleiß am Steuertrieb.',
        intro:
          'Der N57D30 ist ein laufruhiger Reihensechszylinder mit viel Drehmoment. Werden Ölwechselintervalle überzogen, macht sich das zuerst am Steuertrieb und an den Lagerstellen bemerkbar – zusätzlich sind verrußte Drallklappen ein bekanntes Thema.',
        symptoms: [
          'Klopfende Geräusche unter Last',
          'Rasseln des Steuertriebs',
          'Leistungsverlust durch verrußten Ansaugtrakt',
          'Ölverbrauch und Öldruckprobleme',
        ],
        works: [
          'Kurbelwelle prüfen, schleifen oder ersetzen',
          'Haupt- und Pleuellager grundsätzlich erneuern',
          'Steuerkette samt Spanner und Schienen tauschen',
          'Zylinderkopf überholen, Ventilsitze fräsen',
        ],
        models: ['3er F30', '5er F10/G30', '7er F01', 'X5 E70/F15', 'X6 E71'],
        images: [
          '/images/motoren/bmw-n57/n57-01-lagerschaden.jpeg',
          '/images/motoren/bmw-n57/n57-02-block-teilewaescher.jpeg',
          '/images/motoren/bmw-n57/n57-03-neue-hauptlagerschalen.jpeg',
          '/images/motoren/bmw-n57/n57-04-kurbelwelle-eingelegt.jpeg',
          '/images/motoren/bmw-n57/n57-05-kurbelwelle-lagerdeckel.jpeg',
          '/images/motoren/bmw-n57/n57-06-kolben-pleuel.jpeg',
          '/images/motoren/bmw-n57/n57-07-steuerkettensatz.jpeg',
          '/images/motoren/bmw-n57/n57-08-oelpumpe-steuergehaeuse.jpeg',
          '/images/motoren/bmw-n57/n57-09-zylinderkopfdichtung.jpeg',
          '/images/motoren/bmw-n57/n57-10-motor-fertig.jpeg',
        ],
      },
      {
        slug: 'b57d30',
        code: 'B57D30',
        eyebrow: '3.0 Diesel · Reihensechszylinder',
        short:
          'Die aktuelle Sechszylinder-Generation aus dem Baukasten – moderne Technik, hohe Leistungsdichte und entsprechend hohe Anforderungen an die Ölversorgung.',
        intro:
          'Der B57D30 löste den N57 ab und arbeitet mit deutlich höheren Einspritzdrücken. Schäden entstehen meist durch Ölmangel, verschlepptes Öl oder Folgeschäden nach einem Turboladerdefekt – wir prüfen den kompletten Motor und setzen ihn gezielt instand.',
        symptoms: [
          'Öldruckwarnung und Notlauf',
          'Klopfen aus dem Kurbeltrieb',
          'Blauer Rauch nach Turboladerschaden',
          'Geräusche vom Steuertrieb',
        ],
        works: [
          'Kurbeltrieb vermessen und instand setzen',
          'Steuertrieb komplett erneuern',
          'Zylinderkopf planen und überarbeiten',
          'Turbolader und Ölversorgung prüfen',
        ],
        models: ['5er G30', '7er G11', 'X5 G05', 'X7 G07', '3er G20'],
      },
      {
        slug: 'n54b30',
        code: 'N54B30',
        eyebrow: '3.0 Benzin · Biturbo · Reihensechszylinder',
        short:
          'Der erste Biturbo-Reihensechszylinder der Neuzeit – begehrt bei Tunern, bekannt für Themen an Injektoren, Hochdruckpumpe und Wastegates.',
        intro:
          'Der N54B30 gilt als Kultmotor und verträgt viel Mehrleistung – genau deshalb sehen wir ihn oft mit thermisch bedingten Schäden und Verschleiß am Kurbeltrieb. Wir setzen ihn instand und bauen ihn auf Wunsch entsprechend belastbar wieder auf.',
        symptoms: [
          'Startprobleme und Zündaussetzer durch Injektoren',
          'Rasseln der Wastegate-Klappen',
          'Leistungsverlust und Notlauf',
          'Ölverlust an Ventildeckel und Ölfiltergehäuse',
        ],
        works: [
          'Kurbeltrieb prüfen, Lager und Kolben erneuern',
          'Zylinderkopf überarbeiten und planen',
          'Injektoren und Hochdruckpumpe prüfen',
          'Turbolader kontrollieren, Motor komplett abdichten',
        ],
        models: ['135i E82', '335i E90/E92', '535i E60', 'Z4 35i E89', '1M E82'],
      },
      {
        slug: 'n55b30',
        code: 'N55B30',
        eyebrow: '3.0 Benzin · Turbo · Reihensechszylinder',
        short:
          'Nachfolger des N54 mit einem Twin-Scroll-Lader und Valvetronic – typische Themen sind Ölverlust, Kurbelgehäuseentlüftung und der Steuertrieb.',
        intro:
          'Der N55B30 arbeitet mit nur einem Turbolader und Valvetronic. Bei hoher Laufleistung führen Undichtigkeiten und eine verstopfte Kurbelgehäuseentlüftung zu Ölverbrauch – bleibt das unbemerkt, folgen Schäden am Kurbeltrieb.',
        symptoms: [
          'Erhöhter Ölverbrauch',
          'Ölverlust an Ventildeckel und Ölfiltergehäuse',
          'Rasseln beim Kaltstart',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Steuerkette und Spanner erneuern',
          'Kolben, Ringe und Lager prüfen und ersetzen',
          'Valvetronic-Einheit und Zylinderkopf überarbeiten',
          'Motor komplett neu abdichten',
        ],
        models: ['M135i F20', '335i F30', '435i F32', 'X3 35i F25', '640i F12'],
      },
      {
        slug: 'b58b30',
        code: 'B58B30',
        eyebrow: '3.0 Benzin · Turbo · Reihensechszylinder',
        short:
          'Die aktuelle Sechszylinder-Generation: sehr robust und leistungsstark – Schäden entstehen meist durch Ölmangel, Überhitzung oder starke Mehrleistung.',
        intro:
          'Der B58B30 gilt als besonders standfest und wird häufig leistungsgesteigert gefahren. Genau dann zählen saubere Toleranzen: Wir vermessen den Kurbeltrieb, erneuern Verschleißteile und bauen den Motor nach Herstellervorgaben wieder auf.',
        symptoms: [
          'Klopfen unter Last nach Leistungssteigerung',
          'Kühlmittelverlust und Überhitzung',
          'Öldruckabfall',
          'Zündaussetzer und Leistungsverlust',
        ],
        works: [
          'Kurbelwelle, Pleuel und Lager vermessen und erneuern',
          'Kolben und Kolbenringe ersetzen',
          'Zylinderkopf planen und Ventile überarbeiten',
          'Kühlsystem und Ölversorgung prüfen',
        ],
        models: ['M140i F20', '340i F30/G20', 'Z4 M40i G29', 'X3 M40i G01', '540i G30'],
      },
      {
        slug: 'n63b44',
        code: 'N63B44',
        eyebrow: '4.4 Benzin · V8 Biturbo · Hot-V',
        short:
          'V8-Biturbo mit bekannter Kolbenkipper-Problematik: Beschädigte Zylinderlaufbahnen setzen wir fachgerecht mit Stahlbuchsen instand.',
        intro:
          'Beim N63B44 sitzen die Turbolader innerhalb des Zylinder-V. Die dadurch entstehende Hitze belastet Dichtungen, Ventilschaftdichtungen und Öl – der bekannte hohe Ölverbrauch ist meist die Folge. Wir zerlegen den Motor komplett und beheben die Ursache.',
        symptoms: [
          'Sehr hoher Ölverbrauch',
          'Blauer Rauch beim Gasgeben',
          'Ölverlust im Motor-V',
          'Leistungsverlust und Notlauf durch Turboladerschaden',
        ],
        works: [
          'Ventilschaftdichtungen und Zylinderköpfe überarbeiten',
          'Kolben, Ringe und Lager erneuern',
          'Turbolader prüfen und Ölversorgung erneuern',
          'Komplette Abdichtung im Motor-V',
        ],
        models: ['550i F10', '750i F01', 'X5 50i E70/F15', 'X6 50i F16', '650i F12'],
        images: [
          '/images/motoren/n63-s63/n63-zylinderlaufbahn-riefen.jpeg',
          '/images/motoren/n63-s63/n63-kolben-neue-laufbahn.jpeg',
          '/images/motoren/n63-s63/n63-kurzblock-kolben.jpeg',
          '/images/motoren/n63-s63/n63-v8-motorbock.jpeg',
        ],
      },
      {
        slug: 's63b44',
        code: 'S63B44',
        eyebrow: '4.4 Benzin · V8 Biturbo · M GmbH',
        short:
          'Die M-Version des V8-Biturbo: höhere Leistung, gleiche Schwachstelle. Riefen und Kolbenkipper beheben wir mit Stahlbuchsen im Motorblock.',
        intro:
          'Der S63B44 treibt die M-Modelle an und wird oft im Grenzbereich bewegt. Typisch sind thermisch bedingte Schäden und Lagerverschleiß. Wir setzen den Motor mit hochwertigen Ersatzteilen instand und prüfen dabei den kompletten Kurbeltrieb.',
        symptoms: [
          'Klopfgeräusche unter Volllast',
          'Öldruckabfall',
          'Kühlmittelverlust und Überhitzung',
          'Leistungsverlust nach Turboladerschaden',
        ],
        works: [
          'Kurbelwelle prüfen, schleifen und wuchten',
          'Haupt- und Pleuellager erneuern',
          'Kolben und Zylinderlaufbahnen bearbeiten',
          'Zylinderköpfe planen, Ventiltrieb überholen',
        ],
        models: ['M5 F10', 'M6 F12/F13', 'X5 M E70/F85', 'X6 M E71/F86'],
        images: [
          '/images/motoren/n63-s63/s63-v8-turbolader.jpeg',
          '/images/motoren/n63-s63/s63-v8-motor-komplett.jpeg',
          '/images/motoren/n63-s63/s63-v8-motorbock-v.jpeg',
        ],
      },
    ],
  },
  {
    slug: 'mercedes',
    name: 'Mercedes-Benz',
    shortName: 'Mercedes',
    country: 'Deutschland · Mercedes-Benz',
    tagline:
      'Vom Vierzylinder-Diesel OM651 über den neuen Reihensechszylinder OM656 bis zu den V8-Biturbo-Aggregaten M177 und M157.',
    description:
      'Mercedes-Motoren laufen zuverlässig, solange Steuertrieb, Einspritzung und Ölkreislauf in Ordnung sind – genau dort liegen bei hoher Laufleistung aber die typischen Schwachstellen. Wir zerlegen, vermessen und setzen instand: vom Transporter bis zum AMG-V8.',
    logo: '/images/marken/mercedes.png',
    engines: [
      {
        slug: 'om651',
        code: 'OM651',
        eyebrow: '2.1 Diesel · Reihenvierzylinder',
        short:
          'Millionenfach verbauter Vierzylinder-Diesel – bekannt für Steuerkettenlängung, Injektorprobleme und undichte Steuergehäuse.',
        intro:
          'Der OM651 steckt in fast jeder Mercedes-Baureihe der letzten Jahre, vom C-Klasse-Kombi bis zum Sprinter. Wir kennen die Schwachstellen genau und setzen den Motor auch dann instand, wenn ein Kettenschaden bereits Folgeschäden verursacht hat.',
        symptoms: [
          'Kettenrasseln, vor allem beim Kaltstart',
          'Undichtigkeiten am Steuergehäusedeckel',
          'Unrunder Lauf durch defekte Injektoren',
          'Startprobleme und Leistungsverlust',
        ],
        works: [
          'Steuerkette, Spanner und Kettenräder erneuern',
          'Injektoren prüfen, ausbauen und ersetzen',
          'Zylinderkopf planen und überarbeiten',
          'Motor komplett abdichten und neu befüllen',
        ],
        models: ['C-Klasse W204/W205', 'E-Klasse W212', 'Sprinter', 'Vito', 'GLK/GLC'],
      },
      {
        slug: 'om642',
        code: 'OM642',
        eyebrow: '3.0 Diesel · V6',
        short:
          'Der große V6-Diesel: laufruhig und kräftig, mit bekannten Schwachstellen an Ölkühler-Dichtung, Drallklappen und Saugrohr.',
        intro:
          'Der OM642 kommt in vielen größeren Mercedes-Modellen zum Einsatz. Klassiker sind der undichte Ölkühler zwischen den Zylinderbänken sowie Ablagerungen im Ansaugtrakt – Arbeiten, für die der halbe Motor zerlegt werden muss.',
        symptoms: [
          'Ölverlust im V zwischen den Zylinderbänken',
          'Leistungsverlust durch verrußte Drallklappen',
          'Notlauf und Fehlerspeichereinträge',
          'Kühlmittelverlust',
        ],
        works: [
          'Ölkühler und sämtliche Dichtungen erneuern',
          'Saugrohr und Drallklappen reinigen oder ersetzen',
          'Zylinderkopfdichtungen erneuern',
          'Komplette Instandsetzung inkl. Kurbeltrieb',
        ],
        models: ['E-Klasse W211/W212', 'S-Klasse W221', 'ML/GL', 'Sprinter', 'Viano'],
        images: [
          '/images/motoren/mercedes-om642/om642-01-motor-ausgebaut.jpeg',
          '/images/motoren/mercedes-om642/om642-02-kurbelwelle-lagerdeckel.jpeg',
          '/images/motoren/mercedes-om642/om642-03-steuertrieb.jpeg',
          '/images/motoren/mercedes-om642/om642-04-kurzblock-oelkuehler.jpeg',
          '/images/motoren/mercedes-om642/om642-05-zylinderkoepfe-nockenwellen.jpeg',
        ],
      },
      {
        slug: 'om656',
        code: 'OM656',
        eyebrow: '3.0 Diesel · Reihensechszylinder',
        short:
          'Der moderne Reihensechszylinder-Diesel mit Mild-Hybrid-Technik – hohe Einspritzdrücke und entsprechend sensible Ölversorgung.',
        intro:
          'Der OM656 ist die aktuelle Diesel-Oberklasse von Mercedes: aufwendige Abgasnachbehandlung, hohe Drücke, kompakte Bauweise. Schäden entstehen hier meist durch Ölmangel oder Folgeschäden – wir prüfen den kompletten Motor, bevor wir instand setzen.',
        symptoms: [
          'Klopfen aus dem Kurbeltrieb',
          'Öldruckwarnung und Notlauf',
          'Starker Ölverbrauch',
          'Leistungsverlust und Fehlerspeichereinträge',
        ],
        works: [
          'Kurbeltrieb vermessen und instand setzen',
          'Lager und Kolben erneuern',
          'Zylinderkopf planen und überarbeiten',
          'Ölversorgung und Turbolader prüfen',
        ],
        models: ['S 400 d W222', 'E 400 d W213', 'GLE 400 d', 'CLS 400 d', 'GLS 400 d'],
      },
      {
        slug: 'm278',
        code: 'M278',
        eyebrow: '4.7 Benzin · V8 Biturbo',
        short:
          'V8-Biturbo der Oberklasse, technisch eng mit dem M157 verwandt – beschädigte Zylinderlaufbahnen setzen wir mit Stahlbuchsen instand.',
        intro:
          'Der M278 arbeitet mit Direkteinspritzung und zwei Turboladern. Bei höherer Laufleistung zeigt sich Verschleiß am Steuertrieb; durch die kompakte Bauweise erfordern diese Arbeiten viel Erfahrung und sauberes Werkzeug.',
        symptoms: [
          'Rasseln aus dem Steuertrieb',
          'Fehlermeldungen zur Nockenwellenverstellung',
          'Ölverlust an Ventildeckeln',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Steuerketten beider Zylinderbänke erneuern',
          'Nockenwellenversteller und Magnetventile tauschen',
          'Zylinderköpfe überarbeiten',
          'Motor komplett abdichten',
        ],
        models: ['S 500 W222', 'E 500 W212', 'CLS 500 C218', 'GL 500', 'SL 500 R231'],
      },
      {
        slug: 'm157',
        code: 'M157',
        eyebrow: '5.5 Benzin · V8 Biturbo · AMG',
        short:
          'Der 5,5-Liter-AMG-Biturbo: Bei Kolbenkipper und beschädigten Zylinderlaufbahnen bauen wir die Zylinder mit Stahlbuchsen neu auf.',
        intro:
          'Der M157 ist das Herzstück der großen AMG-Modelle. Wird er dauerhaft im Grenzbereich bewegt oder läuft die Ölversorgung nicht sauber, sind Lagerschäden die Folge. Wir setzen ihn mit hochwertigen Originalteilen instand.',
        symptoms: [
          'Klopfen unter Volllast',
          'Öldruckabfall',
          'Ölverlust im Motor-V',
          'Leistungsverlust nach Turboladerschaden',
        ],
        works: [
          'Kurbelwelle prüfen, schleifen und wuchten',
          'Haupt- und Pleuellager erneuern',
          'Kolben und Zylinderlaufbahnen bearbeiten',
          'Turbolader und Ölkreislauf prüfen',
        ],
        models: [
          'E 63 AMG W212',
          'S 63 AMG W222',
          'CLS 63 AMG',
          'ML 63 AMG',
          'G 63 AMG W463',
        ],
        images: [
          '/images/motoren/mercedes-amg/amg-v8-g-klasse-motorraum.jpeg',
          '/images/motoren/mercedes-amg/amg-v8-ventildeckel.jpeg',
        ],
      },
      {
        slug: 'm177',
        code: 'M177',
        eyebrow: '4.0 Benzin · V8 Biturbo · AMG',
        short:
          'Die aktuelle AMG-V8-Generation mit innenliegenden Turboladern – hohe Leistungsdichte auf engstem Bauraum.',
        intro:
          'Der M177 ist der aktuelle AMG-V8 mit Hot-V-Anordnung. Die Hitze zwischen den Zylinderbänken belastet Dichtungen und Öl; bei Leistungssteigerungen kommen zusätzliche Anforderungen an den Kurbeltrieb dazu.',
        symptoms: [
          'Ölverlust im Motor-V',
          'Klopfen unter Last',
          'Kühlmittelverlust',
          'Notlauf und Leistungsverlust',
        ],
        works: [
          'Kurbeltrieb vermessen, Lager und Kolben erneuern',
          'Zylinderköpfe planen und überarbeiten',
          'Steuertrieb komplett ersetzen',
          'Turbolader, Kühlung und Ölversorgung prüfen',
        ],
        models: ['C 63 AMG W205', 'E 63 S W213', 'AMG GT 4-Türer', 'GLC 63 AMG', 'G 63 W463'],
      },
      {
        slug: 'm176',
        code: 'M176',
        eyebrow: '4.0 Benzin · V8 Biturbo',
        short:
          'Der V8-Biturbo für die Oberklasse-Modelle abseits von AMG – gleiche Grundkonstruktion, moderatere Auslegung.',
        intro:
          'Der M176 teilt sich die Basis mit dem M177, ist aber weniger sportlich ausgelegt. Typische Themen sind Undichtigkeiten, Verschleiß am Steuertrieb sowie Folgeschäden nach Ölmangel oder Überhitzung.',
        symptoms: [
          'Ölverlust an Dichtflächen',
          'Geräusche aus dem Steuertrieb',
          'Kühlmittelverlust',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Steuertrieb erneuern',
          'Zylinderköpfe überarbeiten',
          'Kurbeltrieb prüfen und instand setzen',
          'Motor komplett abdichten',
        ],
        models: ['S 560 W222', 'GLE 580', 'CLS 500', 'G 500 W463', 'GLS 580'],
      },
    ],
  },
  {
    slug: 'vw',
    name: 'Volkswagen',
    shortName: 'VW',
    country: 'Deutschland · Volkswagen Nutzfahrzeuge',
    tagline:
      'Transporter-Motoren aus dem Alltag und dem Gewerbe: T5 mit 2.5 TDI und 2.0 BiTDI sowie der T6 mit 2.0 BiTDI.',
    description:
      'Transporter sind Arbeitstiere: hohe Laufleistung, viel Zuladung, oft Kurzstrecke. Genau das fordert Kurbeltrieb, Steuertrieb und Ölversorgung. Wir setzen die Motoren von T5 und T6 instand – inklusive bundesweitem Abholservice, damit Ihr Fahrzeug schnell wieder im Einsatz ist.',
    logo: '/images/marken/vw.png',
    engines: [
      {
        slug: 't5',
        code: 'T5',
        eyebrow: '2.5 TDI · 2.0 BiTDI · Transporter',
        short:
          'Der T5 2.0 BiTDI (CFCA) ist für hohen Ölverbrauch bekannt. Wir bohren und honen die Zylinderlaufbahnen auf Übermaß – Ursache statt Symptom.',
        intro:
          'Beim T5 begegnen uns zwei Motorenwelten: der kernige 2.5 TDI mit fünf Zylindern und der spätere 2.0 BiTDI. Beide laufen hohe Kilometerleistungen – bei vernachlässigter Wartung sind Zylinderkopf, Steuertrieb und Kurbelwellenlager die ersten Kandidaten.',
        symptoms: [
          'Klopfen oder Klackern aus dem Motorraum',
          'Öldruckwarnung und starker Ölverbrauch',
          'Kühlmittelverlust und Überhitzung',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Haupt- und Pleuellager erneuern, Kurbelwelle schleifen',
          'Zylinderkopf planen, Ventile und Führungen überarbeiten',
          'Steuertrieb bzw. Zahnriemensatz komplett ersetzen',
          'Kolben und Kolbenringe erneuern',
        ],
        models: ['T5 Transporter', 'T5 Multivan', 'T5 California', 'T5 Caravelle'],
        images: [
          '/images/motoren/vw-t5-t6/t5-uebermasskolben.jpeg',
          '/images/motoren/vw-t5-t6/t5-kolben-pleuel.jpeg',
          '/images/motoren/vw-t5-t6/t5-kurbelwelle-lagerschalen.jpeg',
          '/images/motoren/vw-t5-t6/t5-fahrzeug-werkstatt.jpeg',
        ],
      },
      {
        slug: 't6',
        code: 'T6',
        eyebrow: '2.0 BiTDI · Transporter',
        short:
          'Auch der T6 2.0 BiTDI verbraucht mit den Jahren zu viel Öl. Wir vermessen die Zylinder und bauen sie mit Übermaßkolben fachgerecht neu auf.',
        intro:
          'Der 2.0 BiTDI im T6 leistet viel für seinen Hubraum und wird meist voll beladen bewegt. Typisch sind Verschleiß am Steuertrieb und an den Ausgleichswellen sowie Lagerschäden bei überzogenen Ölwechseln.',
        symptoms: [
          'Geräusche aus dem Steuertrieb',
          'Öldruckwarnung und Klopfen',
          'Erhöhter Ölverbrauch',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Steuerkette bzw. Steuertrieb komplett erneuern',
          'Kurbelwelle vermessen, Lager erneuern',
          'Kolben und Kolbenringe ersetzen',
          'Zylinderkopf planen und überarbeiten',
        ],
        models: ['T6 Transporter', 'T6 Multivan', 'T6 California', 'T6.1'],
        images: [
          '/images/motoren/vw-t5-t6/t6-fahrzeug-motorausbau.jpeg',
          '/images/motoren/vw-t5-t6/t6-motor-ausgebaut.jpeg',
          '/images/motoren/vw-t5-t6/t6-zahnriementrieb.jpeg',
          '/images/motoren/vw-t5-t6/t6-multivan-hebebuehne.jpeg',
        ],
      },
    ],
  },
  {
    slug: 'range-rover',
    name: 'Range Rover',
    shortName: 'Range Rover',
    country: 'Großbritannien · Land Rover',
    tagline:
      'Die Diesel-Aggregate der Land-Rover-Familie: 306DT und 448DT als V6 bzw. V8 sowie der Ingenium-Vierzylinder 204DT.',
    description:
      'Die Diesel von Range Rover und Land Rover leisten viel Drehmoment bei hohem Fahrzeuggewicht. Steuertrieb und Kurbelwellenlager stehen dadurch dauerhaft unter Last – zwei Bereiche, in denen wir besonders viel Erfahrung haben.',
    logo: '/images/marken/range-rover.png',
    engines: [
      {
        slug: '306dt',
        code: '306DT',
        eyebrow: '3.0 Diesel · V6 (TDV6/SDV6)',
        short:
          'Der V6-Diesel mit hinten liegendem Steuertrieb – bekannt für Kurbelwellen- und Pleuellagerschäden sowie Verschleiß an der Ölpumpenkette.',
        intro:
          'Der 306DT ist das meistverbaute Dieselaggregat der Marke. Die Steuerketten sitzen an der Getriebeseite, der Motor muss für Arbeiten daran raus. Werden erste Geräusche ignoriert, endet das häufig im Lagerschaden – wir prüfen, messen und setzen komplett instand.',
        symptoms: [
          'Klopfen oder Klackern aus dem Kurbeltrieb',
          'Rasseln des Steuertriebs',
          'Öldruckabfall und Metallspäne im Öl',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Kurbelwelle vermessen, schleifen oder ersetzen',
          'Haupt- und Pleuellager grundsätzlich erneuern',
          'Kompletter Steuerkettensatz inkl. Ölpumpenkette',
          'Zylinderköpfe planen und überarbeiten',
        ],
        models: [
          'Range Rover Sport',
          'Range Rover Velar',
          'Discovery 4/5',
          'Jaguar XF',
          'Jaguar XJ',
        ],
      },
      {
        slug: '204dt',
        code: '204DT',
        eyebrow: '2.0 Diesel · Ingenium · Vierzylinder',
        short:
          'Der moderne Ingenium-Vierzylinder – kompakt und sparsam, empfindlich gegenüber Kurzstrecke, Ölverdünnung und langen Wartungsintervallen.',
        intro:
          'Der 204DT gehört zur Ingenium-Familie und ist in den kompakteren Modellen verbaut. Kurzstreckenbetrieb, verdünntes Motoröl und ein überlasteter Partikelfilter führen mit der Zeit zu Verschleiß an Steuertrieb und Lagerstellen.',
        symptoms: [
          'Rasseln beim Kaltstart',
          'Steigender Ölstand durch Kraftstoffeintrag',
          'Leistungsverlust und Notlauf',
          'Öldruckwarnung',
        ],
        works: [
          'Steuerkettensatz erneuern',
          'Lager und Kolben prüfen und ersetzen',
          'Zylinderkopf überarbeiten',
          'Ölkreislauf reinigen und Ölversorgung prüfen',
        ],
        models: ['Evoque', 'Discovery Sport', 'Velar', 'Jaguar E-Pace', 'Jaguar XE'],
      },
      {
        slug: '448dt',
        code: '448DT',
        eyebrow: '4.4 Diesel · V8 (SDV8)',
        short:
          'Der große V8-Diesel: kraftvoll und laufruhig – bei hoher Laufleistung sind Steuertrieb, Injektoren und Ölverbrauch die typischen Themen.',
        intro:
          'Der 448DT treibt die großen Modelle an und muss viel Gewicht bewegen. Entsprechend beansprucht sind Kurbeltrieb und Steuertrieb. Wir zerlegen den Motor vollständig, vermessen alle Bauteile und setzen ihn mit hochwertigen Teilen wieder instand.',
        symptoms: [
          'Rasseln des Steuertriebs',
          'Unruhiger Lauf durch defekte Injektoren',
          'Erhöhter Ölverbrauch',
          'Öldruckabfall und Klopfen',
        ],
        works: [
          'Steuerketten beider Zylinderbänke erneuern',
          'Kurbelwelle und Lager instand setzen',
          'Injektoren prüfen und ersetzen',
          'Zylinderköpfe planen und überarbeiten',
        ],
        models: ['Range Rover L405', 'Range Rover Sport L494', 'Range Rover L322'],
      },
    ],
  },
  {
    slug: 'porsche',
    name: 'Porsche',
    shortName: 'Porsche',
    country: 'Deutschland · Porsche',
    tagline:
      'Vom Boxermotor des 911 über die V8-Benziner in Cayenne und Panamera bis zu den V6-Aggregaten im Macan.',
    description:
      'Porsche-Motoren sind aufwendig gebaut und verlangen bei der Instandsetzung Präzision: enge Toleranzen, hochwertige Ersatzteile und saubere Messwerte. Wir arbeiten hier besonders sorgfältig – vom Boxer bis zum aufgeladenen V8.',
    logo: '/images/marken/porsche.png',
    engines: [
      {
        slug: '911',
        code: '911',
        eyebrow: 'Boxermotor · 996 · 997 · 991 · 992',
        short:
          'Die Boxer-Generationen des 911 – von den bekannten Themen der 996/997-Baureihen bis zu den aufgeladenen Motoren der neueren Modelle.',
        intro:
          'Beim 911 hängt das Schadensbild stark von der Generation ab: Bei 996 und 997 sind Zwischenwellenlager und Zylinderlaufbahnen die Klassiker, bei 991 und 992 stehen Aufladung, Ölversorgung und thermische Belastung im Vordergrund. Wir prüfen zuerst, was wirklich vorliegt – und beraten ehrlich, ob sich die Instandsetzung lohnt.',
        symptoms: [
          'Metallischer Abrieb im Motoröl',
          'Klopfen oder Schlagen aus dem Kurbeltrieb',
          'Erhöhter Ölverbrauch',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Motor komplett zerlegen und vermessen',
          'Kurbeltrieb, Lager und Kolben erneuern',
          'Zylinderlaufbahnen und Zylinderköpfe bearbeiten',
          'Steuertrieb erneuern und Motor exakt einstellen',
        ],
        models: ['911 996', '911 997', '911 991', '911 992'],
      },
      {
        slug: 'panamera',
        code: 'Panamera',
        eyebrow: '3.0 TDI · 4.8i V8',
        short:
          'Die Motoren der Gran Turismo: der 3.0-V6-Diesel aus dem Konzernbaukasten und der 4,8-Liter-V8-Benziner mit bekannten Steuerketten-Themen.',
        intro:
          'Im Panamera treffen zwei sehr unterschiedliche Aggregate aufeinander. Beim 3.0 TDI sind Steuertrieb und Kurbeltrieb die typischen Themen, beim 4.8i V8 vor allem die Steuerketten samt Spannern – ein aufwendiger, aber gut beherrschbarer Eingriff.',
        symptoms: [
          'Rasseln der Steuerketten beim Kaltstart',
          'Fehlercodes zu den Steuerzeiten',
          'Ölverlust und Öldruckabfall',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Steuerkettensatz komplett erneuern',
          'Kurbeltrieb vermessen und instand setzen',
          'Zylinderköpfe planen und überarbeiten',
          'Motor abdichten und Testlauf durchführen',
        ],
        models: ['Panamera 970', 'Panamera 971', 'Panamera Diesel', 'Panamera S'],
      },
      {
        slug: 'cayenne',
        code: 'Cayenne',
        eyebrow: '3.0 TDI · 4.8i V8',
        short:
          'Der Cayenne mit V6-Diesel oder 4,8-Liter-V8 – hohes Fahrzeuggewicht, entsprechend beanspruchter Steuertrieb und Kurbeltrieb.',
        intro:
          'Der Cayenne teilt sich die Motoren mit Panamera und Konzernmodellen. Beim V8 sind die Steuerketten und Kettenspanner der Klassiker, beim 3.0 TDI kommen Themen an Steuertrieb, Lagern und Ansaugtrakt dazu.',
        symptoms: [
          'Kettenrasseln beim Kaltstart',
          'Leistungsverlust und Notlauf',
          'Ölverlust an Dichtflächen',
          'Metallspäne im Motoröl',
        ],
        works: [
          'Steuerketten, Spanner und Schienen erneuern',
          'Kurbelwelle und Lager instand setzen',
          'Zylinderköpfe überarbeiten',
          'Ansaugtrakt reinigen, Motor komplett abdichten',
        ],
        models: ['Cayenne 955/957', 'Cayenne 958', 'Cayenne 9YA', 'Cayenne Diesel'],
      },
      {
        slug: 'macan',
        code: 'Macan',
        eyebrow: '3.0 V6 · Diesel & Benzin',
        short:
          'Der kompakte SUV mit V6-Aggregaten – typische Themen sind Steuertrieb, Ölversorgung und Folgeschäden nach Überhitzung.',
        intro:
          'Im Macan arbeiten V6-Motoren aus dem Konzernregal, die sportlich ausgelegt sind. Bei hoher Laufleistung oder nach Ölmangel prüfen wir den kompletten Kurbeltrieb und setzen den Motor nach Herstellervorgaben instand.',
        symptoms: [
          'Klopfen aus dem Kurbeltrieb',
          'Rasseln des Steuertriebs',
          'Öldruckwarnung',
          'Leistungsverlust und Notlauf',
        ],
        works: [
          'Kurbeltrieb vermessen, Lager und Kolben erneuern',
          'Steuertrieb komplett ersetzen',
          'Zylinderköpfe planen und überarbeiten',
          'Kühlung und Ölversorgung prüfen',
        ],
        models: ['Macan S', 'Macan S Diesel', 'Macan GTS', 'Macan Turbo'],
      },
    ],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);

export const getEngine = (brandSlug: string, engineSlug: string) => {
  const brand = getBrand(brandSlug);
  if (!brand) return null;

  const engine = brand.engines.find((e) => e.slug === engineSlug);
  return engine ? { brand, engine } : null;
};
