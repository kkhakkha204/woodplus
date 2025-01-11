import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        client
            .fetch(`*[_type == "news"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        image,
        publishedAt
      }`)
            .then((data) => setNews(data))
            .catch(console.error);
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">Tin tức</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                    <div key={item._id} className="bg-white shadow rounded-lg p-4">
                        <img
                            src={urlFor(item.image).url()}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                        <p className="text-gray-600 mt-2">{item.excerpt}</p>
                        <a
                            href={`/news/${item.slug.current}`}
                            className="text-blue-500 mt-4 inline-block"
                        >
                            Đọc thêm
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsList;
