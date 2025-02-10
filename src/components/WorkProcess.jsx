import React from "react";
import { Link } from "react-router-dom";
import {
    FaSearch, FaDraftingCompass, FaFileContract, FaClipboardList,
    FaCogs, FaPaintBrush, FaCheckCircle, FaHardHat, FaTools, FaHandshake
} from "react-icons/fa";

const WorkProcess = () => {
    const steps = [
        { icon: <FaSearch />, text: "Trao đổi ý tưởng & yêu cầu" },
        { icon: <FaDraftingCompass />, text: "Khảo sát công trình & lập bản vẽ" },
        { icon: <FaFileContract />, text: "Ký hợp đồng & chọn vật liệu" },
        { icon: <FaClipboardList />, text: "Thiết kế 3D minh họa nội thất" },
        { icon: <FaCheckCircle />, text: "Duyệt và thẩm định thiết kế" },
        { icon: <FaCogs />, text: "Gia công & sản xuất tại xưởng" },
        { icon: <FaHardHat />, text: "Chuẩn bị thi công tại công trình" },
        { icon: <FaTools />, text: "Thi công & lắp đặt nội thất" },
        { icon: <FaPaintBrush />, text: "Kiểm tra & hoàn thiện chi tiết" },
        { icon: <FaHandshake />, text: "Bàn giao – Nghiệm thu – Bảo hành" },
    ];

    return (
        <div className="w-full bg-[#e7e5e4] py-16">
            <div className="max-w-[1200px] mx-auto text-white px-6 sm:px-12">
                {/* Tiêu đề */}
                <div className="text-center mb-10">
                    <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#272727] ">Quy
                        trình làm việc</h2>
                </div>

                {/* Bố cục GRID dạng Bậc Thang + Đường Thẳng */}
                <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-28">
                    {/* Đường thẳng chính giữa */}
                    <div
                        className="hidden md:block absolute top-10 -bottom-10 left-1/2 w-0.5 bg-[#AF9A70] transform -translate-x-1/2"></div>

                    {/* Cột Bên Trái */}
                    <div className="flex flex-col gap-8 sm:gap-16">
                        {steps.filter((_, index) => index % 2 === 0).map((step, index) => (
                            <div key={index} className="flex items-center gap-6 relative">
                                {/* Card bước làm việc */}
                                <div className="flex flex-col items-center p-4 text-[#0F0F0F] w-[300px]">
                                    <div className="text-[#AF9A70] text-[30px]">
                                        {step.icon}
                                    </div>
                                    <p className="text-[14px] sm:text-[16px] font-medium text-center mt-2">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cột Bên Phải (Thấp Hơn 1 Chút) */}
                    <div className="flex flex-col gap-8 sm:gap-16 sm:mt-10 md:mt-24">
                        {steps.filter((_, index) => index % 2 === 1).map((step, index) => (
                            <div key={index} className="flex items-center gap-6 relative">
                                {/* Card bước làm việc */}
                                <div className="flex flex-col items-center p-4 text-[#0F0F0F] w-[300px]">
                                    <div className="text-[#AF9A70] text-[30px]">
                                        {step.icon}
                                    </div>
                                    <p className="text-[14px] sm:text-[16px] font-medium text-center mt-2">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Nút CTA */}
                <div className="text-center mt-12">
                    <Link
                        to="/lien-he"
                        className="w-[180px] h-[45px] bg-[#272727] text-[#C4B58E] font-semibold text-[16px] rounded-xl border border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300 flex items-center justify-center mx-auto"
                    >
                        Tư vấn miễn phí
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
