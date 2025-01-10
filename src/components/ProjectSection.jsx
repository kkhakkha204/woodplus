import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import { TbArrowForwardUp } from "react-icons/tb";

const ProjectSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    // State để quản lý ảnh và mô tả cho từng phần
    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [centerImageIndex, setCenterImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(0);

    // Danh sách ảnh và mô tả
    const leftImages = [
        { src: "/assets/images/herosection/hero.jpg", description: "HaNoi 2024" },
        { src: "/assets/images/herosection/hero4.webp", description: "HaNoi 2025" },
    ];
    const centerImages = [
        { src: "/assets/images/herosection/hero3.webp", description: "HaNoi 2024" },
        { src: "/assets/images/herosection/hero6.jpg", description: "HaNoi 2025" },
    ];
    const rightImages = [
        { src: "/assets/images/herosection/hero2.jpg", description: "HaNoi 2024" },
        { src: "/assets/images/herosection/hero5.webp", description: "HaNoi 2025" },
    ];

    // useEffect để thiết lập các bộ hẹn giờ
    useEffect(() => {
        const leftInterval = setInterval(() => {
            setLeftImageIndex((prevIndex) => (prevIndex + 1) % leftImages.length);
        }, 3000); // 3 giây

        const centerInterval = setInterval(() => {
            setCenterImageIndex((prevIndex) => (prevIndex + 1) % centerImages.length);
        }, 5000); // 5 giây

        const rightInterval = setInterval(() => {
            setRightImageIndex((prevIndex) => (prevIndex + 1) % rightImages.length);
        }, 4000); // 4 giây

        // Xóa bộ hẹn giờ khi component bị unmount
        return () => {
            clearInterval(leftInterval);
            clearInterval(centerInterval);
            clearInterval(rightInterval);
        };
    }, []);
    // Cấu hình slider
    const settings = {
        dots: true,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className="">
            {/* divcha */}
            <div className="max-w-[1620px] mx-auto ">
                {/* divcon */}
                <div className="text-center flex-col mb-8">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70] ">WoodPlus</h2>
                    <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white mt-2">Dự án nổi bật</h1>
                    <p className="w-[300px] sm:w-[450px] mx-auto text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                        WoodPlus tự hào đã thực hiện hơn 1.000 dự án thiết kế và thi công nội thất, với 998 dự án hoàn
                        thành trong suốt 8 năm hoạt động. Đội ngũ WoodPlus không ngừng sáng tạo và hoàn thiện từng chi
                        tiết để mang lại không gian sống thể hiện dấu ấn cá nhân độc bản của gia chủ.
                    </p>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex justify-center items-center gap-4">
                    {/* Ảnh nhỏ bên trái */}
                    <div className="w-1/4 h-[450px]">
                        <div className="flex justify-between w-[385px] text-white">
                            <span>{leftImages[leftImageIndex].description.split(" ")[0]}</span>
                            <span>{leftImages[leftImageIndex].description.split(" ")[1]}</span>
                        </div>
                        <img
                            src={leftImages[leftImageIndex].src}
                            alt="Dự án nhỏ bên trái"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Ảnh lớn ở giữa */}
                    <div className="w-2/4 h-[550px]">
                        <img
                            src={centerImages[centerImageIndex].src}
                            alt="Dự án lớn ở giữa"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                        <div className="flex justify-between w-[770px] text-white">
                            <span>{centerImages[centerImageIndex].description.split(" ")[0]}</span>
                            <span>{centerImages[centerImageIndex].description.split(" ")[1]}</span>
                        </div>
                    </div>

                    {/* Ảnh nhỏ bên phải */}
                    <div className="w-1/4 h-[450px]">
                        <div className="flex justify-between w-[385px] text-white">
                            <span>{rightImages[rightImageIndex].description.split(" ")[0]}</span>
                            <span>{rightImages[rightImageIndex].description.split(" ")[1]}</span>
                        </div>
                        <img
                            src={rightImages[rightImageIndex].src}
                            alt="Dự án nhỏ bên phải"
                            className="w-full h-full object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden mt-8">
                    <Slider {...settings}>
                        {/* Trang 1: Một ảnh lớn */}
                        <div>
                            <div className="h-[400px] w-full ">
                                <img
                                    src="/assets/images/herosection/hero3.webp"
                                    alt="Dự án lớn"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="flex justify-between text-white mt-2">
                                    <span>HaNoi</span>
                                    <span>2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Trang 2: Hai ảnh nhỏ */}
                        <div>
                            <div className="flex-row items-center justify-center gap-4 space-y-12 pb-12 mx-8">
                                {/* Ảnh nhỏ 1 */}
                                <div className="w-full h-[200px]">
                                    <img
                                        src="/assets/images/herosection/hero2.jpg"
                                        alt="Dự án nhỏ 1"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-white mt-2">
                                        <span>HaNoi</span>
                                        <span>2024</span>
                                    </div>
                                </div>

                                {/* Ảnh nhỏ 2 */}
                                <div className="w-full h-[200px]">
                                    <img
                                        src="/assets/images/herosection/hero.jpg"
                                        alt="Dự án nhỏ 1"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-white mt-2">
                                        <span>HaNoi</span>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Trang 1: Một ảnh lớn */}
                        <div>
                            <div className="h-[400px] w-full ">
                                <img
                                    src="/assets/images/herosection/11.png"
                                    alt="Dự án lớn"
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="flex justify-between text-white mt-2">
                                    <span>HaNoi</span>
                                    <span>2024</span>
                                </div>
                            </div>
                        </div>

                        {/* Trang 2: Hai ảnh nhỏ */}
                        <div>
                            <div className="flex-row items-center justify-center gap-4 space-y-12 pb-12 mx-4">
                                {/* Ảnh nhỏ 1 */}
                                <div className="w-full h-[200px]">
                                    <img
                                        src="/assets/images/herosection/11.png"
                                        alt="Dự án nhỏ 1"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-white mt-2">
                                        <span>HaNoi</span>
                                        <span>2024</span>
                                    </div>
                                </div>

                                {/* Ảnh nhỏ 2 */}
                                <div className="w-full h-[200px]">
                                    <img
                                        src="/assets/images/herosection/11.png"
                                        alt="Dự án nhỏ 1"
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-white mt-2">
                                        <span>HaNoi</span>
                                        <span>2024</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

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
    );
};

export default ProjectSection;
