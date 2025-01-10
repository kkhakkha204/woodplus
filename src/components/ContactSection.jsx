import React from 'react';

const ContactSection = () => {
    return (
        <div className="w-full flex justify-center items-center bg-cover bg-center "
             style={{backgroundImage: "url('/assets/images/herosection/11.png')"}}>
            {/* Thẻ div cha */}
            <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto relative">
                {/* Thẻ div text */}
                <div className="text-center mb-12">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70] ">WoodPlus</h2>
                    <h1 className="text-[26px] 2xl:text-[48px] font-medium text-white mt-2">Liên hệ với chúng tôi</h1>
                </div>

                {/* Thẻ divleft và divright sử dụng grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-48 sm:mx-[200px]">
                    {/* Thẻ divleft */}
                    <div className="sm:w-full w-[350px] mx-auto relative">
                        {/* Thẻ divinfo */}
                        <div className="mb-6  ">
                            <label htmlFor="danhxung-left"
                                   className="block text-lg font-medium text-white mb-2">Danh xưng</label>
                            <input
                                id="danhxung-left"
                                type="text"
                                placeholder="Nhập danh xưng"
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                        <div className="mb-6  ">
                            <label htmlFor="danhxung-left"
                                   className="block text-lg font-medium text-white mb-2">Danh xưng</label>
                            <input
                                id="danhxung-left"
                                type="text"
                                placeholder="Nhập danh xưng"
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                    </div>

                    {/* Thẻ divright */}
                    <div className="sm:w-full w-[350px] mx-auto relative">
                        {/* Thẻ divinfo */}
                        <div className="mb-6">
                            <label htmlFor="danhxung-right"
                                   className="block text-lg font-medium text-white mb-2">Danh xưng</label>
                            <input
                                id="danhxung-right"
                                type="text"
                                placeholder="Nhập danh xưng"
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="danhxung-right"
                                   className="block text-lg font-medium text-white mb-2">Danh xưng</label>
                            <input
                                id="danhxung-right"
                                type="text"
                                placeholder="Nhập danh xưng"
                                className="w-[350px] sm:w-[520px] h-[50px] px-4 text-gray-700 border border-gray-300 rounded-lg shadow-sm focus:ring-[#AF9A70] focus:border-[#AF9A70]"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    {/* Nút Tư vấn */}
                    <button
                        className="w-[90px] h-[35px] sm:w-[100px] sm:h-[40px] md:w-[128px] md:h-[50px] bg-[#272727] text-[#C4B58E] font-semibold text-[15px] sm:text-[16px] md:text-[18px] italic rounded-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                    >
                        Xac nhan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
