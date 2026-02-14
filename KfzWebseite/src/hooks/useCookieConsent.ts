import { useEffect, useState } from 'react';
import { run, showPreferences, acceptCategory, acceptedCategory } from 'vanilla-cookieconsent';
import { cookieConfig } from '../components/CookieConsentConfig';

export const useCookieConsent = () => {
    const [isMapAllowed, setIsMapAllowed] = useState(false);
    const [isAnalyticsAllowed, setIsAnalyticsAllowed] = useState(false);

    useEffect(() => {
        // Initialize cookie consent with callbacks
        run({
            ...cookieConfig,
            onConsent: () => {
                setIsMapAllowed(acceptedCategory('google-maps'));
                setIsAnalyticsAllowed(acceptedCategory('analytics'));
            },
            onChange: () => {
                setIsMapAllowed(acceptedCategory('google-maps'));
                setIsAnalyticsAllowed(acceptedCategory('analytics'));
            }
        });

        // Check initial status
        if (acceptedCategory('google-maps')) {
            setIsMapAllowed(true);
        }
        if (acceptedCategory('analytics')) {
            setIsAnalyticsAllowed(true);
        }
    }, []);

    const allowMap = () => {
        acceptCategory('google-maps');
        setIsMapAllowed(true);
    };

    const showSettings = () => {
        showPreferences();
    };

    return { isMapAllowed, isAnalyticsAllowed, allowMap, showSettings };
};
