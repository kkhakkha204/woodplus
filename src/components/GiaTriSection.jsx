import React, { useState } from "react";

const GiaTriSection = () => {
    const [activeTab, setActiveTab] = useState("giaTriCotLoi");
    const [activeAccordion, setActiveAccordion] = useState(0);

    const tabs = {
        giaTriCotLoi: [
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tiêu đề 1." },
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tiêu đề 2." },
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tiêu đề 3." },
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tiêu đề 4." },
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tiêu đề 5." },
        ],
        tamNhin: [
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tầm nhìn 1." },
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của tầm nhìn 2." },
        ],
        suMenh: [
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của sứ mệnh 1." },
            { title: "Sed quis doloribus Et quisquam ", description: "Mô tả của sứ mệnh 2." },
        ],
    };

    return (
        <div className="w-full bg-[#e7e5e4] text-white">
            {/* divcon */}
            <div className="w-[1620px] bg-[#0F0F0F] mx-auto pb-[40px] flex">
                {/* divleft */}
                <div className="w-[770px] px-[20px] mt-20">
                    {/* divhead */}
                    <div className="flex justify-between bg-[#1A1A1A] text-white text-center h-[57px]">
                        <button
                            onClick={() => setActiveTab("giaTriCotLoi")}
                            className={`flex-1 border-r-2 border-t-2 border-[#757575] text-[18px] font-medium italic ${
                                activeTab === "giaTriCotLoi" ? "bg-[#AF9A70] text-[20px] font-medium" : ""
                            }`}
                        >
                            Giá trị cốt lõi
                        </button>
                        <button
                            onClick={() => setActiveTab("tamNhin")}
                            className={`flex-1 border-r-2 border-t-2 border-[#757575] text-[18px] font-medium italic ${
                                activeTab === "tamNhin" ? "bg-[#AF9A70] text-[20px] font-medium" : ""
                            }`}
                        >
                            Tầm nhìn
                        </button>
                        <button
                            onClick={() => setActiveTab("suMenh")}
                            className={`flex-1 border-t-2 border-r-2 border-[#757575] text-[18px] font-medium italic ${
                                activeTab === "suMenh" ? "bg-[#AF9A70] text-[20px] font-medium" : ""
                            }`}
                        >
                            Sứ mệnh
                        </button>
                    </div>

                    {/* divdetail */}
                    <div className="bg-[#1A1A1A] text-white h-[725px] p-4 overflow-y-auto border-r-2 border-[#757575]">
                        {tabs[activeTab].map((item, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => setActiveAccordion(index)}
                                    className={`w-full text-left font-medium text-[18px] py-2 px-4 ${
                                        activeAccordion === index
                                            ? "bg-[#AF9A70] text-white"
                                            : "bg-[#333333] text-[#CECECE]"
                                    }`}
                                >
                                    {item.title}
                                </button>
                                {activeAccordion === index && (
                                    <p className="mt-2 text-[16px] text-[#CECECE] px-4">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* divright */}
                <div className="w-[810px]  mt-20 border-l-2 border-t-2 border-[#757575]">
                    <img
                        src="/assets/images/herosection/11.png"
                        alt="Ảnh minh họa"
                        className="w-[810px] h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default GiaTriSection;
