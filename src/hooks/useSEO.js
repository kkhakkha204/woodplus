import { useState, useEffect } from 'react';
import { client } from '../sanityClient';

export const useSEO = (pageSlug) => {
    const [seoData, setSeoData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchSEO = async () => {
            try {
                setLoading(true);

                const rawSlug = pageSlug || '/';
                const normalizedSlug = rawSlug === '/' ? '' : rawSlug.replace(/^\/+/, '');
                const leadingSlashSlug = normalizedSlug ? `/${normalizedSlug}` : '/';
                const query = `*[
          _type == "pageSettings" &&
          isActive == true &&
          (
            pageSlug in [$rawSlug, $normalizedSlug, $leadingSlashSlug] ||
            pageSlug.current in [$rawSlug, $normalizedSlug, $leadingSlashSlug]
          )
        ][0]{
          seo
        }`;

                const result = await client.fetch(query, {
                    rawSlug,
                    normalizedSlug,
                    leadingSlashSlug,
                });

                if (isMounted) {
                    setSeoData(result?.seo || null);
                }
            } catch (error) {
                console.error('Error fetching SEO data:', error);
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchSEO();

        return () => {
            isMounted = false;
        };
    }, [pageSlug]);

    return { seoData, loading };
};
