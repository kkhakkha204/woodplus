import React, { useState } from 'react';
import DarkSpacing from "../components/DarkSpacing";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import Hotline from "../components/Hotline";
import BackToTop from "../components/BackToTop";

const Contact = () => {
    const [ten, setTen] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [email, setEmail] = useState("");
    const [nhuCau, setNhuCau] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ten.trim() || !soDienThoai.trim()) {
            setPopupMessage("Bạn chưa nhập đủ thông tin!");
            setShowPopup(true);
            return;
        }

        setLoading(true);

        // Google Forms URL (Dùng URL formResponse)
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeSpD6Rf4Rb9od4TeeTJkcivpOWcT44TXwkZpqoqHT6tiq-eA/formResponse?usp=dialog"; // Thay bằng URL của bạn

        // Tạo URL parameters với entry ID tương ứng
        const formData = new URLSearchParams();
        formData.append("entry.376442972", ten); // Thay entry ID chính xác
        formData.append("entry.1809478819", soDienThoai);
        formData.append("entry.81678036", email);
        formData.append("entry.1473273480", nhuCau);

        try {
            await fetch(formUrl, {
                method: "POST",
                body: formData,
                mode: "no-cors", // Chặn lỗi CORS
            });

            setPopupMessage("Thông tin của bạn đã được gửi thành công!");
            setTen("");
            setSoDienThoai("");
            setEmail("");
            setNhuCau("");
        } catch (error) {
            setPopupMessage("Có lỗi xảy ra khi gửi thông tin.");
        } finally {
            setShowPopup(true);
            setLoading(false);
        }
    };

    const closePopup = () => setShowPopup(false);

    return (
        <main className="bg-[#0F0F0F] pt-20 sm:pt-20">
            {/* HeroSection */}
            <div className="relative bg-cover bg-center h-[300px] md:h-[400px]">
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                    <h1 className="text-[28px] md:text-[48px] lg:text-[68px] font-bold mb-4">
                        Liên hệ với WoodPlus
                    </h1>
                    <p className="text-[15px] md:text-[22px] lg:text-[28px] max-w-2xl">
                        Chúng tôi luôn sẵn sàng hỗ trợ bạn. Đừng ngần ngại liên hệ để nhận được sự tư vấn và hỗ trợ tốt nhất!
                    </p>
                </div>
            </div>

            <DarkSpacing />

            <div className="bg-[#e7e5e4] bg-cover pb-20">
                {/* Wrapper */}
                <div className="max-w-[1200px] mx-auto bg-[#0F0F0F] p-6 md:p-8 rounded-b-3xl">
                    <div className="flex flex-wrap gap-8">
                        {/* Left Section */}
                        <div className="w-full lg:w-[60%] bg-[#0F0F0F] text-white p-6">
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Input Fields Left */}
                                    <div>
                                        <div className="mb-6">
                                            <label htmlFor="ten" className="block text-lg font-medium text-white mb-2">
                                                Họ và tên:<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="ten"
                                                type="text"
                                                value={ten}
                                                onChange={(e) => setTen(e.target.value)}
                                                placeholder="Nhập họ và tên"
                                                className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                                required
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                                                Email:
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Nhập email"
                                                className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="soDienThoai" className="block text-lg font-medium text-white mb-2">
                                                Số điện thoại:<span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                id="soDienThoai"
                                                type="tel"
                                                value={soDienThoai}
                                                onChange={(e) => setSoDienThoai(e.target.value)}
                                                placeholder="Nhập số điện thoại"
                                                className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                                required
                                            />
                                        </div>
                                    </div>
                                    {/* Input Fields Right */}
                                    <div>
                                        <div className="mb-6">
                                            <label htmlFor="nhuCau" className="block text-lg font-medium text-white mb-2">
                                                Tin nhắn:
                                            </label>
                                            <textarea
                                                id="nhuCau"
                                                value={nhuCau}
                                                onChange={(e) => setNhuCau(e.target.value)}
                                                placeholder="Nhập tin nhắn"
                                                className="w-full h-[200px] px-4 py-2 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center mb-12">
                                    <button
                                        type="submit"
                                        className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[128px] md:h-[50px] bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[16px] md:text-[18px] italic rounded-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                                        disabled={loading}
                                    >
                                        {loading ? "Đang gửi..." : "Xác nhận"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Right Section */}
                        <div className="w-full lg:w-[35%] bg-[#272727] p-6 rounded-lg">
                            <h2 className="text-[20px] md:text-[24px] font-medium mb-6 text-white"> Thông tin liên
                                hệ </h2>
                            <p className="mb-4 text-lg text-gray-100">
                                <strong>Hotline:</strong> <br/> 096 777 5868 | 096 165 6586
                            </p>
                            <p className="mb-4 text-lg text-gray-100">
                                <strong>Gmail:</strong> nhadepwoodplus@gmail.com
                            </p>
                            <p className="mb-4 text-lg text-gray-100">
                                <strong>Địa chỉ:</strong> <br/> 168 Đ. Nguyễn Xiển, Hạ Đình, Thanh Xuân, Hà Nội.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pop-up */}
            {showPopup && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg font-medium text-black">{popupMessage}</p>
                        <button onClick={closePopup} className="mt-4 px-4 py-2 bg-[#AF9A70] text-white rounded hover:bg-[#8E7A5E]">
                            Đóng
                        </button>
                    </div>
                </div>
            )}
            <ContactPopup />
            <ZaloChatButton/>
            <Hotline/>
            <BackToTop/>

        </main>
    );
};

export default Contact;
