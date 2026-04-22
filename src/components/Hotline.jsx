import React from 'react';

const Hotline = () => {
    return (
        <a
            href="tel:0961656586" // Khi click, sẽ gọi số hotline trực tiếp
            className="fixed bottom-1 left-1 sm:bottom-10 sm:left-10 bg-[#272727] text-white py-[0.45rem] px-2 sm:py-2 sm:px-4 border-2 font-medium sm:font-bold transition duration-300 flex items-center gap-2 hover:bg-[#BEAB81] hover:text-black"
        >
            {/* Icon Điện Thoại */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                <path d="M20 15.5c-1.25 0-2.45-.2-3.58-.58-.41-.13-.88 0-1.18.3l-2.3 2.3c-2.78-1.37-5.08-3.67-6.45-6.45l2.3-2.3c.3-.3.43-.77.3-1.18-.38-1.13-.58-2.33-.58-3.58 0-.83-.67-1.5-1.5-1.5H4c-.83 0-1.5.67-1.5 1.5 0 9.39 7.61 17 17 17 .83 0 1.5-.67 1.5-1.5V17c0-.83-.67-1.5-1.5-1.5z"/>
            </svg>

            {/* Hiển thị chữ "Gọi ngay" trên màn hình lớn */}
            <span className="hidden sm:block">096 165 6586</span>
        </a>
    );
};

export default Hotline;
