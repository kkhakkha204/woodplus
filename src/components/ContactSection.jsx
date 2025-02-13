import React, { useState } from "react";

const ContactSection = () => {
    const [ten, setTen] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [email, setEmail] = useState("");
    const [nhuCau, setNhuCau] = useState("");
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
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
        <div
            className="w-full flex justify-center items-center bg-cover bg-center mt-14 sm:mt-0"
            style={{ backgroundImage: "url('/assets/images/homepage/homePageHero1.jpg')" }}
        >
            <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto relative p-8 rounded-lg shadow-lg">
                <div className="text-center mb-12">
                    <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                        WoodPlus
                    </h3>
                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2">
                        Nhận tư vấn miễn phí
                    </h2>
                </div>

                {/* Form nhập thông tin */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
                    <div className="w-full">
                        <div className="mb-6">
                            <label htmlFor="ten" className="block text-lg font-medium text-white mb-2">
                                Họ tên: <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="ten"
                                type="text"
                                placeholder="Nhập Họ tên (Bắt buộc)"
                                value={ten}
                                onChange={(e) => setTen(e.target.value)}
                                className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="so-dien-thoai" className="block text-lg font-medium text-white mb-2">
                                Số điện thoại: <span className="text-red-500">*</span>
                            </label>
                            <input
                                id="so-dien-thoai"
                                type="tel"
                                placeholder="Nhập số điện thoại (Bắt buộc)"
                                value={soDienThoai}
                                onChange={(e) => setSoDienThoai(e.target.value)}
                                className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                                Email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Nhập Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="nhu-cau" className="block text-lg font-medium text-white mb-2">
                                Nhu cầu của bạn:
                            </label>
                            <textarea
                                id="nhu-cau"
                                placeholder="Viết nhu cầu bạn muốn gửi tới chúng tôi"
                                value={nhuCau}
                                onChange={(e) => setNhuCau(e.target.value)}
                                className="w-full h-[100px] px-4 py-2 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] resize-none"
                            ></textarea>
                        </div>
                    </div>

                    <div className="text-center lg:col-span-2">
                        <button
                            type="submit"
                            className="w-[120px] h-[45px] bg-[#272727] text-[#C4B58E] font-semibold text-[16px] rounded-lg border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                            disabled={loading}
                        >
                            {loading ? "Đang gửi..." : "Xác nhận"}
                        </button>
                    </div>
                </form>

                {/* Pop-up Thông báo */}
                {showPopup && (
                    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <p className="text-lg font-medium text-black">{popupMessage}</p>
                            <button
                                onClick={closePopup}
                                className="mt-4 px-4 py-2 bg-[#AF9A70] text-white rounded hover:bg-[#8E7A5E] transition"
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
