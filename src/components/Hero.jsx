import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

const FloatingSphere = ({ position, color, size = 1 }) => {
  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial color={color} distort={0.4} speed={2} transparent opacity={0.8} />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.4;
      ref.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={1.5}>
      <Torus ref={ref} args={[0.8, 0.3, 16, 100]} position={position}>
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} transparent opacity={0.7} />
      </Torus>
    </Float>
  );
};

const FloatingOcta = ({ position, color }) => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.getElapsedTime() * 0.6;
      ref.current.rotation.y = clock.getElapsedTime() * 0.4;
    }
  });
  return (
    <Float speed={3} floatIntensity={2}>
      <Octahedron ref={ref} args={[0.7]} position={position}>
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.3} transparent opacity={0.85} />
      </Octahedron>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      data-testid="hero-3d-canvas"
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#FF6B9D" intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#9B59B6" intensity={1.5} />
      <spotLight position={[0, 10, 0]} color="#FFB3D9" intensity={1} />

      <FloatingSphere position={[-3, 1, 0]} color="#FF6B9D" size={1.2} />
      <FloatingSphere position={[3, -1, -1]} color="#9B59B6" size={0.8} />
      <FloatingSphere position={[0, 2, -2]} color="#FFB3D9" size={0.6} />
      <FloatingTorus position={[2.5, 1.5, -1]} color="#E8DAEF" />
      <FloatingTorus position={[-2.5, -1.5, -1]} color="#FF6B9D" />
      <FloatingOcta position={[0, -2, 0]} color="#9B59B6" />
      <FloatingOcta position={[-1, 0, -2]} color="#FFB3D9" />
    </Canvas>
  );
};

const Hero = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0" data-testid="hero-3d-bg">
        <HeroScene />
      </div>

      {/* Tropical decorations */}
      <div className="absolute top-20 left-10 text-5xl animate-float-slow select-none" style={{ animationDelay: '0s' }} data-testid="hero-hibiscus-1">🌺</div>
      <div className="absolute top-40 right-16 text-4xl animate-float select-none" style={{ animationDelay: '1s' }} data-testid="hero-palm-1">🌴</div>
      <div className="absolute bottom-32 left-20 text-3xl animate-float-rotate select-none" style={{ animationDelay: '2s' }} data-testid="hero-leaf-1">🌿</div>
      <div className="absolute top-1/3 right-8 text-4xl animate-float-fast select-none" style={{ animationDelay: '0.5s' }} data-testid="hero-hibiscus-2">🌸</div>
      <div className="absolute bottom-20 right-32 text-3xl animate-float-slow select-none" style={{ animationDelay: '1.5s' }} data-testid="hero-flower-1">🌺</div>
      <div className="absolute top-24 left-1/3 text-2xl animate-float select-none" style={{ animationDelay: '3s' }} data-testid="hero-leaf-2">🍃</div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div
          data-testid="hero-badge"
          className="inline-flex items-center gap-2 glass-card px-5 py-2 mb-8 text-sm font-medium"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-gray-300">Available for opportunities</span>
        </div>

        {/* Name */}
        <h1
          data-testid="hero-name"
          className="font-black font-outfit leading-none mb-4"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
        >
          <span className="gradient-text">Maghima</span>
          <br />
          <span className="text-white">Lakshmi A</span>
        </h1>

        {/* Tagline */}
        <p
          data-testid="hero-tagline"
          className="text-lg md:text-xl text-gray-300 mb-4 font-space"
        >
          Data Science Enthusiast&nbsp;|&nbsp;AI Developer&nbsp;|&nbsp;Creative Problem Solver
        </p>

        <p
          data-testid="hero-subtitle"
          className="text-base text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          BTech CSE (AI & Data Science) • GPA 8.8 • Software Developer Intern @ MH Cockpit
        </p>

        {/* CTA Buttons */}
        <div data-testid="hero-cta-group" className="flex flex-wrap gap-4 justify-center">
          <button
            data-testid="hero-btn-projects"
            className="btn-primary px-8 py-3.5 text-base"
            onClick={() => handleScroll('projects')}
          >
            View Projects 🚀
          </button>
          <button
            data-testid="hero-btn-resume"
            className="btn-outline px-8 py-3.5 text-base"
            onClick={() => {
              alert('Resume download would be linked here!');
            }}
          >
            Download Resume 📄
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          data-testid="hero-scroll-indicator"
          className="mt-14 flex flex-col items-center gap-2 text-gray-500 text-sm"
        >
          <span>Scroll to explore</span>
          <div
            className="w-px h-8"
            style={{ background: 'linear-gradient(to bottom, #FF6B9D, transparent)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
