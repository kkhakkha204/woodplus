import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';
import DarkSpacing from "../components/DarkSpacing";
import ContactSection from "../components/ContactSection";

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
                    description2,
                    description3,
                    description4,
                    gallery
                }`,
                { slug }
            )
            .then((data) => setProject(data))
            .catch(console.error);
    }, [slug]);

    if (!project) return <div>Loading...</div>;

    const gallery = project.gallery || [];

    // Split the gallery into chunks as needed
    const firstTwoImages = gallery.slice(0, 2);
    const nextSixImages = gallery.slice(2, 8);
    const nextTwoImages = gallery.slice(8, 10);
    const lastSixImages = gallery.slice(10, 16);

    return (
        <main className="bg-[#0F0F0F] py-20 sm:py-20">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative bg-cover bg-center h-[300px] md:h-[400px]">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
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
                </div>

                <DarkSpacing />

                {/* First 2 Images (Grid 2 columns) */}
                <div className="grid grid-cols-2 gap-8">
                    {firstTwoImages.map((image, index) => (
                        <div key={index} className="w-full h-[370px] mx-auto">
                            <img
                                src={urlFor(image).url()}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="text-center text-[#CECECE] mx-4 my-10 text-[14px] tracking-[0.01rem] sm:text-[14px] md:text-[16px] lg:text-[17px] ">
                    <p>{project.description}</p>
                </div>


                {/* Next 6 Images (Grid 3 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {nextSixImages.map((image, index) => (
                        <div key={index} className=" px-4 w-full h-[270px]">
                            <img
                                src={urlFor(image).url()}
                                alt={`Gallery image ${index + 3}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Description 2 */}
                <div className="text-center text-[#CECECE] mx-4 my-10 text-[14px] tracking-[0.01rem] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                    <p>{project.description2}</p>
                </div>

                {/* Next 2 Images (Grid 2 columns) */}
                <div className="grid grid-cols-2 gap-8">
                    {nextTwoImages.map((image, index) => (
                        <div key={index} className="w-full h-[370px] mx-auto">
                            <img
                                src={urlFor(image).url()}
                                alt={`Gallery image ${index + 9}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Description 3 */}
                <div className="text-center text-[#CECECE] mx-4 my-10 text-[14px] tracking-[0.01rem] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                    <p>{project.description3}</p>
                </div>

                {/* Last 6 Images (Grid 3 columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {lastSixImages.map((image, index) => (
                        <div key={index} className="px-4 w-full h-[270px]">
                            <img
                                src={urlFor(image).url()}
                                alt={`Gallery image ${index + 11}`}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>

                {/* Description 4 */}
                <div className="text-center text-[#CECECE] mx-4 my-10 text-[14px] tracking-[0.01rem] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                    <p>{project.description4}</p>
                </div>

            </div>
            <DarkSpacing />
            <ContactSection />
        </main>
    );
};

export default ProjectDetail;
