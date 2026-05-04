import React from 'react';
import { Helmet } from 'react-helmet-async';
import { urlFor } from '../sanityClient';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../siteConfig';

const SEO = ({
                 title,
                 description,
                 keywords = [],
                 ogImage,
                 ogTitle,
                 ogDescription,
                 pathname
             }) => {
    const resolvedPathname = pathname || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const normalizedPathname = resolvedPathname === '/' ? '' : resolvedPathname.replace(/^\//, '');
    const fullUrl = normalizedPathname ? `${SITE_URL}/${normalizedPathname}` : SITE_URL;

    const ogImageUrl = ogImage
        ? urlFor(ogImage).width(1200).height(630).url()
        : DEFAULT_OG_IMAGE;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:site_name" content={SITE_NAME} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={ogTitle || title} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={ogImageUrl} />

            <link rel="canonical" href={fullUrl} />
        </Helmet>
    );
};

export default SEO;
