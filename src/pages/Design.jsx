import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";

const Design = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <main className="bg-[#0F0F0F] ">
            {/* Hero Section */}
            <div
                className="h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[800px] 2xl:h-[900px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/aboutus/12.jpg')",
                        filter: "brightness(0.85) grayscale(1)"
                    }}
                ></div>
                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Nội dung chính */}
                <div className=" w-full h-full flex flex-col justify-between items-center text-white relative z-10">
                    {/* Thẻ divtop */}
                    <div className="w-full h-[calc(50%-50px)] flex justify-center items-center">
                        {/* Nội dung của divtop */}

                    </div>

                    {/* Thẻ divcut */}
                    <div className="w-full h-[100px] flex items-center justify-center">
                        {/* divcutl */}
                        <div className="w-[130%] sm:w-[50%] h-[80%] sm:h-[100px] bg-[#0F0F0F] border-r-2 border-y-2">
                            <span
                                className="pl-2 sm:pl-8 text-[32px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-left sm:text-center tracking-[2%]">SLOGAN <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">WOODPLUS</span></span>
                        </div>

                        {/* divcutr */}
                        <div className="w-[50%] h-[100px] relative">
                            {/* Đường line chia đôi chiều cao của divcutr */}
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>
                        </div>
                    </div>


                    {/* Thẻ divbot */}
                    <div
                        className="w-full max-w-[1620px] h-[calc(50%-50px)] grid grid-cols-1 md:grid-cols-2 justify-between items-center ">
                        {/* Mô tả bên trái */}
                        <div className="w-full md:w-1/2">
                            <p className="w-[300px] mx-auto sm:mt-[200px] text-center sm:text-left sm:text-[20px] text-white">We
                                are a passionate team committed to <br/>delivering
                                the best products and services to our customers. Our mission is to bring quality
                                and innovation to every home.</p>
                        </div>

                        {/* Nút liên hệ và tư vấn */}
                        <div className="text-center sm:flex justify-start md:justify-end sm:mt-[230px] space-x-1">
                            {/* Nút Liên hệ */}
                            <button
                                className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[125px] md:h-[45px] bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                onMouseEnter={() => setIsHovered(true)} // Thay đổi trạng thái khi hover
                                onMouseLeave={() => setIsHovered(false)} // Trở lại trạng thái ban đầu khi rời chuột
                            >
                                {/* Hiển thị icon nếu chưa hover */}
                                {!isHovered ? (
                                    <TbArrowForwardUp
                                        className="inline-block text-[25px] sm:text-[30px] md:text-[35px] mb-[0.1rem]"/>
                                ) : (
                                    "Liên hệ"
                                )}
                            </button>

                            {/* Nút Tư vấn */}
                            <button
                                className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[125px] md:h-[45px]  bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[16px] md:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                            >
                                Tư vấn
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <DarkSpacing/>

            <ProjectSection/>

            <DarkSpacing/>

            <section className="relative">
                <div
                    className="absolute h-[36.5rem] w-full top-0 bg-gradient-to-r from-indigo-600 to-violet-600 -z-10"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[32px] 2xl:text-[48px] font-medium text-[#FFFFFF] mt-2">Tổng quan bảng giá
                            thiết kế</h1>
                    </div>

                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">

                        <div
                            className="group relative flex flex-col mx-auto w-full max-w-sm transition-all duration-300 border-t-[1px] border-[#757575] p-4 xl:p-8">
                            <div className="border-b border-solid border-[#757575] pb-9 mb-9">
                                <h3 className="font-manrope text-[20px] sm:text-[24px] font-bold mb-7 text-center text-[#BEAB81]">Thiết
                                    kế Nội thất</h3>
                                <div className="flex items-center justify-center">
                                    <span
                                        className="font-manrope text-[20px] sm:text-4xl font-medium text-white">200.000vnd</span>
                                    <span
                                        className="text-[18px] sm:text-[20px] text-[#CECECE] sm:mt-2 ml-3">|&nbsp; m2</span>
                                </div>
                            </div>

                            <ul className="mb-12 ml-[120px] sm:ml-[85px] space-y-1 text-center text-[13px] sm:text-[17px] text-[#CECECE]">
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Chuyên gia AI tư vấn thiết kế nội thất</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Phân tích nhu cầu và không gian</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Đưa ra các lựa chọn phù hợp với ngân sách</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tư vấn chọn vật liệu và màu sắc</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hỗ trợ thay đổi thiết kế theo yêu cầu</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Gợi ý các xu hướng thiết kế mới nhất</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hướng dẫn lựa chọn đồ nội thất tối ưu</span>
                                </li>
                            </ul>
                            <a href="javascript:"
                               className="py-2.5 px-5 bg-[#e7e5e4] shadow-sm rounded-full transition-all duration-500 text-base text-black font-semibold text-center w-fit mx-auto group-hover:bg-[#BEAB81] group-hover:text-[#0F0F0F]">Liên
                                hệ</a>
                        </div>

                        <div
                            className="group relative flex flex-col mx-auto w-full max-w-sm transition-all duration-300 border-t-[1px] border-[#757575] p-4 xl:p-8">
                            <div className="border-b border-solid border-[#757575] pb-9 mb-9">
                                <h3 className="font-manrope text-[20px] sm:text-[24px] font-bold mb-7 text-center text-[#BEAB81]">Thiết
                                    kế Nội thất</h3>
                                <div className="flex items-center justify-center">
                                    <span
                                        className="font-manrope text-[20px] sm:text-4xl font-medium text-white">200.000vnd</span>
                                    <span
                                        className="text-[18px] sm:text-[20px] text-[#CECECE] sm:mt-2 ml-3">|&nbsp; m2</span>
                                </div>
                            </div>

                            <ul className="mb-12 ml-[120px] sm:ml-[85px] space-y-1 text-center text-[13px] sm:text-[17px] text-[#CECECE]">
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Chuyên gia AI tư vấn thiết kế nội thất</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Phân tích nhu cầu và không gian</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Đưa ra các lựa chọn phù hợp với ngân sách</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tư vấn chọn vật liệu và màu sắc</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hỗ trợ thay đổi thiết kế theo yêu cầu</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Gợi ý các xu hướng thiết kế mới nhất</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hướng dẫn lựa chọn đồ nội thất tối ưu</span>
                                </li>
                            </ul>
                            <a href="javascript:"
                               className="py-2.5 px-5 bg-[#e7e5e4] shadow-sm rounded-full transition-all duration-500 text-base text-black font-semibold text-center w-fit mx-auto group-hover:bg-[#BEAB81] group-hover:text-[#0F0F0F]">Liên
                                hệ</a>
                        </div>

                        <div
                            className="group relative flex flex-col mx-auto w-full max-w-sm transition-all duration-300 border-t-[1px] border-[#757575] p-4 xl:p-8">
                            <div className="border-b border-solid border-[#757575] pb-9 mb-9">
                                <h3 className="font-manrope text-[20px] sm:text-[24px] font-bold mb-7 text-center text-[#BEAB81]">Thiết
                                    kế Nội thất</h3>
                                <div className="flex items-center justify-center">
                                    <span
                                        className="font-manrope text-[20px] sm:text-4xl font-medium text-white">200.000vnd</span>
                                    <span
                                        className="text-[18px] sm:text-[20px] text-[#CECECE] sm:mt-2 ml-3">|&nbsp; m2</span>
                                </div>
                            </div>

                            <ul className="mb-12 ml-[120px] sm:ml-[85px] space-y-1 text-center text-[13px] sm:text-[17px] text-[#CECECE]">
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Chuyên gia AI tư vấn thiết kế nội thất</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Phân tích nhu cầu và không gian</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Đưa ra các lựa chọn phù hợp với ngân sách</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tư vấn chọn vật liệu và màu sắc</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hỗ trợ thay đổi thiết kế theo yêu cầu</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Gợi ý các xu hướng thiết kế mới nhất</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hướng dẫn lựa chọn đồ nội thất tối ưu</span>
                                </li>
                            </ul>
                            <a href="javascript:"
                               className="py-2.5 px-5 bg-[#e7e5e4] shadow-sm rounded-full transition-all duration-500 text-base text-black font-semibold text-center w-fit mx-auto group-hover:bg-[#BEAB81] group-hover:text-[#0F0F0F]">Liên
                                hệ</a>
                        </div>

                    </div>
                </div>
            </section>


            <DarkSpacing/>

            {/* Thẻ div cha */}
            <div className="w-full text-white">
                {/* div con */}
                <div className="w-full max-w-[1620px] mx-auto pb-14 px-4 sm:px-6 lg:px-8">
                    {/* div text */}
                    <div className="mb-10 text-center">
                        <h2 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[28px] font-bold text-[#AF9A70]">
                            WoodPlus Blog
                        </h2>
                        <h1 className="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#FFFFFF] mt-2">
                            Những bài viết mới nhất
                        </h1>
                    </div>

                    {/* div desc */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Blog Post */}
                        {[
                            {
                                img: "/assets/images/herosection/11.png",
                                title: "Tiêu đề bài viết",
                                category: "Thiết kế nội thất",
                                description:
                                    "Đây là mô tả ngắn gọn về bài viết, giới thiệu nội dung chính mà người đọc có thể quan tâm.",
                                date: "01/01/2025",
                            },
                            {
                                img: "/assets/images/herosection/11.png",
                                title: "Tiêu đề bài viết",
                                category: "Thi công nội thất",
                                description:
                                    "Đây là mô tả ngắn gọn về bài viết, giới thiệu nội dung chính mà người đọc có thể quan tâm.",
                                date: "02/01/2025",
                            },
                            {
                                img: "/assets/images/herosection/11.png",
                                title: "Tiêu đề bài viết",
                                category: "Phong cách sống",
                                description:
                                    "Đây là mô tả ngắn gọn về bài viết, giới thiệu nội dung chính mà người đọc có thể quan tâm.",
                                date: "03/01/2025",
                            },
                        ].map((post, index) => (
                            <div
                                key={index}
                                className="w-full bg-[#0F0F0F] p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                <img
                                    src={post.img}
                                    alt={`Blog ${index + 1}`}
                                    className="w-full h-[200px] sm:h-[250px] lg:h-[305px] object-cover rounded-lg"
                                />
                                <h3 className="text-[20px] sm:text-[22px] font-medium text-white mt-4">
                                    {post.title}
                                </h3>
                                <p className="text-[14px] sm:text-[16px] text-[#BEAB81] italic">
                                    Thể loại: {post.category}
                                </p>
                                <p className="text-[14px] sm:text-[16px] text-[#CECECE] mt-2">
                                    {post.description}
                                </p>
                                <p className="text-[12px] sm:text-[14px] text-[#CECECE] mt-2">{post.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <DarkSpacing/>

            <ContactSection/>

        </main>
    );
};

export default Design;