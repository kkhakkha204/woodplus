import React, {useState} from "react";
import Slider from "react-slick";
import {TbArrowForwardUp} from "react-icons/tb";

const PartnerSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    // Cấu hình cho slick slider
    const settings = {
        dots: true, // Hiển thị các chấm tròn
        infinite: true, // Lặp lại vòng quay
        speed: 500, // Tốc độ trượt
        slidesToShow: 3, // Hiển thị 3 ảnh mỗi lần
        slidesToScroll: 1, // Cuộn từng ảnh
        responsive: [
            {
                breakpoint: 768, // Dưới 768px (mobile)
                settings: {
                    slidesToShow: 1, // Chỉ hiển thị 1 ảnh mỗi lần
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="w-full text-white">
            {/* divcon */}
            <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto py-10">
                {/* divtext */}
                <div className="text-center mb-12">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                    <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white mt-2">Đối tác của WoodPlus</h1>
                    <p className="mx-auto w-[300px] sm:w-[500px] text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                        Sed quis doloribus Et quisquam qui nobis eligendi et adipisci temporibus qui ducimus soluta qui
                        assumenda aliquam quo deserunt quidem?
                    </p>
                </div>

                {/* divanh */}
                <div className="block sm:hidden"> {/* Ẩn slider này trên desktop */}
                    <Slider {...settings}>
                        {/* Cột 1 */}
                        {/* divanh */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 space-y-8 gap-6 mt-20">
                            {/* Cột 1 */}
                            <div className="flex justify-center">
                                <div
                                    className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                    <img src="/assets/images/logo/a.png" alt="Logo đối tác 1"
                                         className="w-[200px] h-auto"/>
                                </div>
                            </div>
                            {/* Cột 2 */}
                            <div className="flex justify-center">
                                <div
                                    className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                    <img src="/assets/images/logo/a.png" alt="Logo đối tác 2"
                                         className="w-[200px] h-auto"/>
                                </div>
                            </div>
                            {/* Cột 3 */}
                            <div className="flex justify-center">
                                <div
                                    className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                    <img src="/assets/images/logo/a.png" alt="Logo đối tác 3"
                                         className="w-[200px] h-auto"/>
                                </div>
                            </div>

                        </div>
                        {/* divanh */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 space-y-8 gap-6 mt-20">
                            {/* Cột 1 */}
                            <div className="flex justify-center">
                                <div
                                    className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                    <img src="/assets/images/logo/a.png" alt="Logo đối tác 1"
                                         className="w-[200px] h-auto"/>
                                </div>
                            </div>
                            {/* Cột 2 */}
                            <div className="flex justify-center">
                                <div
                                    className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                    <img src="/assets/images/logo/a.png" alt="Logo đối tác 2"
                                         className="w-[200px] h-auto"/>
                                </div>
                            </div>
                            {/* Cột 3 */}
                            <div className="flex justify-center">
                                <div
                                    className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                                    <img src="/assets/images/logo/a.png" alt="Logo đối tác 3"
                                         className="w-[200px] h-auto"/>
                                </div>
                            </div>

                        </div>

                    </Slider>
                </div>

                {/* divanh cho desktop */}
                {/* divanh */}
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
                    {/* Cột 1 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/partner/p1.png" alt="Logo đối tác 1" className="w-[200px] h-auto"/>
                        </div>
                    </div>
                    {/* Cột 2 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/partner/p2.png" alt="Logo đối tác 2" className="w-[200px] h-auto grayscale"/>
                        </div>
                    </div>
                    {/* Cột 3 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/logo/a.png" alt="Logo đối tác 3" className="w-[200px] h-auto"/>
                        </div>
                    </div>

                </div>
                <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20">
                    {/* Cột 1 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/logo/a.png" alt="Logo đối tác 1" className="w-[200px] h-auto"/>
                        </div>
                    </div>
                    {/* Cột 2 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/logo/a.png" alt="Logo đối tác 2" className="w-[200px] h-auto"/>
                        </div>
                    </div>
                    {/* Cột 3 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/logo/a.png" alt="Logo đối tác 3" className="w-[200px] h-auto"/>
                        </div>
                    </div>

                </div>
            </div>
            {/* Nút liên hệ và tư vấn */}
            <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                {/* Nút Liên hệ */}
                <button
                    className="w-[125px] h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
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
                    className="w-[125px] h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                >
                    Tư vấn
                </button>
            </div>
        </div>
    );
};

export default PartnerSection;
