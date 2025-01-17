import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';

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
          gallery
        }`,
                { slug }
            )
            .then((data) => setProject(data))
            .catch(console.error);
    }, [slug]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4">{project.title}</h1>

            <img
                src={urlFor(project.mainImage).url()}
                alt={project.title}
                className="w-full h-96 object-cover rounded"
            />

            <p className="text-gray-600 mt-4">{project.excerpt}</p>

            <p className="text-sm text-gray-500">
                Khách hàng: {project.clientName} - {project.clientJob}
            </p>

            <p className="text-sm text-gray-500">
                Địa điểm: {project.location} | Ngày hoàn thiện:{' '}
                {new Date(project.completionDate).toLocaleDateString()}
            </p>

            <div className="prose lg:prose-xl mt-6">{project.description}</div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                {project.gallery.map((image, index) => (
                    <img
                        key={index}
                        src={urlFor(image).url()}
                        alt={`Gallery ${index}`}
                        className="rounded"
                    />
                ))}
            </div>

            <div className="prose lg:prose-xl mt-6">{project.description2}</div>
        </div>
    );
};

export default ProjectDetail;
