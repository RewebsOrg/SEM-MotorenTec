import { NextResponse } from 'next/server';

// Type definition for the expected eBay API response item
interface EbayItem {
    itemId: string;
    title: string;
    price: {
        value: string;
        currency: string;
    };
    image: {
        imageUrl: string;
    };
    itemWebUrl: string;
    additionalImages?: { imageUrl: string }[];
}

// Type definition for our simplified response format
interface SimplifiedOffer {
    id: string;
    title: string;
    price: string;
    image: string;
    link: string;
}

export async function GET() {
    // 1. Configuration
    // Placeholder for the eBay API Access Token.
    // In a real application, you would fetch this using your Client ID and Client Secret via OAuth.
    const EBAY_ACCESS_TOKEN = process.env.EBAY_ACCESS_TOKEN || 'YOUR_EBAY_ACCESS_TOKEN_HERE';

    // Placeholder for the specific eBay User ID or Store Name you want to fetch items for.
    const EBAY_USERNAME = 'sem-motorentec'; // Example username

    // eBay Browse API Endpoint for searching items
    // Documentation: https://developer.ebay.com/api-docs/buy/browse/resources/item_summary/methods/search
    // Note: Using the sandbox endpoint for testing, change to 'api.ebay.com' for production.
    const API_ENDPOINT = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=&filter=sellers:{${EBAY_USERNAME}}&limit=10`;

    try {
        // 2. Fetch data from eBay API
        // If no token is provided, we return a mock response for testing purposes
        // so the frontend doesn't break while waiting for the real key.
        if (EBAY_ACCESS_TOKEN === 'YOUR_EBAY_ACCESS_TOKEN_HERE') {
            console.warn('eBay API Route: No Access Token provided. Returning mock data.');

            // Mock Data simulation
            const mockData: SimplifiedOffer[] = [
                {
                    id: 'mock-1',
                    title: 'BMW N47D20C Austauschmotor Generalüberholt',
                    price: '2.499,00 EUR',
                    image: '/images/engine-placeholder-1.jpg', // Placeholder
                    link: 'https://www.ebay.de'
                },
                {
                    id: 'mock-2',
                    title: 'Steuerkette Wechsel Service BMW 3er E90',
                    price: '899,00 EUR',
                    image: '/images/engine-placeholder-2.jpg', // Placeholder
                    link: 'https://www.ebay.de'
                }
            ];

            return NextResponse.json(mockData, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                }
            });
        }

        const response = await fetch(API_ENDPOINT, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${EBAY_ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
                'X-EBAY-C-MARKETPLACE-ID': 'EBAY_DE' // Market ID for eBay Germany
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('eBay API Error:', errorData);
            throw new Error(`eBay API responded with status: ${response.status}`);
        }

        const data = await response.json();

        // 3. Transform Data
        // We map the complex eBay response to our simple format
        const offers: SimplifiedOffer[] = data.itemSummaries ? data.itemSummaries.map((item: EbayItem) => ({
            id: item.itemId,
            title: item.title,
            price: `${item.price.value} ${item.price.currency}`,
            image: item.image?.imageUrl || '/images/placeholder.jpg', // Fallback image
            link: item.itemWebUrl,
        })) : [];

        // 4. Return JSON Response with CORS headers
        return NextResponse.json(offers, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', // Allow all origins (adjust for production security)
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            },
        });

    } catch (error) {
        console.error('API Route Error:', error);

        // Return error JSON
        return NextResponse.json(
            { error: 'Failed to fetch eBay offers', details: error instanceof Error ? error.message : 'Unknown error' },
            {
                status: 500,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }
        );
    }
}
