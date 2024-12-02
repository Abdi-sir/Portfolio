import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {
  const [speed, setSpeed] = useState(0.5);

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
              value: "#fffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
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
              color: "#05263b",
              opacity: 0.4,
              width: 1,
            },
            links: {
                enable: true,
                distance: 150,
                color: '#05263b', // Link color
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
    </div>
  );
}

export default ParticlesBackground;
