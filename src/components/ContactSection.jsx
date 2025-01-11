import React, { useState } from "react";

const ContactSection = () => {
    const [danhXung, setDanhXung] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = () => {
        if (!danhXung.trim() || !soDienThoai.trim()) {
            setPopupMessage("Bạn chưa nhập đủ thông tin!");
        } else {
            setPopupMessage("Thông tin của bạn đã được gửi thành công!");
        }
        setShowPopup(true);
    };

    const closePopup = () => setShowPopup(false);

    return (
        <div
            className="w-full flex justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: "url('/assets/images/herosection/11.png')" }}
        >
            <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto relative">
                <div className="text-center mb-12">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">
                        WoodPlus
                    </h2>
                    <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white mt-2">
                        Liên hệ để nhận tư vấn miễn phí
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-48 sm:mx-[200px]">
                    <div className="sm:w-full w-[350px] mx-auto relative">
                        <div className="mb-6">
                            <label
                                htmlFor="danhxung-left"
                                className="block text-lg font-medium text-white mb-2"
                            >
                                Danh xưng: <span>( <span className="text-red-500">*</span> )</span>
                            </label>
                            <input
                                id="danhxung-left"
                                type="text"
                                placeholder="Nhập danh xưng (Bắt buộc)"
                                value={danhXung}
                                onChange={(e) => setDanhXung(e.target.value)}
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="so-dien-thoai"
                                className="block text-lg font-medium text-white mb-2"
                            >
                                Số điện thoại: <span>( <span className="text-red-500">*</span> )</span>
                            </label>
                            <input
                                id="so-dien-thoai"
                                type="text"
                                placeholder="Nhập số điện thoại (Bắt buộc)"
                                value={soDienThoai}
                                onChange={(e) => setSoDienThoai(e.target.value)}
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                    </div>

                    <div className="sm:w-full w-[350px] mx-auto relative">
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-lg font-medium text-white mb-2"
                            >
                                Email:
                            </label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Nhập Email"
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="nhu-cau"
                                className="block text-lg font-medium text-white mb-2"
                            >
                                Nhu cầu của bạn:
                            </label>
                            <input
                                id="nhu-cau"
                                type="text"
                                placeholder="Viết nhu cầu bạn muốn gửi tới chúng tôi"
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <button
                        onClick={handleSubmit}
                        className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[128px] md:h-[50px] bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[16px] md:text-[18px] italic rounded-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                    >
                        Xác nhận
                    </button>
                </div>

                {/* Pop-up */}
                {showPopup && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg font-medium text-black">{popupMessage}</p>
                            <button
                                onClick={closePopup}
                                className="mt-4 px-4 py-2 bg-[#AF9A70] text-white rounded hover:bg-[#8E7A5E]"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactSection;
