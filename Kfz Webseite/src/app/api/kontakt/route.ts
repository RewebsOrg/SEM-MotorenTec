import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    console.log("API Startet. Überprüfe Key...");
    if (!process.env.RESEND_API_KEY) {
        console.error("FEHLER: RESEND_API_KEY ist nicht in den Umgebungsvariablen gefunden!");
        return NextResponse.json({ success: false, message: 'Server Konfiguration Fehler: API Key fehlt. Bitte Server neu starten.' }, { status: 500 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();

        const {
            hersteller,
            modell,
            baujahr,
            motorleistung,
            schadenart: schadensart,
            schadeninfo: weitereInfos,
            name,
            adresse,
            plz,
            email,
            telefon
        } = body;

        console.log("Sende Email an Werkstatt...");

        // 1. Email an dich (Werkstatt)
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'info@sem-motorentec.de', // WICHTIG: Das muss die Email sein, mit der du dich bei Resend angemeldet hast, solange die Domain nicht verifiziert ist
            replyTo: email,
            subject: `Neue Anfrage - ${hersteller || ''} ${modell || ''} - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">📋 NEUE KONTAKTANFRAGE</h2>
          </div>
          
          <div style="padding: 20px; background: #f5f5f5;">
            <h3 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">🚗 FAHRZEUGDATEN</h3>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr><td style="padding: 5px 0;"><strong>Hersteller:</strong></td><td>${hersteller || '-'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Modell:</strong></td><td>${modell || '-'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Baujahr:</strong></td><td>${baujahr || 'Nicht angegeben'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Motorleistung:</strong></td><td>${motorleistung || 'Nicht angegeben'}</td></tr>
            </table>

            <h3 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">🔧 SCHADENSBESCHREIBUNG</h3>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr><td style="padding: 5px 0;"><strong>Art des Schadens:</strong></td><td>${schadensart || '-'}</td></tr>
              <tr><td style="padding: 5px 0; vertical-align: top;"><strong>Weitere Infos:</strong></td><td>${weitereInfos || 'Keine weiteren Informationen'}</td></tr>
            </table>

            <h3 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">👤 KONTAKTDATEN</h3>
            <table style="width: 100%;">
              <tr><td style="padding: 5px 0;"><strong>Name:</strong></td><td>${name || '-'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Adresse:</strong></td><td>${adresse || '-'}, ${plz || '-'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Email:</strong></td><td>${email || '-'}</td></tr>
              <tr><td style="padding: 5px 0;"><strong>Telefon:</strong></td><td>${telefon || 'Nicht angegeben'}</td></tr>
            </table>
          </div>
        </div>
      `
        });

        if (adminError) {
            console.error("Admin Email Error:", adminError);
            // Return 'message' property for frontend to display
            return NextResponse.json({ success: false, message: adminError.message }, { status: 500 });
        }
        console.log("Admin Email gesendet:", adminData);

        // 2. Bestätigungs-Email an Kunden
        // ACHTUNG: Das funktioniert mit 'onboarding@resend.dev' NUR, wenn die Kunden-Email AUCH verifiziert ist (was sie nicht ist).
        // Diese Email wird im 'Test Modus' von Resend wahrscheinlich fehlschlagen, wenn man an echte Kunden sendet.
        // Ich logge den Fehler nur, damit der User Feedback bekommt, breche aber nicht ab.
        console.log("Sende Bestätigung an Kunde...");
        const { data: customerData, error: customerError } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Ihre Anfrage bei SEM MotorenTec',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1a1a1a; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">SEM MotorenTec</h2>
          </div>
          
          <div style="padding: 30px; background: #f5f5f5;">
            <h2 style="color: #333;">Vielen Dank für Ihre Anfrage, ${name}!</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.
            </p>
            
            <div style="background: white; padding: 20px; border-left: 4px solid #0066cc; margin: 20px 0;">
              <p style="margin: 0;"><strong>Ihr Fahrzeug:</strong> ${hersteller || ''} ${modell || ''}</p>
              <p style="margin: 10px 0 0 0;"><strong>Schadensmeldung:</strong> ${schadensart || ''}</p>
            </div>

            <p style="font-size: 16px; line-height: 1.6;">
              In der Zwischenzeit können Sie uns auch gerne direkt kontaktieren:
            </p>
            <p style="font-size: 16px;">
              📞 <strong>0521 97795644</strong><br>
              📧 <strong>info@sem-motorentec.de</strong>
            </p>

            <p style="margin-top: 30px; color: #666;">
              Mit freundlichen Grüßen<br>
              <strong>Ihr SEM MotorenTec Team</strong>
            </p>
          </div>

          <div style="background: #1a1a1a; color: #999; padding: 20px; font-size: 12px; text-align: center;">
            SEM MotorenTec<br>
            Windelsbleicherstr. 188a | 33659 Bielefeld<br>
            Tel: 0521 97795644 | Email: info@sem-motorentec.de
          </div>
        </div>
      `
        });

        if (customerError) {
            // Wir loggen den Fehler nur, da dies im Test-Modus fast immer failt
            console.warn("Kunden Email konnte nicht gesendet werden (wahrscheinlich wegen Test-Modus):", customerError);
        } else {
            console.log("Kunden Email gesendet:", customerData);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Allgemeiner Email Fehler:', error);
        return NextResponse.json(
            { success: false, message: 'Server Fehler beim Senden: ' + (error as any).message || 'Unbekannter Fehler' },
            { status: 500 }
        );
    }
}
