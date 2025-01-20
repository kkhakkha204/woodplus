import React, { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";
import { Link } from "react-router-dom";
import {TbArrowForwardUp} from "react-icons/tb";

const BlogSection = () => {
    const [posts, setPosts] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
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
                    {/* Lấy tối đa 3 bài viết */}
                    {posts.slice(0, 3).map((post, index) => (
                        <Link
                            to={`/news/${post.slug.current}`}
                            key={post.slug.current}
                            className="w-full mx-auto max-w-[500px] bg-[#0F0F0F] p-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-[#1A1A1A]"
                        >
                            {/* Hình ảnh bài viết */}
                            <img
                                src={urlFor(post.mainImage).url()}
                                alt={post.title}
                                className="w-full h-[200px] sm:h-[250px] lg:h-[305px] object-cover rounded-lg transition-transform duration-300 hover:scale-105"
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
                        </Link>
                    ))}
                </div>
                <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                    {/* Nút Liên hệ */}
                    <Link
                        to="/news"
                        className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Hiển thị icon trên màn hình lớn */}
                        <span className="hidden sm:inline text-[18px]">
        {!isHovered ? (
            <TbArrowForwardUp className="inline-block text-[25px]"/>
        ) : (
            "Xem thêm"
        )}
    </span>

                        {/* Hiển thị chữ trên điện thoại và máy tính bảng */}
                        <span className="sm:hidden text-[14px] font-semibold">
        Xem thêm
    </span>
                    </Link>


                    {/* Nút Tư vấn */}
                    <Link
                        to="/liên-hệ"
                        className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                    >
                        Liên hệ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
