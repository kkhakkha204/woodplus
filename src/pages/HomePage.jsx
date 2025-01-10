import React, {useState} from "react";


import {TbArrowForwardUp,} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import {Link} from "react-router-dom";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F]">
            {/* HeroSection */}
            <div
                className="h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[800px] 2xl:h-[900px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: "url('/assets/images/banner/banner1.jpg')", filter: "brightness(0.85)"}}
                ></div>

                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-15"></div>

                {/* Nội dung chính */}
                <div
                    className="container mx-auto w-full max-w-[1620px] h-full flex flex-col justify-center items-center text-white relative z-10">


                    {/* Dòng text phía trên */}
                    <p className=" text-[14px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-center italic ">
                        Công ty thiết kế – kiến trúc – thi công
                    </p>

                    {/* Câu slogan */}
                    <h1
                        className="text-[32px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] text-center font-bold"
                    >
                        Kiến tạo nhà đẹp tinh tế
                        <h1 className="-mt-3 2xl:-mt-7"
                        >
                            cùng với <span
                            className="-mt-4 lg:-mt-6 bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"
                        > WoodPlus
                        </span>
                        </h1>

                    </h1>
                    <p className="text-center text-[13px] 2xl:text-[20px] mt-2 max-w-[200px] 2xl:max-w-lg">
                        "Nhà không chỉ để ở, mà phải đẹp, phải khiến mọi người trầm trồ. Đến với WoodPlus, biến ngôi nhà
                        của bạn thành tổ ấm đáng tự hào."
                    </p>


                    <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                        {/* Nút Liên hệ */}
                        <Link
                            to="/dự-án"
                            className=" w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {!isHovered ? (
                                <TbArrowForwardUp className="inline-block text-[25px]"/>
                            ) : (
                                "Xem dự án"
                            )}
                        </Link>

                        {/* Nút Tư vấn */}
                        <Link
                            to="/liên-hệ"
                            className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                        >
                            Tư vấn
                        </Link>
                    </div>

                </div>
                {/* Thẻ div nằm tận cùng bên dưới của section */}
                <div
                    className="absolute bottom-0 w-full h-[60px] lg:h-[80px] bg-[#272727] bg-opacity-50 backdrop-blur-[2.5px] border-y-[1px] border-[#757575] flex justify-between">
                    <div
                        className="relative bottom-0 w-full max-w-[1200px] mx-2 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-auto h-[80px] bg-opacity-0 flex justify-between items-center">
                        {/* Dòng Tư vấn miễn phí */}
                        <p className="text-[#B2A384] text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium mb-5 lg:mb-0 ">Tư
                            vấn miễn phí</p>

                        {/* Dòng Bảo đảm tiến độ, căn giữa */}
                        <p className="text-[#B2A384] text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium text-center mb-5 lg:mb-0">Không
                            chi phí phát sinh</p>

                        {/* Dòng Không chi phí phát sinh */}
                        <p className="text-[#B2A384] text-[12px] sm:text-[14px] lg:text-[16px] 2xl:text-[18px] font-medium mb-5 lg:mb-0">Bảo
                            đảm tiến độ</p>

                    </div>
                </div>
            </div>

            <DarkSpacing/>

            <ProjectSection/>

            <DarkSpacing/>

            <div className="w-full flex justify-center items-center mb-[18px] pb-8">

                <div className="w-full max-w-[1620px]">

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        <div className="col-span-1 sm:col-span-3 text-center mb-8">
                            <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                            <h1 className="text-[34px] 2xl:text-[48px] font-medium text-white 2xl:mt-2">Dịch vụ</h1>
                            <p className="w-[300px] mx-auto sm:w-[450px] text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                WoodPlus mang đến các giải pháp trọn gói cho thiết kế và thi công nội thất, tập trung vào việc cá nhân hóa không gian sống, kết hợp hài hòa giữa công năng và thẩm mỹ. Chúng tôi đặc biệt nổi bật với các phong cách thời thượng như Indochine và Wabi Sabi, mang đến không gian sống đẳng cấp và thanh lịch.
                            </p>
                        </div>


                        <div className="flex-col justify-center sm:-mt-[150px]">
                            <Link to="/thiết-kế">
                                <img
                                    src="/assets/images/service/service3.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center">
                                <Link
                                    to="/thiết-kế"
                                    className="flex items-center justify-center font-medium text-[28px] text-[#BEAB81] mt-6 hover:text-white"
                                >
                                    Dịch vụ thiết kế
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[300px] sm:w-[400px] mx-auto text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                    Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                                    soluta qui assumenda aliquam quo deserunt quidem?
                                </p>
                            </div>
                        </div>


                        <div className="flex-col justify-center">
                            <Link to="/liên-hệ">
                                <img
                                    src="/assets/images/service/service1.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[600px] object-cover"
                                />
                            </Link>

                            <div className="text-center">
                                <Link
                                    to="/liên-hệ"
                                    className="flex items-center justify-center font-medium text-[28px] text-[#BEAB81] mt-6 hover:text-white"
                                >
                                    Dịch vụ trọn gói
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[300px] sm:w-[400px] mx-auto text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                    Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                                    soluta qui assumenda aliquam quo deserunt quidem?
                                </p>
                            </div>
                        </div>


                        <div className="flex-col sm:-mt-[150px] justify-center">
                            <Link to="/thi-công">
                                <img
                                    src="/assets/images/service/services2.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center">
                                <Link
                                    to="/thi-công"
                                    className="flex items-center justify-center font-medium text-[28px] text-[#BEAB81] mt-6 hover:text-white"
                                >
                                    Dịch vụ thi công
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[300px] sm:w-[400px] mx-auto text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                    Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                                    soluta qui assumenda aliquam quo deserunt quidem?
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <LightSpacing/>

            <div className="w-full flex bg-[#e7e5e4] justify-center items-center ">
                <div className="w-full max-w-[1620px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Left Column (divl) */}
                    <div className="flex flex-col justify-center items-start sm:col-span-1 ">
                        <div className="w-full flex flex-col justify-center items-center text-center">
                            <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                            <h1 className="text-[26px] 2xl:text-[48px] font-medium text-[#222222] ">Về WoodPlus</h1>
                            <p className="w-[300px] sm:w-full text-[13px] 2xl:text-[17px] font-normal text-[#535353] mt-4">
                                Công ty Cổ phần Nội Thất WoodPlus là đơn vị uy tín hàng đầu trong lĩnh vực tư vấn thiết
                                kế, thi công nội thất và ngoại thất tại Hà Nội và trên toàn quốc.
                            </p>

                            <p className="hidden sm:block w-[300px] sm:w-full text-[13px] 2xl:text-[17px] font-normal text-[#535353] mt-4">
                                Với hơn 8 năm kinh nghiệm, WoodPlus chuyên thực hiện các công trình dân dụng và công
                                cộng như nhà lô, biệt thự, nội thất chung cư, nhà hàng, quán cafe, văn phòng và dịch vụ xây nhà trọn gói.
                            </p>
                            <div className="flex sm:mt-12 space-x-1 ">
                                {/* Nút Liên hệ */}
                                <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                                    {/* Nút Liên hệ */}
                                    <Link
                                        to="/giới-thiệu"
                                        className=" w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                    >
                                        {!isHovered ? (
                                            <TbArrowForwardUp className="inline-block text-[25px]"/>
                                        ) : (
                                            "Xem thêm"
                                        )}
                                    </Link>

                                    {/* Nút Tư vấn */}
                                    <Link
                                        to="/liên-hệ"
                                        className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                                    >
                                        Tư vấn
                                    </Link>
                                </div>
                            </div>
                        </div>


                        <div className="w-full mt-6 sm:mb-4">
                            <img
                                src="/assets/images/aboutus/aboutus1.webp"
                                alt="About Us"
                                className="w-[350px] h-[250px] mx-auto sm:w-[650px] sm:h-[450px] object-cover grayscale"
                            />
                        </div>
                        <p className="text-center mx-auto sm:hidden w-[300px] sm:w-full text-[13px] 2xl:text-[17px] font-normal text-[#535353] mt-4">
                            Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                            soluta qui assumenda aliquam quo deserunt quidem? Ut libero doloresSit debitis ab
                            officia nihil At quam atque sed cupiditate obcaecati.
                        </p>
                    </div>

                    {/* Right Column (divr) */}
                    <div className="sm:col-span-2 flex justify-center items-center">
                        <img
                            src="/assets/images/aboutus/aboutus2.jpg"
                            alt="About Us Right"
                            className=" w-[350px] h-[250px] mx-auto sm:w-[940px] sm:h-[850px] object-cover grayscale"

                        />
                    </div>
                </div>
            </div>


            <DarkSpacing/>

            <Testimonials/>


            <DarkSpacing/>

            <ContactSection/>

            <DarkSpacing/>
        </main>
    );
};

export default HomePage;
