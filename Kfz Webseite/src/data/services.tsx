
import React from 'react';
import { Wrench, RefreshCw, Link2, Truck } from 'lucide-react';

export const services = [
  {
    id: 'motorinstandsetzung',
    slug: 'motorinstandsetzung',
    title: 'Motorinstandsetzung',
    subtitle: 'Professionelle Reparatur',
    description: 'Ihr Motor läuft nicht mehr rund? Wir analysieren den Schaden und setzen ihn fachgerecht instand. Mit modernster Technik und jahrelanger Erfahrung bringen wir Ihren Motor wieder auf Vordermann – egal ob Benziner oder Diesel.',
    detailedDescription: `
      Bei einer Motor-Instandsetzung steht zunächst eine umfassende Diagnose im Vordergrund. Dabei wird der genaue Schaden ermittelt und festgelegt, welche Arbeiten notwendig sind. Anschließend wird der Motor aus dem Fahrzeug ausgebaut, wobei Motorlager, Leitungen und sämtliche Anschlüsse fachgerecht demontiert werden. Danach erfolgt die Trennung von Motor und Getriebe sowie die Prüfung aller Anbauteile auf Funktion und Verschleiß.
      
      Im nächsten Schritt wird der Motor vollständig zerlegt. Der Motorblock wird gründlich gereinigt, neu abgedichtet und auf Maßhaltigkeit überprüft. Zylinder, Kolben und Pleuelstangen werden vermessen und je nach Zustand instand gesetzt oder ersetzt. In der Regel werden die Kolben samt Kolbenringe erneuert. Haupt- und Pleuellager werden grundsätzlich ausgetauscht.
      
      Die Kurbelwelle wird auf Schäden, Unwucht und Verzug geprüft. Falls erforderlich, wird sie poliert, ausgewuchtet oder ersetzt. Ebenso kann eine Erneuerung der Nockenwelle notwendig sein. Zahnriemen- oder Steuerkettensätze werden grundsätzlich erneuert, da der Motor bereits zerlegt ist.
      
      Der Zylinderkopf wird demontiert und überarbeitet. Dabei werden die Dichtflächen geplant, die Ventilsitze neu gefräst und die Ventilführungen erneuert. Zusätzlich werden Ein- und Auslassventile, Ventilschaftdichtungen sowie Hydro- oder Ventilstößel ausgetauscht. Auch die Zylinderkopfdichtung inklusive neuer Schrauben wird ersetzt.
      
      Im Zuge der Instandsetzung werden außerdem die Wasserpumpe sowie sämtliche Dichtungen erneuert. Nach dem Zusammenbau kommen ausschließlich neue, originale Dichtungen zum Einsatz, unter anderem für Ölwanne, Zylinderkopf sowie Ansaug- und Abgaskrümmer. Anschließend wird die Ventilsteuerung exakt eingestellt.
      
      Nach dem Wiedereinbau des Motors ins Fahrzeug erfolgt die Neubefüllung mit Motoröl sowie der Austausch von Luft-, Öl- und Kraftstofffiltern. Bei Bedarf werden elektronische Bauteile neu codiert und die Klimaanlage neu befüllt. Abschließend wird der Motor gestartet, auf Laufruhe geprüft und im Rahmen einer Probefahrt getestet, um die einwandfreie Funktion sicherzustellen.
    `,
    features: ['Komplette Motoranalyse', 'Ersatz verschlissener Teile', 'Alle Marken & Modelle', 'Garantie auf Arbeit'],
    icon: <Wrench size={28} />,
    image: '/images/IMG_9191.JPG',
  },
  {
    id: 'motorueberholung',
    slug: 'motorueberholung',
    title: 'Motorüberholung',
    subtitle: 'Generalüberholung',
    description: 'Bei einer Motorüberholung wird Ihr Motor komplett zerlegt, gereinigt und alle Verschleißteile werden erneuert. Das Ergebnis: Ein Motor wie neu – mit maximaler Lebensdauer und voller Leistung.',
    detailedDescription: `
      Im Zuge einer Motorüberholung werden beschädigte oder abgenutzte Bauteile entweder ersetzt oder fachgerecht instand gesetzt, sodass ihre volle Funktionsfähigkeit wiederhergestellt wird. Verschmutzungen an Ventilen und Ventilsitzen werden dabei beseitigt, damit sie wieder zuverlässig abdichten und der Motor seine ursprüngliche Leistungsfähigkeit erreicht. In manchen Fällen empfiehlt es sich, den Zylinderkopf vollständig zu erneuern. Häufig wird zusätzlich der Motorblock geplant, um eine dauerhaft dichte Verbindung zwischen Zylinderkopf und Motorblock sicherzustellen.
      
      Grundsätzlich können im Rahmen einer Motorüberholung nahezu alle beweglichen Komponenten, insbesondere Lager und andere stark beanspruchte Teile, erneuert werden. Um genau festzustellen, welche Bauteile tatsächlich verschlissen sind, wird der Motor teilweise zerlegt und sämtliche relevanten Komponenten präzise vermessen. Für die Instandsetzung kommen ausschließlich hochwertige Original-Ersatzteile zum Einsatz, die nach Herstellervorgaben montiert werden.
      
      Unabhängig von Wartung und Fahrweise unterliegt jeder Motor einem natürlichen Alterungs- und Verschleißprozess. Die hohen mechanischen Belastungen, vor allem durch die dauerhaft auf- und abbewegten Kolben, führen langfristig zur Abnutzung einzelner Motorteile. Aus diesem Grund lässt sich der exakte Zeitpunkt eines Verschleißes in der Regel nicht eindeutig vorhersagen.
    `,
    features: ['Komplette Zerlegung', 'Neue Kolben & Lager', 'Zylinderkopfbearbeitung', 'Testlauf & Qualitätskontrolle'],
    icon: <RefreshCw size={28} />,
    image: '/images/IMG_9192.JPG',
  },
  {
    id: 'steuerkettenwechsel',
    slug: 'steuerkettenwechsel',
    title: 'Steuerkettenwechsel',
    subtitle: 'Präventive Wartung',
    description: 'Eine defekte oder gelängte Steuerkette kann zu schweren Motorschäden führen. Wir wechseln Ihre Steuerkette fachgerecht und verhindern so teure Folgeschäden. Vorbeugen ist besser als reparieren.',
    detailedDescription: `
      Der Austausch der Steuerkette ist eine wichtige, aber häufig unterschätzte Wartungsarbeit bei Pkw und Wohnmobilen. Sie stellt sicher, dass Kolben und Ventile präzise aufeinander abgestimmt arbeiten und der Motor seine volle Leistung entfalten kann.
      
      Im Laufe der Zeit kann sich die Steuerkette längen oder verschleißen, wodurch die exakte Abstimmung der Motorsteuerung verloren geht. Die Folgen reichen von Leistungsverlust bis hin zu schweren Motorschäden. Reißt die Steuerkette unerwartet, sind oft umfangreiche und kostenintensive Reparaturen oder sogar ein kompletter Motortausch notwendig.
      
      Um die Lebensdauer des Motors zu erhalten und teure Folgeschäden zu vermeiden, sind regelmäßige Kontrollen und ein rechtzeitiger Wechsel der Steuerkette unerlässlich. Besonders bei Wohnmobilen, die häufig lange Strecken zurücklegen, trägt eine sorgfältige Wartung maßgeblich zur Betriebssicherheit und Zuverlässigkeit bei. Ein gut gewarteter Motor erhöht nicht nur die Leistungsfähigkeit, sondern auch die Sicherheit während der Fahrt.
      
      Typische Anzeichen für eine verschlissene Steuerkette sind klappernde oder rasselnde Geräusche aus dem Motorraum. Zusätzlich können Leistungsabfälle oder Warnmeldungen der Abgasnachbehandlung auftreten. Diese entstehen durch fehlerhafte Steuerzeiten, die zu einer ungleichmäßigen Verbrennung führen und von der Fahrzeugelektronik erkannt werden.
    `,
    features: ['Kettenspanner-Prüfung', 'Kompletter Kettensatz', 'Zahnräder-Kontrolle', 'Ölwechsel inklusive'],
    icon: <Link2 size={28} />,
    image: '/images/IMG_9193.JPG',
  },
  {
    id: 'abholservice',
    slug: 'abholservice',
    title: 'Abholservice',
    subtitle: 'Bundesweiter Service',
    description: 'Sie können nicht zu uns kommen? Kein Problem! Unser Abholservice holt Ihr Fahrzeug bundesweit ab und bringt es nach der Reparatur wieder zu Ihnen zurück. Bequemer geht es nicht.',
    detailedDescription: `
      Wir machen es Ihnen besonders einfach: Auf Wunsch holen wir Ihr Fahrzeug direkt bei Ihnen zu Hause oder von einer anderen Werkstatt ab. Egal, ob es sich um eine andere Werkstatt handelt, bei der Ihr Fahrzeug aktuell steht, oder um Ihr Auto vor Ihrer Haustür – wir organisieren den Transport zuverlässig und termingerecht.
      
      Nach der Reparatur bringen wir Ihr Fahrzeug wieder zurück, sodass Sie sich um nichts kümmern müssen. Unser Abhol- und Bringservice spart Ihnen Zeit, vermeidet unnötige Wege und sorgt dafür, dass Ihr Auto sicher und pünktlich zu Ihnen zurückkehrt. So kombinieren wir Komfort, Flexibilität und zuverlässige Werkstattleistung – ganz nach Ihren Bedürfnissen.
    `,
    features: ['Bundesweite Abholung', 'Versicherter Transport', 'Flexible Termine', 'Faire Konditionen'],
    icon: <Truck size={28} />,
    image: '/images/abholservice_trailer.jpg',
  },
];
