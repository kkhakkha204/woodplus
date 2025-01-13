import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const newsPerPage = 6;

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news"] | order(publishedAt desc) [${
                    (page - 1) * newsPerPage
                }...${page * newsPerPage}] {
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          publishedAt,
          "authorName": author->name,
          "categoryTitle": category->title
        }`
            )
            .then((data) => setNews(data))
            .catch(console.error);
    }, [page]);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">Danh sách Tin tức</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map((item) => (
                    <div key={item._id} className="bg-white shadow rounded-lg p-4">
                        {/* Ảnh bài viết */}
                        <img
                            src={urlFor(item.mainImage).url()}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded"
                        />
                        {/* Tiêu đề bài viết */}
                        <h2 className="text-xl font-semibold mt-4">{item.title}</h2>
                        {/* Tóm tắt bài viết */}
                        <p className="text-gray-600 mt-2">{item.excerpt}</p>
                        {/* Thông tin thêm: Thể loại và Tác giả */}
                        <p className="text-gray-500 text-sm mt-2">
                            <span className="font-semibold">Thể loại:</span> {item.categoryTitle} <br />
                            <span className="font-semibold">Tác giả:</span> {item.authorName}
                        </p>
                        {/* Liên kết Đọc thêm */}
                        <a
                            href={`/news/${item.slug.current}`}
                            className="text-blue-500 mt-4 inline-block"
                        >
                            Đọc thêm
                        </a>
                    </div>
                ))}
            </div>
            {/* Phân trang */}
            <div className="flex justify-between mt-6">
                <button
                    onClick={prevPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-300 rounded"
                >
                    Trang trước
                </button>
                <button
                    onClick={nextPage}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                    Trang sau
                </button>
            </div>
        </div>
    );
};

export default NewsList;
