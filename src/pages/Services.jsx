import React, {useState} from 'react';
import {TbArrowForwardUp} from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";
import LightSpacing from "../components/LightSpacing";
import Testimonials from "../components/Testimonials";
import {Link} from "react-router-dom";
import ContactPopup from "../components/ContactPopup";

const Services = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F]">
            {/* Hero Section */}
            <div
                className="h-[580px] sm:h-[650px] lg:h-[750px] xl:h-[800px] 2xl:h-[900px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/banner/banner3.jpg')",
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
                    <div className="hidden md:block w-full h-[170px] sm:h-[230px] relative">
                        {/* divcutleft */}
                        <div
                            className="w-[80.40%] sm:w-[60.05%] h-[80px] sm:h-[100px] bg-[#0F0F0F] border-t-[2px] border-r-[2px] absolute 2xl:top-[9px] left-0 flex items-center justify-center">
                            {/* Nội dung cho divcutleft */}
                            <span
                                className="text-[34px] sm:text-[48px] md:text-[50px] lg:text-[50px] xl:text-[53px] 2xl:text-[68px] font-bold text-center tracking-[2%]">Cung cấp dịch vụ<span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> tận tâm</span></span>
                        </div>

                        {/* divcutright */}
                        <div
                            className="w-[80.05%] sm:w-[65%] h-[80px] sm:h-[100px] bg-[#0F0F0F] border-b-[2px] border-l-[2px] absolute 2xl:-bottom-2 xl:-bottom-[13px] sm:-bottom-4 right-0 flex items-center ">
                            {/* Nội dung cho divcutright */}
                            <span
                                className="text-[34px] sm:text-[48px] md:text-[50px] lg:text-[50px] xl:text-[53px] 2xl:text-[68px] font-bold ml-6 2xl:ml-36 text-center tracking-[2%]">tạo dựng giá trị
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> bền lâu.</span></span>
                        </div>
                    </div>

                    <div className="md:hidden w-full h-[170px] sm:h-[230px] relative">
                        {/* divcutleft */}
                        <div
                            className="w-[80.40%] sm:w-[60.05%] h-[80px] sm:h-[100px] bg-[#0F0F0F] border-t-[2px] border-r-[2px] absolute top-0 left-0 flex items-center justify-center">
                            {/* Nội dung cho divcutleft */}
                            <span
                                className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold text-center tracking-[2%]">Dịch vụ<span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> tận tâm</span></span>
                        </div>

                        {/* divcutright */}
                        <div
                            className="w-[80.05%] sm:w-[65%] h-[80px] sm:h-[100px] bg-[#0F0F0F] border-b-[2px] border-l-[2px] absolute -bottom-2 sm:-bottom-4 right-0 flex items-center ">
                            {/* Nội dung cho divcutright */}
                            <span
                                className="text-[34px] sm:text-[48px] md:text-[58px] lg:text-[64px] xl:text-[68px] 2xl:text-[68px] font-bold ml-6 sm:ml-44 text-center tracking-[2%]">Giá trị
                            <span
                                className="bg-gradient-to-r from-[#D8CCA6] via-[#AA956B] to-[#D8CCA6] text-transparent bg-clip-text"> bền lâu.</span></span>
                        </div>
                    </div>


                    {/* Thẻ divbot */}
                    <div
                        className=" w-full xl:max-w-[1350px] 2xl:max-w-[1620px] h-[calc(50%-50px)] grid grid-cols-1 lg:grid-cols-2 justify-between items-center px-4 sm:px-6 lg:px-8">
                        {/* Mô tả bên trái */}
                        <div className="w-full lg:w-1/2">
                            <p className=" text-[15px] tracking-[0.01rem] sm:text-[16px] md:text-[18px] lg:text-[20px] max-w-[330px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[450px] 2xl:max-w-[450px] mx-auto lg:mt-[150px] text-center lg:text-left text-white">
                                WoodPlus mang đến giải pháp toàn diện, từ thiết kế sáng tạo đến thi công chất
                                lượng. Chúng tôi tạo ra không gian đẹp, ứng dụng cao và
                                bền vững.
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
                                className="divtext absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 text-center pb-1">
                                <Link
                                    to="/thiết-kế"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[34px] text-[#BEAB81] hover:text-white"
                                >
                                    Dịch vụ thiết kế
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Chúng tôi mang đến những ý tưởng thiết kế sáng tạo, độc đáo, phù hợp với phong cách
                                    và nhu cầu riêng của từng khách hàng, tạo nên không gian sống hoàn hảo.
                                </p>
                            </div>
                        </div>


                        <div className="flex-col justify-center mb-4 relative">
                            <Link to="/liên-hệ">
                                <img
                                    src="/assets/images/service/service1.jpg"
                                    alt="Dịch vụ R"
                                    className="mx-auto w-[320px] h-[260px] sm:w-[500px] sm:h-[460px] lg:w-[370px] lg:h-[480px] xl:w-[500px] xl:h-[520px] 2xl:h-[600px] object-cover"
                                />
                            </Link>
                            <div
                                className="text-center absolute bottom-0 left-0 w-full bg-[#0F0F0F] bg-opacity-85 pb-1">
                                <Link
                                    to="/liên-hệ"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[34px] text-[#BEAB81] hover:text-white"
                                >
                                    Dịch vụ trọn gói
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Từ ý tưởng đến hoàn thiện, chúng tôi cung cấp giải pháp toàn diện, đảm bảo mọi chi
                                    tiết được thực hiện đồng bộ, chuyên nghiệp và đúng tiến độ.
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
                                className="text-center absolute bottom-0 lg:bottom-[150px] left-0 w-full bg-[#0F0F0F] bg-opacity-85 pb-1">
                                <Link
                                    to="/thi-công"
                                    className="flex items-center justify-center font-medium text-[22px] sm:text-[26px] md:text-[28px] xl:text-[32px] 2xl:text-[34px] text-[#BEAB81] hover:text-white"
                                >
                                    Dịch vụ thi công
                                    <span className="ml-14 text-[30px]">&rarr;</span>
                                </Link>
                                <p className="w-[280px] sm:w-[310px] md:w-[350px] 2xl:w-[450px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-1 lg:mt-4">
                                    Đội ngũ thi công lành nghề của chúng tôi cam kết biến bản vẽ thiết kế thành hiện
                                    thực với chất lượng cao và sự tỉ mỉ trong từng công đoạn.
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
        </main>
    );
};

export default Services;