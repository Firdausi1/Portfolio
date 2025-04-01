import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useRef } from "react";
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
const AnimatedSphere = () => {
  const mesh = useRef();
  const [distortAmount, setDistortAmount] = useState(0.3);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.003;
      mesh.current.rotation.y += 0.003;
    }
  });

  return (
    <Sphere
      ref={mesh}
      args={[1, 100, 100]}
      scale={[2, 2, 2]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        setDistortAmount(distortAmount === 0.3 ? 0.6 : 0.3);
      }}
    >
      <MeshDistortMaterial
        color="#fee715"
        attach="material"
        distort={distortAmount}
        speed={2}
        roughness={0.4}
        metalness={0.3}
      />
    </Sphere>
  );
};

// Particle Effect
function Particles() {
  const particles = useRef();

  useFrame(() => {
    if (particles.current) {
      particles.current.rotation.x += 0.0003;
      particles.current.rotation.y += 0.0005;
    }
  });

  const particlesCount = 500;
  const positionArray = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    positionArray[i3] = (Math.random() - 0.5) * 10;
    positionArray[i3 + 1] = (Math.random() - 0.5) * 10;
    positionArray[i3 + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positionArray}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#fee715" sizeAttenuation={true} />
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
            View my Works
          </Link>
        </div>
        <div className="three__animation">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{
              height: "100vh",
              width: "100%",
            }}
          >
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} />
            <AnimatedSphere />
            <Particles />
            <OrbitControls
              enablePan
              enableZoom={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
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
