import { useEffect, useState, useRef } from 'react';
import './SkillCard.css'; // Ensure your CSS file includes the necessary styles

const SkillCard = ({ profile }) => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility for animation
  const cardRef = useRef(null); // Create a reference to the card

  const skills = {
    frontend: ['React', 'Vue'],
    backend: ['Node.js', 'Sanity'],
    mobile: ['Flutter', 'React Native'],
    uiux: ['Figma']
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible to true when in view
          observer.unobserve(entry.target); // Stop observing after becoming visible
        } else {
          setIsVisible(false); // Reset when it goes out of view
        }
      });
    });

    if (cardRef.current) {
      observer.observe(cardRef.current); // Observe the card
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get the bounding rectangle of the component
      const cardPosition = cardRef.current.getBoundingClientRect();
      
      // Check if the card is in view
      if (cardPosition.top < window.innerHeight && cardPosition.bottom > 0) {
        setIsVisible(true); // Set visible if in view
      } else {
        setIsVisible(false); // Set invisible if out of view
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Call handleScroll once on component mount
    handleScroll();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className='hover:scale-105 transition-transform duration-300'>


    <div
      ref={cardRef} // Attach the ref to the card
      className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#aeb8c4] via-white to-[#9ca6b8] p-6 rounded-3xl shadow-lg w-64 md:w-72  ${isVisible ? 'slide-in' : ''}`}
    >
      {/* Profile Photo */}
      <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border border-[#163b50] shadow-lg transition-transform transform hover:scale-105">
        <img src={profile} alt="Profile photo" className="object-cover w-full h-full" />
      </div>
  
      {/* Contact Information */}
      <div className="text-center space-y-1 mt-4 text-[#163b50]">
        <h2 className="text-lg font-bold text-[#05263b]">Abdella</h2>
        <p className="text-sm font-semibold text-[#163b50]">Full-stack Developer</p>
  
        {/* Email, Phone, and Location */}
        <div className="flex items-center justify-center text-sm text-[#05263b] space-x-2">
          <span className="material-icons text-[#163b50]">email</span>
          <p>abdellasiraje10@gmail.com</p>
        </div>
        <div className="flex items-center justify-center text-sm text-[#05263b] space-x-2">
          <span className="material-icons text-[#163b50]">phone</span>
          <p>+251 953202827</p>
        </div>
        <div className="flex items-center justify-center text-sm text-[#05263b] space-x-2">
          <span className="material-icons text-[#163b50]">location_on</span>
          <p>Ethiopia</p>
        </div>
      </div>
  
      {/* Skill Category Buttons */}
      <div className="flex justify-center flex-wrap gap-2 mt-4">
        {['frontend', 'backend', 'mobile', 'uiux'].map(category => (
          <button
            key={category}
            className={`py-2 px-4 rounded-full shadow-md transition-colors ${activeCategory === category ? 'bg-[#163b50] text-white' : 'bg-[#aeb8c4] text-[#05263b]'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
  
      {/* Skills Rendering based on Active Category */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {skills[activeCategory].map(skill => (
          <button key={skill} className="bg-[#9ca6b8] text-[#05263b] font-semibold py-1 px-3 rounded-full shadow-sm hover:bg-[#aeb8c4] transition-colors">
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
          className="bg-[#05263b] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#163b50] transition-colors"
        >
          View CV
        </a>
      </div>
      
    </div> 
       </div>
  );
};

export default SkillCard;
