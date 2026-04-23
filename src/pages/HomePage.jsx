import React from "react";


import {TbArrowForwardUp,} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import {Link} from "react-router-dom";
import Testimonials from "../components/Testimonials";
import ContactPopup from "../components/ContactPopup";

import ZaloChatButton from "../components/ZaloChatButton";
import ServicesSection from "../components/ServicesSection";
import Hotline from "../components/Hotline";
import BackToTop from "../components/BackToTop";
import {useSEO} from "../hooks/useSEO";
import SEO from "../components/SEO";


const HomePage = () => {
    const { seoData } = useSEO('/');

    const defaultSEO = {
        metaTitle: 'Wood Plus - Thi công nội thất gỗ cao cấp',
        metaDescription: 'Chuyên thiết kế và thi công nội thất gỗ cao cấp tại Việt Nam',
        metaKeywords: ['nội thất gỗ', 'thi công nội thất', 'thiết kế nội thất']
    };

    const seo = seoData || defaultSEO;
    return (
        <>

            <SEO
                title={seo.metaTitle}
                description={seo.metaDescription}
                keywords={seo.metaKeywords || []}
                ogImage={seo.ogImage}
                ogTitle={seo.ogTitle}
                ogDescription={seo.ogDescription}
                pathname="/"
            />

        <main className="bg-[#0F0F0F]">
            {/* HeroSection */}
            <div
                className="h-[640px] sm:h-[700px] lg:h-[780px] xl:h-[830px] 2xl:h-[850px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/homepage/homePageHero1.jpg')",
                        filter: "brightness(0.85)",
                    }}
                ></div>

                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Nội dung chính */}
                <div
                    className="container mx-auto w-full max-w-[1620px] h-full flex flex-col justify-center items-center text-white relative z-10 pt-28" >


                    <p className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] font-semibold text-center italic tracking-wide">
                        Tư vấn thiết kế, thi công kiến trúc - nội thất
                    </p>

                    {/* Thương hiệu */}
                    <h1 className="text-[57px] sm:text-[75px] md:text-[83px] lg:text-[87px] xl:text-[95px] 2xl:text-[100px] text-center  font-bold uppercase mt-2">
                        WOODPLUS
                    </h1>

                    {/* Giá trị thương hiệu */}
                    <h2 className="text-[18.5px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] text-center font-semibold tracking-wide -mt-3.5">
                        Đồng hành - Trung thực - Tận tâm
                    </h2>

                    {/* Định nghĩa về công trình tốt */}
                    <p className="text-center text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-4 max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[600px] 2xl:max-w-[700px] leading-relaxed">
                        Một công trình tốt là công trình đẹp về <span
                        className=" ">thẩm mỹ</span>,
                        cá nhân hóa để phù hợp với <span className=" ">chủ nhà.</span> Đồng hành cùng Woodplus để kiến tạo không gian sống đáng tự hào của bạn!
                    </p>



                    <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                        {/* Nút Liên hệ */}
                        <Link
                            to="/projects"
                            className="w-[100px] h-[35px] sm:w-[115px] sm:h-[36px] lg:w-[125px] lg:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"

                        >
        <span className="hidden lg:inline text-[18px]">
            <TbArrowForwardUp className="inline-block text-[25px]"/>
        </span>

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
                {/* Thẻ div nằm tận cùng bên dưới của section */}
                <div
                    className="absolute bottom-0 w-full h-[60px] lg:h-[80px] bg-[#272727] bg-opacity-50 backdrop-blur-[2.5px] border-y-[1px] border-[#757575] flex justify-between">
                    <div
                        className="relative bottom-0 w-full max-w-[1200px] mx-6 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-auto h-[80px] bg-opacity-0 flex justify-between items-center">
                        {/* Dòng Tư vấn miễn phí */}
                        <p className="text-[#B2A384] text-[11px] sm:text-[13px] lg:text-[16px] 2xl:text-[18px] font-medium mb-5 text-center lg:mb-0 ">Tư
                            vấn miễn phí</p>

                        {/* Dòng Bảo đảm tiến độ, căn giữa */}
                        <p className="text-[#B2A384] text-[11px] sm:text-[13px] lg:text-[16px] 2xl:text-[18px] font-medium text-center mb-5 lg:mb-0">Không
                            phát sinh <br/>chi phí - tiến độ</p>

                        {/* Dòng Không chi phí phát sinh */}
                        <p className="text-[#B2A384] text-[11px] sm:text-[13px] lg:text-[16px] 2xl:text-[18px] font-medium text-center mb-5 lg:mb-0">Trung thực trong <br/>sản phẩm</p>

                    </div>
                </div>
            </div>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ProjectSection/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ServicesSection/>

            <LightSpacing/>

            <div className="w-full flex bg-[#e7e5e4] justify-center items-center ">
                <div className="w-full max-w-[1620px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (divl) */}
                    <div className="flex flex-col justify-center items-start lg:col-span-1 ">
                        <div className="w-full flex flex-col justify-center items-center text-center">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                            <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#222222] ">Về
                                WoodPlus</h2>
                            <p className="w-[300px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#535353] mt-4">
                                Công ty CP Kiến trúc - Nội thất Woodplus là đơn vị uy tín hàng đầu trong lĩnh vực tư vấn thiết kế, thi công nội – ngoại thất tại khu vực phía Bắc. Với gần 10 năm kinh nghiệm và hàng trăm công trình đã hoàn thiện, Woodplus chuyên gia trong biệt thự, duplex – penthouse, liền kề, chung cư, văn phòng, quán cafe…, mang đến không gian sống đẳng cấp và tinh tế.
                            </p>

                            <p className="hidden lg:block w-[260px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#535353] mt-4">
                                Với dịch vụ thi công trọn gói – chìa khóa trao tay, đội ngũ Kiến trúc sư & Kỹ sư dày dặn kinh nghiệm của Woodplus cam kết quy trình minh bạch, trung thực, tận tâm trong từng sản phẩm. Chúng tôi đồng hành cùng khách hàng để hiện thực hóa không gian sống hoàn mỹ, bền vững và đầy cảm hứng.
                            </p>
                            <div className="flex lg:mt-12 space-x-1 ">
                                {/* Nút Liên hệ */}
                                <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                                    {/* Nút Liên hệ */}
                                    <Link
                                        to="/giới-thiệu"
                                        className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"

                                    >
                                        {/* Hiển thị icon trên màn hình lớn */}
                                        <span className="hidden sm:inline text-[18px]">
                                            <TbArrowForwardUp className="inline-block text-[25px]"/>
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


                        <div className="w-full mt-6 lg:mb-4">
                            <img
                                src="/assets/images/main/KTS-NTK-Noi-That-WoodPlus.jpg.webp"
                                alt="About Us"
                                className="w-[350px] h-[250px] mx-auto lg:ml-4 2xl:ml-0 sm:w-[490px] sm:h-[300px] md:w-[520px] md:h-[350px] lg:w-[600px] lg:h-[400px] 2xl:w-[650px] 2xl:h-[450px] object-cover grayscale"
                            />
                        </div>
                        <p className="text-center mx-auto lg:hidden w-[290px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#535353] mt-4">
                            Với dịch vụ thi công trọn gói – chìa khóa trao tay, đội ngũ Kiến trúc sư & Kỹ sư dày dặn kinh nghiệm của Woodplus cam kết quy trình minh bạch, trung thực, tận tâm trong từng sản phẩm. Chúng tôi đồng hành cùng khách hàng để hiện thực hóa không gian sống hoàn mỹ, bền vững và đầy cảm hứng.
                        </p>
                    </div>

                    {/* Right Column (divr) */}
                    <div className="lg:col-span-2 flex justify-center items-center lg:ml-8 2xl:ml-0">
                        <img
                            src="/assets/images/herosection/hero.jpg"
                            alt="About Us Right"
                            className=" w-[350px] h-[250px] mx-auto sm:w-[580px] sm:h-[350px] md:w-[640px] md:h-[420px] lg:w-[840px] lg:h-[750px] 2xl:w-[940px] 2xl:h-[850px] object-cover grayscale"

                        />
                    </div>
                </div>
            </div>


            <div className="hidden md:block"><DarkSpacing/></div>

            <Testimonials/>

            <LightSpacing/>
            <div className="w-full bg-[#e7e5e4] text-[#222] mt-14 md:mt-0">
                            {/* Section Đội ngũ WoodPlus */}
                            <div className="w-full max-w-[1620px] px-[10px] mx-auto pb-[40px]">
                                {/* Thẻ divtext */}
                                <div className="text-center mb-12">
                                    <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70] ">WoodPlus</h3>
                                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#222] mt-2">
                                        GÓI THIẾT KẾ</h2>
                                </div>
            
                                {/* Thẻ đội ngũ */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                                    <div className="flex justify-center items-center">
                                        <img
                                            src="/assets/images/herosection/thietke.webp"
                                            alt="Gói Thiết Kế Kiến Trúc WoodPlus"
                                            className="w-full h-auto object-contain "
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src="/assets/images/herosection/noithat.webp"
                                            alt="Gói Thiết Kế Nội Thất WoodPlus"
                                            className="w-full h-auto object-contain "
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src="/assets/images/herosection/tknt.webp"
                                            alt="Gói Thiết Kế VIP WoodPlus"
                                            className="w-full h-auto object-contain "
                                        />
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src="/assets/images/herosection/vip.webp"
                                            alt="Thiết Kế Trọn Gói WoodPlus"
                                            className="w-full h-auto object-contain "
                                        />
                                    </div>
                                </div>
                                {/* Nút liên hệ và tư vấn */}
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

            <div className="hidden md:block"><DarkSpacing/></div>

            <ContactSection/>

            <div className="hidden md:block"><DarkSpacing/></div>
            <ContactPopup/>
            <ZaloChatButton/>
            <Hotline/>
            <BackToTop/>
        </main>
        </>
    );
};

export default HomePage;
