import { FaEye, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Project 1",
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    languages: ["HTML", "CSS", "JavaScript"], // Add programming languages
    description: "A brief description of Project 1.",
  },
  {
    title: "Project 2",
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    languages: ["React", "Node.js"], // Add programming languages
    description: "A brief description of Project 2.",
  },
  {
    title: "Project 2",
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    languages: ["React", "Node.js"], // Add programming languages
    description: "A brief description of Project 2.",
  },
  {
    title: "Project 2",
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    languages: ["React", "Node.js"], // Add programming languages
    description: "A brief description of Project 2.",
  },
  // Add more projects as needed
];

function Works() {
  return (
    <section id="work" className="min-h-screen bg-[#abb5c6] py-16">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105 flex flex-col justify-between"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Programming Languages */}
              <div className="flex space-x-2 p-4">
                {project.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Project Info */}
              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl font-semibold text-gray-900 mb-2 transition-opacity duration-300"
                  >
                    {project.title}
                  </a>
                  <p className="text-gray-600">{project.description}</p>
                </div>

                {/* Overlay for Links */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transform transition-transform duration-300 hover:scale-125"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transform transition-transform duration-300 hover:scale-125"
                  >
                    <FaEye />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
