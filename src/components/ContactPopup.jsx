import React, { useState } from "react";

const ContactPopup = () => {
    const [isOpen, setIsOpen] = useState(false); // Quản lý trạng thái pop-up
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !phone) {
            setError("Họ tên và số điện thoại là bắt buộc.");
            setSuccess("");
        } else {
            setError("");
            setSuccess("Cảm ơn bạn đã liên hệ với chúng tôi!");
        }
    };

    return (
        <>
            {/* Nút liên hệ */}
            <button
                className="fixed bottom-1 right-1 sm:bottom-10 sm:right-10 bg-[#272727] text-[#BEAB81] sm:bg-gradient-to-r from-[#D0C49E] to-[#A79268] sm:text-black py-[0.22rem] px-2 sm:py-2 sm:px-4 rounded-lg border-2 font-medium sm:font-semibold"
                onClick={() => setIsOpen(true)}
            >
                Tư vấn miễn phí
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
                        <h3 className="text-center font-Tangerine text-[20px] sm:text-[22px] md:text-[22px] lg:text-[24px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-2xl xl:text-[28px] font-bold text-center text-white mb-12">Nhận tư vấn miễn phí</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm text-white font-medium">
                                    Họ Tên
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm text-white font-medium">
                                    Số Điện Thoại
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
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
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm text-white font-medium">
                                    Lời Nhắn
                                </label>
                                <textarea
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded mt-2"
                                    rows="4"
                                />
                            </div>

                            {/* Thông báo lỗi hoặc thành công */}
                            {error && <p className="text-center text-red-500 text-sm mb-4">{error}</p>}
                            {success && <p className="text-center text-[#BEAB81] text-sm mb-4">{success}</p>}

                            <div className="text-center my-2">
                                <button
                                    onClick={handleSubmit}
                                    className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[128px] md:h-[42px] bg-[#D8CCA6] text-black font-semibold text-[14px] sm:text-[15px] md:text-[17px] italic rounded-[10px] border-2 border-white hover:bg-[#272727] hover:text-[#C4B58E] transition duration-300"
                                >
                                    Xác nhận
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
