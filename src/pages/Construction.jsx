import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import LightProjectSection from "../components/LightProjectSection";

const Construction = () => {
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


                        {/* divcutr */}
                        <div className="w-[50%] h-[100px] relative">
                            {/* Đường line chia đôi chiều cao của divcutr */}
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>
                        </div>
                        {/* divcutl */}
                        <div className="w-[130%] sm:w-[50%] h-[80%] sm:h-[100px] bg-[#0F0F0F] border-l-2 border-y-2">
                            <span
                                className="pl-4 sm:pl-8 text-[32px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-left sm:text-center tracking-[2%]">SLOGAN <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">WOODPLUS</span></span>
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

            {/* Thẻ divcha */}
            <div className="w-full bg-[#e7e5e4]">
                {/* divcon */}
                <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto pb-14 px-4 sm:px-6 lg:px-8 flex flex-wrap lg:flex-nowrap items-start justify-between">
                    {/* divl */}
                    <div className="w-full lg:w-[44%] mb-8 lg:mb-0 text-center sm:text-left">
                        {/* divtext */}
                        <div className="mb-6">
                            <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                            <h1 className="text-[26px] 2xl:text-[48px] font-medium text-[#FFFFFF] ">
                                Dịch vụ chúng tôi cung cấp
                            </h1>
                        </div>

                        {/* divdesc */}
                        {[
                            {
                                title: "Dịch vụ 1",
                                description:
                                    "Chúng tôi cung cấp dịch vụ thiết kế và thi công nội thất cao cấp, đảm bảo sự hài lòng của khách hàng với chất lượng và thẩm mỹ vượt trội.",
                            },
                            {
                                title: "Dịch vụ 2",
                                description:
                                    "Chúng tôi mang đến giải pháp nội thất thông minh, tối ưu không gian sống và làm việc, đáp ứng nhu cầu hiện đại của khách hàng.",
                            },
                            {
                                title: "Dịch vụ 3",
                                description:
                                    "Dịch vụ tư vấn và bảo trì nội thất, đảm bảo chất lượng lâu dài và tiết kiệm chi phí cho khách hàng.",
                            },
                        ].map((service, index) => (
                            <div key={index} className="mb-10 text-center sm:text-left mx-auto w-[300px] sm:w-[500px]">
                                <h2 className="text-[20px] sm:text-[24px] font-medium text-[#AF9A70]">{service.title}</h2>
                                <p className="text-[13px] sm:text-[17px] text-[#CECECE]">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* divr */}
                    <div className="w-full sm:pt-12 pr-3 lg:w-[54%]">
                        <img
                            src="/assets/images/herosection/11.png"
                            alt="Dịch vụ cung cấp"
                            className="w-full h-[300px] sm:h-[400px] lg:h-[600px] object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>


            <LightSpacing/>

            <LightProjectSection/>

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

export default Construction;