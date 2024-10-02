import { useState } from 'react';
import { FaReact, FaNodeJs, FaFigma, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVuedotjs, SiSanity } from 'react-icons/si';

const skillsData = [
  { name: 'Vue', category: 'FrontEnd', icon: <SiVuedotjs /> },
  { name: 'React', category: 'FrontEnd', icon: <FaReact /> },
  { name: 'JavaScript', category: 'FrontEnd', icon: <SiJavascript /> },
  { name: 'Sass', category: 'FrontEnd', icon: <FaSass /> },
  { name: 'Tailwind CSS', category: 'FrontEnd', icon: <SiTailwindcss /> },
  { name: 'Node.js', category: 'BackEnd', icon: <FaNodeJs /> },
  { name: 'Sanity', category: 'BackEnd', icon: <SiSanity /> },
  { name: 'React Native', category: 'Mobile App', icon: <FaReact /> },
  { name: 'Figma', category: 'UI/UX', icon: <FaFigma /> },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Skills Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Skills</h1>
          {/* Category Buttons */}
          <div className="flex justify-center space-x-4">
            {['All', 'FrontEnd', 'BackEnd', 'Mobile App', 'UI/UX'].map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-4 rounded-lg text-lg font-semibold transition-transform duration-300 ${
                  selectedCategory === category ? 'bg-blue-600 text-white scale-105' : 'bg-[#abb5c6] text-gray-900'
                } hover:bg-blue-500 hover:text-white transform hover:scale-110`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="mb-8">
            <p className="text-xl font-semibold">2022</p>
            <p className="text-lg">Full Stack Web Developer at Sanita Charity Association</p>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold">2023</p>
            <p className="text-lg">Internship Web Developer at CBE</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-[#abb5c6] rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
            >
              <div className="text-3xl mr-4">{skill.icon}</div>
              <span className="text-xl font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
