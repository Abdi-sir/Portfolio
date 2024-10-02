import { useEffect, useState } from 'react';
import profile from '../assets/a.png'; // Update path if necessary
import 'animate.css'; // Import Animate.css for animations
import './Home.css'; // Import custom CSS if needed
import Spline from '@splinetool/react-spline';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null); // To manage timeouts
  const [isLeftSide, setIsLeftSide] = useState(true); // Track which side the mouse is on
  const [splineScale, setSplineScale] = useState(1); // State to control Spline scale

  useEffect(() => {
    // Trigger animations on load
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Adjust the delay as needed

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Scale the Spline element based on scroll position
      if (scrollPosition <= windowHeight) {
        const scaleFactor = 1 + scrollPosition / windowHeight; // Modify this formula as needed
        setSplineScale(scaleFactor > 2 ? 2 : scaleFactor); // Set a max scale factor
      }

      // Detect when scrolling to the bottom of the page to trigger next page navigation
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Trigger smooth scroll to next section or page transition
        window.scrollTo({
          top: window.innerHeight, // Scroll to the next section
          behavior: 'smooth',
        });
      }

      // Handle other scroll-based animations
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
      "Abdella, Full-stack developer",
      "Abdella, Application developer",
      "Abdella, Graphics Designer",
      "Abdella, Freelancer"
    ];

    const typingSpeed = 15000; // Increased typing speed (slower typing)
    const deletingSpeed = 15000; // Increased deleting speed (slower deleting)
    const pauseDuration = 15000; // Increased pause duration (60 seconds)
    const clearDuration = 15000; // Increased clear duration (3 seconds)

    const type = () => {
      if (index < texts.length) {
        const textToType = texts[index];
        if (!isDeleting) {
          setText(prev => prev + textToType.charAt(text.length));
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
          setText(prev => prev.substring(0, prev.length - 1));
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
        backgroundColor: '#bdc6d4', // Custom background color
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
            transform: `scale(${splineScale})`, // Dynamically scale the Spline
            transition: 'transform 0.3s ease-out', // Smooth transition on scroll
          }}
          className='spline-element'
        />
      </div>

      {/* Content Overlay */}
      <div className={`relative flex flex-col md:flex-row items-center justify-center p-4 max-w-[1768px] w-full space-y-8 md:space-y-0 md:space-x-8 z-20 ${isLeftSide ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Profile Section */}
        <div className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-4 rounded-3xl shadow-lg w-64 md:w-72 ${showContent ? 'animate__animated animate__slideInUp scroll-animate' : 'opacity-0'}`}>
  {/* Profile Photo */}
  <div className="relative w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border border-gray-300 shadow-lg transition-transform transform hover:scale-105">
    <img
      src={profile}
      alt="Profile photo"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Contact Information */}
  <div className="text-center space-y-1 mt-4 text-gray-800">
    <h2 className="text-lg font-bold text-gray-900">Abdella</h2>
    <p className="text-sm font-semibold text-indigo-600">Full-stack Developer</p>

    {/* Email */}
    <div className="flex items-center justify-center text-sm text-gray-800 space-x-2">
      <span className="material-icons text-indigo-600">email</span>
      <p>abdellasiraje@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="flex items-center justify-center text-sm text-gray-800 space-x-2">
      <span className="material-icons text-indigo-600">phone</span>
      <p>+251 911 234 567</p> {/* Sample phone number */}
    </div>

    {/* Location */}
    <div className="flex items-center justify-center text-sm text-gray-800 space-x-2">
      <span className="material-icons text-indigo-600">location_on</span>
      <p>Ethiopia</p>
    </div>

    {/* Full-time / Freelancer */}
    <div className="flex justify-center items-center space-x-2">
      <p className="bg-indigo-100 text-indigo-700 font-semibold py-1 px-3 rounded-full">
        Full-time
      </p>
      <p className="bg-indigo-100 text-indigo-700 font-semibold py-1 px-3 rounded-full">
        Freelancer
      </p>
    </div>
  </div>

  {/* Skills Buttons */}
  <div className="flex flex-wrap justify-center space-x-2 mt-2">
    {['HTML', 'CSS', 'JS', 'REACT'].map(skill => (
      <button
        key={skill}
        className="bg-gray-200 text-gray-800 py-1 px-4 rounded-full shadow-md hover:bg-gray-300 transition-colors"
      >
        {skill}
      </button>
    ))}
  </div>

  {/* Download CV Button */}
  <div className="mt-2">
    <button
      className="bg-[#4f46e5] text-white py-2 px-6 rounded-full shadow-md hover:bg-[#3730a3] transition-colors"
    >
      Download CV
    </button>
  </div>
</div>



        {/* Middle Section */}
        <div className={`flex flex-col justify-center space-y-4 bg-gradient-to-r p-8 rounded-3xl shadow-lg flex-[0.8] ${showContent ? 'animate__animated animate__slideInUp scroll-animate' : 'opacity-0'}`}>
          {/* Title */}
          <h2 className="text-[10vw] md:text-[117px] font-extrabold text-indigo-600">Developer</h2>

          {/* Introductory Text */}
          <div className="text-left text-gray-800 space-y-2">
            <p className={`text-[8vw] md:text-[64px] font-semibold`}>
              <span className="font-bold text-gray-900">Hey,</span>
            </p>
            <p className={`text-[8vw] md:text-[64px] font-semibold`}>
              <span className="font-bold text-gray-900">I’m </span>
              <span className="font-bold text-indigo-600">{text}</span>
            </p>
            <button className="btn btn-sm btn-outline-primary btn-light">  Click Me</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
