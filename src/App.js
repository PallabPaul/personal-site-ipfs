import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About"
import Footer from "./components/Footer";
import Particles from "react-tsparticles";

export default function App() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

return (
  <main>
  <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
      background: {
        color: "#000000",
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover"
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 40,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          animation: {
            enable: true,
            speed: 2,
            sync: true
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 2,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 2,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          distance: 100,
          opacity: 0.4,
          width: 1,
          triangles: {
            enable: true,
            color: "#ffffff",
            opacity: 0.1
          }
        },
        move: {
          enable: true,
          speed: 5,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      detectRetina: true,
    }}
   />
   <Navigation />
   <About />
   <Footer />
  </main>
  );
};