import React from "react";
import Slider from "react-slick";
import { urlFor } from "../sanityClient";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GalleryDisplay = ({ images, layout }) => {
    if (!images || images.length === 0) return null;

    // Cấu hình Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: images.length >= 2 ? 2 : images.length,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <div className="my-6">
            {/* Nếu là Grid */}
            {layout === "grid" && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mx-10">
                    {images.map((image, idx) => (
                        <div key={idx} className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src={urlFor(image).url()}
                                alt={`Gallery Image ${idx + 1}`}
                                className="w-full h-[300px] object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            )}

            {/* Nếu là Slider */}
            {layout === "slider" && (
                <Slider {...settings} className="mx-auto w-full max-w-4xl">
                    {images.map((image, idx) => (
                        <div key={idx} className="px-2">
                            <img
                                src={urlFor(image).url()}
                                alt={`Gallery Image ${idx + 1}`}
                                className="w-full h-[400px] object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default GalleryDisplay;
