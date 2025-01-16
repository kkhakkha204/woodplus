import React, { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";

const BlogSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "news"] | order(publishedAt desc) {
          title,
          slug,
          mainImage,
          excerpt,
          "category": category->title,
          publishedAt
        }`
            )
            .then((data) => setPosts(data))
            .catch(console.error);
    }, []);

    return (
        <div className="w-full text-white pt-14 sm:pt-0">
            <div className="w-full max-w-[1620px] mx-auto pb-14 px-4 sm:px-6 lg:px-8">
                <div className="mb-10 text-center">
                    <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                        WoodPlus
                    </h3>
                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#FFFFFF] mt-2">
                        Xu hướng và tin tức
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <div
                            key={post.slug.current}
                            className="w-full mx-auto max-w-[500px] bg-[#0F0F0F] p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                        >
                            {/* Hình ảnh bài viết */}
                            <img
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                className="w-full h-[200px] sm:h-[250px] lg:h-[305px] object-cover rounded-lg"
                            />
                            {/* Tiêu đề */}
                            <h3 className="text-[20px] sm:text-[22px] font-medium text-white mt-4">
                                {post.title}
                            </h3>
                            {/* Thể loại */}
                            <p className="text-[14px] sm:text-[16px] text-[#BEAB81] italic">
                                Thể loại: {post.category}
                            </p>
                            {/* Mô tả ngắn */}
                            <p className="text-[14px] sm:text-[16px] text-[#CECECE] mt-2">
                                {post.excerpt}
                            </p>
                            {/* Ngày đăng */}
                            <p className="text-[12px] sm:text-[14px] text-[#CECECE] mt-2">
                                {new Date(post.publishedAt).toLocaleDateString("vi-VN")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
