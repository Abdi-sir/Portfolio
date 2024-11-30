import { FaEye, FaGithub } from "react-icons/fa";
import netflixImage from "../assets/netflix.png";
import amazonImage from "../assets/amazon.png";
import wildOasisImage from "../assets/wildoasis.png";
import appleImage from "../assets/apple.png";


const projects = [
  {
    title: "Netflix Clone",
    link: "https://abdi-sir.github.io/netflix-clone-abd/",
    github: "https://github.com/Abdi-Sir/netflix-clone-abd",
    image: netflixImage, // Replace with actual image URL
    languages: ["React", "Vite", "Bootstrap", "Material UI", "Node.js", "API"],
    description: "Netflix-inspired web app.",
  },
  {
    title: "Apple Clone",
    link: "https://clone-35c3d3.netlify.app/",
    github: "https://github.com/Abdi-Sir/full-stack-apple-clone",
    image: appleImage, // Replace with actual image URL
    languages: ["React", "Vite", "Bootstrap", "API", "Node.js"],
    description: "Clone of Apple's website.",
  },
  {
    title: "Amazon Clone",
    link: "#", // Update with the deployed link
    github: "#", // Update with the GitHub repo link
    image: amazonImage,
    languages: ["React", "Vite", "Tailwind CSS", "Node.js"],
    description: "Amazon-inspired e-commerce app.",
  },
  {
    title: "The Wild Oasis",
    link: "#", // Add deployment link
    github: "#", // Add GitHub repository link
    image: wildOasisImage, // Replace with actual image URL
    languages: ["React", "Supabase"],
    description: "Web project clone with React JS.",
  },
];

function Works() {
  return (
    <section id="work" className="min-h-screen bg-[#abb5c6] py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#05263b] mb-4">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Project Container */}
              <div
                className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105"
                style={{ width: "90%", height: "200px" }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Language Tags */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-md flex gap-2 justify-center">
                  {project.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="text-sm text-[#05263b] font-medium"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#aeb8c4] text-2xl mx-4 transform transition-transform duration-300 hover:scale-125"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#aeb8c4] text-2xl mx-4 transform transition-transform duration-300 hover:scale-125"
                  >
                    <FaEye />
                  </a>
                </div>
              </div>
                {/* Title and Description Outside */}
                <div className="text-center mb-4">
                <h2 className="text-2xl font-semibold text-[#05263b]">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
