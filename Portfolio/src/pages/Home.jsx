import { useEffect, useState } from 'react';
import profile from '../assets/a.png'; // Update path if necessary
import 'animate.css'; // Import Animate.css for animations
import './Home.css'; // Import custom CSS if needed
import Spline from '@splinetool/react-spline';
import Profile from './Profile';
import EmailButton from './EmailButton';
import SocialMediaLinks from '../ui/SocialMediaLinks';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [isLeftSide, setIsLeftSide] = useState(true);
  const [splineScale, setSplineScale] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition <= windowHeight) {
        const scaleFactor = 1 + scrollPosition / windowHeight;
        setSplineScale(scaleFactor > 1.8 ? 1.8 : scaleFactor); // Slightly reduced max scale
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }

      document.querySelectorAll('.scroll-animate').forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          element.classList.add('animate__animated', 'animate__slideInUp');
        } else {
          element.classList.remove('animate__slideInUp');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, [typingTimeout]);

  useEffect(() => {
    const texts = [
      "Abdella, Full-stack Developer",
      "Abdella, Application Developer",
      "Abdella, Graphics Designer",
      "Abdella, Freelancer",
    ];

    const typingSpeed = 300; // Slower typing speed
    const deletingSpeed = 150; // Slower deleting speed
    const pauseDuration = 2000; // Longer pause before next text
    const clearDuration = 500; // Shorter clear time

    const type = () => {
      if (index < texts.length) {
        const textToType = texts[index];
        if (!isDeleting) {
          setText((prev) => prev + textToType.charAt(text.length));
          if (text.length < textToType.length) {
            setTypingTimeout(setTimeout(type, typingSpeed));
          } else {
            setTypingTimeout(setTimeout(() => {
              setIsDeleting(true);
              setTypingTimeout(setTimeout(() => {
                setIsDeleting(false);
                setTypingTimeout(setTimeout(type, pauseDuration));
              }, clearDuration));
            }, pauseDuration));
          }
        } else {
          setText((prev) => prev.substring(0, prev.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
            setTypingTimeout(setTimeout(type, pauseDuration));
          } else {
            setTypingTimeout(setTimeout(type, deletingSpeed));
          }
        }
      }
    };

    type();
  }, [index, text, isDeleting]);

  const handleMouseMove = (event) => {
    const { clientX } = event;
    const screenWidth = window.innerWidth;
    setIsLeftSide(clientX < screenWidth / 2);
  };
  
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        fontFamily: '"Ubuntu", "Ubuntu Placeholder", sans-serif',
        backgroundColor: '#9CA6B8',
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Spline Background */}
      <div className={`absolute inset-0 z-10 ${isLeftSide ? 'pointer-events-none' : 'pointer-events-auto'}`}>
        <Spline
          scene="https://prod.spline.design/NFfyEImvMUKHNtuU/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.5,
            transform: `scale(${splineScale})`,
            transition: 'transform 0.3s ease-out',
          }}
          className="spline-element"
        />
      </div>

      {/* Content Overlay */}
      <div className={`relative flex flex-col md:flex-row items-center justify-center p-4 max-w-[1768px] w-full space-y-8 md:space-y-0 md:space-x-8 z-20 ${isLeftSide ? 'pointer-events-auto' : 'pointer-events-none '} `}>
        {/* Profile Section */}
        <Profile profile={profile} />

        {/* Middle Section */}
        <div className={`flex flex-col justify-center space-y-4 bg-gradient-to-r p-8 rounded-3xl shadow-2xl flex-[0.8] ${showContent ? 'animate__animated animate__slideInUp scroll-animate' : 'opacity-0'} `}>
          {/* Title */}
          <h2 className="text-[10vw] md:text-[117px] font-extrabold text-[#05263B]">Developer</h2>

          {/* Introductory Text */}
          <div className="text-left text-gray-800 space-y-2">
            <p className="text-[8vw] md:text-[64px] font-semibold">
              <span className="font-bold text-[#2F6D80]">Hey,</span>
            </p>
            <p className="text-[8vw] md:text-[64px] font-semibold">
              <span className="font-bold text-[#2F6D80]">I’m </span>
              <span className="font-bold text-[#05263B]">{text}</span>
            </p>
            <EmailButton />
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Home;
