import { useEffect, useState } from 'react';
import profile from '../assets/aaa.png'; // Update path if necessary
import 'animate.css'; // Import Animate.css for animations
import './Home.css'; // Import custom CSS if needed
import Profile from './Profile';
import EmailButton from './EmailButton';
import ParticlesBackground from './ParticlesBackground';
import Spline from '@splinetool/react-spline';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 500);

    const handleScroll = () => {
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

    const typingSpeed = 300;
    const deletingSpeed = 150;
    const pauseDuration = 2000;

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
            }, pauseDuration));
          }
        } else {
          setText((prev) => prev.substring(0, prev.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }
        }
      }
    };

    type();
  }, [index, text, isDeleting]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        fontFamily: '"Ubuntu", "Ubuntu Placeholder", sans-serif',
        backgroundColor: '#9CA6B8',
      }}
    >
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

     

      {/* Content Overlay */}
      <div className="relative  flex flex-col flex-col-reverse md:flex-row items-center justify-center p-4 max-w-[1768px] w-full space-y-8 md:space-y-0 md:space-x-8 z-20">
        {/* Profile Section */}
        <div className="flex-[0.4] flex items-center justify-center">
          <Profile profile={profile} />
        </div>

        {/* Middle Section */}
        <div
          className={`flex flex-col justify-center space-y-4 bg-gradient-to-r p-8 rounded-3xl shadow-2xl flex-[0.6] ${
            showContent
              ? 'animate__animated animate__slideInUp scroll-animate'
              : 'opacity-0'
          }`}
        >
          <div className="absolute top-4 left-4 text-left">
            <p className="text-sm md:text-md text-[#2F6D80] font-medium">
              Hello, I'm
            </p>
          </div>
          <h2 className="text-[10vw] md:text-[3rem] font-semibold text-[#05263B] leading-tight tracking-tight">
            Abdella <br /> Siraje
          </h2>
          <div className="text-left text-gray-800 space-y-2">
            <div className="flex flex-col items-start mt-4">
              <div className="bg-gradient-to-br from-[rgba(174,184,196,0.8)] to-[rgba(22,59,80,0.8)] border-2 border-[#05263b] p-4 rounded-xl shadow-lg w-full md:w-auto">
                <p className="text-[4vw] md:text-[24px] font-light text-white">
                  Application and Web Developer
                </p>
                <p className="text-[4vw] md:text-[24px] font-light text-white">
                  Graphics Designer
                </p>
                <p className="text-[4vw] md:text-[24px] font-light text-white">
                  Freelancer
                </p>
              </div>
            </div>
            <EmailButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
