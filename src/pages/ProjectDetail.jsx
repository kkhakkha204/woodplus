import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";
import Hotline from "../components/Hotline";
import BackToTop from "../components/BackToTop";

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        client
            .fetch(
                `*[_type == "project" && slug.current == $slug][0] {
                    title,
                    mainImage,
                    excerpt,
                    clientName,
                    clientJob,
                    description,
                    sections[] {
                        sectionTitle,
                        sectionDescription,
                        sectionImages[]
                    }
                }`,
                { slug }
            )
            .then((data) => {
                setProject(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [slug]);

    // Loading state
    if (loading) {
        return (
            <div className="bg-[#0F0F0F] min-h-screen flex items-center justify-center">
                <div className="text-[#AF9A70] text-xl">Đang tải...</div>
            </div>
        );
    }

    // Project not found
    if (!project) {
        return (
            <>
                <Helmet>
                    <title>Không tìm thấy dự án - WoodPlus</title>
                    <meta name="robots" content="noindex, nofollow" />
                </Helmet>
                <div className="bg-[#0F0F0F] min-h-screen flex flex-col items-center justify-center">
                    <h1 className="text-white text-3xl mb-4">Không tìm thấy dự án</h1>
                    <a href="/projects" className="text-[#AF9A70] hover:text-[#BEAB81] underline">
                        Quay lại danh sách dự án
                    </a>
                </div>
            </>
        );
    }

    // Function to determine grid layout dynamically
    const getGridClass = (imageCount) => {
        if (imageCount === 1) return "grid-cols-1";
        if (imageCount === 2) return "grid-cols-1 md:grid-cols-2";
        if (imageCount === 3) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
        if (imageCount === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
        if (imageCount >= 5) return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        return "grid-cols-1";
    };

    // Function to determine image height based on count
    const getImageHeight = (imageCount) => {
        if (imageCount === 1) return "h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px]";
        if (imageCount === 2) return "h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]";
        return "h-[250px] sm:h-[280px] md:h-[320px] lg:h-[350px]";
    };

    // SEO data
    const pageTitle = `${project.title} - Dự án nội thất gỗ cao cấp | WoodPlus`;
    const pageDescription = project.excerpt || project.description || `Khám phá dự án ${project.title} - Thiết kế và thi công nội thất gỗ cao cấp bởi WoodPlus`;
    const pageImage = project.mainImage ? urlFor(project.mainImage).width(1200).height(630).url() : '';
    const pageUrl = `https://nhadepwoodplus.com/project/${slug}`;

    return (
        <>
            <Helmet>
                {/* Basic Meta Tags */}
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <link rel="canonical" href={pageUrl} />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:url" content={pageUrl} />
                {pageImage && <meta property="og:image" content={pageImage} />}
                <meta property="og:site_name" content="WoodPlus - Nội thất gỗ cao cấp" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                {pageImage && <meta name="twitter:image" content={pageImage} />}

                {/* Additional SEO */}
                <meta name="keywords" content={`${project.title}, nội thất gỗ, thiết kế nội thất, thi công nội thất, WoodPlus, ${project.clientName || ''}`} />
                <meta name="author" content="WoodPlus" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CreativeWork",
                        "name": project.title,
                        "description": pageDescription,
                        "image": pageImage,
                        "url": pageUrl,
                        "creator": {
                            "@type": "Organization",
                            "name": "WoodPlus",
                            "url": "https://nhadepwoodplus.com"
                        },
                        ...(project.clientName && {
                            "customer": {
                                "@type": "Person",
                                "name": project.clientName,
                                ...(project.clientJob && { "jobTitle": project.clientJob })
                            }
                        })
                    })}
                </script>
            </Helmet>

            <main className="bg-[#0F0F0F] py-20 sm:py-24">
                <div className="container mx-auto px-4">
                    {/* Hero Section */}
                    <div className="relative flex flex-col items-center justify-center text-center text-white mb-12">
                        <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70] mb-2">
                            WoodPlus
                        </h2>
                        <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold mb-4">
                            {project.title}
                        </h1>
                        {project.excerpt && (
                            <p className="text-[18px] md:text-[22px] lg:text-[28px] max-w-3xl text-[#CECECE]">
                                {project.excerpt}
                            </p>
                        )}
                    </div>

                    {/* Main Image */}
                    {project.mainImage && (
                        <div className="mb-12">
                            <img
                                src={urlFor(project.mainImage).url()}
                                alt={project.title}
                                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl"
                            />
                        </div>
                    )}

                    <DarkSpacing />

                    {/* Client Info */}
                    {(project.clientName || project.clientJob) && (
                        <div className="text-center mb-12">
                            {project.clientName && (
                                <p className="text-[#BEAB81] text-[20px] md:text-[24px] font-semibold mb-2">
                                    Khách hàng: {project.clientName}
                                </p>
                            )}
                            {project.clientJob && (
                                <p className="text-[#CECECE] text-[16px] md:text-[18px]">
                                    {project.clientJob}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    {project.description && (
                        <div className="max-w-4xl mx-auto mb-16">
                            <p className="text-[#CECECE] text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed text-center">
                                {project.description}
                            </p>
                        </div>
                    )}

                    <DarkSpacing />

                    {/* Project Sections */}
                    {project.sections && project.sections.length > 0 && project.sections.map((section, index) => {
                        const imageCount = section.sectionImages ? section.sectionImages.length : 0;
                        return (
                            <div key={index} className="mb-16">
                                {/* Section Title */}
                                {section.sectionTitle && (
                                    <h2 className="text-center text-[#BEAB81] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-8">
                                        {section.sectionTitle}
                                    </h2>
                                )}

                                {/* Section Images */}
                                {imageCount > 0 && (
                                    <div className={`grid ${getGridClass(imageCount)} gap-4 mb-6 ${imageCount === 1 ? 'max-w-4xl mx-auto' : imageCount === 2 ? 'max-w-6xl mx-auto' : ''}`}>
                                        {section.sectionImages.map((image, imgIndex) => (
                                            <div key={imgIndex} className={`w-full ${getImageHeight(imageCount)} overflow-hidden rounded-lg`}>
                                                <img
                                                    src={urlFor(image).url()}
                                                    alt={`${section.sectionTitle || project.title} - Ảnh ${imgIndex + 1}`}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Section Description */}
                                {section.sectionDescription && (
                                    <div className="max-w-4xl mx-auto text-center text-[#CECECE] px-4 mt-6 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed">
                                        <p>{section.sectionDescription}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}

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

export default ProjectDetail;