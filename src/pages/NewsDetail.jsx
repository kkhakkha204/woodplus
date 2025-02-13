import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import Hotline from "../components/Hotline";
import BackToTop from "../components/BackToTop";
import GalleryDisplay from "../components/GalleryDisplay";

const NewsDetail = () => {
    const { slug } = useParams();
    const [news, setNews] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [tableOfContents, setTableOfContents] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news" && slug.current == $slug][0] {
              title,
              excerpt,
              mainImage,
              content,
              publishedAt,
              "authorName": author->name,
              "authorImage": author->image,
              "categoryTitle": category->title
            }`,
                { slug }
            )
            .then((data) => {
                setNews(data);

                // Trích xuất mục lục từ nội dung
                if (data?.content) {
                    const toc = [];
                    let headingCount = 1; // Để tạo id duy nhất cho mỗi tiêu đề

                    data.content.forEach((block) => {
                        if (block.style && ["h2", "h3"].includes(block.style)) {
                            const id = `heading-${headingCount}`;
                            toc.push({ id, text: block.children[0].text, level: block.style });
                            block._key = id; // Thêm ID vào từng tiêu đề trong content
                            headingCount++;
                        }
                    });

                    setTableOfContents(toc);
                }

                if (data?.categoryTitle) {
                    client
                        .fetch(
                            `*[_type == "news" && category->title == $categoryTitle && slug.current != $slug] | order(publishedAt desc) [0...4] {
                              title,
                              slug,
                              mainImage,
                              excerpt
                            }`,
                            { categoryTitle: data.categoryTitle, slug }
                        )
                        .then(setRelatedPosts)
                        .catch(console.error);
                }
            })
            .catch(console.error);
    }, [slug]);


    if (!news) return <div className="flex justify-center items-center h-screen text-gray-600">Loading...</div>;

    return (
        <main className="bg-[#0F0F0F] py-44">
            <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <article className="lg:col-span-2">
                    <h1 className="text-4xl font-bold text-white mb-4">{news.title}</h1>
                    <p className="text-lg text-[#CECECE] italic mb-4">{news.excerpt}</p>

                    <div className="flex items-center text-sm text-[#CECECE] mb-6">
                        <span className="bg-gray-200 text-black px-3 py-1 rounded-full mr-4">
                            {news.categoryTitle}
                        </span>
                        <span>{new Date(news.publishedAt).toLocaleDateString()}</span>
                    </div>

                    <img
                        src={urlFor(news.mainImage).url()}
                        alt={news.title}
                        className="w-full h-96 object-cover rounded-lg shadow-lg mb-6"
                    />

                    {/* Mục lục bài viết */}
                    {tableOfContents.length > 0 && (
                        <nav className="bg-gray-900 p-4 rounded-lg shadow-md mb-6 text-white">
                            <h3 className="text-xl font-semibold mb-2">Mục lục</h3>
                            <ul className="space-y-2">
                                {tableOfContents.map((item) => (
                                    <li key={item.id} className={`ml-${item.level === "h3" ? "4" : "0"}`}>
                                        <a
                                            href={`#${item.id}`}
                                            className="text-indigo-400 hover:text-indigo-600 transition-all duration-300"
                                        >
                                            {item.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {/* Content */}
                    <div className="prose lg:prose-lg prose-gray max-w-none">
                        <PortableText
                            value={news.content}
                            components={{
                                block: {
                                    h1: ({ children,node }) => (
                                        <h1 id={node._key} className="text-4xl font-bold text-white">{children}</h1>
                                    ),
                                    h2: ({ children,node }) => (
                                        <h2 id={node._key} className="text-3xl font-semibold text-white">{children}</h2>
                                    ),
                                    h3: ({ children,node }) => (
                                        <h3 id={node._key} className="text-2xl font-semibold text-white">{children}</h3>
                                    ),
                                    h4: ({ children,node }) => (
                                        <h4 id={node._key} className="text-xl font-medium text-white">{children}</h4>
                                    ),
                                    h5: ({ children,node }) => (
                                        <h5 id={node._key} className="text-lg font-medium text-white">{children}</h5>
                                    ),
                                    h6: ({ children,node }) => (
                                        <h6 id={node._key} className="text-base font-medium text-white">{children}</h6>
                                    ),
                                    normal: ({ children }) => <p className="text-white">{children}</p>,
                                },
                                marks: {
                                    strong: ({ children }) => (
                                        <strong className="font-bold text-gray-800">{children}</strong>
                                    ),
                                    em: ({ children }) => (
                                        <em className="italic text-gray-700">{children}</em>
                                    ),
                                },
                                types: {
                                    image: ({ value }) => (
                                        <img
                                            src={urlFor(value).url()}
                                            alt={value.alt || 'Image'}
                                            className="rounded-lg shadow-md my-4 h-[300px] md:h-[450px] mx-auto object-cover w-[80%]"
                                        />
                                    ),
                                    gallery: ({ value }) => <GalleryDisplay images={value.images} layout={value.layout} />,

                                },
                            }}
                        />
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center mt-10">
                        {news.authorImage && (
                            <img
                                src={urlFor(news.authorImage).url()}
                                alt={news.authorName}
                                className="w-12 h-12 rounded-xl mr-4"
                            />
                        )}
                        <p className="text-[#CECECE]">
                            <span className="font-semibold">Tác giả:</span> {news.authorName}
                        </p>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="bg-[#e7e5e4] rounded-lg shadow-lg p-6">
                    <h2 className="text-xl font-semibold text-black mb-4">Bài viết liên quan</h2>
                    <ul className="space-y-4">
                        {relatedPosts.map((post) => (
                            <li key={post.slug.current} className="flex flex-col items-start">
                                <a href={`/news/${post.slug.current}`} className="w-full">
                                    <img
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        className="w-full h-44 object-cover rounded-lg shadow-md mb-3"
                                    />
                                    <span className="text-black hover:text-gray-900 font-medium block mb-2">
                                        {post.title}
                                    </span>
                                    <p className="text-[#757575] text-sm">{post.excerpt}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

            <ContactPopup />
            <ZaloChatButton />
            <Hotline />
            <BackToTop />
        </main>
    );
};

export default NewsDetail;
