import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaBehance } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="py-6 bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] to-[#041f1e] text-white">
            <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-[#BEAB81] md:space-y-12 divide-opacity-50">

                <div className="grid grid-cols-12">
                    {/* Logo */}
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <div className="flex justify-center md:justify-start">
                            <img
                                src="/assets/images/footer/footer1.png"
                                alt="Logo"
                                className="w-[120px] h-[65px] sm:w-[150px] sm:h-[82px] lg:w-[260px] lg:h-[191px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Danh mục chính */}
                    <div className="pt-3 col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg text-[#BEAB81] font-medium">WoodPlus</p>
                        <ul>
                            <li><Link to="/giới-thiệu" className="text-[#CECECE] hover:text-white">Giới thiệu</Link></li>
                            <li><Link to="/dịch-vụ" className="text-[#CECECE] hover:text-white">Dịch vụ</Link></li>
                            <li><Link to="/projects" className="text-[#CECECE] hover:text-white">Dự án</Link></li>
                            <li><Link to="/news" className="text-[#CECECE] hover:text-white">Blog</Link></li>
                            <li><Link to="/liên-hệ" className="text-[#CECECE] hover:text-white">Tư vấn miễn phí</Link></li>
                        </ul>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className="pt-3 col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg text-[#BEAB81] font-medium">Thông tin</p>
                        <ul className="text-[#CECECE]">
                            <li>096 165 6586</li>
                            <li>168 Đ. Nguyễn Xiển, Hạ Đình, Thanh Xuân, Hà Nội</li>
                            <li>8:00 - 22:00</li>
                        </ul>
                    </div>
                </div>

                {/* Dòng cuối cùng */}
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>© 2015 WoodPlus – Nội Thất Tinh Tế.</span>
                    </div>

                    {/* Mạng xã hội */}
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a href="https://www.facebook.com/NoiThatWoodPlus/" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#1877F2] transition duration-300 text-xl">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.youtube.com/nhadepwoodplus" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#FF0000] transition duration-300 text-xl">
                            <FaYoutube />
                        </a>
                        <a href="https://www.behance.net/nhadepwoodplus" target="_blank" rel="noopener noreferrer" className="text-[#CECECE] hover:text-[#1769FF] transition duration-300 text-xl">
                            <FaBehance />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
