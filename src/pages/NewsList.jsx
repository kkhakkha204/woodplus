import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';
import DarkSpacing from '../components/DarkSpacing';

const NewsList = () => {
    const [news, setNews] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [page, setPage] = useState(1);
    const newsPerPage = 6;

    useEffect(() => {
        // Fetch categories
        client
            .fetch(`*[_type == "category"]{ _id, title }`)
            .then((data) => setCategories(data))
            .catch(console.error);

        // Fetch news based on category and pagination
        const categoryFilter = selectedCategory
            ? `&& category->title == "${selectedCategory}"`
            : '';
        client
            .fetch(
                `*[_type == "news" ${categoryFilter}] | order(publishedAt desc) [${
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
    }, [selectedCategory, page]);

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));

    const handleCategoryClick = (categoryTitle) => {
        setSelectedCategory(categoryTitle);
        setPage(1); // Reset lại trang khi thay đổi thể loại
    };


    return (
        <main className="bg-[#0F0F0F] pt-20 sm:pt-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative bg-cover bg-center h-[300px] md:h-[400px]">
                    <div
                        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
                    >
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">
                            WoodPlus
                        </h2>
                        <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold mb-4">
                            Xu hướng và tin tức
                        </h1>
                        <p className="text-[18px] md:text-[22px] lg:text-[28px] max-w-2xl">
                            Chúng tôi cập nhật những tin tức mới nhất về
                        </p>
                    </div>
                </div>

                <DarkSpacing />



                {/* Danh sách bài viết */}
                <div className="my-8">
                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-center text-white ">Danh sách bài viết</h2>
                    {/* Category Filter */}
                    <div className="my-6">
                        <label htmlFor="category-filter" className="block text-lg font-semibold mb-2">
                        </label>
                        <div className="relative">
                            <select
                                id="category-filter"
                                value={selectedCategory || ''}
                                onChange={(e) => handleCategoryClick(e.target.value || null)}
                                className="w-full max-w-[485px] px-4 py-2 bg-[#282727] text-white font-semibold"
                            >
                                <option value="">Tất cả thể loại</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category.title}>
                                        {category.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((item) => (
                            <a
                                key={item._id}
                                href={`/news/${item.slug.current}`}
                                className="block shadow overflow-hidden group" // Thêm group để hỗ trợ hiệu ứng hover
                            >
                                {/* Ảnh bài viết */}
                                <img
                                    src={urlFor(item.mainImage).url()}
                                    alt={item.title}
                                    className="w-full h-72 object-cover"
                                />
                                <div className="py-4">
                                    {/* Tiêu đề bài viết */}
                                    <h3 className="text-xl text-white font-medium group-hover:text-[#BEAB81] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <span className="font-medium text-[#CECECE]">Thể loại:</span>{' '}
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault(); // Ngăn chặn chuyển hướng khi nhấn nút thể loại
                                            handleCategoryClick(item.categoryTitle);
                                        }}
                                        className="text-[#BEAB81] hover:underline"
                                    >
                                        {item.categoryTitle}
                                    </button>
                                    {' '}
                                    {/* Tóm tắt bài viết */}
                                    <p className="text-[#CECECE] mt-2">{item.excerpt}</p>
                                    {/* Thông tin thêm */}
                                    <p className="font-medium text-[#CECECE] mt-2">
                                        <span className="font-medium">Tác giả:</span> {item.authorName}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>

                {/* Phân trang */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={prevPage}
                        disabled={page === 1}
                        className="px-4 py-2 bg-gradient-to-r from-[#D0C49E] to-[#A79268] border  text-black font-semibold rounded"
                    >
                        Trang trước
                    </button>
                    <button
                        onClick={nextPage}
                        className="px-4 py-2 bg-[#272727] text-[#C4B58E] font-semibold border  rounded"
                    >
                        Trang sau
                    </button>
                </div>
            </div>
        </main>
    );
};

export default NewsList;
