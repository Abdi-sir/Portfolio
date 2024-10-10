import { useEffect, useState, useRef } from 'react';
import './SkillCard.css'; // Import the external CSS for ocean effect and animations

const SkillCard = ({ profile }) => {
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility for animation
  const cardRef = useRef(null); // Create a reference to the card

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible to true when in view
          observer.unobserve(entry.target); // Stop observing after becoming visible
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

  return (
    <div className='hover:scale-105 transition-transform duration-300'>
        {/* Profile Photo */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-80 lg:h-80 overflow-hidden  shadow-lg transition-transform transform hover:scale-105">
          <img src={profile} alt="Profile photo" className="w-full h-full object-contain" />
        </div>
    </div>
  );
};

export default SkillCard;
