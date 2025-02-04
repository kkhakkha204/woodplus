import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="py-6 bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] to-[#041f1e] text-white">
            <div
                className="container px-6 mx-auto space-y-6 divide-y dark:divide-[#BEAB81] md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <div rel="noopener noreferrer"
                           className="flex justify-center space-x-3 md:justify-start">
                            <img
                                             src="/assets/images/footer/footer1.png"
                                             alt="Logo"
                                             className="w-[120px] h-[65.49px] sm:w-[150px] sm:h-[81.86px] lg:w-[260px] lg:h-[191px] object-contain"
                                         />
                        </div>
                    </div>
                    <div className="pt-3 col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg text-[#BEAB81] font-medium">WoodPlus</p>
                        <ul>
                            <li>
                                <Link rel="noopener noreferrer" to="/giới-thiệu" className="text-[#CECECE] hover:dark:text-white">Giới thiệu</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/dịch-vụ" className="text-[#CECECE] hover:dark:text-white">Dịch vụ</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/dự-án" className="text-[#CECECE] hover:dark:text-white">Dự án</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/news" className="text-[#CECECE] hover:dark:text-white">Blog</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" to="/liên-hệ" className="text-[#CECECE] hover:dark:text-white">Tư vấn miễn phí</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-3 col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg text-[#BEAB81] font-medium">Thông tin</p>
                        <ul className="text-[#CECECE]">
                            <li>0325690989</li>
                            <li>abc street, Hanoi</li>
                            <li>8:00 - 22:00</li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2025 All rights reserved</span>
                        <a rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </a>
                        <a rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </a>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a rel="noopener noreferrer" href="#" title="Email"
                           className="flex items-center justify-center w-10 h-10  dark:text-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    // <div className="w-full bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] to-[#353543] text-white pt-10 sm:pt-32 pb-32 ">
    //     {/* Thẻ div cha */}
    //     <div className="w-full max-w-[1620px] mx-auto flex items-center justify-between">
    //         {/* Thẻ divleft */}
    //         <div className="w-1/3 border-r border-[#AF9A70]">
    //             <div className="h-1/2 flex items-center justify-center border-b border-[#AF9A70]">
    //                 {/* Nội dung của divleftcon 1 */}
    //                 <p className="text-[13px] sm:text-[17px]"></p>
    //             </div>
    //             <div className="h-1/2 flex items-center justify-center">
    //                 {/* Nội dung của divleftcon 2 */}
    //                 <p className="text-[13px] sm:text-[17px]"></p>
    //             </div>
    //         </div>
    //
    //         {/* Thẻ divlogo */}
    //         <div className="w-1/3 flex items-center justify-center">
    //             <img
    //                 src="/assets/images/footer/footer1.png"
    //                 alt="Logo"
    //                 className="w-[120px] h-[65.49px] sm:w-[150px] sm:h-[81.86px] lg:w-[350px] lg:h-[191px] object-cover"
    //             />
    //         </div>
    //
    //         {/* Thẻ divright */}
    //         <div className="w-1/3 border-l border-[#AF9A70]">
    //             <div className="h-1/2 flex items-center justify-center border-b border-[#AF9A70]">
    //                 {/* Nội dung của divrightcon 1 */}
    //                 <p className="text-[13px] sm:text-[17px]"></p>
    //             </div>
    //             <div className="h-1/2 flex items-center justify-center">
    //                 {/* Nội dung của divrightcon 2 */}
    //                 <p className="text-[13px] sm:text-[17px]"></p>
    //             </div>
    //         </div>
    //     </div>
    // </div>

)
    ;
};

export default Footer;
