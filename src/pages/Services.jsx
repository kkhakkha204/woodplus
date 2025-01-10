import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";
import LightSpacing from "../components/LightSpacing";
import Testimonials from "../components/Testimonials";
import {Link} from "react-router-dom";

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F]">
            {/* Hero Section */}
            <div
                className="h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[800px] 2xl:h-[900px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/banner/banner2.webp')",
                        filter: "brightness(0.85)"
                    }}
                ></div>
                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                {/* Nội dung chính */}
                <div className=" w-full h-full flex flex-col justify-between items-center text-white relative z-10">
                    {/* Thẻ divtop */}
                    <div className="w-full h-[calc(50%-50px)] flex justify-center items-center">
                        {/* Nội dung của divtop */}

                    </div>


                    {/* Thẻ divcut */}
                    <div className="w-full h-[170px] sm:h-[230px] relative">
                        {/* divcutleft */}
                        <div
                            className="w-[70.40%] sm:w-[60.05%] h-[80px] sm:h-[100px] bg-[#0F0F0F] border-t-[2px] border-r-[2px] absolute top-0 left-0 flex items-center justify-center">
                            {/* Nội dung cho divcutleft */}
                            <span
                                className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-center tracking-[2%]">Giải pháp<span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> tối ưu</span></span>
                        </div>

                        {/* divcutright */}
                        <div
                            className="w-[80.05%] sm:w-[65%] h-[80px] sm:h-[100px] bg-[#0F0F0F] border-b-[2px] border-l-[2px] absolute -bottom-2 sm:-bottom-0 right-0 flex items-center ">
                            {/* Nội dung cho divcutright */}
                            <span
                                className="text-[36px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold ml-6 sm:ml-44 text-center tracking-[2%]">giá trị
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> bền lâu.</span></span>
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

            <div className="">
                <div className="px-4 mx-auto max-w-[1620px] sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[34px] 2xl:text-[48px] font-medium text-white ">Trao trọn niềm tin vào
                            WoodPlus</h1>
                    </div>
                    <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-2 lg:gap-x-40 w-[300px] sm:w-[900px] mx-auto">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 dark:text-[#BEAB81]">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 2 L22 12 L12 22 L2 12 Z"></path>
                            </svg>

                            <div className="ml-3 -mt-1 ">
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Ưu tiên tuyệt đối chất
                                    lượng dịch vụ
                                </dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Sự hài lòng của quý khách
                                    chính là kim chỉ nam cho mọi hoạt động của WoodPlus.
                                    Với lòng tận tụy và niềm đam mê sâu sắc, chúng tôi tự hào mang đến những dịch vụ
                                    hoàn hảo, vượt xa mong đợi của bạn.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 dark:text-[#BEAB81]">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 2 L22 12 L12 22 L2 12 Z"></path>
                            </svg>

                            <div className="ml-3 -mt-1">
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Quisque at urna</dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Vivamus ultricies
                                    bibendum tortor, molestie
                                    imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 dark:text-[#BEAB81]">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 2 L22 12 L12 22 L2 12 Z"></path>
                            </svg>

                            <div className="ml-3 -mt-1">
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Quisque at urna</dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Vivamus ultricies
                                    bibendum tortor, molestie
                                    imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.
                                </dd>
                            </div>
                        </div>
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true"
                                 className="flex-shrink-0 w-6 h-6 dark:text-[#BEAB81]">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M12 2 L22 12 L12 22 L2 12 Z"></path>
                            </svg>

                            <div className="ml-3 -mt-1">
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Quisque at urna</dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Vivamus ultricies
                                    bibendum tortor, molestie
                                    imperdiet justo cursus eu. Donec quis arcu magna. Integer tempor egestas dolor.
                                </dd>
                            </div>
                        </div>

                    </dl>
                </div>
            </div>
            <DarkSpacing/>

            {/* Thẻ divcha */}
            <div className="w-full text-white bg-[#e7e5e4] ">
                {/* divcon */}
                <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto py-14 ">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        <div className="col-span-1 sm:col-span-3 text-center mb-8">
                            <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                            <h1 className="text-[34px] 2xl:text-[48px] font-medium text-white 2xl:mt-2">Dịch vụ</h1>
                            <p className="w-[300px] mx-auto sm:w-[450px] text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                WoodPlus mang đến các giải pháp trọn gói cho thiết kế và thi công nội thất, tập trung
                                vào việc cá nhân hóa không gian sống, kết hợp hài hòa giữa công năng và thẩm mỹ. Chúng
                                tôi đặc biệt nổi bật với các phong cách thời thượng như Indochine và Wabi Sabi, mang đến
                                không gian sống đẳng cấp và thanh lịch.
                            </p>
                        </div>


                        <div className="flex-col justify-center">
                            <Link to="">
                                <img
                                    src="/assets/images/herosection/11.png"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center">
                                <h2 className="font-medium text-[28px] text-[#BEAB81] mt-6">Dịch vụ thiết kế</h2>
                                <p className="w-[300px] sm:w-[400px] mx-auto text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                    Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                                    soluta qui assumenda aliquam quo deserunt quidem?
                                </p>
                            </div>
                        </div>


                        <div className="flex-col justify-center">
                            <Link to="">
                                <img
                                    src="/assets/images/herosection/11.png"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[600px] object-cover"
                                />
                            </Link>

                            <div className="text-center">
                                <h2 className="font-medium text-[28px] text-[#BEAB81] mt-6">Dịch vụ thi công</h2>
                                <p className="w-[300px] sm:w-[400px] mx-auto text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                    Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus
                                    soluta qui assumenda aliquam quo deserunt quidem?
                                </p>
                            </div>
                        </div>


                        <div className="flex-col justify-center">
                            <Link to="">
                                <img
                                    src="/assets/images/herosection/11.png"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center">
                                <h2 className="font-medium text-[28px] text-[#BEAB81] mt-6">Dịch vụ trọn gói</h2>
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
            <div className="w-full text-white bg-[#e7e5e4]">
                {/* divcon */}
                <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto pb-14">
                    {/* divanh (background image) */}
                    <div
                        className="relative w-full max-w-[1500px] mx-auto h-auto bg-cover bg-center"
                        style={{backgroundImage: 'url(/assets/images/herosection/11.png)'}}
                    >
                        {/* divdesc */}
                        <div
                            className="relative w-full max-w-[900px] mx-auto flex flex-col items-center bg-[#0F0F0F] p-6 sm:py-16">
                            {/* divtext */}
                            <div className="text-center mb-10">
                                <h2 className="font-Tangerine text-[20px] md:text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">
                                    WoodPlus
                                </h2>
                                <h1 className="text-[20px] md:text-[26px] 2xl:text-[48px] font-medium text-[#FFFFFF] mt-2">
                                    Những giá trị độc đáo tạo nên sự khác biệt
                                </h1>
                            </div>

                            {/* divquy (3 quy trình) */}
                            <div className="w-[350px] sm:w-[600px] grid grid-cols-2 md:grid-cols-3 sm:gap-6 text-center">
                                {/* Quy trình */}
                                {[
                                    {id: 1, text: 'Trao đổi ý tưởng và yêu cầu với kiến trúc sư.'},
                                    {id: 2, text: 'Khảo sát hiện trạng công trình thiết kế.'},
                                    {id: 3, text: 'Ký hợp đồng, lập bản vẽ 2D và chọn vật liệu.'},
                                    {id: 4, text: 'Thiết kế 3D với hình ảnh minh họa nội thất.'},
                                    {id: 5, text: 'Duyệt và thẩm định thiết kế với khách hàng.'},
                                    {id: 6, text: 'Bàn giao hồ sơ và hoàn tất hợp đồng.'},
                                    {id: 7, text: 'Tư vấn và thương thảo hợp đồng thi công nội thất.'},
                                    {id: 8, text: 'Gia công sản phẩm tại xưởng WoodPlus.'},
                                    {id: 9, text: 'Thi công lắp đặt nội thất tại nhà khách hàng'},
                                    {id: 10, text: 'Bàn giao – Nghiệm thu – Thanh lý – Bảo hành'},
                                ].map((item) => (
                                    <div
                                        key={item.id}
                                        className={`px-4 py-1 rounded-md bg-transparent ${
                                            item.id === 10
                                                ? 'md:col-span-3 sm:flex sm:flex-col items-center justify-center text-center sm:w-[200px] mx-auto'
                                                : ''
                                        }`}
                                    >
                                        <h3 className="text-[24px] md:text-[36px] font-bold text-[#BEAB81]">{`${item.id}`}</h3>
                                        <p className="text-[14px] md:text-[16px] text-[#CECECE] mt-1">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <DarkSpacing/>

            <Testimonials/>

            <DarkSpacing/>

            <ContactSection/>

        </main>
    );
};

export default Services;