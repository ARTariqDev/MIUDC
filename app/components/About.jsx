"use client";

import { useState, useEffect, useRef } from "react";
import Button from "./Button";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const images = [
    '/images/carousel/Image 8240 from Google Drive.PNG',
    '/images/carousel/Image 8241.PNG',
    '/images/carousel/Image 8242 from Google Drive.PNG',
    '/images/carousel/Image 8244 from Google Drive.PNG'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`relative w-full border-t border-b border-white/20 py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-8">
        <div className="text-white">
          <h2 className="text-4xl md:hidden font-light mb-8" style={{ fontFamily: 'var(--font-cursive)' }}>
            About MIUDC
          </h2>
          
          <div className="md:flex md:items-stretch md:gap-8">
            {/* Carousel */}
            <div className="float-right w-2/3 ml-4 mb-4 md:float-none md:w-1/2 md:ml-0 md:mb-0 relative overflow-hidden rounded-lg aspect-[4/3] md:aspect-auto md:h-[350px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Carousel ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* About Text */}
            <div className="md:w-1/2 md:flex md:items-center md:h-[350px]">
              <div>
                <h2 className="hidden md:block text-5xl font-light mb-8" style={{ fontFamily: 'var(--font-cursive)' }}>
                  About MIUDC
                </h2>
                <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  The 8th Edition of the Mian Iftikhar-ud-Din Urdu Debating Championship is back! Hosted at LGS JT Senior Boys, this tournament is a celebration of our national language and the power of youth voice. From January 23rd–25th, 2026, teams from across the country will compete in the Asians Parliamentary format to prove their oratorical prowess and logical brilliance. Join us for three days of high-stakes debate and intellectual discourse as we continue a legacy of excellence in the national debating circuit.
                </p>
              </div>
            </div>
          </div>

          {/* View Invite Button - Centered Below */}
          <div className="flex justify-center mt-8 clear-both">
            <Button 
              text="View Invite"
              color="#000000"
              textColor="#ffffff"
              glowColor="#ffffff"
              borderColor="rgba(200, 200, 200, 0.15)"
              customPadding="px-6 py-3"
              onClick={() => window.open('/invite.pdf', '_blank')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
