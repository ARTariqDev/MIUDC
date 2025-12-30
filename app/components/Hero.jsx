"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "./Button";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-01-25T00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const toUrduNumerals = (num) => {
    const urduNumerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return num.toString().split('').map(digit => urduNumerals[parseInt(digit)]).join('');
  };

  return (
    <div 
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      
      {/* Geometric Patterns - Top left and bottom right */}
      <div className="absolute top-12 left-12 w-20 h-20 pointer-events-none z-20 opacity-10">
        <div className="absolute w-full h-full border border-white/40 rotate-45 animate-spin-slow"></div>
        <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 rotate-45"></div>
      </div>
      <div className="absolute bottom-12 right-12 w-20 h-20 pointer-events-none z-20 opacity-10">
        <div className="absolute w-full h-full border border-white/40 rotate-45 animate-spin-slow-reverse"></div>
        <div className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/30 rotate-45"></div>
      </div>
      
      {/* Flowing Calligraphic Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none" style={{ opacity: 0.2 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path 
          d="M 0,25 Q 25,20 50,25 T 100,25" 
          stroke="white" 
          strokeWidth="0.3" 
          fill="none"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: '0',
            animation: 'drawLineSequential1 20s ease-in-out infinite'
          }}
        />
        <path 
          d="M 0,50 Q 25,45 50,50 T 100,50" 
          stroke="white" 
          strokeWidth="0.3" 
          fill="none"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: '0',
            animation: 'drawLineSequential2 20s ease-in-out infinite'
          }}
        />
        <path 
          d="M 0,75 Q 25,70 50,75 T 100,75" 
          stroke="white" 
          strokeWidth="0.2" 
          fill="none"
          style={{
            strokeDasharray: '200',
            strokeDashoffset: '0',
            animation: 'drawLineSequential3 20s ease-in-out infinite'
          }}
        />
      </svg>
      
      <img 
        src="/images/logo.png" 
        alt="MIUDC Logo" 
        className="w-3/4 md:w-1/2 lg:w-1/3 h-auto logo-animate relative z-30" 
      />
      
      <div className="text-white text-center mt-4 relative z-30">
        <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-2 month-animate" style={{ fontFamily: 'var(--font-cursive)' }}>
          January
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-widest date-animate" style={{ fontFamily: 'var(--font-urdu)' }}>
          ۲۳.۲۴.۲۵
        </p>
      </div>

      {/* Countdown */}
      <div className="text-white text-center mt-6 relative z-30 countdown-animate">
        <div className="flex gap-4 md:gap-6 justify-center" style={{ fontFamily: 'var(--font-urdu)' }}>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-light">{toUrduNumerals(timeLeft.days)}</span>
            <span className="text-xs md:text-sm opacity-70 mt-1" style={{ fontFamily: 'var(--font-sans)' }}>Days</span>
          </div>
          <span className="text-3xl md:text-4xl font-light">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-light">{toUrduNumerals(timeLeft.hours)}</span>
            <span className="text-xs md:text-sm opacity-70 mt-1" style={{ fontFamily: 'var(--font-sans)' }}>Hours</span>
          </div>
          <span className="text-3xl md:text-4xl font-light">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-light">{toUrduNumerals(timeLeft.minutes)}</span>
            <span className="text-xs md:text-sm opacity-70 mt-1" style={{ fontFamily: 'var(--font-sans)' }}>Minutes</span>
          </div>
          <span className="text-3xl md:text-4xl font-light">:</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-light">{toUrduNumerals(timeLeft.seconds)}</span>
            <span className="text-xs md:text-sm opacity-70 mt-1" style={{ fontFamily: 'var(--font-sans)' }}>Seconds</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 button-animate relative z-30">
        <Link to="/register">
          <Button 
            text="Register"
            color="#000000"
            textColor="#ffffff"
            glowColor="#ffffff"
            borderColor="rgba(200, 200, 200, 0.15)"
          />
        </Link>
      </div>
    </div>
  );
}
