import React from "react";

const LightSpacing = () => {
    return (
        <div
            className="bg-[#e7e5e4] h-[80px] sm:h-[90px] md:-[100px] lg:h-[120px] xl:h-[135px] 2xl:h-[150px] flex flex-col items-center justify-center relative">
            {/* Horizontal Line */}
            <div
                className="w-[275px] sm:w-[550px] md:w-[600px] lg:w-[950px] xl:w-[1130px] 2xl:w-[1620px] h-[1px] bg-[#B09D74] absolute top-1/2"></div>
            {/* Diamond Shape */}
            <div
                className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px] 2xl:w-[20px] 2xl:h-[20px] bg-[#B09D74] transform rotate-45 absolute"></div>
        </div>
    );
};

export default LightSpacing;
