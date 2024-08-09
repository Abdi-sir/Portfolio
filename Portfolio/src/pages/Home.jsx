import { useEffect } from 'react';
import profile from '../assets/a.jpg';
import './Home.css';

function Home() {
  useEffect(() => {
    // Add animation class on load
    document.querySelectorAll('.fade-in').forEach((element) => {
      element.classList.add('animate__animated', 'animate__fadeIn');
    });
  }, []);

  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8 bg-slate-200 min-h-screen mt-12"
    >
      <div className="flex flex-col justify-center space-y-4 p-6 m-auto bg-gray-100 rounded-lg shadow-md fade-in">
        <p className="text-gray-700">Hello, I am</p>
        <h1 className="font-serif-custom text-custom-color text-3rem md:text-5xl">
          ABDELLA SIRAJE
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          APPLICATION AND WEB DEVELOPER
          <br />
          GRAPHICS DESIGNER
          <br />
          FREELANCER
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-full max-w-md md:max-w-lg h-[400px] md:h-[700px] overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 fade-in">
          <img
            src={profile}
            alt="Profile photo"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
