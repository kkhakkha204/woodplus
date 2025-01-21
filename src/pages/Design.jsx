import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";

import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";
import BlogSection from "../components/BlogSection";
import {Link} from "react-router-dom";
import ContactPopup from "../components/ContactPopup";

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
                        {/* divcutl */}
                        <div className="w-[180%] sm:w-[50%] h-[70%] sm:h-[100px] bg-[#0F0F0F] border-r-2 border-y-2">
                            <span
                                className="pl-2 sm:pl-8 text-[32px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-left sm:text-center tracking-[2%]">Dịch vụ<span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> thiết kế</span></span>
                        </div>

                        {/* divcutr */}
                        <div className="w-[50%] h-[100px] relative">
                            {/* Đường line chia đôi chiều cao của divcutr */}
                            <div className="absolute top-1/2 left-0 w-full border-t-2 border-white"></div>
                        </div>
                    </div>


                    {/* Thẻ divbot */}
                    <div
                        className="w-full xl:max-w-[1350px] 2xl:max-w-[1620px] h-[calc(50%-50px)] grid grid-cols-1 lg:grid-cols-2 justify-between items-center ">
                        {/* Mô tả bên trái */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-[15px] tracking-[0.01rem] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[330px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] 2xl:max-w-[450px] mx-auto lg:mt-[150px] text-center lg:text-left text-white">
                                WoodPlus tự hào mang đến dịch vụ thiết kế nội thất chuyên nghiệp, kết hợp hài hòa giữa
                                nghệ thuật sáng tạo và giải pháp thực tế, chúng tôi tạo nên những không gian sống tối ưu
                                cả về thẩm mỹ và công năng.
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

            <section className="pt-14 md:pt-0">
                <div
                    className="gap-16  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 ">
                    <div className="">
                        <h3 className="text-center md:text-left font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-center md:text-left text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] font-bold text-[#FFFFFF] mt-2">Nơi hiện thực hóa ý tưởng của bạn</h2>
                        <p className="text-center md:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] text-[#CECECE] font-normal">
                            We are strategists, designers and developers. Innovators and problem
                            solvers. Small enough to be simple and quick, but big enough to deliver the scope you want
                            at the pace you need. Small enough to be simple and quick, but big enough to deliver the
                            scope you want at the pace you need.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full "
                             src="/assets/images/service/services2.jpg"
                             alt="office content 1"/>
                        <img className="mt-4 w-full lg:mt-10 "
                             src="/assets/images/service/service3.jpg"
                             alt="office content 2"/>
                    </div>
                </div>
            </section>

            <div className="hidden md:block"><DarkSpacing/></div>

            <section className="relative pt-14 md:pt-0">
                <div
                    className="absolute h-[36.5rem] w-full top-0 -z-10"></div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#FFFFFF] mt-2">Tổng
                            quan bảng giá
                            thiết kế</h2>
                    </div>

                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">

                        <div
                            className="group relative flex flex-col mx-auto w-full max-w-sm transition-all duration-300 p-4 xl:p-8">
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

                            <ul className="mb-12 ml-[75px] sm:ml-[50px] space-y-1 text-center text-[13px] sm:text-[17px] text-[#CECECE]">
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hiện đại</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Cổ điển, Tân cổ điển</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Bắc Âu, Nhật Bản,..</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Cao cấp, sang trọng </span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span className="text-left">Tặng 50% chi phí TK khi thi công</span>
                                </li>

                            </ul>
                        </div>

                        <div
                            className="group relative flex flex-col mx-auto w-full max-w-sm transition-all duration-300 p-4 xl:p-8">
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

                            <ul className="mb-12 ml-[75px] sm:ml-[50px] space-y-1 text-center text-[13px] sm:text-[17px] text-[#CECECE]">
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>
Lập ý tưởng kiến trúc</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hoàn thiện hồ sơ thi công
</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tư vấn biện pháp thi công
</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>
Giám sát tác giả</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>
Hỗ trợ Hồ sơ Cấp phép XD</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tiến độ từ 25-30 ngày</span>
                                </li>

                            </ul>
                        </div>

                        <div
                            className="group relative flex flex-col mx-auto w-full max-w-sm transition-all duration-300 p-4 xl:p-8">
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

                            <ul className="mb-12 ml-[75px] sm:ml-[50px] space-y-1 text-center text-[13px] sm:text-[17px] text-[#CECECE]">
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>
Lập ý tưởng kiến trúc</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Hoàn thiện hồ sơ thi công
</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tư vấn biện pháp thi công
</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>
Giám sát tác giả</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>
Hỗ trợ Hồ sơ Cấp phép XD</span>
                                </li>
                                <li className="flex items-center space-x-3.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#BEAB81]"></span>
                                    <span>Tiến độ từ 25-30 ngày</span>
                                </li>

                            </ul>
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
            </section>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ProjectSection/>

            <div className="hidden md:block"><DarkSpacing/></div>

            {/* Thẻ div cha */}
            <BlogSection/>


            <DarkSpacing/>

            <ContactSection/>
            <div className="hidden md:block"><DarkSpacing/></div>
            <ContactPopup/>
        </main>
    );
};

export default Design;