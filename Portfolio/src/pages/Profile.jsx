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
    ref={cardRef}
    className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#aeb8c4] via-white to-[#9ca6b8] p-8 rounded-3xl shadow-lg w-72 md:w-80 lg:w-96 ${isVisible ? 'slide-in' : ''}`}
  >
    {/* Profile Photo */}
    <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-80 lg:h-80 overflow-hidden rounded-full border border-[#163b50] shadow-lg transition-transform transform hover:scale-105">
      <img src={profile} alt="Profile photo" className="object-cover w-full h-full" />
    </div>

    {/* Download CV Button */}
    <div className="mt-6">
      <a 
        href="/cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#05263b] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#163b50] transition-colors"
      >
        View CV
      </a>
    </div>
    
  </div> 
</div>

  );
};

export default SkillCard;
