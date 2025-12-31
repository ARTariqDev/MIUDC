"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

export function meta({}) {
  return [
    { title: "Register - JT MIUDC" },
    { name: "description", content: "Register for the 8th Edition of MIUDC" },
  ];
}

export default function Register() {
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
      
      <div className="relative z-20 h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 mt-14">
          <iframe
            src="https://miudc26.fillout.com/t/qcBjcvnJ5Uus"
            width="100%"
            height="100%"
            style={{ border: 'none', height: 'calc(100dvh - 56px - 56px)' }}
            className="w-full h-full"
          />
        </main>
        <footer className="bg-black/60 backdrop-blur-md border-t border-white/10 py-4 text-center text-white/60 text-sm">
          <p style={{ fontFamily: 'var(--font-sans)' }} className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-2">
            <span>
              Copyright © {new Date().getFullYear()} LGSJT
            </span>
            <span className="block md:inline">
              | Made By: <a href="https://github.com/ARTariqDev" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors inline-flex items-center gap-1">Abdur Rehman Tariq <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
