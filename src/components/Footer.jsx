import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-gradient-to-b from-[#0F0F0F] via-[#0F0F0F] to-[#353543] text-white pt-10 sm:pt-32 pb-32 ">
            {/* Thẻ div cha */}
            <div className="w-full max-w-[1620px] mx-auto flex items-center justify-between">
                {/* Thẻ divleft */}
                <div className="w-1/3 border-r border-[#AF9A70]">
                    <div className="h-1/2 flex items-center justify-center border-b border-[#AF9A70]">
                        {/* Nội dung của divleftcon 1 */}
                        <p className="text-[13px] sm:text-[17px]"></p>
                    </div>
                    <div className="h-1/2 flex items-center justify-center">
                        {/* Nội dung của divleftcon 2 */}
                        <p className="text-[13px] sm:text-[17px]"></p>
                    </div>
                </div>

                {/* Thẻ divlogo */}
                <div className="w-1/3 flex items-center justify-center">
                    <img
                        src="/assets/images/footer/footer1.png"
                        alt="Logo"
                        className="w-[120px] h-[65.49px] sm:w-[150px] sm:h-[81.86px] lg:w-[350px] lg:h-[191px] object-cover"
                    />
                </div>

                {/* Thẻ divright */}
                <div className="w-1/3 border-l border-[#AF9A70]">
                    <div className="h-1/2 flex items-center justify-center border-b border-[#AF9A70]">
                        {/* Nội dung của divrightcon 1 */}
                        <p className="text-[13px] sm:text-[17px]"></p>
                    </div>
                    <div className="h-1/2 flex items-center justify-center">
                        {/* Nội dung của divrightcon 2 */}
                        <p className="text-[13px] sm:text-[17px]"></p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
