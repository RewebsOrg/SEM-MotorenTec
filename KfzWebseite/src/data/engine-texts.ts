/**
 * Ausführliche Motortexte für die Detailseiten (/motoren/[marke]/[motor]).
 *
 * Diese Texte kommen vom Betrieb selbst und haben Vorrang: Ist hier ein
 * Eintrag hinterlegt, zeigt die Detailseite ihn statt der Kurzform aus
 * `engines.ts`. Schlüssel ist `marke/motor`, z.B. 'bmw/n57d30'.
 *
 * Absätze innerhalb eines Abschnitts werden mit einer Leerzeile getrennt.
 */

export interface EngineTextSection {
  title: string;
  body: string;
}

export interface EngineText {
  /** Einleitung über den Abschnitten */
  intro: string;
  sections: EngineTextSection[];
}

export const engineTexts: Record<string, EngineText> = {
  'bmw/n57d30': {
    intro:
      'Der BMW N57 ist ein aufgeladener Sechszylinder-Dieselmotor, der in zahlreichen BMW-Modellen und unterschiedlichen Leistungsstufen eingesetzt wurde. Der Motor überzeugt durch hohe Laufkultur, kräftiges Drehmoment und gute Leistungswerte. Mit zunehmender Laufleistung können jedoch verschiedene typische Verschleißbilder und Motorschäden auftreten.\n\nIn unserer Motoreninstandsetzung beschäftigen wir uns mit der fachgerechten Diagnose und Instandsetzung von N57-Motoren. Im Folgenden finden Sie einen Überblick über häufig auftretende Schäden und deren mögliche Ursachen.',
    sections: [
      {
        title: 'Lagerschäden an Kurbelwelle und Pleuellagern',
        body: 'Zu den besonders schwerwiegenden Schadensbildern beim N57 gehören Pleuel- und Hauptlagerschäden. Verschleiß an den Lagerschalen kann zunächst durch metallische Geräusche oder Auffälligkeiten im Motoröl bemerkbar werden. Schreitet der Schaden weiter fort, können Kurbelwellenzapfen und weitere Bauteile des Kurbeltriebs beschädigt werden.\n\nMögliche Ursachen sind unter anderem eine unzureichende Schmierung, verschlissenes oder belastetes Motoröl, verlängerte Ölwechselintervalle sowie hohe thermische und mechanische Belastungen.\n\nBei der Instandsetzung müssen deshalb nicht nur die beschädigten Lager ersetzt werden. Entscheidend ist die Prüfung des gesamten Kurbeltriebs sowie der Ölversorgung, um die eigentliche Schadensursache festzustellen.',
      },
      {
        title: 'Schäden an der Kurbelwelle',
        body: 'Ein fortgeschrittener Lagerschaden kann zu Einlaufspuren, Riefen oder Beschädigungen an den Lagerstellen der Kurbelwelle führen. In schweren Fällen kann die Kurbelwelle nicht mehr ohne weitere Bearbeitung verwendet werden.\n\nIm Rahmen einer fachgerechten Motoreninstandsetzung wird die Kurbelwelle vermessen und auf Beschädigungen geprüft. Erst danach lässt sich beurteilen, ob eine weitere Verwendung beziehungsweise Bearbeitung möglich ist oder ein Austausch erforderlich wird.',
      },
      {
        title: 'Steuerkette und Steuertrieb',
        body: 'Auch der Steuertrieb des N57 sollte bei der Diagnose berücksichtigt werden. Mit zunehmender Laufleistung können Steuerketten, Führungsschienen und Kettenspanner Verschleiß aufweisen.\n\nMögliche Hinweise sind beispielsweise ungewöhnliche Rassel- oder Laufgeräusche. Starke Längung beziehungsweise Verschleiß im Steuertrieb kann zu fehlerhaften Steuerzeiten führen. Im Extremfall können daraus erhebliche Folgeschäden am Motor entstehen.\n\nBei einer umfangreichen N57-Motorinstandsetzung empfiehlt sich daher eine genaue Kontrolle der Komponenten des Steuertriebs.',
      },
    ],
  },

  'bmw/n47d20': {
    intro:
      'Der BMW N47 ist ein Vierzylinder-Dieselmotor, der in zahlreichen BMW-Modellen und verschiedenen Leistungsstufen eingesetzt wurde. Der Motor bietet gute Verbrauchs- und Leistungswerte, ist jedoch insbesondere für Probleme im Bereich des Steuertriebs bekannt. Mit zunehmender Laufleistung können außerdem weitere Verschleißerscheinungen und Motorschäden auftreten.',
    sections: [
      {
        title: 'Steuerkette und Steuertrieb',
        body: 'Eine der bekanntesten Schwachstellen des N47 ist die Steuerkette. Verschleiß an Steuerketten, Führungsschienen und Kettenspannern kann sich durch rasselnde oder schleifende Geräusche bemerkbar machen.\n\nWird der Verschleiß nicht rechtzeitig erkannt, können sich die Steuerzeiten verändern. Im schlimmsten Fall kann die Steuerkette überspringen oder reißen und dadurch einen erheblichen Motorschaden verursachen.',
      },
      {
        title: 'Kurbelwellen- und Lagerschäden',
        body: 'Auch Pleuel- und Hauptlager können bei höheren Laufleistungen Verschleiß aufweisen. Eine mangelhafte Ölversorgung, stark beanspruchtes Motoröl oder verlängerte Ölwechselintervalle können den Verschleiß zusätzlich begünstigen.\n\nBei einem fortgeschrittenen Lagerschaden kann auch die Kurbelwelle beschädigt werden. Im Rahmen der Motoreninstandsetzung sollten deshalb Kurbelwelle, Lagerstellen und Ölversorgung sorgfältig geprüft und vermessen werden.',
      },
    ],
  },

  'bmw/n63b44': {
    intro:
      'Die BMW V8-Biturbo-Motoren N63B44 und S63B44 sind leistungsstarke Motoren, bei denen Schäden im Bereich der Kolben und Zylinderlaufbahnen auftreten können. Besonders kritisch sind Laufspuren, Riefen und Verschleiß an den Zylinderwänden, die bis hin zu einem ausgeprägten Kolbenkipper führen können.\n\nGerade bei diesen Motoren ist eine präzise Bearbeitung des Motorblocks entscheidend. Wir haben die Möglichkeit, beschädigte N63B44- und S63B44-Motorblöcke fachgerecht mit Stahlbuchsen instand zu setzen.',
    sections: [
      {
        title: 'Alusil-Zylinderlaufbahnen und Laufspuren',
        body: 'N63B44 und S63B44 verfügen über Aluminium-Motorblöcke mit entsprechend ausgeführten Zylinderlaufflächen. Bei Schäden können sich deutliche Laufspuren und Riefen in den Zylinderwänden bilden.\n\nNimmt das Laufspiel zwischen Kolben und Zylinder zu, kann der Kolben stärker kippen. Dieser sogenannte Kolbenkipper kann die Zylinderlaufbahn zunehmend beschädigen.\n\nTypische Folgen können erhöhter Ölverbrauch, Kompressionsverlust, Laufgeräusche, Leistungsverlust und schließlich ein schwerwiegender Motorschaden sein.',
      },
      {
        title: 'Unsere Lösung: N63 & S63 mit Stahlbuchsen',
        body: 'Bei beschädigten Zylinderlaufbahnen können wir den N63B44 und S63B44 auf Stahlbuchsen umrüsten. Hierfür wird der Motorblock präzise maschinell bearbeitet und die beschädigten Zylinder werden mit geeigneten Stahl-Laufbuchsen versehen.\n\nDie neuen Laufbuchsen werden anschließend auf das erforderliche Kolbenmaß präzise bearbeitet und gehont. Dadurch entsteht wieder eine definierte und belastbare Zylinderlauffläche.\n\nGerade bei Motoren mit bereits stark beschädigten Laufbahnen bietet diese Bearbeitung eine sehr gute Möglichkeit, den vorhandenen Motorblock fachgerecht instand zu setzen.',
      },
      {
        title: 'Kolben und Laufspiel entscheidend',
        body: 'Bei einem Kolbenkipper reicht es nicht aus, lediglich einzelne beschädigte Bauteile auszutauschen. Kolben, Zylinder, Laufspiel und Zylindergeometrie müssen exakt aufeinander abgestimmt werden.\n\nWir vermessen die relevanten Bauteile und bearbeiten die Zylinder entsprechend dem jeweiligen Schadensbild. Gleichzeitig werden weitere Komponenten des Motors auf mögliche Verschleiß- und Folgeschäden kontrolliert.',
      },
      {
        title: 'N63B44 & S63B44 Motorinstandsetzung mit Stahlbuchsen',
        body: 'Ein N63- oder S63-Motorschaden mit Kolbenkipper, Riefen oder beschädigten Zylinderlaufbahnen bedeutet nicht automatisch, dass der Motorblock unbrauchbar ist.\n\nDurch unsere Bearbeitungsmöglichkeiten können wir diese Motoren sehr gut instand setzen und beschädigte Zylinder mit Stahlbuchsen aufbauen. Damit wird die beschädigte ursprüngliche Zylinderlauffläche durch eine neu bearbeitete, robuste Stahl-Lauffläche ersetzt.',
      },
    ],
  },

  'mercedes/om642': {
    intro:
      'Der Mercedes OM642 ist ein 3,0-Liter-V6-Dieselmotor, der in zahlreichen Mercedes-Benz Modellen und verschiedenen Leistungsstufen eingesetzt wurde. Der Motor gilt grundsätzlich als laufruhig und leistungsstark, kann mit zunehmender Laufleistung jedoch verschiedene typische Verschleißerscheinungen und Motorschäden aufweisen.',
    sections: [
      {
        title: 'Kurbelwellen- und Lagerschäden',
        body: 'Zu den schwerwiegenden Schäden am OM642 gehören Pleuel- und Hauptlagerschäden. Ursachen können unter anderem eine beeinträchtigte Ölversorgung, stark beanspruchtes Motoröl oder hohe thermische und mechanische Belastungen sein.\n\nBei fortgeschrittenem Verschleiß können auch die Lagerstellen der Kurbelwelle beschädigt werden. Bei einer Motoreninstandsetzung sollten deshalb Kurbelwelle, Lager und Ölversorgung sorgfältig geprüft und vermessen werden.',
      },
      {
        title: 'Ölkühler und Ölundichtigkeiten',
        body: 'Ein bekanntes Problem beim OM642 sind Ölundichtigkeiten im Bereich des Ölkühlers beziehungsweise der Ölkühlerdichtungen. Durch die Einbaulage können Undichtigkeiten zunächst unbemerkt bleiben und mit der Zeit zu deutlichem Ölverlust führen.\n\nBei entsprechenden Ölspuren sollte die Ursache frühzeitig festgestellt und fachgerecht beseitigt werden.',
      },
      {
        title: 'Kolben- und Zylinderschäden',
        body: 'Fehlerhafte Einspritzung, thermische Überlastung oder eine mangelhafte Schmierung können Schäden an Kolben, Kolbenringen und Zylinderlaufbahnen verursachen.\n\nMögliche Symptome sind erhöhter Ölverbrauch, Kompressionsverlust, Rauchentwicklung oder ein unruhiger Motorlauf. Bei der Instandsetzung werden die Zylinder vermessen und Kolben sowie weitere Bauteile auf Beschädigungen und Verschleiß geprüft.',
      },
      {
        title: 'Turboladerschäden',
        body: 'Auch der Turbolader kann beim OM642 mit zunehmender Laufleistung Verschleiß aufweisen. Typische Anzeichen sind Leistungsverlust, ungewöhnliche Geräusche, erhöhter Ölverbrauch oder Rauchentwicklung.\n\nBei einem Turboladerschaden sollte zusätzlich die Ölversorgung kontrolliert werden, um mögliche Folgeschäden oder einen erneuten Defekt zu vermeiden.',
      },
      {
        title: 'Ansaugtrakt, Drallklappen und AGR-System',
        body: 'Ablagerungen im Ansaugtrakt und AGR-System können den Luftdurchsatz beeinträchtigen. Auch die Drallklappen beziehungsweise deren Betätigung können Probleme verursachen.\n\nMögliche Folgen sind Leistungsverlust, ein unruhiger Motorlauf oder entsprechende Fehlereinträge im Motorsteuergerät.',
      },
      {
        title: 'OM642 Motorschaden fachgerecht instand setzen',
        body: 'Bei einem Mercedes OM642 Motorschaden ist eine gründliche Schadensanalyse entscheidend. Je nach Befund werden unter anderem Kurbelwelle, Lager, Kolben, Zylinder, Zylinderkopf, Steuertrieb und Ölversorgung überprüft.\n\nEine fachgerechte OM642 Motorinstandsetzung bedeutet nicht nur, beschädigte Bauteile auszutauschen. Entscheidend ist, die eigentliche Schadensursache zu erkennen und zu beseitigen, damit der instand gesetzte Motor wieder zuverlässig eingesetzt werden kann.',
      },
    ],
  },

  'mercedes/om651': {
    intro:
      'Der Mercedes OM651 ist ein weit verbreiteter Vierzylinder-Dieselmotor, der in zahlreichen Mercedes-Benz Modellen eingesetzt wurde. Grundsätzlich gilt der OM651 als langlebig, allerdings gibt es einige typische Schwachstellen, die bei höheren Laufleistungen zu größeren Motorschäden führen können.',
    sections: [
      {
        title: 'Steuerkette und Steuertrieb',
        body: 'Ein wichtiger Punkt beim OM651 ist der Steuertrieb. Eine gelängte Steuerkette sowie verschlissene Kettenspanner oder Führungselemente können sich durch Rasselgeräusche, insbesondere beim Motorstart, bemerkbar machen.\n\nStarker Verschleiß kann zu fehlerhaften Steuerzeiten und im schlimmsten Fall zu schweren Schäden an Ventilen, Kolben und Zylinderkopf führen.',
      },
      {
        title: 'Pleuel- und Hauptlagerschäden',
        body: 'Lagerschäden können beim OM651 erhebliche Folgeschäden verursachen. Bei mangelhafter Schmierung oder fortgeschrittenem Verschleiß können Pleuel- und Hauptlager sowie die Kurbelwelle beschädigt werden.\n\nBei der Instandsetzung sind deshalb die Kurbelwelle, Lagerstellen und Ölversorgung besonders sorgfältig zu prüfen und zu vermessen.',
      },
      {
        title: 'Kolben und Zylinderlaufbahnen',
        body: 'Probleme mit Einspritzung, Schmierung oder Verbrennung können Schäden an Kolben, Kolbenringen und Zylinderlaufbahnen verursachen. Typische Hinweise sind erhöhter Ölverbrauch, Kompressionsverlust, Rauchentwicklung oder ein unruhiger Motorlauf.\n\nBei einem Motorschaden müssen die Zylinder vermessen und Kolben sowie Kolbenringe auf Verschleiß und Beschädigungen kontrolliert werden.',
      },
      {
        title: 'Injektoren und Einspritzsystem',
        body: 'Defekte oder verschlissene Injektoren können zu einer fehlerhaften Verbrennung führen und dadurch Kolben und Zylinder thermisch stark belasten. Deshalb sollte bei entsprechenden Schadensbildern das Einspritzsystem unbedingt in die Diagnose einbezogen werden.',
      },
    ],
  },

  'mercedes/om656': {
    intro:
      'Der Mercedes OM656 ist ein moderner 3,0-Liter-Reihensechszylinder-Dieselmotor und kommt in verschiedenen leistungsstarken Mercedes-Benz Modellen zum Einsatz. Aufgrund seiner komplexen Bauweise ist bei einem Motorschaden eine genaue Diagnose besonders wichtig.',
    sections: [
      {
        title: 'Kurbelwelle und Lagerschäden',
        body: 'Pleuel- und Hauptlagerschäden gehören zu den besonders schwerwiegenden Schadensbildern. Probleme mit der Schmierung oder Metallabrieb im Ölkreislauf können Lagerstellen und Kurbelwelle erheblich beschädigen.\n\nBei einer Instandsetzung müssen deshalb Kurbelwelle, Lagerstellen, Ölpumpe und der gesamte Ölkreislauf sorgfältig geprüft werden.',
      },
      {
        title: 'Kolben und Zylinderlaufbahnen',
        body: 'Thermische Überlastung, mangelhafte Schmierung oder Probleme bei der Einspritzung können zu Schäden an Kolben, Kolbenringen und Zylinderlaufbahnen führen.\n\nBei erhöhtem Ölverbrauch, Kompressionsverlust oder auffälligem Motorlauf sollten die Zylinder vermessen sowie Kolben und Kolbenringe genau kontrolliert werden.',
      },
      {
        title: 'Steuertrieb',
        body: 'Auch der Steuertrieb muss bei einem OM656 Motorschaden überprüft werden. Verschleiß an Kette, Spannelementen oder Führungen kann zu Geräuschen und Abweichungen der Steuerzeiten führen. Bei größeren Schäden besteht die Gefahr von Folgeschäden am Zylinderkopf und Ventiltrieb.',
      },
      {
        title: 'Einspritzung und Verbrennung',
        body: 'Der OM656 arbeitet mit einem leistungsfähigen Common-Rail-Einspritzsystem. Fehlerhafte Injektoren können das Verbrennungsbild verändern und einzelne Zylinder stark thermisch belasten.\n\nBei Kolben- oder Zylinderschäden sollte deshalb immer auch das Einspritzsystem überprüft werden.',
      },
    ],
  },

  'mercedes/m157': {
    intro:
      'Die Mercedes-Benz Motoren M157 und M278 sind konstruktiv eng miteinander verwandt und zeigen in der Motoreninstandsetzung ähnliche Schadensbilder. Besonders relevant sind Schäden im Bereich der Kolben und Zylinderlaufbahnen, die bei fortgeschrittenem Verschleiß zu erhöhtem Ölverbrauch, Kompressionsverlust und schließlich zu einem schweren Motorschaden führen können.',
    sections: [
      {
        title: 'Kolbenkipper und beschädigte Zylinderlaufbahnen',
        body: 'Ein besonders kritisches Schadensbild ist der sogenannte Kolbenkipper. Durch erhöhtes Spiel beziehungsweise Verschleiß kann der Kolben nicht mehr sauber in der Zylinderlaufbahn geführt werden.\n\nDadurch können die Zylinderwände beziehungsweise Zylinderlaufbahnen beschädigt werden. Es entstehen Riefen und Verschleißspuren, wodurch die Abdichtung zwischen Kolben, Kolbenringen und Zylinder zunehmend beeinträchtigt wird.\n\nMögliche Folgen sind Ölverbrauch, Kompressionsverlust, Laufgeräusche, Leistungsverlust und im weiteren Verlauf ein kapitaler Motorschaden.',
      },
      {
        title: 'Unsere Lösung: M157 & M278 mit Stahlbuchsen',
        body: 'Bei entsprechenden Schäden setzen wir nicht einfach wieder auf die ursprüngliche Zylinderoberfläche. Im Rahmen unserer M157- und M278-Motorinstandsetzung werden die beschädigten Zylinder fachgerecht bearbeitet und mit Stahlbuchsen versehen.\n\nDamit ersetzen wir die ursprüngliche Aluminium-Zylinderlauffläche durch eine robuste Stahl-Laufbuchse. Anschließend werden die Zylinder präzise auf das erforderliche Maß bearbeitet und gehont.\n\nUnser Ziel ist es, die bekannte Schwachstelle im Bereich der originalen Zylinderlaufflächen konstruktiv zu beseitigen und das Risiko eines erneuten gleichartigen Schadens deutlich zu reduzieren.',
      },
      {
        title: 'Kopfdichtung und Zylinderkopf',
        body: 'Bei M157 und M278 können außerdem Probleme im Bereich der Zylinderkopfdichtung und des Zylinderkopfes auftreten. Kühlmittelverlust, Verbrennungsdruck im Kühlsystem oder thermische Belastungen müssen bei einem Motorschaden deshalb ebenfalls berücksichtigt werden.\n\nZylinderköpfe und Dichtflächen werden im Rahmen der Instandsetzung entsprechend geprüft und bei Bedarf fachgerecht bearbeitet.',
      },
      {
        title: 'Kurbelwelle und Lagerschäden',
        body: 'Neben den Zylinderschäden kontrollieren wir auch Pleuel- und Hauptlager, Kurbelwelle sowie die Ölversorgung. Gerade bei einem bereits fortgeschrittenen Motorschaden ist entscheidend, mögliche Folgeschäden zu erkennen und nicht lediglich Kolben oder Zylinder zu reparieren.',
      },
      {
        title: 'M157 & M278 Motorinstandsetzung vom Spezialisten',
        body: 'Bei unserer Mercedes M157 und M278 Motorinstandsetzung liegt der Schwerpunkt auf einer dauerhaften technischen Lösung. Beschädigte Zylinderlaufbahnen werden nicht lediglich oberflächlich aufgearbeitet, sondern fachgerecht mit Stahlbuchsen instand gesetzt.\n\nDamit verzichten wir an den instand gesetzten Zylindern auf die ursprüngliche Aluminium-Lauffläche und schaffen eine robuste Stahl-Lauffläche.\n\nM157 & M278 mit Kolbenkipper oder Zylinderschaden? Wir beseitigen nicht nur den vorhandenen Schaden, sondern setzen gezielt an einer der entscheidenden Schwachstellen dieser Motoren an.',
      },
    ],
  },

  'vw/t5': {
    intro:
      'Der VW T5 2.0 BiTDI mit dem Motorkennbuchstaben CFCA ist besonders für Probleme mit erhöhtem Ölverbrauch bekannt. Mit zunehmender Laufleistung kann der Ölverbrauch deutlich ansteigen. Häufig liegen die Ursachen im Bereich von Kolben, Kolbenringen und verschlissenen beziehungsweise beschädigten Zylinderlaufbahnen.\n\nEin einfaches Ersetzen einzelner Bauteile reicht bei einem fortgeschrittenen Schaden oftmals nicht aus. Entscheidend ist eine fachgerechte Bearbeitung des Motorblocks.',
    sections: [
      {
        title: 'CFCA Ölverbrauch – wir beseitigen die Ursache',
        body: 'Wir haben uns auf die Instandsetzung des CFCA-Motors und die Behebung des erhöhten Ölverbrauchs spezialisiert. Dabei werden die Zylinderlaufbahnen zunächst präzise vermessen und auf Verschleiß sowie Beschädigungen geprüft.\n\nAnschließend werden die Zylinderlaufbahnen auf das erforderliche Übermaß gebohrt und fachgerecht gehont. In Verbindung mit den dazu passenden Übermaßkolben und Kolbenringen stellen wir die erforderlichen Lauf- und Dichtverhältnisse wieder her.\n\nDamit wird nicht lediglich das Symptom des hohen Ölverbrauchs behandelt, sondern die Ursache im Bereich der Zylinder und Kolben gezielt beseitigt.',
      },
      {
        title: 'Die bekannte CFCA-Schwachstelle gezielt beseitigen',
        body: 'Bei unserer CFCA Motorinstandsetzung legen wir besonderen Wert darauf, diese bekannte Kinderkrankheit des Motors nachhaltig zu beseitigen. Neben der Zylinderbearbeitung werden die relevanten Motorkomponenten geprüft und aufeinander abgestimmt.\n\nDas Ziel ist ein fachgerecht instand gesetzter VW T5 CFCA Motor, bei dem das bekannte Problem des übermäßigen Ölverbrauchs gezielt behoben wurde.',
      },
      {
        title: 'CFCA Motorinstandsetzung bei erhöhtem Ölverbrauch',
        body: 'Ihr VW T5 CFCA verbraucht ungewöhnlich viel Motoröl? Wir prüfen den Motor auf das bekannte Schadensbild und führen bei Bedarf die entsprechende Motorinstandsetzung durch – inklusive Bohren und Honen der Zylinderlaufbahnen auf Übermaß sowie der Erneuerung der erforderlichen Komponenten.',
      },
    ],
  },

  'vw/t6': {
    intro:
      'Auch beim VW T6 2.0 BiTDI kann ein deutlich erhöhter Motorölverbrauch auftreten. Mit zunehmender Laufleistung können Verschleiß und Beschädigungen im Bereich der Kolben, Kolbenringe und Zylinderlaufbahnen dazu führen, dass der Motor immer mehr Öl verbraucht.\n\nWird der erhöhte Ölverbrauch über längere Zeit ignoriert, können weitere Schäden am Motor und an angrenzenden Komponenten entstehen. Deshalb ist eine genaue Prüfung und fachgerechte Motorinstandsetzung entscheidend.',
    sections: [
      {
        title: 'T6 2.0 BiTDI Ölverbrauch – wir beheben die Ursache',
        body: 'Wir sind auf die Instandsetzung von VW T6 2.0 BiTDI Motoren mit erhöhtem Ölverbrauch spezialisiert. Der Motor wird zerlegt und die Zylinderlaufbahnen werden präzise auf Verschleiß, Beschädigungen und Maßhaltigkeit geprüft.\n\nBei entsprechendem Schadensbild werden die Zylinderlaufbahnen auf Übermaß gebohrt und anschließend fachgerecht gehont. In Verbindung mit den passenden Übermaßkolben und Kolbenringen werden die erforderlichen Lauf- und Dichtverhältnisse wiederhergestellt.\n\nDamit wird nicht einfach nur der hohe Ölverbrauch behandelt – wir setzen direkt an der Ursache des Problems an.',
      },
      {
        title: 'Bekannte Schwachstelle gezielt beseitigen',
        body: 'Ein Austausch von Kolbenringen allein ist bei verschlissenen oder beschädigten Zylinderlaufbahnen keine fachgerechte Lösung. Entscheidend ist, den tatsächlichen Zustand der Zylinder zu vermessen und den Motorblock entsprechend zu bearbeiten.\n\nBei unserer VW T6 2.0 BiTDI Motorinstandsetzung werden deshalb alle relevanten Bauteile geprüft und aufeinander abgestimmt. Ziel ist es, die Ursache des erhöhten Ölverbrauchs gezielt zu beseitigen und den Motor technisch fachgerecht wieder aufzubauen.',
      },
      {
        title: 'VW T6 2.0 BiTDI Motorinstandsetzung',
        body: 'Ihr VW T6 2.0 BiTDI verbraucht übermäßig viel Motoröl? Wir prüfen den Motor auf das entsprechende Schadensbild und führen die notwendige Instandsetzung durch – inklusive Bohren und Honen der Zylinderlaufbahnen auf Übermaß sowie der Erneuerung der erforderlichen Kolben- und Motorkomponenten.\n\nT6 2.0 BiTDI Ölverbrauch fachgerecht beheben – statt nur Öl nachzufüllen und die eigentliche Ursache bestehen zu lassen.',
      },
    ],
  },
};

// N63B44 und S63B44 teilen sich den Text, ebenso M157 und M278.
engineTexts['bmw/s63b44'] = engineTexts['bmw/n63b44'];
engineTexts['mercedes/m278'] = engineTexts['mercedes/m157'];

export const getEngineText = (brandSlug: string, engineSlug: string): EngineText | undefined =>
  engineTexts[`${brandSlug}/${engineSlug}`];
