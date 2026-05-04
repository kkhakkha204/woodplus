const fs = require('fs');
const path = require('path');
const { createClient } = require('@sanity/client');
const imageUrlBuilderModule = require('@sanity/image-url');

const imageUrlBuilder = imageUrlBuilderModule.default || imageUrlBuilderModule;

const SITE_URL = 'https://www.nhadepwoodplus.com';
const SITE_NAME = 'WoodPlus';
const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/homepage/homePageHero1.jpg`;
const BUILD_DIR = path.join(__dirname, '..', 'build');
const BUILD_INDEX_PATH = path.join(BUILD_DIR, 'index.html');

const projectId = process.env.REACT_APP_SANITY_PROJECT_ID || 'fu5tttj6';
const dataset = process.env.REACT_APP_SANITY_DATASET || 'production';
const apiVersion = process.env.REACT_APP_SANITY_API_VERSION || '2025-10-09';

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});

const builder = imageUrlBuilder({ projectId, dataset });

const STATIC_DEFAULTS = {
    '/': {
        title: 'Wood Plus - Thi công nội thất gỗ cao cấp',
        description: 'Wood Plus chuyên thiết kế và thi công nội thất gỗ cao cấp tại Việt Nam',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/gioi-thieu': {
        title: 'Giới thiệu - Wood Plus',
        description: 'Tìm hiểu về Wood Plus - Đơn vị chuyên thiết kế và thi công nội thất gỗ cao cấp',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/giới-thiệu': {
        title: 'Giới thiệu - Wood Plus',
        description: 'Tìm hiểu về Wood Plus - Đơn vị chuyên thiết kế và thi công nội thất gỗ cao cấp',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/dich-vu': {
        title: 'Dịch vụ - Wood Plus',
        description: 'Các dịch vụ thiết kế, thi công và thi công trọn gói nội thất gỗ cao cấp của Wood Plus',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/dịch-vụ': {
        title: 'Dịch vụ - Wood Plus',
        description: 'Các dịch vụ thiết kế, thi công và thi công trọn gói nội thất gỗ cao cấp của Wood Plus',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/thiet-ke': {
        title: 'Thiết kế nội thất - Wood Plus',
        description: 'Dịch vụ thiết kế nội thất gỗ chuyên nghiệp, sáng tạo và độc đáo',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/thiết-kế': {
        title: 'Thiết kế nội thất - Wood Plus',
        description: 'Dịch vụ thiết kế nội thất gỗ chuyên nghiệp, sáng tạo và độc đáo',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/thi-cong': {
        title: 'Thi công nội thất - Wood Plus',
        description: 'Dịch vụ thi công nội thất gỗ chuyên nghiệp, đảm bảo chất lượng và tiến độ',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/thi-công': {
        title: 'Thi công nội thất - Wood Plus',
        description: 'Dịch vụ thi công nội thất gỗ chuyên nghiệp, đảm bảo chất lượng và tiến độ',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/tron-goi': {
        title: 'Thi công trọn gói - Wood Plus',
        description: 'Dịch vụ thiết kế và thi công nội thất trọn gói từ A-Z, tiết kiệm thời gian và chi phí',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/trọn-gói': {
        title: 'Thi công trọn gói - Wood Plus',
        description: 'Dịch vụ thiết kế và thi công nội thất trọn gói từ A-Z, tiết kiệm thời gian và chi phí',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/lien-he': {
        title: 'Liên hệ - Wood Plus',
        description: 'Liên hệ với Wood Plus để được tư vấn thiết kế và thi công nội thất gỗ cao cấp',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/liên-hệ': {
        title: 'Liên hệ - Wood Plus',
        description: 'Liên hệ với Wood Plus để được tư vấn thiết kế và thi công nội thất gỗ cao cấp',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/news': {
        title: 'Tin tức - Wood Plus',
        description: 'Tin tức, xu hướng và chia sẻ chuyên môn về thiết kế, thi công nội thất của Wood Plus',
        image: DEFAULT_OG_IMAGE,
        type: 'website',
    },
    '/projects': {
        title: 'Dự án nội thất gỗ cao cấp - Portfolio Wood Plus',
        description: 'Khám phá bộ sưu tập dự án thiết kế và thi công nội thất gỗ cao cấp của Wood Plus',
        image: `${SITE_URL}/assets/images/projectList/heroSection.jpg`,
        type: 'website',
    },
};

function ensureBuildExists() {
    if (!fs.existsSync(BUILD_INDEX_PATH)) {
        throw new Error(`Build file not found: ${BUILD_INDEX_PATH}`);
    }
}

function normalizeRoute(route) {
    if (!route || route === '/') {
        return '/';
    }

    const prefixedRoute = route.startsWith('/') ? route : `/${route}`;
    return prefixedRoute.length > 1 ? prefixedRoute.replace(/\/+$/, '') : prefixedRoute;
}

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeKeywords(keywords) {
    if (Array.isArray(keywords)) {
        return keywords.filter(Boolean);
    }

    if (typeof keywords === 'string' && keywords.trim()) {
        return keywords
            .split(',')
            .map((keyword) => keyword.trim())
            .filter(Boolean);
    }

    return [];
}

function buildImageUrl(image, fallbackImage = DEFAULT_OG_IMAGE) {
    if (!image) {
        return fallbackImage;
    }

    if (typeof image === 'string') {
        return image;
    }

    if (image.url) {
        return image.url;
    }

    try {
        return builder.image(image).width(1200).height(630).url();
    } catch (error) {
        return fallbackImage;
    }
}

function routeUrl(route) {
    return route === '/' ? SITE_URL : `${SITE_URL}${route}`;
}

function mergeStaticSeo(route, seo = {}) {
    const normalizedRoute = normalizeRoute(route);
    const fallback = STATIC_DEFAULTS[normalizedRoute] || STATIC_DEFAULTS['/'];
    const keywords = normalizeKeywords(seo.metaKeywords || seo.keywords || fallback.keywords);

    return {
        route: normalizedRoute,
        type: fallback.type || 'website',
        title: seo.metaTitle || fallback.title,
        description: seo.metaDescription || fallback.description,
        keywords,
        canonicalUrl: seo.canonicalUrl || routeUrl(normalizedRoute),
        ogTitle: seo.ogTitle || seo.metaTitle || fallback.title,
        ogDescription: seo.ogDescription || seo.metaDescription || fallback.description,
        ogImage: buildImageUrl(seo.ogImage, fallback.image || DEFAULT_OG_IMAGE),
        noindex: Boolean(seo.noindex),
        nofollow: Boolean(seo.nofollow),
    };
}

function buildNewsSeo(item) {
    const route = normalizeRoute(item.route);
    const fallbackTitle = item.title || 'Tin tức - Wood Plus';
    const fallbackDescription = item.excerpt || STATIC_DEFAULTS['/news'].description;
    const seo = item.seo || {};

    return {
        route,
        type: 'article',
        title: seo.metaTitle || fallbackTitle,
        description: seo.metaDescription || fallbackDescription,
        keywords: normalizeKeywords(seo.keywords),
        canonicalUrl: seo.canonicalUrl || routeUrl(route),
        ogTitle: seo.ogTitle || seo.metaTitle || fallbackTitle,
        ogDescription: seo.ogDescription || seo.metaDescription || fallbackDescription,
        ogImage: buildImageUrl(seo.ogImage || item.mainImage, DEFAULT_OG_IMAGE),
        noindex: Boolean(seo.noindex),
        nofollow: Boolean(seo.nofollow),
    };
}

function buildProjectSeo(item) {
    const route = normalizeRoute(item.route);
    const fallbackTitle = `${item.title} - Dự án nội thất gỗ cao cấp | WoodPlus`;
    const fallbackDescription =
        item.excerpt ||
        item.description ||
        `Khám phá dự án ${item.title} - Thiết kế và thi công nội thất gỗ cao cấp bởi WoodPlus`;

    return {
        route,
        type: 'article',
        title: fallbackTitle,
        description: fallbackDescription,
        keywords: normalizeKeywords([item.title, 'nội thất gỗ', 'thiết kế nội thất', 'thi công nội thất', 'WoodPlus']),
        canonicalUrl: routeUrl(route),
        ogTitle: fallbackTitle,
        ogDescription: fallbackDescription,
        ogImage: buildImageUrl(item.mainImage, DEFAULT_OG_IMAGE),
        noindex: false,
        nofollow: false,
    };
}

function buildMetaMarkup(meta) {
    const lines = [
        `<title>${escapeHtml(meta.title)}</title>`,
        `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    ];

    if (meta.keywords.length > 0) {
        lines.push(`<meta name="keywords" content="${escapeHtml(meta.keywords.join(', '))}" />`);
    }

    if (meta.noindex || meta.nofollow) {
        lines.push(
            `<meta name="robots" content="${meta.noindex ? 'noindex' : 'index'},${meta.nofollow ? 'nofollow' : 'follow'}" />`
        );
    }

    lines.push(`<link rel="canonical" href="${escapeHtml(meta.canonicalUrl)}" />`);
    lines.push(`<meta property="og:type" content="${escapeHtml(meta.type)}" />`);
    lines.push(`<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`);
    lines.push(`<meta property="og:url" content="${escapeHtml(meta.canonicalUrl)}" />`);
    lines.push(`<meta property="og:title" content="${escapeHtml(meta.ogTitle)}" />`);
    lines.push(`<meta property="og:description" content="${escapeHtml(meta.ogDescription)}" />`);
    lines.push(`<meta property="og:image" content="${escapeHtml(meta.ogImage)}" />`);
    lines.push(`<meta name="twitter:card" content="summary_large_image" />`);
    lines.push(`<meta name="twitter:url" content="${escapeHtml(meta.canonicalUrl)}" />`);
    lines.push(`<meta name="twitter:title" content="${escapeHtml(meta.ogTitle)}" />`);
    lines.push(`<meta name="twitter:description" content="${escapeHtml(meta.ogDescription)}" />`);
    lines.push(`<meta name="twitter:image" content="${escapeHtml(meta.ogImage)}" />`);

    return lines.join('\n    ');
}

function injectMeta(html, meta) {
    const cleanedHtml = html
        .replace(/<title>[\s\S]*?<\/title>/i, '')
        .replace(/<meta\s+name="description"[^>]*>\s*/gi, '')
        .replace(/<meta\s+name="keywords"[^>]*>\s*/gi, '')
        .replace(/<meta\s+name="robots"[^>]*>\s*/gi, '')
        .replace(/<meta\s+property="og:[^"]+"[^>]*>\s*/gi, '')
        .replace(/<meta\s+name="twitter:[^"]+"[^>]*>\s*/gi, '')
        .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '');

    return cleanedHtml.replace('</head>', `    ${buildMetaMarkup(meta)}\n</head>`);
}

function writeRouteHtml(route, html) {
    const normalizedRoute = normalizeRoute(route);
    const outputPath =
        normalizedRoute === '/'
            ? BUILD_INDEX_PATH
            : path.join(BUILD_DIR, normalizedRoute.replace(/^\//, ''), 'index.html');

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`Generated SEO HTML for ${normalizedRoute}`);
}

async function fetchStaticPages() {
    const query = `*[_type == "pageSettings" && isActive == true]{
      "pageSlug": coalesce(pageSlug.current, pageSlug),
      seo
    }`;

    return client.fetch(query);
}

async function fetchNewsPages() {
    const query = `*[_type == "news" && status == "published" && defined(slug.current)]{
      "route": "/news/" + slug.current,
      title,
      excerpt,
      mainImage,
      seo
    }`;

    return client.fetch(query);
}

async function fetchProjectPages() {
    const query = `*[_type == "project" && defined(slug.current)]{
      "route": "/project/" + slug.current,
      title,
      excerpt,
      description,
      mainImage
    }`;

    return client.fetch(query);
}

async function main() {
    ensureBuildExists();
    const templateHtml = fs.readFileSync(BUILD_INDEX_PATH, 'utf8');

    const [staticPages, newsPages, projectPages] = await Promise.all([
        fetchStaticPages(),
        fetchNewsPages(),
        fetchProjectPages(),
    ]);

    const routeMetaMap = new Map();

    Object.keys(STATIC_DEFAULTS).forEach((route) => {
        routeMetaMap.set(route, mergeStaticSeo(route));
    });

    staticPages.forEach((page) => {
        const route = normalizeRoute(page.pageSlug || '/');
        routeMetaMap.set(route, mergeStaticSeo(route, page.seo || {}));
    });

    newsPages.forEach((page) => {
        routeMetaMap.set(normalizeRoute(page.route), buildNewsSeo(page));
    });

    projectPages.forEach((page) => {
        routeMetaMap.set(normalizeRoute(page.route), buildProjectSeo(page));
    });

    routeMetaMap.forEach((meta, route) => {
        writeRouteHtml(route, injectMeta(templateHtml, meta));
    });
}

main().catch((error) => {
    console.error('Failed to generate static SEO pages:', error);
    process.exit(1);
});
