import React from 'react';
import {Link} from "react-router-dom";

const ServicesSection = () => {
    return (
        <div className="w-full flex justify-center items-center mb-[18px] pt-14 md:pt-0 pb-8">

            <div className="w-full max-w-[1620px]">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    <div className="col-span-1 lg:col-span-3 text-center lg:mb-8">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Dịch
                            vụ</h2>
                        <p className="w-[330px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                            Woodplus mang đến giải pháp trọn gói, từ thiết kế đến thi công hoàn thiện, trang trí nội
                            thất, cá nhân hóa không gian sống. Chúng tôi kiến tạo những công trình tinh tế, hài hòa giữa
                            công năng & thẩm mỹ, nâng tầm giá trị sống cho chủ nhân.
                        </p>
                    </div>


                    <div className="flex-col justify-center lg:-mt-[150px] mb-4 lg:ml-8 2xl:ml-0 relative">
                        <Link to="/thiết-kế">
                            <img
                                src="/assets/images/homepage/service3.jpg"
                                alt="Dịch vụ R"
                                className="mx-auto w-[320px] h-[320px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                            />
                        </Link>
                        <div
                            className="divtext absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 text-center pb-2 px-6">
                            <Link
                                to="/thiết-kế"
                                className="flex items-center justify-center font-medium text-[22px] sm:text-[24px] md:text-[26px] xl:text-[30px] 2xl:text-[30px] text-[#BEAB81] hover:text-white"
                            >
                                Dịch vụ thiết kế
                                <span className="ml-14 text-[30px]">&rarr;</span>
                            </Link>
                            <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                Với quy trình thiết kế khoa học và chuyên sâu, Woodplus hiện thực hóa ngôi nhà mơ ước
                                của bạn. Chúng tôi không chỉ nâng tầm không gian sống mà còn tạo nên sự hài hòa giữa
                                công năng và thẩm mỹ, mang đậm dấu ấn cá nhân của mỗi gia chủ.
                            </p>
                        </div>
                    </div>

                    <div className="flex-col justify-center mb-4 relative">
                        <Link to="/trọn-gói">
                            <img
                                src="/assets/images/homepage/service1.jpg"
                                alt="Dịch vụ R"
                                className="mx-auto w-[320px] h-[320px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                            />
                        </Link>
                        <div
                            className="text-center absolute bottom-0 left-0 w-full bg-[#0F0F0F] bg-opacity-85 pb-2 px-6">
                            <Link
                                to="/trọn-gói"
                                className="flex items-center justify-center font-medium text-[22px] sm:text-[24px] md:text-[26px] xl:text-[30px] 2xl:text-[30px] text-[#BEAB81] hover:text-white"
                            >
                                Xây dựng trọn gói
                                <span className="ml-14 text-[30px]">&rarr;</span>
                            </Link>
                            <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                Woodplus cung cấp dịch vụ thi công trọn gói với đội ngũ chuyên môn cao, tận tâm và trung
                                thực trong từng công trình. Chúng tôi cam kết đồng hành chặt chẽ, đảm bảo tiến độ chuẩn
                                xác, tối ưu chi phí, công năng hoàn hảo và minh bạch trong mọi giai đoạn thi công.
                            </p>
                        </div>
                    </div>

                    <div className="flex-col lg:-mt-[150px] justify-center mb-4 lg:mr-4 2xl:mr-0 relative">
                        <Link to="/thi-công">
                            <img
                                src="/assets/images/homepage/service2.jpg"
                                alt="Dịch vụ R"
                                className="mx-auto w-[320px] h-[320px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                            />
                        </Link>
                        <div
                            className="text-center absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 pb-2 px-6">
                            <Link
                                to="/thi-công"
                                className="flex items-center justify-center font-medium text-[22px] sm:text-[24px] md:text-[26px] xl:text-[30px] 2xl:text-[30px] text-[#BEAB81] hover:text-white"
                            >
                                Thi công nội thất
                                <span className="ml-14 text-[30px]">&rarr;</span>
                            </Link>
                            <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                Cam kết minh bạch quy trình, sử dụng vật liệu chuẩn, áp dụng kỹ thuật sản xuất hiện đại
                                cùng đội ngũ tay nghề cao. Chúng tôi đảm bảo từng chi tiết nội thất hoàn mỹ, bền bỉ,
                                mang đến không gian sống tinh tế, tiện nghi và trải nghiệm tốt nhất cho khách hàng.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ServicesSection;