import React, { useState, useEffect } from "react";
import { client, urlFor } from "../sanityClient";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { TbArrowForwardUp } from "react-icons/tb";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/24/outline";

const ProjectSection = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [leftProjectIndex, setLeftProjectIndex] = useState(0);
    const [middleProjectIndex, setMiddleProjectIndex] = useState(1);
    const [rightProjectIndex, setRightProjectIndex] = useState(2);
    const [isMobile, setIsMobile] = useState(false);

// Kiểm tra nếu đang dùng điện thoại
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    // Fetch featured projects
    useEffect(() => {
        client
            .fetch(
                `*[_type == "project" && isFeatured == true] | order(completionDate desc) {
              _id,
              title,
              slug,
              mainImage,
              clientName,
              clientJob,
              excerpt,
              location,
              completionDate
            }`
            )
            .then((data) => setFeaturedProjects(data))
            .catch(console.error);
    }, []);

    // Update left project every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setLeftProjectIndex((prevIndex) => (prevIndex + 3) % featuredProjects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [featuredProjects]);

    // Update middle project every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setMiddleProjectIndex((prevIndex) => (prevIndex + 3) % featuredProjects.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [featuredProjects]);

    // Update right project every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setRightProjectIndex((prevIndex) => (prevIndex + 3) % featuredProjects.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [featuredProjects]);

    const NextArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute bg-[#0F0F0F] top-[34.8%] right-4 sm:right-6 md:right-8 transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <ChevronRightIcon className="h-16 w-10 text-white hover:text-gray-300" />
            </div>
        );
    };

// Nút "Prev"
    const PrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div
                className="absolute bg-[#0F0F0F] top-[34.8%] left-4 sm:left-6 md:left-8 transform -translate-y-1/2 z-10 cursor-pointer"
                onClick={onClick}
            >
                <ChevronLeftIcon className="h-16 w-10 text-white hover:text-gray-300" />
            </div>
        );
    };

    const settings = {
        dots: true,

        infinite: true,
        speed: 550,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrow: true,
        fade: true
    };

    return (
        <div className="pt-14 md:pt-0">
            <div className="max-w-[1620px] mx-auto">
                <div className="text-center flex-col mb-8">
                    <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                        WoodPlus
                    </h3>
                    <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-white">
                        Dự án nổi bật
                    </h2>
                    <p className="w-[360px] sm:w-[310px] md:w-[350px] lg:w-[500px] mx-auto text-[13px] sm:text-[14px] md:text-[15px] lg:text-[17px] tracking-[0.01rem] font-normal text-[#CECECE] mt-4">
                        Với gần 10 năm kinh nghiệm đồng hành cùng hàng trăm công trình trên khắp miền Bắc và toàn quốc.
                        Woodplus mang đến những không gian sống tinh tế và đầy cảm hứng, đáp ứng mọi nhu cầu thẩm mỹ và công năng.
                    </p>
                </div>


                {/* Desktop Layout */}
                <div className="hidden lg:flex justify-center items-center gap-4">
                    {[leftProjectIndex, middleProjectIndex, rightProjectIndex].map((index, position) => {
                        const project = featuredProjects[index];
                        if (!project) return null;

                        const sizeClass =
                            position === 1
                                ? "lg:w-[530px] xl:w-[600px] 2xl:w-2/4 lg:h-[460px] xl:h-[500px] 2xl:h-[550px]"
                                : "lg:w-[290px] xl:w-[300px] 2xl:w-1/4 lg:h-[360px] xl:h-[400px] 2xl:h-[450px]";

                        return (
                            <a  href={`/project/${project.slug.current}`}
                                key={project._id} className={`${sizeClass}`}>
                                <img
                                    src={urlFor(project.mainImage).url()}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                                <div className="flex justify-between w-full text-white mt-2">
                                    <span>{project.location}</span>
                                    <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden mt-8">
                    <Slider {...settings}>
                        {/* Slide 1: 1 dự án */}
                        <div>
                            {featuredProjects.slice(0, 1).map((project) => (
                                <a href={`/project/${project.slug.current}`} key={project._id} className="h-[400px] sm:h-[580px] w-[90vw] items-center justify-center mx-auto block">
                                    <img
                                        src={urlFor(project.mainImage).url()}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-[15px] text-white mt-1">
                                        <span>{project.location}</span>
                                        <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Slide 2: 2 dự án */}
                        <div className="flex-row items-center justify-center gap-4 space-y-10 pb-12 mx-8">
                            {featuredProjects.slice(1, 3).map((project) => (
                                <a href={`/project/${project.slug.current}`} key={project._id} className="w-full sm:w-[550px] h-[200px] sm:h-[300px] sm:mx-auto block">
                                    <img
                                        src={urlFor(project.mainImage).url()}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-[15px] text-white mt-1">
                                        <span>{project.location}</span>
                                        <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Slide 3: 1 dự án */}
                        <div>
                            {featuredProjects.slice(3, 4).map((project) => (
                                <a href={`/project/${project.slug.current}`} key={project._id}
                                     className="h-[400px] sm:h-[580px] w-[90vw] items-center justify-center mx-auto block">
                                    <img
                                        src={urlFor(project.mainImage).url()}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-[15px] text-white mt-1">
                                        <span>{project.location}</span>
                                        <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Slide 4: 2 dự án */}
                        <div className="flex-row items-center justify-center gap-4 space-y-10 pb-12 mx-8">
                            {featuredProjects.slice(4, 6).map((project) => (
                                <a href={`/project/${project.slug.current}`} key={project._id}
                                     className="w-full sm:w-[550px] h-[200px] sm:h-[300px] sm:mx-auto block">
                                    <img
                                        src={urlFor(project.mainImage).url()}
                                        alt={project.title}
                                        className="w-full h-full object-cover rounded-lg shadow-lg"
                                    />
                                    <div className="flex justify-between text-[15px] text-white mt-1">
                                        <span>{project.location}</span>
                                        <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </Slider>
                </div>


                <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                    {/* Nút Liên hệ */}
                    <Link
                        to="/projects"
                        className="w-[100px] h-[35px] sm:w-[115px] sm:h-[36px] lg:w-[125px] lg:h-[45px] flex items-center justify-center bg-gradient-to-r from-[#D0C49E] to-[#A79268] text-black font-semibold text-[18px] rounded-l-[10px] border-2 border-white hover:from-[#272727] hover:to-[#272727] hover:text-white transition duration-300"
                        onMouseEnter={() => !isMobile && setIsHovered(true)}
                        onMouseLeave={() => !isMobile && setIsHovered(false)}
                    >
        <span className="hidden lg:inline text-[18px]">
            {isHovered ? "Xem dự án" : <TbArrowForwardUp className="inline-block text-[25px]"/>}
        </span>

                        <span className="lg:hidden text-[14px] sm:text-[15px] font-semibold">
            Xem dự án
        </span>
                    </Link>

                    {/* Nút Tư vấn */}
                    <Link
                        to="/liên-hệ"
                        className="w-[100px] h-[35px] sm:w-[115px] sm:h-[36px] lg:w-[125px] lg:h-[45px] flex items-center justify-center bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[15px] lg:text-[18px] italic rounded-r-[10px] border-2 border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300"
                    >
                        Liên hệ
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
