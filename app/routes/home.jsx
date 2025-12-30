"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Location from "../components/Location";

export function meta({}) {
  return [
    { title: "JT MIUDC" },
    { name: "description", content: "The 8th Edition of MIUDC" },
  ];
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative min-h-screen bg-black" onMouseMove={handleMouseMove}>
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ backgroundImage: 'url(/images/bg.jpeg)' }}
      />
      
      {/* Global Black Overlay */}
      <div className="fixed inset-0 bg-black/80 z-0" />
      
      {/* Global Spotlight Effect */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat pointer-events-none z-10"
        style={{ 
          backgroundImage: 'url(/images/bg.jpeg)',
          opacity: 0.2,
          maskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, black 0%, transparent 70%)`
        }}
      />
      
      {/* Global Film Grain */}
      <div className="film-grain fixed inset-0 z-10" />
      
      <div className="relative z-20">
        <header>
          <nav></nav>
        </header>
        <main>
          <Hero />
          <About />
          <section className="relative w-full border-t border-b border-white/20 flex flex-col md:flex-row">
            <Contact />
            <div className="hidden md:block w-px bg-white/20" />
            <Location />
          </section>
        </main>
      </div>
    </div>
  );
}
