"use client";

import { useEffect, useRef, useState } from "react";

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
    <div 
      ref={sectionRef} 
      className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="px-8 py-16">
        <div className="text-white text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ fontFamily: 'var(--font-cursive)' }}>
            Location
          </h2>
          <div className="w-16 h-0.5 bg-white/40 mx-auto mb-12" />
          
          <div className="flex justify-center mb-6">
            <div className="relative group w-full max-w-xl mx-auto">
              <div className="absolute -inset-2 rounded-2xl bg-white/5 blur-lg opacity-50 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-black/40 shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12602.049475408632!2d74.27454330050205!3d31.46684539008887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e0fc887323%3A0xab96115d544c1796!2sLahore%20Grammar%20School%20for%20Boys%20(LGS%20JT)!5e1!3m2!1sen!2s!4v1725424124783!5m2!1sen!2s"
                  width="100%"
                  height="350"
                  className="rounded-2xl filter brightness-90 hover:brightness-100 transition duration-300"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LGS JT Map"
                ></iframe>
              </div>
            </div>
          </div>
          
          <p
            className="text-white/90 max-w-2xl mx-auto font-light tracking-wide text-base md:text-lg mt-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            364-E/1, M. A. Block E 1 Phase 1 Johar Town, Lahore, Punjab 54700
          </p>
        </div>
      </div>
    </div>
  );
}
