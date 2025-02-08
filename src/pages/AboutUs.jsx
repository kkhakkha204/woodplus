import React, { useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";
import Partner from "../components/Partner";
import {Link} from "react-router-dom";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import Hotline from "../components/Hotline";


const AboutUs = () => {
    const [isHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F] ">
            {/* Hero Section */}
            <div
                className="relative w-full h-[650px] sm:h-[650px] lg:h-[750px] xl:h-[800px] 2xl:h-[800px] bg-cover bg-center">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/aboutus/aboutus.jpg')",
                        filter: "brightness(0.85) grayscale(1)",
                    }}
                ></div>
                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                {/* Nội dung chính */}
                <div className="relative z-10 flex flex-col justify-between items-center text-white w-full h-full">
                    {/* Phần trên */}
                    <div className="w-full flex-grow flex justify-center items-center px-4 text-center">
                        {/* Không có nội dung ở đây trong bản gốc, có thể thêm logo hoặc tagline */}
                    </div>

                    {/* Dòng chữ nổi bật */}
                    <div className="w-full bg-[#0F0F0F] border-y-2 border-white flex items-center justify-center py-6 ">
                    <span
                        className="text-[28px] sm:text-[40px] md:text-[50px] lg:text-[58px] xl:text-[64px] font-bold text-center">
                        Thương hiệu{" "}
                        <span
                            className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">
                            WoodPlus
                        </span>
                    </span>
                    </div>

                    {/* Phần dưới */}
                    <div
                        className="w-full xl:max-w-[1350px] 2xl:max-w-[1620px] px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {/* Mô tả thương hiệu */}
                        <div className="text-center lg:text-left max-w-[500px] mx-auto lg:mx-0">
                            <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white leading-relaxed">
                                <strong className="text-[#D8CCA6]">"Đồng hành - Trung thực - Tận tâm"</strong> là tôn chỉ giúp Woodplus khẳng định uy tín trong lòng khách hàng,từ đó không chỉ kiến tạo không gian sống tinh tế mà còn khẳng định giá trị riêng của mỗi chủ nhà.</p>
                        </div>

                        {/* Nút "Xem Dự Án" và "Liên Hệ" */}
                        <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                            {/* Nút Liên hệ */}
                            <Link
                                to="/projects"
                                className="w-[100px] h-[35px] sm:w-[115px] sm:h-[36px] lg:w-[125px] lg:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"

                            >
                                {/* Hiển thị icon trên màn hình lớn */}
                                <span className="hidden lg:inline text-[18px]">
                    {isHovered ? "Xem dự án" : <TbArrowForwardUp className="inline-block text-[25px]"/>}
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

            <section>
                <div
                    className="pt-14 md:pt-0 mx-auto max-w-[1020px] px-8  md:px-12 lg:px-16 divide-y divide-[#757575] text-white space-y-12">
                    <div className="text-center mb-12">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Lịch
                            sử WoodPLus</h2>

                    </div>


                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 ">
                        <div>
                            <div className="lg:sticky lg:pb-16 top-0">
                                <div className="pt-2 ">
                                    <p className="text-[16px] sm:text-[22px]">2015 - 2018</p>
                                    <h1 className="text-[18px] sm:text-[20px] text-[#BEAB81]">Đặt nền móng</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 pt-2">
                            <div className="flex-shrink-0">
                                <div className="mx-auto "><img className="aspect-[4/3] object-cover"
                                                               src="/assets/images/aboutus/aboutus4.jpg" alt="#_"/>
                                    <p className="text-center mx-2 text-[13px] sm:text-[17px] text-[#CECECE] mt-2">Giai đoạn đánh dấu sự ra đời của thương hiệu Woodplus trên thị trường.
                                        Với mong muốn mang đến không gian sống tối ưu, độc đáo, cty tập trung vào các dự án vừa và nhỏ, từng bước xây dựng niềm tin với khách hàng.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 ">
                        <div>
                            <div className="lg:sticky lg:pb-16 top-0">
                                <div className="pt-2 ">
                                    <p className="text-[16px] sm:text-[22px]">2018 - 2020</p>
                                    <h1 className="text-[18px] sm:text-[20px] text-[#BEAB81]">Vươn xa</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 pt-2">
                            <div className="flex-shrink-0">
                                <div className="mx-auto "><img className="aspect-[4/3] object-cover"
                                                               src="/assets/images/herosection/hero3.webp" alt="#_"/>
                                    <p className="text-center mx-3 text-[13px] sm:text-[17px] text-[#CECECE] mt-2">Giai đoạn phát triển vượt bậc của Woodplus với hàng trăm dự án lớn nhỏ, đội ngũ nhân sự được củng cố và phát triển.
                                        đồng thời nâng cấp công nghệ, chuyên môn, quy trình thiết kế thi công để khẳng định vị thế trên thị trường.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 ">
                        <div>
                            <div className="lg:sticky lg:pb-16 top-0">
                                <div className="pt-2 ">
                                    <p className="text-[16px] sm:text-[22px]">2021 - nay</p>
                                    <h1 className="text-[18px] sm:text-[20px] text-[#BEAB81]">Hướng đến tương lai</h1>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2 sm:pt-2 -mt-12 sm:-mt-0">
                            <div className="flex-shrink-0">
                                <div className="mx-auto ">
                                    <p className="text-center mx-3 text-[13px] sm:text-[17px] text-[#CECECE] mt-2">Với tầm nhìn trở thành công ty Hàng đầu Việt Nam trong lĩnh vực thiết kế - thi công trọn gói, Woodplus tập trung tối ưu hóa quy trình, áp dụng công nghệ vào thiết kế và sản xuất, không ngừng đổi mới, cập nhật chuyên môn để tạo ra không gian sống đẳng cấp - cá nhân hóa - thân thiện với môi trường, đem lại giá trị thật cho khách hàng.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <div className="">

                <section id="features"
                         className="relative block px-6 md:px-10">


                    <div
                        className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-3">

                        <div className=" px-8 text-center shadow">

                            <h3 className="mt-1 text-[16px] sm:text-[22px] text-[#BeAB81]">Tầm nhìn</h3>
                            <p className="my-1 mb-0 text-[13px] sm:text-[14px] lg:text-[17px] font-normal text-[#CECECE]">Woodplus hướng tới trở thành thương hiệu hàng đầu Việt Nam trong thiết kế – thi công trọn gói,
                                tạo nên không gian sống đẳng cấp, cá nhân hóa, phù hợp với từng khách hàng.
                            </p>
                        </div>

                        <div className=" px-8 text-center shadow">

                            <h3 className="mt-1 text-[16px] sm:text-[22px] text-[#BeAB81]">Giá trị cốt lõi</h3>
                            <p className="my-1 mb-0 text-[13px] sm:text-[14px] lg:text-[17px] font-normal text-[#CECECE]">Woodplus luôn đặt khách hàng làm trung tâm, cung cấp giải pháp toàn diện trong thiết kế - thi công.
                                Với tôn chỉ Đồng hành – Trung thực – Tận tâm, mang lại không gian sống hoàn hảo, đáp ứng trọn vẹn nhu cầu của khách hàng.
                            </p>
                        </div>

                        <div className=" px-8 text-center shadow">

                            <h3 className="mt-1 text-[16px] sm:text-[22px] text-[#BeAB81]">Sứ mệnh</h3>
                            <p className="my-1 mb-0 text-[13px] sm:text-[14px] lg:text-[17px] font-normal text-[#CECECE]">Woodplus kiến tạo không gian sống phù hợp,
                                mang đến sản phẩm – dịch vụ chất lượng, nâng cao đời sống, bảo vệ sức khỏe người sử dụng và hướng đến sự phát triển bền vững.
                            </p>
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

                </section>
            </div>

            <div className="hidden md:block"><DarkSpacing/></div>

            <div className="w-full bg-[#e7e5e4] text-white mt-14 md:mt-0">
                {/* Section Đội ngũ WoodPlus */}
                <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto pb-[40px]">
                    {/* Thẻ divtext */}
                    <div className="text-center mb-12">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70] ">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2">Đội
                            ngũ của
                            WoodPlus</h2>
                        <p className="mx-auto w-[330px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                            Đội ngũ Woodplus là tập hợp những chuyên gia sáng tạo, giàu kinh nghiệm và đam mê, luôn nỗ lực mang đến giải pháp thiết kế và thi công nội thất hoàn hảo cho từng dự án.
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


            <Partner/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ContactSection/>
            <div className="hidden md:block"><DarkSpacing/></div>
            <ContactPopup/>
            <ZaloChatButton/>
            <Hotline/>
        </main>
    );
};

export default AboutUs;
