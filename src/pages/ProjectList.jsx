import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { client, urlFor } from '../sanityClient';
import { useSEO } from '../hooks/useSEO';
import DarkSpacing from "../components/DarkSpacing";
import LightSpacing from "../components/LightSpacing";
import ContactSection from "../components/ContactSection";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import { Link } from "react-router-dom";
import Hotline from "../components/Hotline";
import BackToTop from "../components/BackToTop";

const ProjectList = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const projectsPerPage = 6;

    // Fetch SEO data
    const { seoData } = useSEO('/projects');

    // Default SEO
    const defaultSEO = {
        metaTitle: 'Dự Án Nội Thất Gỗ Cao Cấp - Portfolio WoodPlus',
        metaDescription: 'Khám phá bộ sưu tập dự án thiết kế và thi công nội thất gỗ cao cấp của WoodPlus. Từ biệt thự sang trọng đến căn hộ hiện đại, chúng tôi mang đến không gian sống hoàn hảo.',
        metaKeywords: ['dự án nội thất', 'portfolio woodplus', 'thiết kế nội thất gỗ', 'thi công nội thất cao cấp']
    };

    const seo = seoData || defaultSEO;

    // Fetch featured projects - SỬA ĐÂY
    useEffect(() => {
        setLoading(true);
        client
            .fetch(
                `*[_type == "project" && featured == true] | order(_createdAt desc) {
                    _id,
                    title,
                    slug,
                    mainImage,
                    clientName,
                    clientJob,
                    excerpt
                }`
            )
            .then((data) => {
                console.log('Featured projects:', data); // Debug
                setFeaturedProjects(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching featured projects:', error);
                setLoading(false);
            });
    }, []);

    // Fetch all projects
    useEffect(() => {
        client
            .fetch(
                `*[_type == "project"] | order(_createdAt desc) {
                    _id,
                    title,
                    slug,
                    mainImage,
                    excerpt
                }`
            )
            .then((data) => {
                console.log('All projects:', data); // Debug
                setProjects(data);
            })
            .catch(console.error);
    }, []);

    // Pagination logic
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Generate OG Image URL
    const ogImageUrl = seo.ogImage
        ? urlFor(seo.ogImage).width(1200).height(630).url()
        : 'https://nhadepwoodplus.com/assets/images/projectList/heroSection.jpg';

    return (
        <>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>{seo.metaTitle}</title>
                <meta name="description" content={seo.metaDescription} />
                {seo.metaKeywords && seo.metaKeywords.length > 0 && (
                    <meta name="keywords" content={seo.metaKeywords.join(', ')} />
                )}
                <link rel="canonical" href="https://nhadepwoodplus.com/projects" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={seo.ogTitle || seo.metaTitle} />
                <meta property="og:description" content={seo.ogDescription || seo.metaDescription} />
                <meta property="og:url" content="https://nhadepwoodplus.com/projects" />
                <meta property="og:image" content={ogImageUrl} />
                <meta property="og:site_name" content="WoodPlus - Nội thất gỗ cao cấp" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={seo.ogTitle || seo.metaTitle} />
                <meta name="twitter:description" content={seo.ogDescription || seo.metaDescription} />
                <meta name="twitter:image" content={ogImageUrl} />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        "name": seo.metaTitle,
                        "description": seo.metaDescription,
                        "url": "https://nhadepwoodplus.com/projects",
                        "publisher": {
                            "@type": "Organization",
                            "name": "WoodPlus",
                            "url": "https://nhadepwoodplus.com",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://nhadepwoodplus.com/logo.png"
                            }
                        }
                    })}
                </script>
            </Helmet>

            <main className="bg-[#0F0F0F]">
                {/* Hero Section */}
                <div className="h-[600px] sm:h-[650px] lg:h-[750px] xl:h-[750px] 2xl:h-[750px] w-full bg-cover bg-center relative overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('/assets/images/projectList/heroSection.jpg')",
                            filter: "brightness(0.85)",
                        }}
                    ></div>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>

                    {/* Hero Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                        <h2 className="font-Tangerine text-[28px] md:text-[32px] lg:text-[36px] font-bold text-[#AF9A70] mb-2">
                            WoodPlus
                        </h2>
                        <h1 className="text-[36px] md:text-[52px] lg:text-[68px] font-bold mb-4">
                            Dự Án Nội Thất
                        </h1>
                        <p className="text-[18px] md:text-[22px] lg:text-[26px] max-w-3xl">
                            Khám phá những công trình nội thất gỗ cao cấp đã hoàn thành
                        </p>
                    </div>
                </div>

                <div className="hidden md:block"><DarkSpacing /></div>

                {/* Featured Projects Section */}
                <div className="w-full text-white pt-14 md:pt-0">
                    <div className="w-full max-w-[1620px] mx-auto pb-14 px-4">
                        <div className="mb-10 text-center">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                                WoodPlus
                            </h3>
                            <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#FFFFFF] mt-2">
                                Dự án nổi bật
                            </h2>
                        </div>

                        {loading ? (
                            <div className="text-center text-[#AF9A70] py-20">
                                <p className="text-xl">Đang tải dự án...</p>
                            </div>
                        ) : featuredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {featuredProjects.map((project) => (
                                    <Link
                                        to={`/project/${project.slug.current}`}
                                        key={project._id}
                                        className="bg-[#0F0F0F] p-4 rounded-lg flex-col block shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
                                    >
                                        <div className="overflow-hidden rounded-lg">
                                            <img
                                                src={urlFor(project.mainImage).url()}
                                                alt={project.title}
                                                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <h3 className="text-[18px] text-center sm:text-[24px] font-medium text-white mt-4 group-hover:text-[#BEAB81] transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        {project.excerpt && (
                                            <p className="text-[13px] text-center sm:text-[16px] text-[#CECECE] mt-2 line-clamp-2">
                                                {project.excerpt}
                                            </p>
                                        )}
                                        {project.clientName && (
                                            <p className="text-[13px] text-center sm:text-[15px] text-[#BEAB81] mt-2">
                                                Khách hàng: {project.clientName}
                                            </p>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center text-[#CECECE] py-20">
                                <p className="text-lg">Chưa có dự án nổi bật</p>
                                <p className="text-sm mt-2 text-gray-500">Vui lòng đánh dấu "featured" trong Sanity cho dự án</p>
                            </div>
                        )}

                        {/* CTA Button */}
                        <div className="text-center mt-12 flex justify-center items-center">
                            <Link
                                to="/liên-hệ"
                                className="w-[130px] sm:w-[150px] md:w-[200px] h-[40px] md:h-[45px] bg-[#272727] text-[#C4B58E] font-semibold text-[14px] sm:text-[16px] md:text-[18px] italic rounded-xl border border-white hover:bg-[#D8CCA6] hover:text-black transition duration-300 flex items-center justify-center"
                            >
                                Tư vấn miễn phí
                            </Link>
                        </div>
                    </div>
                </div>

                <LightSpacing />

                {/* All Projects Section */}
                <div className="w-full text-white bg-[#e7e5e4]">
                    <div className="max-w-[1620px] mx-auto pb-14 px-4">
                        <div className="mb-10 text-center">
                            <h3 className="font-Tangerine text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold text-[#AF9A70]">
                                WoodPlus
                            </h3>
                            <h2 className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-bold text-[#0F0F0F] mt-2">
                                Các công trình khác
                            </h2>
                        </div>

                        {currentProjects.length > 0 ? (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {currentProjects.map((project) => (
                                        <Link
                                            to={`/project/${project.slug.current}`}
                                            key={project._id}
                                            className="bg-[#0F0F0F] p-3 rounded-lg block shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
                                        >
                                            <div className="overflow-hidden rounded-lg">
                                                <img
                                                    src={urlFor(project.mainImage).url()}
                                                    alt={project.title}
                                                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="flex text-[15px] sm:text-[18px] justify-center text-white mt-4 group-hover:text-[#BEAB81] transition-colors duration-300">
                                                <span className="font-medium">{project.title}</span>
                                            </div>
                                            {project.excerpt && (
                                                <div className="flex text-[13px] text-center sm:text-[16px] text-gray-300 mt-4 group-hover:text-[#BEAB81] transition-colors duration-300 border-t border-gray-700 py-3">
                                                    <span className="line-clamp-2">{project.excerpt}</span>
                                                </div>
                                            )}
                                        </Link>
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex justify-center items-center mt-8 gap-2">
                                        {/* Previous Button */}
                                        <button
                                            onClick={() => paginate(currentPage - 1)}
                                            disabled={currentPage === 1}
                                            className={`px-4 py-2 rounded transition-all duration-300 ${
                                                currentPage === 1
                                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                    : 'bg-[#BEAB81] text-black hover:bg-[#AF9A70]'
                                            }`}
                                        >
                                            ← Trước
                                        </button>

                                        {/* Page Numbers */}
                                        {Array.from({ length: totalPages }).map((_, index) => {
                                            const pageNumber = index + 1;
                                            if (
                                                pageNumber === 1 ||
                                                pageNumber === totalPages ||
                                                (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                            ) {
                                                return (
                                                    <button
                                                        key={index}
                                                        onClick={() => paginate(pageNumber)}
                                                        className={`px-4 py-2 rounded transition-all duration-300 ${
                                                            currentPage === pageNumber
                                                                ? 'bg-[#BEAB81] text-black font-bold scale-110'
                                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                        }`}
                                                    >
                                                        {pageNumber}
                                                    </button>
                                                );
                                            } else if (
                                                pageNumber === currentPage - 2 ||
                                                pageNumber === currentPage + 2
                                            ) {
                                                return <span key={index} className="px-2 text-gray-600">...</span>;
                                            }
                                            return null;
                                        })}

                                        {/* Next Button */}
                                        <button
                                            onClick={() => paginate(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                            className={`px-4 py-2 rounded transition-all duration-300 ${
                                                currentPage === totalPages
                                                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                                    : 'bg-[#BEAB81] text-black hover:bg-[#AF9A70]'
                                            }`}
                                        >
                                            Sau →
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center text-gray-600 py-20">
                                <p className="text-lg">Chưa có dự án nào</p>
                            </div>
                        )}
                    </div>
                </div>

                <DarkSpacing />
                <ContactSection />
                <ContactPopup />
                <ZaloChatButton />
                <Hotline />
                <BackToTop />
            </main>
        </>
    );
};

export default ProjectList;