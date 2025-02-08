import React, { useState } from "react";

const ContactPopup = () => {
    const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái pop-up
    const [ten, setTen] = useState(""); // Họ tên (đồng nhất với ContactSection)
    const [soDienThoai, setSoDienThoai] = useState(""); // Số điện thoại
    const [email, setEmail] = useState(""); // Email
    const [nhuCau, setNhuCau] = useState(""); // Nhu cầu
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
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
        <>
            {/* Nút liên hệ */}
            <button
                className="hidden sm:block fixed bottom-1 right-1 sm:bottom-10 sm:right-10 bg-[#272727] text-[#BEAB81] sm:bg-gradient-to-r from-[#D0C49E] to-[#A79268] sm:text-black py-[0.22rem] px-2 sm:py-2 sm:px-4 border-2 font-medium sm:font-bold hover:bg-[#A79268] transition duration-300"
                onClick={() => setIsOpen(true)}
            >
                Tư vấn KTS
            </button>
            <button
                className="sm:hidden fixed bottom-1 right-1 sm:bottom-10 sm:right-10 bg-[#272727] text-[#BEAB81] sm:bg-gradient-to-r from-[#D0C49E] to-[#A79268] sm:text-black py-[0.42rem] px-3 sm:py-2 sm:px-4  border-2 font-medium sm:font-semibold hover:bg-[#A79268] transition duration-300"
                onClick={() => setIsOpen(true)}
            >
                Tư vấn KTS
            </button>

            {/* Pop-up */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-8 sm:mx-0"
                    onClick={() => setIsOpen(false)} // Tắt pop-up khi click ngoài
                >
                    <div
                        className="bg-[#272727] p-6 rounded-lg w-full max-w-md"
                        onClick={(e) => e.stopPropagation()} // Ngừng sự kiện click để tránh tắt pop-up khi click vào form
                    >
                        <h3 className="text-center font-Tangerine text-[20px] sm:text-[22px] md:text-[22px] lg:text-[24px] font-bold text-[#AF9A70]">
                            WoodPlus
                        </h3>
                        <h2 className="text-2xl xl:text-[28px] font-bold text-center text-white mb-6">
                            Nhận tư vấn miễn phí
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="ten" className="block text-sm text-white font-medium">
                                    Họ Tên <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="ten"
                                    value={ten}
                                    onChange={(e) => setTen(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring-[#BEAB81] focus:border-[#BEAB81]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="so-dien-thoai" className="block text-sm text-white font-medium">
                                    Số Điện Thoại <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="so-dien-thoai"
                                    value={soDienThoai}
                                    onChange={(e) => setSoDienThoai(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring-[#BEAB81] focus:border-[#BEAB81]"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm text-white font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring-[#BEAB81] focus:border-[#BEAB81]"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="nhu-cau" className="block text-sm text-white font-medium">
                                    Nhu cầu của bạn:
                                </label>
                                <textarea
                                    id="nhu-cau"
                                    value={nhuCau}
                                    onChange={(e) => setNhuCau(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2 focus:ring-[#BEAB81] focus:border-[#BEAB81]"
                                    rows="4"
                                />
                            </div>

                            {/* Thông báo lỗi hoặc thành công */}
                            {error && <p className="text-center text-red-500 text-sm mb-4">{error}</p>}
                            {success && <p className="text-center text-[#BEAB81] text-sm mb-4">{success}</p>}

                            <div className="text-center my-2">
                                <button
                                    type="submit"
                                    className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[128px] md:h-[42px] bg-[#D8CCA6] text-black font-semibold text-[14px] sm:text-[15px] md:text-[17px] italic rounded-[10px] border-2 border-white hover:bg-[#272727] hover:text-[#C4B58E] transition duration-300"
                                    disabled={loading}
                                >
                                    {loading ? "Đang gửi..." : "Xác nhận"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ContactPopup;
