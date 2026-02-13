import 'vanilla-cookieconsent/dist/cookieconsent.css';

export const cookieConfig: any = {
    guiOptions: {
        consentModal: {
            layout: 'box',
            position: 'bottom right',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            position: 'right',
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true,
            enabled: true
        },
        'google-maps': {
            enabled: false
        },
        analytics: {
            enabled: false
        }
    },
    language: {
        default: 'de',
        translations: {
            de: {
                consentModal: {
                    title: 'Privatsphäre-Einstellungen',
                    description: 'Wir setzen Cookies und ähnliche Technologien ein. Einige sind technisch notwendig, andere helfen uns, unsere Inhalte (z.B. Google Maps) anzuzeigen oder die Websitenutzung zu analysieren. Sie können Ihre Einwilligung jederzeit widerrufen.',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Nur notwendige akzeptieren',
                    showPreferencesBtn: 'Einstellungen verwalten',
                    footer: '<a href="/datenschutz">Datenschutzerklärung</a>\n<a href="/impressum">Impressum</a>'
                },
                preferencesModal: {
                    title: 'Datenschutz-Einstellungen',
                    acceptAllBtn: 'Alle akzeptieren',
                    acceptNecessaryBtn: 'Nur notwendige akzeptieren',
                    savePreferencesBtn: 'Einstellungen speichern',
                    closeIconLabel: 'Schließen',
                    sections: [
                        {
                            title: 'Verwendung von Cookies',
                            description: 'Hier können Sie auswählen, welche Cookies und Dienste Sie zulassen möchten.'
                        },
                        {
                            title: 'Notwendige Cookies',
                            description: 'Diese Cookies sind für den technischen Betrieb der Website erforderlich und können nicht deaktiviert werden.<br><strong>Cookie:</strong> cc_cookie (speichert Ihre Einstellungen).',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Google Maps',
                            description: 'Ermöglicht die Anzeige der interaktiven Karte im Footer.<br><strong>Anbieter:</strong> Google Ireland Limited<br><strong>Datenschutz:</strong> <a href="https://policies.google.com/privacy?hl=de" target="_blank">Google Datenschutz</a>',
                            linkedCategory: 'google-maps'
                        },
                        {
                            title: 'Analyse',
                            description: 'Hilft uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics).<br><strong>Anbieter:</strong> Google Ireland Limited (IP-Anonymisierung aktiviert)<br><strong>Datenschutz:</strong> <a href="https://policies.google.com/privacy?hl=de" target="_blank">Google Datenschutz</a>',
                            linkedCategory: 'analytics'
                        }
                    ]
                }
            }
        }
    }
};
