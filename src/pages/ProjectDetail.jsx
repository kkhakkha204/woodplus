import React, { useEffect, useState } from 'react';
import { client, urlFor } from '../sanityClient';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "project" && _id == $id][0] {
          title,
          description,
          completionDate,
          mainImage,
          gallery,
          "partnerName": partner->name
        }`,
                { id }
            )
            .then((data) => setProject(data))
            .catch(console.error);
    }, [id]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-4">{project.title}</h1>
            <img
                src={urlFor(project.mainImage).url()}
                alt={project.title}
                className="w-full h-96 object-cover rounded"
            />
            <p className="text-gray-500 mt-2">
                Đối tác: {project.partnerName} | Hoàn thành:{" "}
                {new Date(project.completionDate).toLocaleDateString()}
            </p>
            <p className="text-gray-600 mt-4">{project.description}</p>
            <div className="grid grid-cols-2 gap-4 mt-6">
                {project.gallery?.map((image, index) => (
                    <img
                        key={index}
                        src={urlFor(image).url()}
                        alt={`Gallery ${index + 1}`}
                        className="rounded"
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectDetail;
