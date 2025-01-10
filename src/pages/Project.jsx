import React, {useState} from 'react';
import DarkSpacing from "../components/DarkSpacing";
import {TbArrowForwardUp} from "react-icons/tb";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";

const Project = () => {
    const spaces = [
        {
            name: "Nguyễn Văn A",
            job: "Nhà thiết kế nội thất",
            quote: "Một không gian ấm cúng, sáng tạo và đầy cảm hứng.",
            location: "Hà Nội - 2023",
            image: "/assets/images/herosection/11.png",
        },
        {
            name: "Trần Thị B",
            job: "Kiến trúc sư",
            quote: "Không gian là nơi tôi tìm thấy sự bình yên.",
            location: "TP.HCM - 2023",
            image: "/assets/images/herosection/12.png",
        },
        {
            name: "Lê Văn C",
            job: "Chủ doanh nghiệp",
            quote: "Không gian làm việc là nguồn cảm hứng cho mọi thành công.",
            location: "Đà Nẵng - 2023",
            image: "/assets/images/herosection/13.png",
        },
        {
            name: "Phạm Thị D",
            job: "Nhà văn",
            quote: "Tôi yêu một góc nhỏ yên tĩnh, nơi những câu chuyện bắt đầu.",
            location: "Hải Phòng - 2023",
            image: "/assets/images/herosection/14.png",
        },
        {
            name: "Hoàng Văn E",
            job: "Giám đốc sáng tạo",
            quote: "Mỗi không gian là một câu chuyện.",
            location: "Huế - 2023",
            image: "/assets/images/herosection/15.png",
        },
        {
            name: "Vũ Thị F",
            job: "Nhà nghiên cứu",
            quote: "Không gian sống của tôi là nơi trí tuệ và tâm hồn giao thoa.",
            location: "Cần Thơ - 2023",
            image: "/assets/images/herosection/16.png",
        },
    ];

    const projects = [
        { id: 1, location: "HaNoi", year: 2024, image: "/assets/images/herosection/11.png" },
        { id: 2, location: "DaNang", year: 2023, image: "/assets/images/herosection/12.png" },
        { id: 3, location: "HoChiMinh", year: 2022, image: "/assets/images/herosection/13.png" },
        { id: 4, location: "Hue", year: 2021, image: "/assets/images/herosection/14.png" },
        { id: 5, location: "NhaTrang", year: 2020, image: "/assets/images/herosection/15.png" },
        { id: 6, location: "CanTho", year: 2019, image: "/assets/images/herosection/16.png" },
        { id: 7, location: "VungTau", year: 2018, image: "/assets/images/herosection/17.png" },
        { id: 8, location: "HaiPhong", year: 2017, image: "/assets/images/herosection/18.png" },
        { id: 9, location: "QuyNhon", year: 2016, image: "/assets/images/herosection/19.png" },
    ];

    const [isHovered, setIsHovered] = useState(false);

    return (
        <main className="bg-[#0F0F0F]">
            {/* HeroSection */}
            <div
                className="h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[800px] 2xl:h-[900px] w-full bg-cover bg-center relative">
                {/* Lớp chứa ảnh nền với filter brightness */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{backgroundImage: "url('/assets/images/herosection/11.png')", filter: "brightness(1)"}}
                ></div>

                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-0"></div>
            </div>

            <DarkSpacing/>

            {/* Thẻ divcha */}
            <div className="w-full text-white">
                <div className="w-full max-w-[1620px] mx-auto pb-14 px-4">
                    {/* Phần tiêu đề */}
                    <div className="mb-10 text-center">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white mt-2">
                            Không gian sống của người truyền cảm hứng
                        </h1>
                    </div>

                    {/* Các không gian */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {spaces.map((space, index) => (
                            <div key={index} className="bg-[#0F0F0F] p-4 rounded-lg flex-col">
                                <img
                                    src={space.image}
                                    alt={`Space of ${space.name}`}
                                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
                                />
                                <h3 className="text-[20px] text-center sm:text-[24px] font-medium text-white mt-4">
                                    {space.name}
                                </h3>
                                <p className="text-[16px] text-center sm:text-[18px] text-gray-200"> {space.job}</p>
                                <p className="text-[14px] text-center sm:text-[16px] text-[#CECECE] mt-2">"{space.quote}"</p>
                                <p className="text-[16px] text-center sm:text-[18px] text-[#BEAB81] italic mt-2">{space.location}</p>
                            </div>
                        ))}
                    </div>

                    {/* Nút liên hệ và tư vấn */}
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


            <LightSpacing/>

            <div className="w-full text-white bg-[#e7e5e4]">
                {/* Container chính */}
                <div className="max-w-[1620px] mx-auto pb-14 px-4">
                    {/* Tiêu đề */}
                    <div className="mb-10 text-center">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                        <h1 className="text-[26px] 2xl:text-[48px] font-medium text-[#0F0F0F] mt-2">Các công trình
                            khác</h1>
                    </div>

                    {/* Grid các công trình */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project) => (
                            <div key={project.id} className="bg-[#0F0F0F] p-4 rounded-lg">
                                <img
                                    src={project.image}
                                    alt={`Project ${project.id}`}
                                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
                                />
                                <div className="flex justify-between text-white mt-4">
                                    <span>{project.location}</span>
                                    <span>{project.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Nút bấm */}
                    <div className="text-center mt-10">
                        <button
                            className="w-[120px] sm:w-[150px] md:w-[200px] h-[40px] sm:h-[45px] md:h-[50px] bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[16px] md:text-[18px] italic rounded-lg border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                        >
                            Xem Thêm
                        </button>
                    </div>
                </div>
            </div>


            <DarkSpacing/>

            <ContactSection/>

        </main>
    );
};

export default Project;