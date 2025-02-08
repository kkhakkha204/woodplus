import React, {useState, useEffect} from 'react';
import {client, urlFor} from '../sanityClient';
import DarkSpacing from "../components/DarkSpacing";

import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import {Link} from "react-router-dom";

const ProjectList = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);

    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

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


    // Fetch all projects
    useEffect(() => {
        client
            .fetch(
                `*[_type == "project"] | order(completionDate desc) {
          _id,
          title,
          slug,
          mainImage,
          excerpt,
          location,
          completionDate
        }`
            )
            .then((data) => setProjects(data))
            .catch(console.error);
    }, []);

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <main className="bg-[#0F0F0F]">


            {/* HeroSection */}
            <div
                className="h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[750px] 2xl:h-[750px] w-full bg-cover bg-center relative overflow-hidden">
                {/* Video nền */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/assets/images/projectList/heroSection.jpg')",
                        filter: "brightness(0.85)",
                    }}
                ></div>
                <video
                    className="md:hidden absolute inset-0 w-full h-full object-cover"
                    src="/assets/videos/video2.mp4" // Đường dẫn đến video của bạn
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                {/* Lớp phủ màu đen nhẹ */}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>


            <div className="hidden md:block"><DarkSpacing/></div>

            <div className="w-full text-white pt-14 md:pt-0">
                <div className="w-full max-w-[1620px] mx-auto pb-14 px-4">
                    {/* Phần tiêu đề */}
                    <div className="mb-10 text-center">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#FFFFFF] mt-2">Dự
                            án nổi bật</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {featuredProjects.map((project) => (

                            <a
                                href={`/project/${project.slug.current}`}
                                key={project._id}
                                className="bg-[#0F0F0F] p-4 rounded-lg flex-col block shadow overflow-hidden group">
                                <img
                                    src={urlFor(project.mainImage).url()}
                                    alt={project.title}
                                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
                                />
                                <h3 className="text-[20px] text-center sm:text-[24px] font-medium text-white mt-4 group-hover:text-[#BEAB81] transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-[14px] text-center sm:text-[16px] text-[#CECECE] mt-2">{project.excerpt}</p>
                                <p className="text-[16px] text-center sm:text-[18px] text-[#BEAB81] italic mt-2">
                                    {project.location} - {new Date(project.completionDate).toLocaleDateString("vi-VN")}
                                </p>
                            </a>
                        ))}
                    </div>


                    {/* Nút liên hệ và tư vấn */}
                    <div className="text-center mt-12 space-x-1 flex justify-center items-center">
                        {/* Nút Liên hệ */}
                        <Link
                            to="/liên-hệ"
                            className="w-[130px] sm:w-[150px] md:w-[200px] h-[40px] md:h-[45px] bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[16px] md:text-[18px] italic rounded-xl border border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300 flex items-center justify-center"
                        >
                            Tư vấn miễn phí
                        </Link>
                    </div>
                </div>
            </div>

            <LightSpacing/>

            <div className="w-full text-white bg-[#e7e5e4]">
                {/* Container chính */}
                <div className="max-w-[1620px] mx-auto pb-14 px-4">
                    {/* Tiêu đề */}
                    <div className="mb-10 text-center">
                        <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">WoodPlus</h3>
                        <h2 className="text-[30px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#0F0F0F] mt-2">Các
                            công trình khác</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProjects.map((project) => (
                            <a
                                href={`/project/${project.slug.current}`}
                                key={project._id} className="bg-[#0F0F0F] p-3 rounded-lg block shadow overflow-hidden group">
                                <img
                                    src={urlFor(project.mainImage).url()}
                                    alt={project.title}
                                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
                                />
                                <div className="flex justify-between text-white mt-4 group-hover:text-[#BEAB81] transition-colors duration-300">
                                    <span>{project.location}</span>
                                    <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="pagination flex justify-center mt-8">
                        {Array.from({length: Math.ceil(projects.length / projectsPerPage)}).map(
                            (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => paginate(index + 1)}
                                    className={`mx-2 px-4 py-2 rounded ${
                                        currentPage === index + 1
                                            ? 'bg-[#BEAB81] text-black'
                                            : 'bg-gray-200 text-gray-700'
                                    }`}
                                >
                                    {index + 1}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>


            <DarkSpacing/>

            <ContactSection/>
            <ContactPopup/>
            <ZaloChatButton/>
        </main>
    );
};

export default ProjectList;
