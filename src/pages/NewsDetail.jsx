import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';

const NewsDetail = () => {
    const { slug } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news" && slug.current == $slug][0] {
          title,
          mainImage,
          content,
          publishedAt,
          "authorName": author->name,
          "authorImage": author->image,
          "categoryTitle": category->title
        }`,
                { slug }
            )
            .then((data) => setNews(data))
            .catch(console.error);
    }, [slug]);

    if (!news) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4">
            {/* Tiêu đề bài viết */}
            <h1 className="text-4xl font-bold my-4">{news.title}</h1>

            {/* Ảnh chính */}
            <img
                src={urlFor(news.mainImage).url()}
                alt={news.title}
                className="w-full h-96 object-cover rounded"
            />

            {/* Thông tin phụ: Thể loại, ngày đăng, tác giả */}
            <div className="text-gray-600 mt-4">
                <span className="font-semibold">Thể loại:</span> {news.categoryTitle} <br />
                <span className="font-semibold">Ngày đăng:</span>{' '}
                {new Date(news.publishedAt).toLocaleDateString()} <br />
                <span className="font-semibold">Tác giả:</span> {news.authorName}
            </div>

            {/* Ảnh tác giả */}
            {news.authorImage && (
                <img
                    src={urlFor(news.authorImage).url()}
                    alt={news.authorName}
                    className="w-16 h-16 rounded-full mt-4"
                />
            )}

            {/* Nội dung bài viết */}
            <div className="prose lg:prose-xl mt-6">
                {news.content.map((block, index) =>
                    block._type === 'image' ? (
                        <img
                            key={index}
                            src={urlFor(block).url()}
                            alt=""
                            className="rounded my-4"
                        />
                    ) : (
                        <p key={index}>{block.children[0].text}</p>
                    )
                )}
            </div>
        </div>
    );

};

export default NewsDetail;
