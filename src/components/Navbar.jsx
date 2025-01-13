import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Kiểm tra độ trong suốt
            setIsTransparent(currentScrollY <= 50);

            // Ẩn hoặc hiển thị menu
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Cuộn xuống và đã cuộn qua một khoảng
                setIsVisible(false);
            } else {
                // Cuộn lên
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Dọn dẹp sự kiện khi component bị hủy
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div
            className={`navbarcha w-full border-b-[1px] border-[#757575] font-medium tracking-[5%] text-[18px] text-[#FFFFFF] fixed top-0 left-0 z-50 pointer-events-auto transition-transform duration-300 ${
                isTransparent ? "bg-opacity-50 bg-[#272727]" : "bg-opacity-90 bg-[#272727]"
            } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="div1 w-full xl:max-w-[1250px] 2xl:max-w-[1620px] mx-auto flex justify-between items-center h-[80px] sm:h-[90px]">
                {/* Hamburger Button */}
                <button
                    className="xl:hidden text-[#BEAB81] focus:outline-none ml-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 -1 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.15}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                {/* Thẻ divleft */}
                <div className="divleft hidden xl:flex w-[663px] font-medium justify-between">
                    <Link to="/" className="text-[#BEAB81] font-bold italic relative group">
                        Trang chủ
                        <span className="absolute left-0 -bottom-1 h-[1px] bg-[#BEAB81] transition-all duration-300 w-full"></span>
                    </Link>
                    <Link to="/giới-thiệu" className="hover:text-[#BEAB81] relative group">
                        Giới thiệu
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#BEAB81] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    {/* Dịch vụ with dropdown */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link to="/dịch-vụ" className="hover:text-[#BEAB81] relative group">
                            Dịch vụ
                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#BEAB81] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        {dropdownOpen && (
                            <div className="absolute left-0 w-[200px] bg-[#272727] bg-opacity-90 text-white border-t-2 border-[#BEAB81]">
                                <Link
                                    to="/thiết-kế"
                                    className="block py-2 px-4 hover:bg-[#3F3935]"
                                >
                                    Dịch vụ thiết kế
                                </Link>
                                <Link
                                    to="/thi-công"
                                    className="block py-2 px-4 hover:bg-[#3F3935]"
                                >
                                    Dịch vụ thi công
                                </Link>
                            </div>
                        )}
                    </div>
                    <Link to="/dự-án" className="hover:text-[#BEAB81] relative group">
                        Dự án
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#BEAB81] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </div>

                {/* Logo */}
                <div className="xl:mx-[80px] 2xl:mx-[150px] flex-grow flex justify-center items-center">
                    <img
                        src="/assets/images/logo/wp1.png"
                        alt="Woodplus Logo"
                        className="w-[66.25px] h-[50px] object-contain"
                    />
                </div>

                {/* Thẻ divright */}
                <div className="divright hidden xl:flex w-[663px] justify-between">
                    <Link to="/liên-hệ" className="hover:text-[#BEAB81] relative group">
                        Liên hệ
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#BEAB81] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/news" className="hover:text-[#BEAB81] relative group">
                        Tin tức
                        <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#BEAB81] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <a href="/liên-hệ" className="text-[#BEAB81] italic relative group">
                        Tư vấn miễn phí
                        <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-[#BEAB81] transition-all duration-300"></span>
                    </a>
                </div>

                {/* Placeholder for spacing */}
                <div className="flex xl:hidden w-[52px]"></div>
            </div>

            {/* Hamburger Menu (Hiển thị trên màn hình nhỏ) */}
            {menuOpen && (
                <div className="xl:hidden bg-[#272727] bg-opacity-90 text-white border-t-2 border-[#BEAB81]">
                    <Link
                        to="/"
                        className="block py-4 px-4 text-[#BEAB81] italic hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Trang chủ
                    </Link>
                    <Link
                        to="/giới-thiệu"
                        className="block py-4 px-4 hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Giới thiệu
                    </Link>
                    <Link
                        to="/dịch-vụ"
                        className="block py-4 px-4 hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Dịch vụ
                    </Link>
                    <Link
                        to="/thiết-kế"
                        className="block py-4 px-8 bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Dịch vụ thiết kế
                    </Link>
                    <Link
                        to="/thi-công"
                        className="block py-4 px-8 bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Dịch vụ thi công
                    </Link>
                    <Link
                        to="/dự-án"
                        className="block py-4 px-4 hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Dự án
                    </Link>
                    <Link
                        to="/liên-hệ"
                        className="block py-4 px-4 hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Liên hệ
                    </Link>
                    <Link
                        to="/news"
                        className="block py-4 px-4 hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Tin tức
                    </Link>
                    <Link
                        to="/liên-hệ"
                        className="block py-4 px-4 text-[#BEAB81] italic hover:bg-[#3F3935]"
                        onClick={() => setMenuOpen(false)}
                    >
                        Tư vấn miễn phí
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
