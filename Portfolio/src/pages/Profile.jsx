import { useEffect, useState, useRef } from 'react';
import './SkillCard.css'; // Ensure your CSS file includes the necessary styles

const SkillCard = ({ profile }) => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false); // State to handle visibility for animation
  const cardRef = useRef(null); // Create a reference to the card

 
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
    className={` ${isVisible ? 'slide-in' : ''}`}
  >
    {/* Profile Photo */}
    <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-80 lg:h-80 overflow-hidden shadow-lg transition-transform transform hover:scale-105 ">
      <img src={profile} alt="Profile photo" className="w-full h-full object-contain" />
    </div>
  </div> 
</div>

  );
};

export default SkillCard;
