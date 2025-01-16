import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        client
            .fetch(
                `*[_type == "project"] | order(completionDate desc) {
          _id,
          title,
          description,
          mainImage,
          completionDate
        }`
            )
            .then((data) => setProjects(data))
            .catch(console.error);
    }, []);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold my-4">Danh sách Dự Án</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project._id} className="bg-white shadow rounded-lg p-4">
                        <img
                            src={urlFor(project.mainImage).url()}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded"
                        />
                        <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
                        <p className="text-gray-600 mt-2">
                            {project.description.substring(0, 100)}...
                        </p>
                        <p className="text-gray-500 mt-2">
                            Hoàn thành: {new Date(project.completionDate).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
