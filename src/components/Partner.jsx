import React, {useState} from "react";
import Slider from "react-slick";
import {TbArrowForwardUp} from "react-icons/tb";

const PartnerSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    // Cấu hình cho slick slider


    return (
        <div className="w-full text-white">
            {/* divcon */}
            <div className="w-full max-w-[1620px] bg-[#0F0F0F] mx-auto py-10">
                {/* divtext */}
                <div className="text-center mb-12">
                    <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white mt-2">Đối tác của WoodPlus</h2>
                    <p className="mx-auto w-[330px] sm:w-[310px] md:w-[350px] lg:w-[400px] xl:w-[450px] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                        Woodplus tự hào hợp tác cùng các nhà cung cấp vật liệu hàng đầu và thương hiệu uy tín, đảm bảo chất lượng vượt trội cho mọi công trình.
                    </p>
                </div>



                {/* divanh cho desktop */}
                {/* divanh */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mt-20">
                    {/* Cột 1 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/partner/p1.png" alt="Logo đối tác 1" className="w-[200px] h-auto"/>
                        </div>
                    </div>
                    {/* Cột 2 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/partner/p2.png" alt="Logo đối tác 2"
                                 className="w-[200px] h-auto grayscale"/>
                        </div>
                    </div>
                    {/* Cột 3 */}
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/logo/a.png" alt="Logo đối tác 3" className="w-[200px] h-auto"/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div
                            className="divpn w-[250px] h-[120px] bg-opacity-85 bg-[#FFFFFF] rounded-[10px] flex items-center justify-center">
                            <img src="/assets/images/logo/a.png" alt="Logo đối tác 3" className="w-[200px] h-auto"/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
