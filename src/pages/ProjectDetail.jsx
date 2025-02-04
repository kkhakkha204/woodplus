import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";
import ContactPopup from "../components/ContactPopup";
import ZaloChatButton from "../components/ZaloChatButton";

const ProjectDetail = () => {
    const { slug } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "project" && slug.current == $slug][0] {
                    title,
                    mainImage,
                    excerpt,
                    clientName,
                    clientJob,
                    description,
                    location,
                    completionDate,
                    sections
                }`,
                { slug }
            )
            .then((data) => setProject(data))
            .catch(console.error);
    }, [slug]);

    if (!project) return <div>Loading...</div>;

    // Function to determine grid layout dynamically
    const getGridClass = (imageCount) => {
        if (imageCount === 1) return "grid-cols-1";
        if (imageCount === 2) return "grid-cols-2 gap-4";
        if (imageCount === 3) return "grid-cols-3 gap-4";
        if (imageCount === 4) return "grid-cols-2 md:grid-cols-4 gap-4";
        if (imageCount >= 5) return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4";
        return "grid-cols-1";
    };

    // Function to determine image height based on count
    const getImageHeight = (imageCount) => {
        if (imageCount === 1) return "h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] max-w-3xl mx-auto";
        if (imageCount === 2) return "h-[300px] sm:h-[350px] md:h-[400px] max-w-5xl mx-auto";
        return "h-[250px] sm:h-[300px] md:h-[350px]";
    };

    return (
        <main className="bg-[#0F0F0F] py-20 sm:py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative bg-cover bg-center h-[300px] md:h-[400px] flex flex-col items-center justify-center text-center text-white">
                    <h2 className="font-Tangerine text-[22px] 2xl:text-[28px] font-bold text-[#AF9A70]">
                        WoodPlus
                    </h2>
                    <h1 className="text-[36px] md:text-[48px] lg:text-[68px] font-bold mb-4">
                        {project.title}
                    </h1>
                    <p className="text-[18px] md:text-[22px] lg:text-[28px] max-w-3xl">
                        {project.excerpt}
                    </p>
                </div>

                <DarkSpacing />

                {/* Project Sections */}
                {project.sections && project.sections.map((section, index) => {
                    const imageCount = section.sectionImages ? section.sectionImages.length : 0;
                    return (
                        <div key={index} className="mb-16">
                            {/* Section Title */}
                            <h2 className="text-center text-[#BEAB81] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold mb-6">
                                {section.sectionTitle}
                            </h2>

                            {/* Section Images */}
                            {imageCount > 0 && (
                                <div className={`grid ${getGridClass(imageCount)} gap-4`}>
                                    {section.sectionImages.map((image, imgIndex) => (
                                        <div key={imgIndex} className={`w-full ${getImageHeight(imageCount)}`}>
                                            <img
                                                src={urlFor(image).url()}
                                                alt={`Gallery image ${imgIndex + 1}`}
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Section Description */}
                            {section.sectionDescription && (
                                <div className="text-center text-[#CECECE] mx-4 my-6 text-[14px] tracking-[0.01rem] sm:text-[14px] md:text-[16px] lg:text-[17px] leading-relaxed">
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
        </main>
    );
};

export default ProjectDetail;
