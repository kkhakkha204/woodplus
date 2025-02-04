import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";
import LightSpacing from "../components/LightSpacing";
import Testimonials from "../components/Testimonials";
import {Link} from "react-router-dom";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F]">
            {/* Hero Section */}
            <div
                className="relative w-full h-[580px] sm:h-[650px] lg:h-[750px] xl:h-[750px] 2xl:h-[800px] bg-cover bg-center">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/banner/banner3.jpg')",
                        filter: "brightness(0.85)",
                    }}
                ></div>
                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Nội dung chính */}
                <div className="relative z-10 flex flex-col justify-between items-center text-white w-full h-full">
                    {/* Phần trên */}
                    <div className="w-full flex-grow flex justify-center items-center px-4 text-center"></div>

                    {/* Dòng chữ nổi bật */}
                    <div className="hidden md:block w-full h-[170px] sm:h-[230px] relative">
                        {/* divcutleft */}
                        <div
                            className="w-[80%] sm:w-[60%] h-[70px] sm:h-[90px] bg-[#0F0F0F] border-t-2 border-r-2 absolute top-0 left-0 flex items-center justify-center">
                        <span
                            className="text-[28px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold text-center tracking-[1px]">
                            Cung cấp dịch vụ{" "}
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">
                                tận tâm
                            </span>
                        </span>
                        </div>

                        {/* divcutright */}
                        <div
                            className="w-[80%] sm:w-[65%] h-[70px] sm:h-[90px] bg-[#0F0F0F] border-b-2 border-l-2 absolute -bottom-2 sm:bottom-[3.2rem] right-0 flex items-center">
                        <span
                            className="text-[28px] sm:text-[38px] md:text-[42px] lg:text-[46px] xl:text-[50px] font-bold ml-4 sm:ml-8 text-center tracking-[1px]">
                            tạo dựng giá trị{" "}
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">
                                bền lâu.
                            </span>
                        </span>
                        </div>
                    </div>

                    {/* Mobile Text */}
                    <div className="md:hidden w-full h-[150px] sm:h-[200px] relative">
                        {/* divcutleft */}
                        <div
                            className="w-[80%] sm:w-[60%] h-[60px] sm:h-[80px] bg-[#0F0F0F] border-t-2 border-r-2 absolute top-0 left-0 flex items-center justify-center">
                        <span className="text-[24px] sm:text-[34px] font-bold text-center tracking-[1px]">
                            Dịch vụ{" "}
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">
                                tận tâm
                            </span>
                        </span>
                        </div>

                        {/* divcutright */}
                        <div
                            className="w-[80%] sm:w-[65%] h-[60px] sm:h-[80px] bg-[#0F0F0F] border-b-2 border-l-2 absolute bottom-8 sm:-bottom-4 right-0 flex items-center">
                        <span className="text-[24px] sm:text-[34px] font-bold ml-4 sm:ml-8 text-center tracking-[1px]">
                            Giá trị{" "}
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text">
                                bền lâu.
                            </span>
                        </span>
                        </div>
                    </div>

                    {/* Phần dưới */}
                    <div
                        className="w-full xl:max-w-[1350px] 2xl:max-w-[1620px] px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                        {/* Mô tả thương hiệu */}
                        <div className="text-center lg:text-left max-w-[500px] mx-auto lg:mx-0">
                            <p className="text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-white leading-relaxed">
                                WoodPlus mang đến giải pháp toàn diện, từ{" "}
                                <strong className="text-[#D8CCA6]">thiết kế sáng tạo</strong> đến{" "}
                                <strong className="text-[#D8CCA6]">thi công chất lượng</strong>. Chúng tôi tạo ra không
                                gian
                                đẹp, ứng dụng cao và bền vững.
                            </p>
                        </div>

                        {/* Nút "Xem Dự Án" và "Liên Hệ" */}
                        <div className="flex justify-center lg:justify-end items-center space-x-2">
                            {/* Nút Xem Dự Án */}
                            <Link
                                to="/projects"
                                className="w-[110px] sm:w-[125px] lg:w-[140px] h-[40px] sm:h-[45px] lg:h-[50px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[16px] sm:text-[18px] rounded-l-lg border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                            <span className="hidden lg:inline text-[18px]">
                                {!isHovered ? (
                                    <TbArrowForwardUp className="inline-block text-[25px]"/>
                                ) : (
                                    "Xem dự án"
                                )}
                            </span>
                                <span className="lg:hidden text-[15px] font-semibold">Xem dự án</span>
                            </Link>

                            {/* Nút Liên Hệ */}
                            <Link
                                to="/liên-hệ"
                                className="w-[110px] sm:w-[125px] lg:w-[140px] h-[40px] sm:h-[45px] lg:h-[50px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[18px] italic rounded-r-lg border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                            >
                                Liên hệ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:block"><DarkSpacing/></div>

            <div className="pt-14 md:pt-0">
                <div className="px-4 mx-auto max-w-[1620px] sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Trao
                            trọn niềm tin vào
                            WoodPlus</h2>
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
                                    chính là kim chỉ nam cho mọi hoạt động của WoodPlus. Với lòng tận tụy và niềm đam mê
                                    sâu sắc, chúng tôi tự hào mang đến những dịch vụ hoàn hảo, vượt xa mong đợi của bạn.
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
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Đảm bảo vật liệu cao
                                    cấp
                                </dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Mỗi sản phẩm đều được chế
                                    tác từ những vật liệu chất lượng cao, đảm bảo độ bền và tính thẩm mỹ vượt trội, đáp
                                    ứng mọi nhu cầu của khách hàng.
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
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Đội ngũ chuyên
                                    nghiệp
                                </dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Đội ngũ của chúng tôi gồm
                                    các chuyên gia có kinh nghiệm, luôn tận tâm và sáng tạo để mang đến những giải pháp
                                    tối ưu nhất cho khách hàng.
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
                                <dt className="text-[16px] sm:text-[20px] font-medium text-white">Dịch vụ hậu mãi chu
                                    đáo
                                </dt>
                                <dd className="text-[13px] sm:text-[17px] mt-2 text-[#CECECE]">Chúng tôi không chỉ mang
                                    đến sản phẩm chất lượng mà còn cung cấp dịch vụ hậu mãi tận tình, đồng hành cùng
                                    khách hàng trong suốt hành trình sử dụng sản phẩm.
                                </dd>
                            </div>
                        </div>
                    </dl>
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

            {/* Thẻ divcha */}
            <div className="w-full flex justify-center items-center mb-[18px] pt-14 md:pt-0 pb-8">

                <div className="w-full max-w-[1620px]">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        <div className="col-span-1 lg:col-span-3 text-center lg:mb-8">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                            <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Dịch
                                vụ</h2>
                            <p className="w-[330px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                                WoodPlus mang đến giải pháp trọn gói cho thiết kế và thi công nội thất,
                                cá nhân hóa không gian sống, kết hợp hài hòa giữa công năng và thẩm mỹ.
                            </p>
                        </div>


                        <div className="flex-col justify-center lg:-mt-[150px] mb-4 lg:ml-8 2xl:ml-0 relative">
                            <Link to="/thiết-kế">
                                <img
                                    src="/assets/images/service/service3.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div
                                className="divtext absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 text-center p-6">
                                <Link
                                    to="/thiết-kế"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-[#BEAB81] hover:text-white"
                                >
                                    Dịch vụ thiết kế
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Giải pháp thiết kế nội thất tinh tế. Chúng tôi hiện thực hóa ý tưởng của bạn, tạo
                                    nên không gian sống hài hòa giữa công năng và thẩm mỹ, đậm dấu ấn cá nhân.
                                </p>
                            </div>
                        </div>


                        <div className="flex-col justify-center mb-4 relative">
                            <Link to="/trọn-gói">
                                <img
                                    src="/assets/images/service/service1.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div className="text-center absolute bottom-0 left-0 w-full bg-[#0F0F0F] bg-opacity-85 p-6">
                                <Link
                                    to="/trọn-gói"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-[#BEAB81] hover:text-white"
                                >
                                    Xây dựng trọn gói
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Từ thiết kế, thi công đến hoàn thiện, chúng tôi đồng hành cùng bạn trong từng giai
                                    đoạn, đảm bảo dự án được thực hiện đúng tiến độ, tối ưu chi phí và mang đến không
                                    gian hoàn mỹ như mong đợi.
                                </p>
                            </div>
                        </div>

                        <div className="flex-col lg:-mt-[150px] justify-center mb-4 lg:mr-4 2xl:mr-0 relative">
                            <Link to="/thi-công">
                                <img
                                    src="/assets/images/service/services2.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div
                                className="text-center absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 p-6">
                                <Link
                                    to="/thi-công"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[32px] text-[#BEAB81] hover:text-white"
                                >
                                    Thi công nội thất
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Chúng tôi sử dụng vật liệu cao cấp, kỹ thuật hiện đại cùng đội ngũ tay nghề cao để
                                    đảm bảo từng chi tiết đều hoàn hảo, mang lại không gian bền vững.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <div className="hidden lg:block">
                <LightSpacing/>
            </div>

            <div className="w-full text-white bg-[#e7e5e4]">
                {/* divcon */}
                <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto">
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
                                <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                                <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white ">Quy
                                    trình làm việc</h2>
                            </div>

                            {/* divquy (3 quy trình) */}
                            <div
                                className="w-[350px] sm:w-[600px] grid grid-cols-2 md:grid-cols-3 sm:gap-6 text-center">
                                {/* Quy trình */}
                                {[
                                    {id: 1, text: 'Trao đổi ý tưởng và yêu cầu với kiến trúc sư.'},
                                    {id: 2, text: 'Khảo sát hiện trạng công trình thiết kế.'},
                                    {id: 3, text: 'Ký hợp đồng, lập bản vẽ 2D và chọn vật liệu.'},
                                    {id: 4, text: 'Thiết kế 3D với hình ảnh minh họa nội thất.'},
                                    {id: 5, text: 'Duyệt và thẩm định thiết kế với khách hàng.'},
                                    {id: 6, text: 'Bàn giao hồ sơ và hoàn tất hợp đồng.'},
                                    {id: 7, text: 'Tư vấn và thương thảo hợp đồng.'},
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

            <Testimonials/>

            <div className="hidden md:block"><DarkSpacing/></div>

            <ContactSection/>
            <div className="hidden md:block"><DarkSpacing/></div>
            <ContactPopup/>
            <ZaloChatButton/>
        </main>
    );
};

export default Services;