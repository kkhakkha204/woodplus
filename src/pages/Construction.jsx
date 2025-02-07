import React, {useEffect, useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";

import ContactSection from "../components/ContactSection";

import ProjectSection from "../components/ProjectSection";
import {Link} from "react-router-dom";
import BlogSection from "../components/BlogSection";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";

const Construction = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

// Kiểm tra nếu đang dùng điện thoại
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    return (
        <main className="bg-[#0F0F0F] ">
            {/* Hero Section */}
            <div
                className="relative w-full h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[750px] 2xl:h-[800px] bg-cover bg-center">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/banner/banner1.jpg')",
                        filter: "brightness(0.85)",
                    }}
                ></div>
                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Nội dung chính */}
                <div className="relative z-10 flex flex-col justify-between items-center text-white w-full h-full">
                    {/* Phần trên */}
                    <div className="w-full flex-grow flex justify-center items-center px-4 text-center"></div>

                    {/* Dòng chữ nổi bật */}
                    <div className="w-full h-[100px] flex items-center justify-center">
                        {/* divcutr */}
                        <div className="w-[25%] sm:w-[50%] h-[100px] relative">
                            {/* Đường line chia đôi chiều cao của divcutr */}
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>
                        </div>

                        {/* divcutl */}
                        <div
                            className="w-[75%] sm:w-[50%] h-[70px] sm:h-[100px] bg-[#0F0F0F] border-l-2 border-y-2 flex items-center justify-start px-4 sm:px-8">
                        <span
                            className="text-[28px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[52px] font-bold tracking-[1px]">
                            Dịch vụ{" "}
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">
                                thi công
                            </span>
                        </span>
                        </div>
                    </div>

                    {/* Phần dưới */}
                    <div
                        className="w-full xl:max-w-[1350px] 2xl:max-w-[1620px] px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {/* Mô tả thương hiệu */}
                        <div className="text-center lg:text-left max-w-[500px] mx-auto lg:mx-0">
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white leading-relaxed">
                                WoodPlus cam kết{" "}
                                <strong className="text-[#D8CCA6]">thi công nội thất chuyên nghiệp, đáng tin
                                    cậy</strong>.
                                Với đội ngũ tay nghề cao và quy trình chuẩn hóa, chúng tôi tạo nên không gian sống tiện
                                nghi,
                                thẩm mỹ và bền vững, đáp ứng mọi nhu cầu của gia chủ.
                            </p>
                        </div>

                        {/* Nút "Xem Dự Án" và "Liên Hệ" */}
                        <div className="flex justify-center lg:justify-end items-center space-x-2">
                            {/* Nút Xem Dự Án */}
                            <Link
                                to="/projects"
                                className="w-[110px] sm:w-[125px] lg:w-[140px] h-[40px] sm:h-[45px] lg:h-[50px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[16px] sm:text-[18px] rounded-l-lg border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                onMouseEnter={() => !isMobile && setIsHovered(true)}
                                onMouseLeave={() => !isMobile && setIsHovered(false)}
                            >
                            <span className="hidden lg:inline text-[18px]">
                                {!isHovered ? (
                                    <TbArrowForwardUp className="inline-block text-[25px]"/>
                                ) : (
                                    "Xem dự án"
                                )}
                            </span>
                                <span className="lg:hidden text-[15px] font-semibold">Xem dự án</span>
                            </Link>

                            {/* Nút Liên Hệ */}
                            <Link
                                to="/liên-hệ"
                                className="w-[110px] sm:w-[125px] lg:w-[140px] h-[40px] sm:h-[45px] lg:h-[50px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[18px] italic rounded-r-lg border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                            >
                                Liên hệ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block"><DarkSpacing/></div>

            <section className="pt-14 md:pt-0 relative">
                <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                    <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                        <div
                            className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                            <div
                                className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                                <img className="  object-cover"
                                     src="https://pagedone.io/asset/uploads/1717741205.png" alt="about Us image"/>
                            </div>
                            <img className="sm:ml-0 ml-auto object-cover"
                                 src="https://pagedone.io/asset/uploads/1717741215.png"
                                 alt="about Us image"/>
                        </div>
                        <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-center items-start gap-8 flex">
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h3 className="text-center md:text-left font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                                    <h2 className="text-center md:text-left text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-bold text-[#FFFFFF] mt-2">Chất
                                        lượng được khẳng định</h2>
                                    <p className="text-center md:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#CECECE] font-normal">
                                        Chất lượng của WoodPlus được khẳng định qua từng công trình hoàn thiện – từ bản
                                        vẽ đến thi công thực tế.
                                        Chúng tôi cam kết sử dụng vật liệu cao cấp, áp dụng công nghệ thi công hiện đại,
                                        và đảm bảo độ chính xác tuyệt đối trong từng chi tiết.
                                    </p>


                                </div>
                                <div
                                    className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#BEAB81] text-4xl font-bold font-manrope leading-normal">1000+</h3>
                                        <h6 className="text-[#CECECE] text-base font-normal leading-relaxed">Dự án</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#BEAB81] text-4xl font-bold font-manrope leading-normal">998</h3>
                                        <h6 className="text-[#CECECE] text-base font-normal leading-relaxed">Dự án hoàn
                                            thành</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#BEAB81] text-4xl font-bold font-manrope leading-normal">98%</h3>
                                        <h6 className="text-[#CECECE] text-base font-normal leading-relaxed">Khách hàng
                                            hài lòng</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                                {/* Nút Liên hệ */}
                                <Link
                                    to="/liên-hệ"
                                    className="w-[130px] sm:w-[150px] md:w-[200px] h-[40px] md:h-[45px] bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[16px] md:text-[18px] italic rounded-xl border border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300 flex items-center justify-center"
                                >
                                    Tư vấn miễn phí
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="hidden md:block"><DarkSpacing/></div>

            <ProjectSection/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <BlogSection/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ContactSection/>
            <div className="hidden md:block"><DarkSpacing/></div>
            <ContactPopup/>
            <ZaloChatButton/>
        </main>
    );
};

export default Construction;