import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";

const Testimonials = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="w-full flex justify-center items-center">
            {/* Thẻ div cha */}
            <div className="w-full max-w-[1620px] grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Thẻ div right */}
                <div className="flex sm:hidden flex-col space-y-8">
                    {/* Thẻ div text */}
                    <div className="flex justify-center items-center text-center">
                        <div className="text-center">
                            <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                            <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white ">Khách hàng nói
                                gì về WoodPlus</h1>
                            <p className="w-[300px] text-center sm:w-full text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                                WoodPlus đã được khách hàng tin tưởng và lựa chọn, khẳng định sự chuyên nghiệp trong từng chi tiết. Đội ngũ kiến trúc sư, kỹ sư và thợ tay nghề cao luôn đặt sự sáng tạo, tâm huyết vào mỗi công trình, mang đến giải pháp không gian tối ưu nhất, phù hợp với nhu cầu và mong muốn của từng vị gia chủ.
                            </p>
                        </div>
                    </div>


                    {/* Thẻ div anh */}
                    <div className="relative w-full h-[300px] sm:h-[400px] mx-auto sm:mx-0">
                        <img
                            src="/assets/images/testimonials/test1.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[375px] sm:h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[22px] sm:text-[32px] font-semibold text-white">Anh Đức Quân</h3>
                            <p className="text-[16px] sm:text-[20px] font-medium text-[#BEAB81] italic">Eco City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình. Highly recommend!"
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-full h-[300px] sm:h-[400px] mx-auto sm:mx-0">
                        <img
                            src="/assets/images/testimonials/test2.webp"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[375px] sm:h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[22px] sm:text-[32px] font-semibold text-white">Youtuber Lê Hoàng Nam</h3>
                            <p className="text-[16px] sm:text-[20px] font-medium text-[#BEAB81] italic">VinHomes Ocean Park </p>
                            <p className="text-[13px] sm:text-[17px] text-[#CECECE] mt-2">
                                "Nhà không chỉ đẹp mà còn khiến mọi người trầm trồ, tự hào. Mong phong cách Indochine trở nên phổ biến, cảm ơn ekip WoodPlus đã biến ý tưởng thành hiện thực."
                            </p>
                        </div>
                    </div>
                </div>
                {/* Thẻ div left */}
                <div className="relative space-y-8">
                    {/* Thẻ div anh */}
                    <div className="relative w-full h-[300px] sm:h-[400px] mx-auto sm:mx-0">
                        <img
                            src="/assets/images/testimonials/test1.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full sm:w-[650px] object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[375px] sm:h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[22px] sm:text-[32px] font-semibold text-white">Anh Đức Quân</h3>
                            <p className="text-[16px] sm:text-[20px] font-medium text-[#BEAB81] italic">Eco City Thanh
                                Trì </p>
                            <p className="text-[13px] sm:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-full h-[300px] sm:h-[400px] mx-auto sm:mx-0">
                        <img
                            src="/assets/images/testimonials/test2.webp"
                            alt="Customer Testimonial"
                            className="w-full h-full sm:w-[650px] object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[375px] sm:h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[22px] sm:text-[32px] font-semibold text-white">Youtuber Lê Hoàng
                                Nam</h3>
                            <p className="text-[16px] sm:text-[20px] font-medium text-[#BEAB81] italic">VinHomes Ocean
                                Park </p>
                            <p className="text-[13px] sm:text-[17px] text-[#CECECE] mt-2">
                                "Nhà không chỉ đẹp mà còn khiến mọi người trầm trồ, tự hào. Mong phong cách Indochine
                                trở nên phổ biến, cảm ơn ekip WoodPlus đã biến ý tưởng thành hiện thực."
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div text */}
                    <div className="text-center sm:text-left w-full sm:w-[600px]">
                        <p className="text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                            Khách hàng của WoodPlus không chỉ đánh giá cao về chất lượng sản phẩm, mà còn cảm nhận được
                            sự tận tâm của đội ngũ trong mỗi dự án. Với 45 nhân sự đầy nhiệt huyết, chúng tôi cam kết
                            tiếp tục cung cấp các giải pháp nội thất đẳng cấp, tạo nên những không gian sống "Giá trị
                            thật, chất lượng thật" đến với khách hàng.
                        </p>
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

                {/* Thẻ div right */}
                <div className="hidden sm:flex flex-col space-y-8">
                    {/* Thẻ div text */}
                    <div className="text-left">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white mt-2">Khách hàng nói gì về
                            WoodPlus</h1>
                        <p className="w-[300px] sm:w-full text-[13px] 2xl:text-[17px] font-normal text-[#CECECE] mt-4">
                            WoodPlus đã được khách hàng tin tưởng và lựa chọn, khẳng định sự chuyên nghiệp trong từng
                            chi tiết. Đội ngũ kiến trúc sư, kỹ sư và thợ tay nghề cao luôn đặt sự sáng tạo, tâm huyết
                            vào mỗi công trình, mang đến giải pháp không gian tối ưu nhất, phù hợp với nhu cầu và mong
                            muốn của từng vị gia chủ.
                        </p>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-full h-[400px]">
                        <img
                            src="/assets/images/testimonials/test3.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full sm:w-[650px] object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[375px] h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[32px] font-semibold text-white">John Doe</h3>
                            <p className="text-[20px] font-medium text-[#BEAB81] italic">VinHomes</p>
                            <p className="text-[17px] text-[#CECECE] mt-2">
                                "WoodPlus provides outstanding quality and exceptional customer service. Their
                                furniture has transformed my home into a beautiful and cozy space."
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-full h-[400px]">
                        <img
                            src="/assets/images/testimonials/test4.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full sm:w-[650px] object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[375px] h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[32px] font-semibold text-white">John Doe</h3>
                            <p className="text-[20px] font-medium text-[#BEAB81] italic">VinHomes</p>
                            <p className="text-[17px] text-[#CECECE] mt-2">
                                "WoodPlus provides outstanding quality and exceptional customer service. Their
                                furniture has transformed my home into a beautiful and cozy space."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;