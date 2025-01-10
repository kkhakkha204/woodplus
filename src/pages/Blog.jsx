import React from "react";
import { Link } from "react-router-dom";
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";

const Blog = () => {
    const articles = [
        {
            type: "large",
            title: "Cách tăng trưởng doanh thu nhờ chiến lược SEO hiệu quả",
            description: "Tìm hiểu các chiến lược SEO giúp bạn tối ưu hóa website và tăng trưởng doanh thu một cách bền vững.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Nguyễn Văn A",
            date: "07/12/2024",
            id: "1",
        },
        {
            type: "small",
            title: "5 bước tối ưu hóa nội dung cho chiến dịch quảng cáo",
            description: "Làm thế nào để nội dung quảng cáo của bạn nổi bật trong mắt khách hàng? Cùng khám phá ngay.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Trần Thị B",
            date: "05/12/2024",
            id: "2",
        },
        {
            type: "small",
            title: "10 chiến thuật tiếp thị số bạn không thể bỏ qua",
            description: "Các chiến thuật hàng đầu để tối ưu hóa hiệu quả tiếp thị trong thời đại số.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Lê Văn C",
            date: "04/12/2024",
            id: "3",
        },
    ];

    const allArticles = [
        {
            type: "normal",
            title: "Phân tích xu hướng tiếp thị năm 2024",
            description: "Dự báo những xu hướng tiếp thị sẽ thay đổi cách bạn tiếp cận khách hàng.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Nguyễn Văn D",
            date: "03/12/2024",
            id: "4",
        },
        {
            type: "normal",
            title: "Làm thế nào để quản lý chiến dịch email hiệu quả?",
            description: "Hướng dẫn từng bước để bạn tối ưu hóa chiến dịch email marketing.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Phạm Thị E",
            date: "02/12/2024",
            id: "5",
        },
        {
            type: "normal",
            title: "Xây dựng thương hiệu bền vững trong thời đại số",
            description: "Những chiến lược cần thiết để thương hiệu của bạn nổi bật và trường tồn.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Hoàng Văn F",
            date: "01/12/2024",
            id: "6",
        },
        {
            type: "normal",
            title: "Phân tích xu hướng tiếp thị năm 2024",
            description: "Dự báo những xu hướng tiếp thị sẽ thay đổi cách bạn tiếp cận khách hàng.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Nguyễn Văn D",
            date: "03/12/2024",
            id: "7",
        },
        {
            type: "normal",
            title: "Làm thế nào để quản lý chiến dịch email hiệu quả?",
            description: "Hướng dẫn từng bước để bạn tối ưu hóa chiến dịch email marketing.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Phạm Thị E",
            date: "02/12/2024",
            id: "8",
        },
        {
            type: "normal",
            title: "Xây dựng thương hiệu bền vững trong thời đại số",
            description: "Những chiến lược cần thiết để thương hiệu của bạn nổi bật và trường tồn.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Hoàng Văn F",
            date: "01/12/2024",
            id: "9",
        },
        {
            type: "normal",
            title: "Phân tích xu hướng tiếp thị năm 2024",
            description: "Dự báo những xu hướng tiếp thị sẽ thay đổi cách bạn tiếp cận khách hàng.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Nguyễn Văn D",
            date: "03/12/2024",
            id: "10",
        },
        {
            type: "normal",
            title: "Làm thế nào để quản lý chiến dịch email hiệu quả?",
            description: "Hướng dẫn từng bước để bạn tối ưu hóa chiến dịch email marketing.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Phạm Thị E",
            date: "02/12/2024",
            id: "11",
        },
        {
            type: "normal",
            title: "Xây dựng thương hiệu bền vững trong thời đại số",
            description: "Những chiến lược cần thiết để thương hiệu của bạn nổi bật và trường tồn.",
            imageUrl: "/assets/images/herosection/11.png",
            author: "Hoàng Văn F",
            date: "01/12/2024",
            id: "12",
        },
    ];

    return (
        <main className="relative bg-[#0F0F0F] min-h-screen w-screen overflow-hidden font-[Oswald] text-gray-800">
            <div className="container mx-auto px-6 sm:px-8 md:px-10">
                {/* Header Section */}
                <div className="relative bg-cover bg-center h-[400px] md:h-[500px] lg:h-[600px]">
                    {/* Text overlay */}
                    <div
                        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold mb-4">
                            Liên hệ với chúng tôi
                        </h1>
                        <p className="text-[18px] md:text-[22px] lg:text-[28px] max-w-2xl">
                            Chúng tôi luôn sẵn sàng hỗ trợ bạn. Đừng ngần ngại liên hệ để nhận được sự tư vấn và hỗ trợ
                            tốt nhất!
                        </p>
                    </div>
                </div>

                <DarkSpacing/>

                {/* Featured Articles */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Bài viết lớn */}
                    {articles
                        .filter((article) => article.type === "large")
                        .map((article, index) => (
                            <Link
                                key={index}
                                to={`/article/${article.id}`} // Change the path to your article's page
                                className="lg:col-span-2 relative rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out text-white hover:text-[#BEAB81] hover:scale-y-105 "
                            >
                                <div className="relative w-full aspect-video">
                                    <img
                                        src={article.imageUrl}
                                        alt={article.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-2 ">
                                        {article.title}
                                    </h2>
                                    <p className="text-[#CECECE] lg:text-gray-200 mb-4">{article.description}</p>
                                    <p className="text-sm text-gray-300">Tác giả: {article.author} |
                                        Ngày: {article.date}</p>
                                </div>
                            </Link>
                        ))}
                    {/* Bài viết nhỏ */}
                    <div className="grid grid-cols-1 gap-6">
                        {articles
                            .filter((article) => article.type === "small")
                            .map((article, index) => (
                                <Link
                                    key={index}
                                    to={`/article/${article.id}`} // Change the path to your article's page
                                    className="relative rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out text-white hover:text-[#BEAB81] hover:scale-105 hover:bg-gray-50"
                                >
                                    <div className="relative w-full aspect-video">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2 ">
                                            {article.title}
                                        </h3>
                                        <p className="text-[#CECECE] mb-4">{article.description}</p>
                                        <p className="text-sm text-gray-500">Tác giả: {article.author} |
                                            Ngày: {article.date}</p>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t border-gray-400 my-10"></div>

                {/* All Articles */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allArticles.map((article, index) => (
                        <Link
                            key={index}
                            to={`/article/${article.id}`} // Change the path to your article's page
                            className="relative rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out text-white hover:text-[#BEAB81] hover:scale-105 hover:bg-gray-50"
                        >
                            <div className="relative w-full aspect-video">
                                <img
                                    src={article.imageUrl}
                                    alt={article.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 ">
                                    {article.title}
                                </h3>
                                <p className="text-[#CECECE] mb-4">{article.description}</p>
                                <p className="text-sm text-gray-500">Tác giả: {article.author} |
                                    Ngày: {article.date}</p>
                            </div>
                            {/* Divider */}
                            <div className="border-t border-gray-400 my-4"></div>
                        </Link>
                    ))}
                </section>

            </div>
            <DarkSpacing/>

            <ContactSection/>
        </main>
    );
};

export default Blog;
