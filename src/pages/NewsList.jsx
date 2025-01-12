import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanityClient";

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news"] | order(publishedAt desc) {
                    _id,
                    title,
                    slug,
                    excerpt,
                    image,
                    publishedAt,
                    author->{name},
                    categories[]->{title}
                }`
            )
            .then((data) => setNews(data))
            .catch(console.error);
    }, []);

    return (
        <main className="relative bg-[#0F0F0F] min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800">
            <div className="container mx-auto px-6 sm:px-8 md:px-10">
                {/* Header Section */}
                <div className="relative bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold mb-4">Tin tức mới nhất</h1>
                    </div>
                </div>

                {/* Featured Articles */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
                    {news.map((item) => (
                        <Link
                            key={item._id}
                            to={`/news/${item.slug.current}`}
                            className="group relative rounded-lg overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transform transition duration-300"
                        >
                            <div className="relative w-full aspect-video">
                                <img
                                    src={urlFor(item.image).url()}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white group-hover:text-[#BEAB81]">{item.title}</h2>
                                <p className="text-gray-400 mt-2">{item.excerpt}</p>
                                <p className="text-sm text-gray-500 mt-4">
                                    Ngày: {new Date(item.publishedAt).toLocaleDateString()} | Tác giả: {item.author?.name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Danh mục: {item.categories?.length
                                    ? item.categories.map((cat) => cat.title).join(", ")
                                    : "Không có danh mục"}
                                </p>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default NewsList;
