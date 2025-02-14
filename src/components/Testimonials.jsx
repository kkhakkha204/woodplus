import React from "react";

const Testimonials = () => {
    return (
        <div className="w-full flex justify-center items-center pt-14 md:pt-0">
            <div className="w-full max-w-[1620px] grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">

                {/* Phần hiển thị trên mobile */}
                <div className="flex lg:hidden flex-col space-y-8">
                    <div className="text-center">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                            WoodPlus
                        </h3>
                        <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white">
                            Khách hàng nói gì về WoodPlus
                        </h2>
                        <p className="w-[290px] sm:w-[410px] md:w-[450px] lg:w-[400px] xl:w-[450px] mx-auto text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#CECECE] mt-4">
                            WoodPlus đã được khách hàng tin tưởng và lựa chọn, khẳng định sự chuyên nghiệp trong từng chi tiết. Đội ngũ kiến trúc sư, kỹ sư và thợ tay nghề cao luôn đặt sự sáng tạo, tâm huyết vào mỗi công trình.
                        </p>
                    </div>

                    {[
                        {name: "Anh Đức Quân", location: "Eco City Thanh Trì", img: "tes3.jpg", review: "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình. Highly recommend!"},
                        {name: "Youtuber Lê Hoàng Nam", location: "Ocean Park", img: "tes1.webp", review: "Nhà không chỉ đẹp mà còn khiến mọi người trầm trồ, tự hào. Mong phong cách Indochine trở nên phổ biến, cảm ơn ekip WoodPlus đã biến ý tưởng thành hiện thực."}
                    ].map((testimonial, index) => (
                        <div key={index} className="relative w-full max-w-[650px] h-[300px] md:h-[400px] mx-auto">
                            <img src={`/assets/images/testimonials/${testimonial.img}`} alt={testimonial.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-3/4 sm:w-[300px] md:w-[375px] bg-[#0F0F0F] bg-opacity-85 p-4">
                                <h3 className="text-[20px] sm:text-[22px] md:text-[24px] xl:text-[28px] font-medium text-white">
                                    {testimonial.name}
                                </h3>
                                <p className="text-[16px] font-medium text-[#BEAB81] italic">{testimonial.location}</p>
                                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#CECECE] mt-2">{testimonial.review}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Phần hiển thị trên desktop */}
                <div className="relative space-y-8">
                    {[
                        {name: "Chị Hiền Nguyễn", location: "Biệt thự La Phù", img: "tes4.jpg", review: "Ngôi nhà là tâm huyết, và chọn WoodPlus là quyết định sáng suốt. Cảm ơn đội ngũ đã mang đến căn nhà đúng mong muốn của gia đình."},
                        {name: "Chị Yến", location: "Duplex Royal City", img: "tes2.jpg", review: "Dù mặt bằng căn hộ khó, WoodPlus vẫn hoàn thiện tối đa cả thẩm mỹ lẫn công năng. Đội ngũ trẻ đầy tâm huyết đã biến mọi ý tưởng thành hiện thực."}
                    ].map((testimonial, index) => (
                        <div key={index} className="relative w-full max-w-[650px] h-[300px] md:h-[400px] mx-auto">
                            <img src={`/assets/images/testimonials/${testimonial.img}`} alt={testimonial.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-3/4 sm:w-[300px] md:w-[375px] bg-[#0F0F0F] bg-opacity-85 p-4">
                                <h3 className="text-[20px] sm:text-[22px] xl:text-[28px] font-medium text-white">
                                    {testimonial.name}
                                </h3>
                                <p className="text-[16px] font-medium text-[#BEAB81] italic">{testimonial.location}</p>
                                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#CECECE] mt-2">{testimonial.review}</p>
                            </div>
                        </div>
                    ))}

                    <div className="text-center lg:text-left w-full mx-auto max-w-[650px]">
                        <p className="text-[14px] md:text-[15px] lg:text-[17px] text-[#CECECE] mt-4">
                            Khách hàng không chỉ đánh giá cao về chất lượng sản phẩm, mà còn cảm nhận được sự tận tâm của đội ngũ trong mỗi dự án. Chúng tôi cam kết cung cấp các giải pháp "Giá trị thật, chất lượng thật" đến khách hàng.
                        </p>
                    </div>
                </div>

                {/* Phần nội dung lớn hơn trên desktop */}
                <div className="hidden lg:flex flex-col space-y-8">
                    <div className="text-left">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                            WoodPlus
                        </h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white">
                            Khách hàng nói gì về WoodPlus
                        </h2>
                        <p className="max-w-[630px] text-[14px] md:text-[15px] lg:text-[17px] text-[#CECECE] mt-4">
                            WoodPlus đã được khách hàng tin tưởng và lựa chọn, khẳng định sự chuyên nghiệp trong từng chi tiết. Đội ngũ kiến trúc sư, kỹ sư và thợ tay nghề cao luôn đặt sự sáng tạo, tâm huyết vào mỗi công trình.
                        </p>
                    </div>

                    {[
                        {name: "Anh Đức Quân", location: "Eco City Thanh Trì", img: "tes3.jpg", review: "Nhà đẹp, hiện đại với giá hợp lý, đội ngũ tư vấn trẻ trung, chuyên nghiệp, nhiệt tình. Highly recommend!"},
                        {name: "Youtuber Lê Hoàng Nam", location: "Ocean Park", img: "tes1.webp", review: "Nhà không chỉ đẹp mà còn khiến mọi người trầm trồ, tự hào. Mong phong cách Indochine trở nên phổ biến, cảm ơn ekip WoodPlus đã biến ý tưởng thành hiện thực."}
                    ].map((testimonial, index) => (
                        <div key={index} className="relative w-full max-w-[650px] h-[300px] md:h-[400px] mx-auto md:mx-0">
                            <img src={`/assets/images/testimonials/${testimonial.img}`} alt={testimonial.name} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 w-[375px] bg-[#0F0F0F] bg-opacity-85 p-4">
                                <h3 className="text-[20px] sm:text-[22px] xl:text-[28px] font-medium text-white">{testimonial.name}</h3>
                                <p className="text-[16px] font-medium text-[#BEAB81] italic">{testimonial.location}</p>
                                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#CECECE] mt-2">{testimonial.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
