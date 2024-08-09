const projects = [
  {
    title: "Project 1",
    link: "https://example.com/project1",
    github: "https://github.com/username/project1",
    image: "https://via.placeholder.com/300" // Replace with actual image URL
  },
  {
    title: "Project 2",
    link: "https://example.com/project2",
    github: "https://github.com/username/project2",
    image: "https://via.placeholder.com/300" // Replace with actual image URL
  },
  {
    title: "Project 3",
    link: "https://example.com/project3",
    github: "https://github.com/username/project3",
    image: "https://via.placeholder.com/300" // Replace with actual image URL
  },
  {
    title: "Project 4",
    link: "https://example.com/project4",
    github: "https://github.com/username/project4",
    image: "https://via.placeholder.com/300" // Replace with actual image URL
  },
];

function Works() {
  return (
    <section id="work" className="min-h-screen bg-slate-200 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <a
                  href={project.link}
                  className="block text-2xl font-semibold text-gray-900 mb-4 group-hover:opacity-50 transition-opacity duration-300"
                >
                  {project.title}
                </a>
                <a
                  href={project.github}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-white text-xl font-bold">View on GitHub</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
