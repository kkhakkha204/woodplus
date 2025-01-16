import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import LightProjectSection from "../components/LightProjectSection";
import ProjectSection from "../components/ProjectSection";
import {Link} from "react-router-dom";
import BlogSection from "../components/BlogSection";

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
                        backgroundImage: "url('/assets/images/banner/banner1.jpg')",
                        filter: "brightness(0.85)"
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
                        <div className="w-[180%] sm:w-[50%] h-[60%] sm:h-[100px] bg-[#0F0F0F] border-l-2 border-y-2">
                            <span
                                className="pl-5 sm:pl-8 text-[32px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-left sm:text-center tracking-[2%]">Dịch vụ<span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> thi công</span></span>
                        </div>
                    </div>


                    {/* Thẻ divbot */}
                    <div
                        className="w-full max-w-[1620px] h-[calc(50%-50px)] grid grid-cols-1 md:grid-cols-2 justify-between items-center ">
                        {/* Mô tả bên trái */}
                        <div className="w-full md:w-1/2">
                            <p className="text-[15px] tracking-[0.01rem] sm:text-[16px] md:text-[18px] lg:text-[22px] max-w-[330px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] 2xl:max-w-[450px] mx-auto sm:mt-[200px] text-center sm:text-left text-white">We
                                are a passionate team committed to <br/>delivering
                                the best products and services to our customers. Our mission is to bring quality
                                and innovation to every home.</p>
                        </div>

                        {/* Nút liên hệ và tư vấn */}
                        <div
                            className="text-center sm:mt-[230px] space-x-1 flex justify-center md:justify-end items-center">
                            {/* Nút Liên hệ */}
                            <Link
                                to="/dự-án"
                                className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {/* Hiển thị icon trên màn hình lớn */}
                                <span className="hidden sm:inline text-[18px]">
        {!isHovered ? (
            <TbArrowForwardUp className="inline-block text-[25px]"/>
        ) : (
            "Liên hệ"
        )}
    </span>

                                {/* Hiển thị chữ trên điện thoại và máy tính bảng */}
                                <span className="sm:hidden text-[14px] font-semibold">
        Liên hệ
    </span>
                            </Link>


                            {/* Nút Tư vấn */}
                            <Link
                                to="/liên-hệ"
                                className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                            >
                                Tư vấn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block"><DarkSpacing/></div>

            {/* Thẻ divcha */}
            <div className="w-full bg-[#e7e5e4] mt-14 md:mt-0">
                {/* divcon */}
                <div
                    className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto pb-14 px-4 sm:px-6 lg:px-8 flex flex-wrap lg:flex-nowrap items-start justify-between">
                    {/* divl */}
                    <div className="w-full lg:w-[44%] mb-8 lg:mb-0 text-center sm:text-left">
                        {/* divtext */}
                        <div className="mb-6">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                            <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#FFFFFF] mt-2">Dịch
                                vụ cung cấp</h2>
                        </div>

                        {/* divdesc */}
                        {[
                            {
                                title: "Thi công nội thất",
                                description:
                                    "Cung cấp dịch vụ thi công nội thất chuyên nghiệp, đảm bảo chất lượng và thẩm mỹ cao, mang lại không gian sống hoàn hảo cho khách hàng.",
                            },
                            {
                                title: "Xây nhà trọn gói",
                                description:
                                    "Dịch vụ xây nhà trọn gói từ thiết kế đến thi công, cam kết đáp ứng mọi yêu cầu về công năng và phong cách, mang lại không gian sống tiện nghi và hiện đại.",
                            },
                            {
                                title: "Sửa nhà trọn gói",
                                description:
                                    "Dịch vụ sửa chữa và nâng cấp nhà toàn diện, tối ưu chi phí và thời gian, mang đến không gian sống mới mẻ và tiện nghi cho khách hàng.",
                            },

                        ].map((service, index) => (
                            <div key={index} className="mb-10 text-center sm:text-left mx-auto w-[330px] sm:w-[500px]">
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


            <div className="hidden md:block"><DarkSpacing/></div>

            <ProjectSection/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <BlogSection/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ContactSection/>
            <div className="hidden md:block"><DarkSpacing/></div>
        </main>
    );
};

export default Construction;