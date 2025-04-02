import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import { useRef } from "react";
import * as THREE from "three";

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

function ThreeAnimation() {
  return (
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
  );
}

export default ThreeAnimation;
