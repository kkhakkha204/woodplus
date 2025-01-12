import React, { useState } from 'react';
import { TbArrowForwardUp } from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import GiaTriSection from "../components/GiaTriSection";
import ContactSection from "../components/ContactSection";
import Partner from "../components/Partner";


const AboutUs = () => {
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
                    <div
                        className="w-full h-[100px] bg-[#0F0F0F] border-y-[2px] border-white flex items-center justify-center">
    <span
        className="text-[36px] sm:text-[46px] md:text-[52px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-center ">
        Khám phá thương hiệu <span
        className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">WoodPlus</span>
    </span>
                    </div>


                    {/* Thẻ divbot */}
                    <div
                        className="w-full max-w-[1620px] h-[calc(50%-50px)] grid grid-cols-1 lg:grid-cols-2 justify-between items-center ">
                        {/* Mô tả bên trái */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-[15px] tracking-[0.01rem] sm:text-[16px] md:text-[18px] lg:text-[22px] max-w-[250px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] 2xl:max-w-[450px] mx-auto lg:mt-[200px] text-center lg:text-left text-white">We
                                are a passionate team committed to <br/>delivering
                                the best products and services to our customers. Our mission is to bring quality
                                and innovation to every home.</p>
                        </div>

                        {/* Nút liên hệ và tư vấn */}
                        <div className="text-center lg:flex justify-start lg:justify-end lg:mt-[230px] space-x-1">
                            {/* Nút Liên hệ */}
                            <button
                                className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[125px] md:h-[45px] bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                onMouseEnter={() => setIsHovered(true)} // Thay đổi trạng thái khi hover
                                onMouseLeave={() => setIsHovered(false)} // Trở lại trạng thái ban đầu khi rời chuột
                            >
                                {/* Hiển thị icon nếu chưa hover */}
                                {!isHovered ? (
                                    <TbArrowForwardUp
                                        className="inline-block text-[25px] "/>
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

            <section>
                <div
                    className="mx-auto max-w-[1020px] px-8  md:px-12 lg:px-16 divide-y prose text-white prose-sm prose-headings:font-normal prose-headings:text-xl space-y-12">
                    <div className="text-center mb-12">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70] ">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2">Lịch Sử WoodPlus</h2>

                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 ">
                        <div>
                            <div className="lg:sticky lg:pb-16 top-0">
                                <div className="pt-2 ">
                                    <p className="text-[16px] sm:text-[22px]">2005 - 2010</p>
                                    <h1 className="text-[18px] sm:text-[20px] text-[#BEAB81]">Đặt nền móng</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 pt-2">
                            <div className="flex-shrink-0">
                                <div className="mx-auto "><img className="aspect-[4/3] object-cover"
                                                               src="/assets/images/aboutus/aboutus4.jpg"
                                                               alt="#_"/>
                                    <p className="text-center line-clamp-4 text-[13px] sm:text-[17px] text-[#CECECE]">Giai đoạn này đánh dấu sự ra đời của thương hiệu với tầm nhìn mang đến những giải pháp thiết kế nội thất độc đáo và hiện đại. Ban đầu, công ty chỉ tập trung vào các dự án nhỏ như căn hộ và nhà phố, nhưng với sự đam mê và nỗ lực không ngừng, chúng tôi đã xây dựng được đội ngũ sáng tạo và gây dựng niềm tin từ những khách hàng đầu tiên.

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 ">
                        <div>
                            <div className="lg:sticky lg:pb-16 top-0">
                                <div className="pt-2 ">
                                    <p className="text-[16px] sm:text-[22px]">2011 - 2018</p>
                                    <h1 className="text-[18px] sm:text-[20px] text-[#BEAB81]">Vươn xa</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 pt-2">
                            <div className="flex-shrink-0">
                                <div className="mx-auto "><img className="aspect-[4/3] object-cover"
                                                               src="/assets/images/herosection/hero3.webp"
                                                               alt="#_"/>
                                    <p className="text-center line-clamp-4 text-[13px] sm:text-[17px] text-[#CECECE]">Đây là thời kỳ bùng nổ với hàng loạt dự án lớn tại các thành phố lớn. Công ty mở rộng quy mô, đầu tư vào công nghệ thiết kế 3D tiên tiến và xây dựng mối quan hệ hợp tác với các đối tác cung cấp vật liệu nội thất cao cấp. Những công trình nổi bật như biệt thự, showroom và khách sạn sang trọng đã khẳng định vị thế thương hiệu trên thị trường.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 ">
                        <div>
                            <div className="lg:sticky lg:pb-16 top-0">
                                <div className="pt-2 ">
                                    <p className="text-[16px] sm:text-[22px]">2019 - nay</p>
                                    <h1 className="text-[18px] sm:text-[20px] text-[#BEAB81]">Hướng đến tương lai</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 pt-2">
                            <div className="flex-shrink-0">
                                <div className="mx-auto ">
                                    <p className="text-center line-clamp-4 text-[13px] sm:text-[17px] text-[#CECECE]">Công ty tập trung vào việc ứng dụng công nghệ thông minh trong thiết kế nội thất, như hệ thống nhà thông minh (smart home) và vật liệu bền vững. Ngoài ra, chúng tôi không ngừng đổi mới phong cách thiết kế để phù hợp với xu hướng toàn cầu, mang lại những không gian sống không chỉ đẹp mà còn tối ưu công năng và thân thiện với môi trường.</p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <DarkSpacing/>

            <div className="">

                <section id="features"
                         className="relative block px-6 md:px-10">





                    <div
                        className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-3">
                        <div className=" px-8 text-center shadow">

                            <h3 className="mt-1 text-[16px] sm:text-[22px] text-[#BeAB81]">Giá trị cốt lõi</h3>
                            <p className="my-1 mb-0 text-[13px] sm:text-[14px] lg:text-[17px] font-normal text-[#CECECE]">Tailor your
                                landing page's
                                look
                                and feel, from the color scheme to the font size, to the design of the page.
                            </p>
                        </div>


                        <div className=" px-8 text-center shadow">

                            <h3 className="mt-1 text-[16px] sm:text-[22px] text-[#BeAB81]">Tầm nhìn</h3>
                            <p className="my-1 mb-0 text-[13px] sm:text-[14px] lg:text-[17px] font-normal text-[#CECECE]">Tailor your
                                landing page's
                                look
                                and feel, from the color scheme to the font size, to the design of the page.
                            </p>
                        </div>


                        <div className=" px-8 text-center shadow">

                            <h3 className="mt-1 text-[16px] sm:text-[22px] text-[#BeAB81]">Sứ mệnh</h3>
                            <p className="my-1 mb-0 text-[13px] sm:text-[14px] lg:text-[17px] font-normal text-[#CECECE]">Tailor your
                                landing page's
                                look
                                and feel, from the color scheme to the font size, to the design of the page.
                            </p>
                        </div>
                    </div>
                    {/* Nút liên hệ và tư vấn */}
                    <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                        {/* Nút Liên hệ */}
                        <button
                            className=" w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {!isHovered ? (
                                <TbArrowForwardUp className="inline-block text-[25px]"/>
                            ) : (
                                "Liên hệ"
                            )}
                        </button>

                        {/* Nút Tư vấn */}
                        <button
                            className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                        >
                            Tư vấn
                        </button>
                    </div>
                </section>
            </div>

            <DarkSpacing/>

            <div className="w-full bg-[#e7e5e4] text-white ">
                {/* Section Đội ngũ WoodPlus */}
                <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto pb-[40px]">
                    {/* Thẻ divtext */}
                    <div className="text-center mb-12">
                        <h2 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70] ">WoodPlus</h2>
                        <h1 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2">Đội ngũ của
                            WoodPlus</h1>
                        <p className="mx-auto w-[350px] sm:w-[700px] text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                            Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                            soluta qui assumenda aliquam quo deserunt quidem? Ut libero doloresSit debitis ab
                            officia nihil At quam atque sed cupiditate obcaecati.
                        </p>
                    </div>

                    {/* Thẻ đội ngũ */}
                    <div
                        className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">

                        <div className="grid gap-16 lg:grid-cols-3">
                        <div>
                                <div
                                    className="relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-64 mx-auto sm:w-80 lg:w-full h-72 sm:h-96 lg:h-64 xl:h-96"
                                        src="/assets/images/aboutus/aboutus4.jpg"
                                        alt="Person"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">
                                            Oliver Aguilerra
                                        </p>
                                        <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Vincent Van Gogh’s most popular painting, The Starry Night.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-64 mx-auto sm:w-80 lg:w-full h-72 sm:h-96 lg:h-64 xl:h-96"
                                        src="/assets/images/aboutus/aboutus4.jpg"
                                        alt="Person"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">
                                            Oliver Aguilerra
                                        </p>
                                        <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Vincent Van Gogh’s most popular painting, The Starry Night.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <div
                                    className="relative overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                                    <img
                                        className="object-cover w-64 mx-auto sm:w-80 lg:w-full h-72 sm:h-96 lg:h-64 xl:h-96"
                                        src="/assets/images/aboutus/aboutus4.jpg"
                                        alt="Person"
                                    />
                                    <div
                                        className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                                        <p className="mb-1 text-lg font-bold text-gray-100">
                                            Oliver Aguilerra
                                        </p>
                                        <p className="mb-4 text-xs text-gray-100">Product Manager</p>
                                        <p className="mb-4 text-xs tracking-wide text-gray-400">
                                            Vincent Van Gogh’s most popular painting, The Starry Night.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Nút liên hệ và tư vấn */}
                    <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                        {/* Nút Liên hệ */}
                        <button
                            className=" w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {!isHovered ? (
                                <TbArrowForwardUp className="inline-block text-[25px]"/>
                            ) : (
                                "Liên hệ"
                            )}
                        </button>

                        {/* Nút Tư vấn */}
                        <button
                            className="w-[100px] h-[35px] sm:w-[125px] sm:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                        >
                            Tư vấn
                        </button>
                    </div>

                </div>
            </div>


            <DarkSpacing/>


            <Partner/>

            <DarkSpacing/>

            <ContactSection/>

        </main>
    );
};

export default AboutUs;
