import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';
import { PortableText } from '@portabletext/react';

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
          publishedAt
        }`,
                { slug }
            )
            .then((data) => setNews(data))
            .catch(console.error);
    }, [slug]);

    if (!news) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4">{news.title}</h1>
            <img
                src={urlFor(news.image).url()}
                alt={news.title}
                className="w-full h-96 object-cover rounded"
            />
            <div className="mt-6">
                <PortableText value={news.content} />
            </div>
        </div>
    );
};

export default NewsDetail;
