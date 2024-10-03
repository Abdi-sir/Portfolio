import React, { useEffect, useRef } from 'react';
import frontend from '../assets/frontend.png';
import mobileApp from '../assets/mobileApp.jpg';
import backend from '../assets/backend.jpg';
import uxui from '../assets/uxui.jpg';
import SocialMediaLinks from '../ui/SocialMediaLinks';

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="min-h-screen bg-[#FFFFFF] flex items-center py-16 slide-in"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col">
            {/* About Me Section */}
            <div className="mb-6 text-left">
              <h1 className="text-5xl font-bold text-[#163b50] mb-4">About Me</h1>
              <h2 className="text-3xl font-bold text-[#05263b] mb-4">Transforming Ideas to Digital Reality</h2>
              <h3 className="text-2xl text-[#9ca6b8] mb-2">Testimonials</h3>
              <p className="text-[#141414] mb-4">
                Welcome to my world! I'm Abdella Siraje, a Computer Engineer. I invite you to browse through my portfolio to see my latest projects.
              </p>
              <p className="text-[#141414] mb-4">
                If you have any questions, inquiries, or just want to say hello, please don't hesitate to get in touch. I'm excited to share my work with you and look forward to the creative journey ahead.
              </p>
            </div>

            {/* Left Side Content */}
            <div className="bg-[#aeb8c4] p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="text-[#05263b]">
                  <h3 className="text-5xl font-bold">2 +</h3>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="text-[#05263b]">
                  <h3 className="text-5xl font-bold">4 +</h3>
                  <p>FINISHED PROJECTS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Mobile App Developer',
                description: 'Android and IOS mobile application development with React Native.',
                img: mobileApp,
              },
              {
                title: 'Backend Developer',
                description: 'Backend development for website and application using RestAPI and GraphQL.',
                img: backend,
              },
              {
                title: 'Frontend Developer',
                description: 'Frontend development using different frontend libraries and frameworks.',
                img: frontend,
              },
              {
                title: 'Graphics Designer',
                description: 'Graphics designer with a passion for creating art and illusion.',
                img: uxui,
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#aeb8c4] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded mb-4 hover:scale-105 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-[#163b50] mb-2">{item.title}</h3>
                <p className="text-[#141414]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Add the Social Media Links component here */}
      <SocialMediaLinks position="right" /> {/* Change to "right" if you want it on the right side */}
    </section>
  );
}

export default About;
