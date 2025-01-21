import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import LightProjectSection from "../components/LightProjectSection";
import ProjectSection from "../components/ProjectSection";
import {Link} from "react-router-dom";
import BlogSection from "../components/BlogSection";
import ContactPopup from "../components/ContactPopup";

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
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

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
                        <div className="w-[180%] sm:w-[50%] h-[70%] sm:h-[100px] bg-[#0F0F0F] border-l-2 border-y-2">
                            <span
                                className="pl-5 sm:pl-8 text-[32px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-left sm:text-center tracking-[2%]">Dịch vụ<span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> thi công</span></span>
                        </div>
                    </div>


                    {/* Thẻ divbot */}
                    <div
                        className="w-full xl:max-w-[1350px] 2xl:max-w-[1620px] h-[calc(50%-50px)] grid grid-cols-1 lg:grid-cols-2 justify-between items-center ">
                        {/* Mô tả bên trái */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-[15px] tracking-[0.01rem] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[330px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] 2xl:max-w-[450px] mx-auto lg:mt-[150px] text-center lg:text-left text-white">
                                WoodPlus cam kết thi công nội thất chuyên nghiệp, đáng tin cậy. Với đội ngũ tay nghề cao
                                và quy trình chuẩn hóa, chúng tôi tạo nên không gian sống tiện nghi, thẩm mỹ và bền
                                vững, đáp ứng mọi nhu cầu của gia chủ.
                            </p>
                        </div>

                        {/* Nút liên hệ và tư vấn */}
                        <div
                            className="text-center sm:mt-[200px] space-x-1 flex justify-center md:justify-end items-center">
                            {/* Nút Liên hệ */}
                            <Link
                                to="/projects"
                                className="w-[100px] h-[35px] sm:w-[115px] sm:h-[36px] lg:w-[125px] lg:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                {/* Hiển thị icon trên màn hình lớn */}
                                <span className="hidden lg:inline text-[18px]">
        {!isHovered ? (
            <TbArrowForwardUp className="inline-block text-[25px]" />
        ) : (
            "Xem dự án"
        )}
    </span>

                                {/* Hiển thị chữ trên điện thoại và máy tính bảng */}
                                <span className="lg:hidden text-[14px] sm:text-[15px] font-semibold">
        Xem dự án
    </span>
                            </Link>


                            {/* Nút Tư vấn */}
                            <Link
                                to="/liên-hệ"
                                className="w-[100px] h-[35px] sm:w-[115px] sm:h-[36px] lg:w-[125px] lg:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[15px] lg:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
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
                                        We are strategists, designers and developers. Innovators and problem
                                        solvers. Small enough to be simple and quick, but big enough to deliver the
                                        scope you want

                                    </p>
                                </div>
                                <div
                                    className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#BEAB81] text-4xl font-bold font-manrope leading-normal">33+</h3>
                                        <h6 className="text-[#CECECE] text-base font-normal leading-relaxed">Years of
                                            Experience</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#BEAB81] text-4xl font-bold font-manrope leading-normal">33+</h3>
                                        <h6 className="text-[#CECECE] text-base font-normal leading-relaxed">Years of
                                            Experience</h6>
                                    </div>
                                    <div className="flex-col justify-start items-start inline-flex">
                                        <h3 className="text-[#BEAB81] text-4xl font-bold font-manrope leading-normal">33+</h3>
                                        <h6 className="text-[#CECECE] text-base font-normal leading-relaxed">Years of
                                            Experience</h6>
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
        </main>
    );
};

export default Construction;