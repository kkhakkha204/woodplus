import React, {useState} from "react";


import {TbArrowForwardUp,} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import {Link} from "react-router-dom";
import Testimonials from "../components/Testimonials";
import ContactPopup from "../components/ContactPopup";
import Stat from "../components/Stat";


const HomePage = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F]">
            {/* HeroSection */}
            <div
                className="h-[640px] sm:h-[700px] lg:h-[780px] xl:h-[830px] 2xl:h-[850px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <video
                    className=" absolute inset-0 w-full h-full object-cover"
                    src="/assets/videos/video3.mp4" // Đường dẫn đến video của bạn
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>

                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Nội dung chính */}
                <div
                    className="container mx-auto w-full max-w-[1620px] h-full flex flex-col justify-center items-center text-white relative z-10">


                    {/* Dòng text phía trên */}
                    <p className=" text-[15px] sm:text-[18px] md:text-[20px] lg:text-[20px] xl:text-[24px] 2xl:text-[28px] font-bold text-center italic ">
                        Công ty thiết kế – kiến trúc – thi công
                    </p>

                    {/* Câu slogan */}
                    <h1
                        className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] text-center font-bold"
                    >
                        Xây nhà đẹp tinh tế
                        <h1 className="-mt-3 2xl:-mt-7"
                        >
                            đến với <span
                            className="-mt-4 lg:-mt-6 bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"
                        > WoodPlus
                        </span>
                        </h1>

                    </h1>
                    <p className="text-center text-[14px] tracking-[0.01rem] sm:text-[15px] md:text-[17px] lg:text-[20px] mt-2 max-w-[280px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] 2xl:max-w-[450px]">
                        Một ngôi nhà phải đẹp, khiến mọi người trầm trồ. Đồng hành với woodplus xây dựng một công trình đáng tự hào.
                    </p>


                    <div className="text-center mt-12 space-x-1 flex justify-center items-center">
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
                {/* Thẻ div nằm tận cùng bên dưới của section */}
                <div
                    className="absolute bottom-0 w-full h-[60px] lg:h-[80px] bg-[#272727] bg-opacity-50 backdrop-blur-[2.5px] border-y-[1px] border-[#757575] flex justify-between">
                    <div
                        className="relative bottom-0 w-full max-w-[1200px] mx-6 sm:mx-12 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-auto h-[80px] bg-opacity-0 flex justify-between items-center">
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

            <div className="hidden md:block"><DarkSpacing/></div>

            <ProjectSection/>

            <div className="hidden md:block"><DarkSpacing/></div>


            <div className="w-full flex justify-center items-center mb-[18px] pt-14 md:pt-0 pb-8">

                <div className="w-full max-w-[1620px]">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        <div className="col-span-1 lg:col-span-3 text-center lg:mb-8">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                            <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Dịch
                                vụ</h2>
                            <p className="w-[330px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                                WoodPlus mang đến giải pháp trọn gói cho thiết kế và thi công nội thất,
                                cá nhân hóa không gian sống, kết hợp hài hòa giữa công năng và thẩm mỹ.
                            </p>
                        </div>


                        <div className="flex-col justify-center lg:-mt-[150px] mb-4 lg:ml-8 2xl:ml-0 relative">
                            <Link to="/thiết-kế">
                                <img
                                    src="/assets/images/service/service3.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div
                                className="divtext absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 text-center pb-1">
                                <Link
                                    to="/thiết-kế"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[34px] text-[#BEAB81] hover:text-white"
                                >
                                    Dịch vụ thiết kế
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Chúng tôi mang đến những ý tưởng thiết kế sáng tạo, độc đáo, phù hợp với phong cách và nhu cầu riêng của từng khách hàng, tạo nên không gian sống hoàn hảo.
                                </p>
                            </div>
                        </div>


                        <div className="flex-col justify-center mb-4 relative">
                            <Link to="/trọn-gói">
                                <img
                                    src="/assets/images/service/service1.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center absolute bottom-0 left-0 w-full bg-[#0F0F0F] bg-opacity-85 pb-1">
                                <Link
                                    to="/trọn-gói"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[34px] text-[#BEAB81] hover:text-white"
                                >
                                    Xây dựng trọn gói
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Từ ý tưởng đến hoàn thiện, chúng tôi cung cấp giải pháp toàn diện, đảm bảo mọi chi tiết được thực hiện đồng bộ, chuyên nghiệp và đúng tiến độ.
                                </p>
                            </div>
                        </div>

                        <div className="flex-col lg:-mt-[150px] justify-center mb-4 lg:mr-4 2xl:mr-0 relative">
                            <Link to="/thi-công">
                                <img
                                    src="/assets/images/service/services2.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 pb-1">
                                <Link
                                    to="/thi-công"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[34px] text-[#BEAB81] hover:text-white"
                                >
                                    Thi công nội thất
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Đội ngũ thi công lành nghề của chúng tôi cam kết biến bản vẽ thiết kế thành hiện thực với chất lượng cao và sự tỉ mỉ trong từng công đoạn.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <LightSpacing/>

            <div className="w-full flex bg-[#e7e5e4] justify-center items-center ">
                <div className="w-full max-w-[1620px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (divl) */}
                    <div className="flex flex-col justify-center items-start lg:col-span-1 ">
                        <div className="w-full flex flex-col justify-center items-center text-center">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                            <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#222222] ">Về
                                WoodPlus</h2>
                            <p className="w-[300px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#535353] mt-4">
                                Công ty Cổ phần Nội Thất WoodPlus là đơn vị uy tín hàng đầu trong lĩnh vực tư vấn thiết
                                kế, thi công nội thất và ngoại thất tại Hà Nội và trên toàn quốc.
                            </p>

                            <p className="hidden lg:block w-[260px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#535353] mt-4">
                                Với hơn 8 năm kinh nghiệm, WoodPlus chuyên thực hiện các công trình dân dụng và công
                                cộng như nhà lô, biệt thự, nội thất chung cư, nhà hàng, quán cafe, văn phòng và dịch vụ xây nhà trọn gói.
                            </p>
                            <div className="flex lg:mt-12 space-x-1 ">
                                {/* Nút Liên hệ */}
                                <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                                    {/* Nút Liên hệ */}
                                    <Link
                                        to="/giới-thiệu"
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


                        <div className="w-full mt-6 lg:mb-4">
                            <img
                                src="/assets/images/aboutus/aboutus4.jpg"
                                alt="About Us"
                                className="w-[350px] h-[250px] mx-auto lg:ml-4 2xl:ml-0 sm:w-[490px] sm:h-[300px] md:w-[520px] md:h-[350px] lg:w-[600px] lg:h-[400px] 2xl:w-[650px] 2xl:h-[450px] object-cover grayscale"
                            />
                        </div>
                        <p className="text-center mx-auto lg:hidden w-[290px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#535353] mt-4">
                            Với hơn 8 năm kinh nghiệm, WoodPlus chuyên thực hiện các công trình dân dụng và công
                            cộng như nhà lô, biệt thự, nội thất chung cư, nhà hàng, quán cafe, văn phòng và dịch vụ xây
                            nhà trọn gói.
                        </p>
                    </div>

                    {/* Right Column (divr) */}
                    <div className="lg:col-span-2 flex justify-center items-center lg:ml-8 2xl:ml-0">
                        <img
                            src="/assets/images/aboutus/aboutus5.jpg"
                            alt="About Us Right"
                            className=" w-[350px] h-[250px] mx-auto sm:w-[580px] sm:h-[350px] md:w-[640px] md:h-[420px] lg:w-[840px] lg:h-[750px] 2xl:w-[940px] 2xl:h-[850px] object-cover grayscale"

                        />
                    </div>
                </div>
            </div>
            <Stat/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <Testimonials/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ContactSection/>

            <div className="hidden md:block"><DarkSpacing/></div>
            <ContactPopup/>
        </main>
    );
};

export default HomePage;
