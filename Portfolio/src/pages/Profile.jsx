import { useState } from 'react';

const SkillCard = ({ profile }) => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skills = {
    frontend: ['React', 'Vue'],
    backend: ['Node.js', 'Sanity'],
    mobile: ['Flutter', 'React Native'],
    uiux: ['Figma']
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6 rounded-3xl shadow-lg w-64 md:w-72">
      {/* Profile Photo */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border border-gray-300 shadow-lg transition-transform transform hover:scale-105">
        <img src={profile} alt="Profile photo" className="object-cover w-full h-full" />
      </div>

      {/* Contact Information */}
      <div className="text-center space-y-1 mt-4 text-gray-800">
        <h2 className="text-lg font-bold text-gray-900">Abdella</h2>
        <p className="text-sm font-semibold text-indigo-600">Full-stack Developer</p>
        
        {/* Email, Phone, and Location */}
        <div className="flex items-center justify-center text-sm text-gray-800 space-x-2">
          <span className="material-icons text-indigo-600">email</span>
          <p>abdellasiraje10@gmail.com</p>
        </div>
        <div className="flex items-center justify-center text-sm text-gray-800 space-x-2">
          <span className="material-icons text-indigo-600">phone</span>
          <p>+251 953202827</p>
        </div>
        <div className="flex items-center justify-center text-sm text-gray-800 space-x-2">
          <span className="material-icons text-indigo-600">location_on</span>
          <p>Ethiopia</p>
        </div>
      </div>

      {/* Skill Category Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mt-4">
        {['frontend', 'backend', 'mobile', 'uiux'].map(category => (
          <button
            key={category}
            className={`py-2 px-4 rounded-full shadow-md transition-colors ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Skills Rendering based on Active Category */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills[activeCategory].map(skill => (
          <button key={skill} className="bg-indigo-100 text-indigo-700 font-semibold py-1 px-3 rounded-full shadow-sm hover:bg-indigo-200 transition-colors">
            {skill}
          </button>
        ))}
      </div>

      {/* Download CV Button */}
      <div className="mt-4">
  <a 
    href="/cv.pdf" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="bg-indigo-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-indigo-700 transition-colors"
  >
    View CV
  </a>
</div>


    </div>
  );
};

export default SkillCard;
