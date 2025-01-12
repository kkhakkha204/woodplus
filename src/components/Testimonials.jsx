import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";

const Testimonials = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="w-full flex justify-center items-center">
            {/* Thẻ div cha */}
            <div className="w-full max-w-[1620px] grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Thẻ div right */}
                <div className="flex md:hidden flex-col space-y-8">
                    {/* Thẻ div text */}
                    <div className="flex justify-center items-center text-center">
                        <div className="text-center">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px]  font-bold text-[#AF9A70]">WoodPlus</h3>
                            <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Khách
                                hàng nói
                                gì về WoodPlus</h2>
                            <p className="w-[260px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                                WoodPlus đã được khách hàng tin tưởng và lựa chọn, khẳng định sự chuyên nghiệp trong
                                từng chi tiết. Đội ngũ kiến trúc sư, kỹ sư và thợ tay nghề cao luôn đặt sự sáng tạo, tâm
                                huyết vào mỗi công trình, mang đến giải pháp không gian tối ưu nhất, phù hợp với nhu cầu
                                và mong muốn của từng vị gia chủ.
                            </p>
                        </div>
                    </div>


                    {/* Thẻ div anh */}
                    <div className="relative w-[600px] md:w-full h-[300px] md:h-[400px] mx-auto md:mx-0">
                        <img
                            src="/assets/images/testimonials/test1.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-[375px] md:h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] xl:text-[28px] 2xl:text-[28px] font-medium text-white">Anh
                                Đức Quân</h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg-[18px] xl:text-[19px] font-medium text-[#BEAB81] italic">Eco
                                City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-[600px] md:w-full h-[300px] md:h-[400px] mx-auto md:mx-0">
                        <img
                            src="/assets/images/testimonials/test2.webp"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-[375px] md:h-[200px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[20px] sm:text-[22px] md:text-[24px] xl:text-[28px] 2xl:text-[28px] font-medium text-white">Anh
                                Đức Quân</h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg-[18px] xl:text-[19px] font-medium text-[#BEAB81] italic">Eco
                                City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>
                </div>
                {/* Thẻ div left */}
                <div className="relative space-y-8">
                    {/* Thẻ div anh */}
                    <div className="relative w-[600px] md:w-full h-[300px] md:h-[400px] mx-auto md:mx-0">
                        <img
                            src="/assets/images/testimonials/test1.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-full md:h-[200px] lg:w-[375px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[20px] sm:text-[22px] xl:text-[28px] 2xl:text-[28px] font-medium text-white">Anh
                                Đức Quân</h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg-[18px] xl:text-[19px] font-medium text-[#BEAB81] italic">Eco
                                City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-[600px] md:w-full h-[300px] md:h-[400px] mx-auto md:mx-0">
                        <img
                            src="/assets/images/testimonials/test2.webp"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-full md:h-[200px] lg:w-[375px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[20px] sm:text-[22px] xl:text-[28px] 2xl:text-[28px] font-medium text-white">Anh
                                Đức Quân</h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg-[18px] xl:text-[19px] font-medium text-[#BEAB81] italic">Eco
                                City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div text */}
                    <div className="text-center md:text-left w-full md:w-[600px]">
                        <p className="w-[350px] sm:w-[500px] md:w-[380px] lg:w-[400px] xl:w-[450px] mx-auto md:mx-0 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                            Khách hàng của WoodPlus không chỉ đánh giá cao về chất lượng sản phẩm, mà còn cảm nhận được
                            sự tận tâm của đội ngũ trong mỗi dự án. Với 45 nhân sự đầy nhiệt huyết, chúng tôi cam kết
                            tiếp tục cung cấp các giải pháp nội thất đẳng cấp, tạo nên những không gian sống "Giá trị
                            thật, chất lượng thật" đến với khách hàng.
                        </p>

                    </div>


                </div>

                {/* Thẻ div right */}
                <div className="hidden md:flex flex-col space-y-8">
                    {/* Thẻ div text */}
                    <div className="text-left">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px]  font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Khách
                            hàng nói
                            gì về WoodPlus</h2>
                        <p className="w-[260px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                            WoodPlus đã được khách hàng tin tưởng và lựa chọn, khẳng định sự chuyên nghiệp trong
                            từng chi tiết. Đội ngũ kiến trúc sư, kỹ sư và thợ tay nghề cao luôn đặt sự sáng tạo, tâm
                            huyết vào mỗi công trình, mang đến giải pháp không gian tối ưu nhất, phù hợp với nhu cầu
                            và mong muốn của từng vị gia chủ.
                        </p>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-[600px] md:w-full h-[300px] md:h-[400px] mx-auto md:mx-0">
                        <img
                            src="/assets/images/testimonials/test3.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-full md:h-[200px] lg:w-[375px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[20px] sm:text-[22px] xl:text-[28px] 2xl:text-[28px] font-medium text-white">Anh
                                Đức Quân</h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg-[18px] xl:text-[19px] font-medium text-[#BEAB81] italic">Eco
                                City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>

                    {/* Thẻ div anh */}
                    <div className="relative w-[600px] md:w-full h-[300px] md:h-[400px] mx-auto md:mx-0">
                        <img
                            src="/assets/images/testimonials/test4.jpg"
                            alt="Customer Testimonial"
                            className="w-full h-full object-cover"
                        />
                        {/* Thẻ div em */}
                        <div
                            className="absolute bottom-0 left-0 w-[250px] h-[150px] sm:w-[300px] sm:h-[180px] md:w-full md:h-[200px] lg:w-[375px] bg-[#272727] bg-opacity-85 p-2">
                            <h3 className="text-[20px] sm:text-[22px] xl:text-[28px] 2xl:text-[28px] font-medium text-white">Anh
                                Đức Quân</h3>
                            <p className="text-[15px] sm:text-[16px] md:text-[17px] lg-[18px] xl:text-[19px] font-medium text-[#BEAB81] italic">Eco
                                City Thanh Trì </p>
                            <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] text-[#CECECE] mt-2">
                                "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình.
                                Highly recommend!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;