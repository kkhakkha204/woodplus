import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || 'fu5tttj6';
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production';
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION || '2025-10-09';
const isProduction = process.env.NODE_ENV === 'production';
const useLocalProxy = !isProduction && process.env.REACT_APP_SANITY_DISABLE_PROXY !== 'true';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    ...(useLocalProxy
        ? {
            apiHost: '/api/sanity',
            useProjectHostname: false,
        }
        : {}),
});

const builder = imageUrlBuilder({ projectId, dataset });

export const urlFor = (source) => builder.image(source);
