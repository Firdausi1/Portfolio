import React, { useMemo } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating Animation
// function FloatingText() {
//   const textRef = useRef();

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     textRef.current.position.y = Math.sin(t) * 0.2; // Float effect
//   });

//   return (
//     <Text
//       ref={textRef}
//       fontSize={1}
//       color="#FFD700"
//       position={[0, 0, 0]}
//       anchorX="center"
//       anchorY="middle"
//     >
//       Welcome to My Portfolio
//     </Text>
//   );
// }

// Particle Effect
function Particles() {
  const particleCount = 500;
  const pointsRef = useRef();

  // Generate initial positions inside a circle
  const particles = useMemo(() => {
    const positions = [];
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2; // Random angle
      const radius = Math.random() * 1; // Random radius within circle

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (Math.random() - 0.5) * 0.2; // Slight depth variation

      positions.push(x, y, z);
    }
    return new Float32Array(positions);
  }, []);

  // Animate particles to move randomly within the circle
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime();
      const positions = pointsRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const index = i * 3;

        // Random movement formula
        positions[index] += (Math.random() - 0.5) * 0.07; // Small random change in X
        positions[index + 1] += (Math.random() - 0.5) * 0.01; // Small random change in Y

        // Keep particles within the circular boundary
        const radius = Math.sqrt(
          positions[index] ** 2 + positions[index + 1] ** 2
        );
        if (radius > 1) {
          positions[index] *= 0.9;
          positions[index + 1] *= 0.9;
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={particles}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.01} color="#FFD700" transparent={true} />
    </points>
  );
}

// function Header() {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 5], fov: 75 }}
//       style={{ height: "100vh", background: "#101820ff" }}
//     >
//       <ambientLight intensity={0.5} />
//       <pointLight position={[5, 5, 5]} />
//       <Particles />
//       <Stars radius={10} depth={50} count={5000} factor={4} />
//       <OrbitControls enableZoom />
//     </Canvas>
//   );
// }

const Header = () => {
  return (
    <div id="home" className="header">
      <div className="header__text">
        <div className="header__textLeft">
          <h1 className="header__name">
            <Typewriter
              words={[
                "Hello, I am Firdausy!",
                "Welcome to my portfolio!",
                "Let’s build something great!",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          {/* <Typing speed={200}>
            <Typing.Delay ms={2000} />
            <h1> Firdausy Bashir,</h1>
            <Typing.Delay ms={1000} />
            <h1 className="header__name">Front-end Developer</h1>
          </Typing> */}
          <p className="header__description">
            I'm a Nigerian based Front-End & ReactJS Developer/Freelancer.
          </p>
          <Link to={"/portfolio"} className="header__button">
            View Works
          </Link>
        </div>
        <div className="three__animation">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{
              position: "absolute",
              zIndex: 10,
              height: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "70%",
            }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <Particles />
            {/* <Stars radius={10} depth={50} count={5000} factor={4} /> */}
            <OrbitControls enableZoom />
          </Canvas>
        </div>
        <div className="header__socials">
          {/* <TwitterIcon /> */}
          <a href="https://www.linkedin.com/in/firdausy-bashir-1820a5b5">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/Firdausi1">
            <GitHubIcon />
          </a>
        </div>
      </div>
      {/* 
			<div className="header__horizontal"></div>
			<div className="header__vertical"></div> */}
    </div>
  );
};

export default Header;
