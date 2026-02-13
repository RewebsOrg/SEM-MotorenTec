'use client';

import { useCookieConsent } from '../hooks/useCookieConsent';

const CookieConsent = () => {
    // The hook handles initialization internally
    useCookieConsent();

    return null;
};

export default CookieConsent;
