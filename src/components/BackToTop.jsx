import React, { useState, useEffect } from "react";

const BackToTop = () => {
    const [showScroll, setShowScroll] = useState(false);

    // Kiểm tra khi người dùng cuộn xuống một đoạn thì hiển thị nút lên đầu
    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.scrollY > 300) {
                setShowScroll(true);
            } else if (showScroll && window.scrollY <= 300) {
                setShowScroll(false);
            }
        };
        window.addEventListener("scroll", checkScrollTop);
        return () => window.removeEventListener("scroll", checkScrollTop);
    }, [showScroll]);

    // Hàm trượt lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        showScroll && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-14 left-1 sm:bottom-24 sm:left-10 text-white p-2 sm:p-3 rounded-full transition duration-300 hover:bg-[#BEAB81] hover:text-black"
            >
                {/* Icon Up Arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 16l8-8 8 8H4z"/>
                </svg>
            </button>
        )
    );
};

export default BackToTop;
