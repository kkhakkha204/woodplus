import React, { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";

const NewsDetail = () => {
    const { slug } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news" && slug.current == $slug][0] {
                    title,
                    content,
                    image,
                    publishedAt,
                    author->{name},
                    categories[]->{title},
                    seoTitle,
                    seoDescription,
                    seoKeywords
                }`,
                { slug }
            )
            .then((data) => setNews(data))
            .catch(console.error);
    }, [slug]);

    if (!news) return <div>Loading...</div>;

    const customPortableTextComponents = {
        types: {
            image: ({ value }) => (
                <img
                    src={urlFor(value).url()}
                    alt={value.alt || "Image"}
                    className="my-4 w-full rounded-lg shadow-lg"
                />
            ),
        },
    };

    return (
        <div className="container mx-auto px-4">
            <header className="my-6">
                <h1 className="text-4xl font-bold">{news.title}</h1>
                <p className="text-gray-600 mt-2">
                    Ngày: {new Date(news.publishedAt).toLocaleDateString()} | Tác giả: {news.author?.name}
                </p>
                <p className="text-gray-600">
                    Danh mục: {news.categories?.length
                    ? news.categories.map((cat) => cat.title).join(", ")
                    : "Không có danh mục"}
                </p>
            </header>
            <img
                src={urlFor(news.image).url()}
                alt={news.title}
                className="w-full h-96 object-cover rounded mb-6"
            />
            <div className="mt-6">
                <PortableText value={news.content} components={customPortableTextComponents} />
            </div>
            <footer className="mt-10">
                <h2 className="text-xl font-bold">SEO Metadata</h2>
                <p className="text-gray-700">SEO Title: {news.seoTitle}</p>
                <p className="text-gray-700">SEO Description: {news.seoDescription}</p>
                <p className="text-gray-700">SEO Keywords: {news.seoKeywords?.join(", ")}</p>
            </footer>
        </div>
    );
};

export default NewsDetail;
