# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) 

uses [SWC](https://swc.rs/) for Fast Refresh


    <div id="animations">
    <div id="main_body" class="body_class"></div>
     <script type="text/javascript" src="index.js"></script>
    <script type="text/javascript" src="main_animation.js"></script>


import { useEffect, useState } from 'react';
import profile from '../assets/a.jpg'; // Update path if necessary
import 'animate.css'; // Import Animate.css for animations
import './Home.css'; // Import custom CSS if needed
import Spline from '@splinetool/react-spline';

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState(null); // To manage timeouts

  useEffect(() => {
    // Trigger animations on load
    setTimeout(() => {
      setShowContent(true);
    }, 500); // Adjust the delay as needed

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
      "Abdella, Full-stack developer",
      "Abdella, Application developer",
      "Abdella, Graphics Designer",
      "Abdella, Freelancer"
    ];

    const typingSpeed = 15000; // Increased typing speed (slower typing)
    const deletingSpeed = 1000; // Increased deleting speed (slower deleting)
    const pauseDuration = 6000; // Increased pause duration (60 seconds)
    const clearDuration = 3000; // Increased clear duration (3 seconds)

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

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-200"
      style={{
        fontFamily: '"Ubuntu", "Ubuntu Placeholder", sans-serif',
      }}
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/NFfyEImvMUKHNtuU/scene.splinecode"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative flex flex-col md:flex-row items-center justify-center p-4 max-w-[1768px] w-full space-y-8 md:space-y-0 md:space-x-8 z-10">
        {/* Profile Section: Profile Image and Contact Information */}
        <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-4 rounded-3xl shadow-lg w-64 md:w-72 ${showContent ? 'animate__animated animate__slideInUp scroll-animate' : 'opacity-0'}`}>
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
            <h2 className="text-lg font-bold">Abdella</h2>
            <p className="text-sm">Full-stack Developer</p>
            <p className="text-sm">abdellasiraje@gmail.com</p>
            <p className="text-sm">Ethiopia</p>
            <p className="text-sm">Full-time / Freelancer</p>
            <a href="http://www.abdella.com" className="text-blue-600 underline">
              www.abdella.com
            </a>
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
            <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-700 transition-colors">
              Download CV
            </button>
          </div>
        </div>

        {/* Middle Section: Updated Content */}
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
            <p className="text-[4vw] md:text-[16px] text-gray-600 mt-4">
              I help businesses grow by crafting amazing web experiences. If you’re
              <br />
              looking for a developer that likes to get stuff done,
            </p>
            <p className="text-[6vw] md:text-[32px] font-medium text-indigo-600 mt-4 flex items-center">
              <svg className="w-6 h-6 text-indigo-600 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path d="M3.5 0C1.567 0 0 1.567 0 3.5S1.567 7 3.5 7 7 5.433 7 3.5 5.433 0 3.5 0zM3.5 5.5A2 2 0 1 1 5.5 3.5 2 2 0 0 1 3.5 5.5zM14.5 0C12.567 0 11 1.567 11 3.5S12.567 7 14.5 7 18 5.433 18 3.5 16.433 0 14.5 0zM14.5 5.5A2 2 0 1 1 16.5 3.5 2 2 0 0 1 14.5 5.5zM8 4c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z"/>
              </svg>
              let’s talk
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;


for building and depoloying after edit
  - first push the updated file
  - npm run build
  - npm run deploy





import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Home() {
  const [speed, setSpeed] = useState(3);

  const particlesInit = async (engine) => {
    await loadFull(engine); // Load the tsparticles engine
  };

  // Mousemove event to update particle speed based on mouse position
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Calculate distance of mouse from center of the screen
      const distanceX = Math.abs(clientX - screenWidth / 2);
      const distanceY = Math.abs(clientY - screenHeight / 2);
      const maxDistance = Math.sqrt(Math.pow(screenWidth / 2, 2) + Math.pow(screenHeight / 2, 2));
      const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2));

      // Adjust particle movement speed based on mouse distance from center
      const newSpeed = Math.max(1, Math.min(10, 1 + (distance / maxDistance) * 9)); // Speed between 1 and 10
      setSpeed(newSpeed);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#9CA6B8",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
              },
            },
            size: {
              value: 5,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            links: {
                enable: true,
                distance: 150,
                color: '#ffffff', // Link color
                opacity: 0.5,
                width: 1,
              }
            ,
            move: {
              enable: true,
              speed: speed, // Dynamic speed based on mouse movement
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        <h1>Interactive Particles</h1>
        <p>Move your cursor and see the magic!</p>
      </div>
    </div>
  );
}

export default Home;
