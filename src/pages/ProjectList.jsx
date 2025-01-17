import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../sanityClient';

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
          mainImage
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
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="hero bg-gray-200 py-12 text-center">
                <h1 className="text-4xl font-bold">Dự án của chúng tôi</h1>
                <p className="text-gray-600 mt-4">
                    Khám phá các dự án nổi bật và những câu chuyện thành công từ khách hàng của chúng tôi.
                </p>
            </section>

            {/* Featured Projects Section */}
            <section className="featured-projects py-12">
                <h2 className="text-3xl font-bold mb-6">Dự án nổi bật</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <div key={project._id} className="bg-white shadow rounded-lg p-4">
                            <img
                                src={urlFor(project.mainImage).url()}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded"
                            />
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <a
                                href={`/project/${project.slug.current}`}
                                className="text-blue-500 mt-4 inline-block"
                            >
                                Xem chi tiết
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* All Projects Section */}
            <section className="all-projects py-12">
                <h2 className="text-3xl font-bold mb-6">Danh sách tất cả dự án</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentProjects.map((project) => (
                        <div key={project._id} className="bg-white shadow rounded-lg p-4">
                            <img
                                src={urlFor(project.mainImage).url()}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded"
                            />
                            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
                            <p className="text-gray-600 mt-2">{project.excerpt}</p>
                            <p className="text-sm text-gray-500">
                                {project.location} |{' '}
                                {new Date(project.completionDate).toLocaleDateString()}
                            </p>
                            <a
                                href={`/project/${project.slug.current}`}
                                className="text-blue-500 mt-4 inline-block"
                            >
                                Xem chi tiết
                            </a>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination flex justify-center mt-8">
                    {Array.from({ length: Math.ceil(projects.length / projectsPerPage) }).map(
                        (_, index) => (
                            <button
                                key={index}
                                onClick={() => paginate(index + 1)}
                                className={`mx-2 px-4 py-2 rounded ${
                                    currentPage === index + 1
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProjectList;
