import { useState, useEffect } from 'react';
import { client } from '../sanityClient';

export const useSEO = (pageSlug) => {
    const [seoData, setSeoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSEO = async () => {
            try {
                const query = `*[_type == "pageSettings" && pageSlug == $slug && isActive == true][0]{
          seo
        }`;

                const result = await client.fetch(query, { slug: pageSlug });
                setSeoData(result?.seo || null);
            } catch (error) {
                console.error('Error fetching SEO data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSEO();
    }, [pageSlug]);

    return { seoData, loading };
};