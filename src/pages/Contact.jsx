import React, { useState } from 'react';
import { TbArrowForwardUp } from "react-icons/tb";
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";

const Contact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handleSubmit = () => {
        // Kiểm tra các trường bắt buộc
        if (!name || !phone) {
            setPopupMessage('Vui lòng nhập họ tên và số điện thoại.');
            setShowPopup(true);
        } else {
            setPopupMessage('Thông tin đã được gửi thành công.');
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <main className="bg-[#0F0F0F] pt-20 sm:pt-20">
            {/* HeroSection */}
            <div className="relative bg-cover bg-center h-[300px] md:h-[400px] ">
                {/* Text overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 ">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h2>
                    <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold mb-4">
                        Liên hệ với woodplus
                    </h1>
                    <p className="text-[18px] md:text-[22px] lg:text-[28px] max-w-2xl">
                        Chúng tôi luôn sẵn sàng hỗ trợ bạn. Đừng ngần ngại liên hệ để nhận được sự tư vấn và hỗ trợ tốt nhất!
                    </p>
                </div>
            </div>

            <DarkSpacing />

            <div className="bg-[#e7e5e4]"
                 style={{backgroundImage: 'url(/assets/images/herosection/11.png)'}}>
                {/* Wrapper */}
                <div className="max-w-[1200px] mx-auto bg-[#0F0F0F] p-6 md:p-8 ">
                    <div className="flex flex-wrap gap-8">
                        {/* Left Section */}
                        <div className="w-full lg:w-[65%] bg-[#0F0F0F] text-white p-6">
                            <h2 className="text-[28px] md:text-[36px] font-medium mb-6">Thông tin liên hệ</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Input Fields Left */}
                                <div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="name"
                                            className="block text-lg font-medium text-white mb-2"
                                        >
                                            Họ và tên:<span>( <span className="text-red-500">*</span> )</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Nhập họ và tên"
                                            className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="email"
                                            className="block text-lg font-medium text-white mb-2"
                                        >
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
                                        <label
                                            htmlFor="phone"
                                            className="block text-lg font-medium text-white mb-2"
                                        >
                                            Số điện thoại:<span>( <span className="text-red-500">*</span> )</span>
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="Nhập số điện thoại"
                                            className="w-full h-[50px] px-4 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                        />
                                    </div>
                                </div>
                                {/* Input Fields Right */}
                                <div>
                                    <div className="mb-6">
                                        <label
                                            htmlFor="message"
                                            className="block text-lg font-medium text-white mb-2"
                                        >
                                            Tin nhắn:
                                        </label>
                                        <textarea
                                            id="message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Nhập tin nhắn"
                                            className="w-full h-[200px] px-4 py-2 text-gray-700 border border-gray-300 shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70] rounded-lg"
                                        ></textarea>
                                    </div>
                                    <div className="text-center mb-12">
                                        {/* Nút Tư vấn */}
                                        <button
                                            onClick={handleSubmit}
                                            className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[128px] md:h-[50px] bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[16px] md:text-[18px] italic rounded-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                                        >
                                            Xác nhận
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="w-full lg:w-[30%] bg-[#272727] p-6 rounded-lg">
                            <h2 className="text-[28px] md:text-[36px] font-medium mb-6 text-white">Liên hệ nhanh</h2>
                            <p className="mb-4 text-lg text-gray-100">
                                <strong>Hotline:</strong> 0123 456 789
                            </p>
                            <p className="mb-4 text-lg text-gray-100">
                                <strong>Gmail:</strong> contact@example.com
                            </p>
                            <p className="mb-4 text-lg text-gray-100">
                                <strong>Địa chỉ:</strong> 123 Đường ABC, Quận XYZ, Thành phố HCM
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
                        <button
                            onClick={closePopup}
                            className="mt-4 px-4 py-2 bg-[#AF9A70] text-white rounded hover:bg-[#8E7A5E]"
                        >
                            Đóng
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Contact;
