import { useState, useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaFigma, FaSass } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiVuedotjs, SiSanity } from 'react-icons/si';
import SocialMediaLinks from '../ui/SocialMediaLinks';

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
  const [showContent, setShowContent] = useState(false);
  const skillsRef = useRef(null);

  // Filter skills based on selected category
  const filteredSkills = selectedCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === selectedCategory);

  useEffect(() => {
    // Show content after a delay
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500);

    const handleScroll = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        // Check if the skills section is in the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          skillsRef.current.classList.add('animate__animated', 'animate__fadeIn');
        } else {
          skillsRef.current.classList.remove('animate__fadeIn');
        }
      }
    };

    // Initial scroll event check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className={`min-h-screen bg-white py-16 ${showContent ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container mx-auto px-6">
        {/* Skills Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#05263b] mb-4">Skills</h1>
          {/* Category Buttons */}
          <div className="flex justify-center flex-wrap space-x-2 md:space-x-4">
            {['All', 'FrontEnd', 'BackEnd', 'Mobile App', 'UI/UX'].map((category, index) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-2 px-3 sm:px-4 rounded-lg text-sm sm:text-lg font-semibold transition-transform duration-300 ${
                  selectedCategory === category ? 'bg-[#05263b] text-white scale-105' : 'bg-[#9ca6b8] text-[#05263b]'
                } hover:bg-[#05263b] hover:text-white transform hover:scale-110 mb-2`}  // Added mb-2 for vertical spacing between rows
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-3xl font-bold text-[#05263b] mb-4">Experience</h2>
          <div className="mb-8">
            <p className="text-xl font-semibold">2022</p>
            <p className="text-lg text-[#05263b]">Full Stack Web Developer at Sanita Charity Association</p>
          </div>
          <div className="mb-8">
            <p className="text-xl font-semibold">2023</p>
            <p className="text-lg text-[#05263b]">Internship Web Developer at Amahara Science and Technology Communication Commission</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-animate">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-[#f9f9f9] rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
            >
              <div className="text-3xl text-[#05263b] mr-4">{skill.icon}</div>
              <span className="text-xl font-semibold text-[#05263b]">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
