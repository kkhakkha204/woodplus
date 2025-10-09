import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import { Helmet } from 'react-helmet-async';
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import Hotline from "../components/Hotline";
import BackToTop from "../components/BackToTop";
import GalleryDisplay from "../components/GalleryDisplay";

const NewsDetail = () => {
    const { slug } = useParams();
    const [news, setNews] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news" && slug.current == $slug && status == "published"][0] {
                  title,
                  excerpt,
                  mainImage {
                    ...,
                    "url": asset->url,
                    alt,
                    caption
                  },
                  content,
                  publishedAt,
                  updatedAt,
                  tags,
                  "authorName": author->name,
                  "authorImage": author->image,
                  "authorBio": author->bio,
                  "categoryTitle": category->title,
                  "categorySlug": category->slug.current,
                  "categoryColor": category->color,
                  seo {
                    metaTitle,
                    metaDescription,
                    focusKeyword,
                    keywords,
                    ogImage {
                      ...,
                      "url": asset->url,
                      alt
                    },
                    ogTitle,
                    ogDescription,
                    canonicalUrl,
                    noindex,
                    nofollow
                  }
                }`,
                { slug }
            )
            .then((data) => {
                setNews(data);

                // Fetch related posts
                if (data?.categoryTitle) {
                    client
                        .fetch(
                            `*[_type == "news" && category->title == $categoryTitle && slug.current != $slug && status == "published"] | order(publishedAt desc) [0...4] {
                              title,
                              slug,
                              mainImage {
                                ...,
                                "url": asset->url,
                                alt
                              },
                              excerpt,
                              publishedAt
                            }`,
                            { categoryTitle: data.categoryTitle, slug }
                        )
                        .then(setRelatedPosts)
                        .catch(console.error);
                }

                // Update view count (optional - nếu muốn track)
                // updateViewCount(data._id);
            })
            .catch(console.error);
    }, [slug]);

    if (!news) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#0F0F0F] text-gray-400">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Đang tải...</p>
                </div>
            </div>
        );
    }

    // SEO Data
    const pageTitle = news.seo?.metaTitle || news.title;
    const pageDescription = news.seo?.metaDescription || news.excerpt;
    const pageImage = news.seo?.ogImage?.url || news.mainImage?.url;
    const pageUrl = `${window.location.origin}/news/${slug}`;
    const canonicalUrl = news.seo?.canonicalUrl || pageUrl;

    return (
        <>
        {/* SEO Meta Tags */}
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{pageTitle}</title>
            <meta name="description" content={pageDescription} />

            {/* Keywords */}
            {news.seo?.keywords && news.seo.keywords.length > 0 && (
                <meta name="keywords" content={news.seo.keywords.join(', ')} />
            )}

            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl} />

            {/* Robots Meta */}
            {(news.seo?.noindex || news.seo?.nofollow) && (
                <meta
                    name="robots"
                    content={`${news.seo.noindex ? 'noindex' : 'index'},${news.seo.nofollow ? 'nofollow' : 'follow'}`}
                />
            )}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="article" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={news.seo?.ogTitle || pageTitle} />
            <meta property="og:description" content={news.seo?.ogDescription || pageDescription} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:site_name" content="WoodPlus" />
            <meta property="article:published_time" content={news.publishedAt} />
            {news.updatedAt && (
                <meta property="article:modified_time" content={news.updatedAt} />
            )}
            <meta property="article:author" content={news.authorName} />
            <meta property="article:section" content={news.categoryTitle} />
            {news.tags && news.tags.map((tag, index) => (
                <meta key={index} property="article:tag" content={tag} />
            ))}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={pageUrl} />
            <meta name="twitter:title" content={news.seo?.ogTitle || pageTitle} />
            <meta name="twitter:description" content={news.seo?.ogDescription || pageDescription} />
            <meta name="twitter:image" content={pageImage} />

            {/* Additional SEO */}
            <meta name="author" content={news.authorName} />
            <meta name="publish_date" property="og:publish_date" content={news.publishedAt} />
        </Helmet>

        <main className="bg-[#0F0F0F] py-44">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <article className="lg:col-span-2">
                    {/* Breadcrumb */}
                    <nav className="text-sm text-gray-400 mb-4">
                        <a href="/" className="hover:text-white">Trang chủ</a>
                        <span className="mx-2">/</span>
                        <a href="/news" className="hover:text-white">Tin tức</a>
                        <span className="mx-2">/</span>
                        <a href={`/news?category=${news.categorySlug}`} className="hover:text-white">
                            {news.categoryTitle}
                        </a>
                        <span className="mx-2">/</span>
                        <span className="text-white">{news.title}</span>
                    </nav>

                    <h1 className="text-4xl font-bold text-white mb-4">{news.title}</h1>
                    <p className="text-lg text-[#CECECE] italic mb-4">{news.excerpt}</p>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-[#CECECE] mb-6">
                            <span
                                className="px-3 py-1 rounded-full text-black font-medium"
                                style={{ backgroundColor: news.categoryColor || '#e5e7eb' }}
                            >
                                {news.categoryTitle}
                            </span>
                        <span>📅 {new Date(news.publishedAt).toLocaleDateString('vi-VN')}</span>
                        {news.updatedAt && (
                            <span>🔄 Cập nhật: {new Date(news.updatedAt).toLocaleDateString('vi-VN')}</span>
                        )}
                    </div>

                    {/* Tags */}
                    {news.tags && news.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {news.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 transition-colors"
                                >
                                        #{tag}
                                    </span>
                            ))}
                        </div>
                    )}

                    <img
                        src={urlFor(news.mainImage).url()}
                        alt={news.mainImage.alt || news.title}
                        className="w-full h-96 object-cover rounded-lg shadow-lg mb-2"
                    />
                    {news.mainImage.caption && (
                        <p className="text-sm text-gray-400 italic text-center mb-6">
                            {news.mainImage.caption}
                        </p>
                    )}

                    {/* Content */}
                    <div className="prose lg:prose-lg prose-gray max-w-none">
                        <PortableText
                            value={news.content}
                            components={{
                                block: {
                                    h1: ({ children, node }) => (
                                        <h1 id={node._key} className="text-4xl font-bold text-white mt-8 mb-4">
                                            {children}
                                        </h1>
                                    ),
                                    h2: ({ children, node }) => (
                                        <h2 id={node._key} className="text-3xl font-semibold text-white mt-6 mb-3">
                                            {children}
                                        </h2>
                                    ),
                                    h3: ({ children, node }) => (
                                        <h3 id={node._key} className="text-2xl font-semibold text-white mt-5 mb-2">
                                            {children}
                                        </h3>
                                    ),
                                    h4: ({ children, node }) => (
                                        <h4 id={node._key} className="text-xl font-medium text-white mt-4 mb-2">
                                            {children}
                                        </h4>
                                    ),
                                    normal: ({ children }) => (
                                        <p className="text-white mb-4 leading-relaxed">{children}</p>
                                    ),
                                    blockquote: ({ children }) => (
                                        <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-300 my-4">
                                            {children}
                                        </blockquote>
                                    ),
                                },
                                marks: {
                                    strong: ({ children }) => (
                                        <strong className="font-bold text-white">{children}</strong>
                                    ),
                                    em: ({ children }) => (
                                        <em className="italic text-gray-300">{children}</em>
                                    ),
                                    code: ({ children }) => (
                                        <code className="bg-gray-800 text-indigo-300 px-1 py-0.5 rounded text-sm">
                                            {children}
                                        </code>
                                    ),
                                    link: ({ children, value }) => (
                                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                <a>
                                        href={value.href}
                                    target={value.blank ? '_blank' : '_self'}
                                    rel={value.blank ? 'noopener noreferrer' : ''}
                                    className="text-indigo-400 hover:text-indigo-300 underline"
                                        >
                                        {children}
                                </a>
                                ),
                            },
                                types: {
                                image: ({ value }) => (
                                <figure className="my-6">
                                <img
                                src={urlFor(value).url()}
                            alt={value.alt || 'Image'}
                            className="rounded-lg shadow-md h-[300px] md:h-[450px] mx-auto object-cover w-[80%]"
                        />
                        {value.caption && (
                            <figcaption className="text-sm text-gray-400 italic text-center mt-2">
                                {value.caption}
                            </figcaption>
                        )}
                    </figure>
                    ),
                    gallery: ({ value }) => (
                    <GalleryDisplay images={value.images} layout={value.layout} />
                    ),
                    },
                    }}
                />
            </div>

            {/* Author Info */}
            <div className="flex items-center mt-10 p-4 bg-gray-900 rounded-lg">
                {news.authorImage && (
                    <img
                        src={urlFor(news.authorImage).url()}
                        alt={news.authorName}
                        className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                )}
                <div>
                    <p className="text-white font-semibold text-lg">{news.authorName}</p>
                    {news.authorBio && (
                        <p className="text-gray-400 text-sm mt-1">{news.authorBio}</p>
                    )}
                </div>
            </div>
        </article>

        {/* Sidebar */}
        <aside className="bg-[#e7e5e4] rounded-lg shadow-lg p-6 h-fit sticky top-24">
            <h2 className="text-xl font-semibold text-black mb-4">Bài viết liên quan</h2>
            {relatedPosts.length > 0 ? (
                <ul className="space-y-4">
                    {relatedPosts.map((post) => (
                        <li key={post.slug.current} className="flex flex-col items-start">
                            <a href={`/news/${post.slug.current}`} className="w-full group">
                                <img
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.mainImage.alt || post.title}
                                    className="w-full h-44 object-cover rounded-lg shadow-md mb-3 group-hover:opacity-90 transition-opacity"
                                />
                                <span className="text-black group-hover:text-gray-700 font-medium block mb-2 transition-colors">
                                                {post.title}
                                            </span>
                                <p className="text-[#757575] text-sm line-clamp-2">{post.excerpt}</p>
                                <span className="text-xs text-gray-500 mt-1">
                                                {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
                                            </span>
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-600 text-sm">Không có bài viết liên quan</p>
            )}
        </aside>
        </div>

    <ContactPopup />
    <ZaloChatButton />
    <Hotline />
    <BackToTop />
</main>
</>
);
};

export default NewsDetail;