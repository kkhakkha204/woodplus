import React from 'react';
import { Helmet } from 'react-helmet-async';
import { urlFor } from '../sanityClient';

const SEO = ({
                 title,
                 description,
                 keywords = [],
                 ogImage,
                 ogTitle,
                 ogDescription,
                 pathname = '/'
             }) => {
    const siteUrl = 'https://www.nhadepwoodplus.com/'; // Thay bằng domain của bạn
    const fullUrl = `${siteUrl}${pathname}`;

    const ogImageUrl = ogImage
        ? urlFor(ogImage).width(1200).height(630).url()
        : `${siteUrl}/default-og-image.jpg`;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && (
                <meta name="keywords" content={keywords.join(', ')} />
            )}

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={ogTitle || title} />
            <meta property="og:description" content={ogDescription || description} />
            <meta property="og:image" content={ogImageUrl} />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={fullUrl} />
            <meta name="twitter:title" content={ogTitle || title} />
            <meta name="twitter:description" content={ogDescription || description} />
            <meta name="twitter:image" content={ogImageUrl} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullUrl} />
        </Helmet>
    );
};

export default SEO;
