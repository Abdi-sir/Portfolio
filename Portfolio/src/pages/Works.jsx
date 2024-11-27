import { useEffect, useRef, useState } from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Netflix Clone",
    link: "https://abdi-sir.github.io/netflix-clone-abd/",
    github: "https://github.com/Abdi-Sir/netflix-clone-abd",
    image: "https://via.placeholder.com/300", // Replace with an actual image URL for your project
    languages: ["React", "Vite", "Bootstrap", "Material UI", "Node.js", "API"],
    description: "A Netflix-inspired web application built using React, Vite, Material UI, and various APIs for fetching content.",
  },
  {
    title: "Apple Clone",
    link: "https://clone-35c3d3.netlify.app/",
    github: "https://github.com/Abdi-Sir/full-stack-apple-clone", // Replace with your GitHub repo link
    image: "https://via.placeholder.com/300", // Replace with an actual image URL for your project
    languages: ["React", "Vite", "Bootstrap", "API", "Node.js"],
    description: "A clone of the Apple website showcasing React components and responsive design with Bootstrap.",
  },
  {
    title: "Project 3",
    link: "https://example.com/project3",
    github: "https://github.com/username/project3",
    image: "https://via.placeholder.com/300",
    languages: ["React", "Node.js"],
    description: "A brief description of Project 3.",
  },
  {
    title: "Project 4",
    link: "https://example.com/project4",
    github: "https://github.com/username/project4",
    image: "https://via.placeholder.com/300",
    languages: ["React", "Node.js"],
    description: "A brief description of Project 4.",
  },
];

function Works() {
  const [showContent, setShowContent] = useState(false);
  const [splineScale, setSplineScale] = useState(1);
  const workRef = useRef(null); // Ref for the project section

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Scale effect based on scroll
      if (scrollPosition <= windowHeight) {
        const scaleFactor = 1 + scrollPosition / windowHeight;
        setSplineScale(scaleFactor > 1.8 ? 1.8 : scaleFactor); // Slightly reduced max scale
      }

      // Smooth scroll to the next section
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }

      // Animate elements on scroll
      document.querySelectorAll('.scroll-animate').forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate__animated', 'animate__slideInUp');
        } else {
          element.classList.remove('animate__slideInUp');
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (workRef.current) {
      observer.observe(workRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (workRef.current) {
        observer.unobserve(workRef.current);
      }
    };
  }, []);

  return (
    <section id="work" ref={workRef} className={`min-h-screen bg-[#abb5c6] py-16 ${showContent ? 'fade-in' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#05263b] mb-4">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group transition-transform transform hover:scale-105 flex flex-col justify-between scroll-animate"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="flex space-x-2 p-4">
                {project.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="bg-[#9ca6b8] text-[#05263b] px-3 py-1 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl font-semibold text-[#05263b] mb-2 transition-opacity duration-300"
                  >
                    {project.title}
                  </a>
                  <p className="text-[#05263b]">{project.description}</p>
                </div>

                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#aeb8c4] text-2xl transform transition-transform duration-300 hover:scale-125"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#aeb8c4] text-2xl transform transition-transform duration-300 hover:scale-125"
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
