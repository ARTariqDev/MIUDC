"use client";

import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const contacts = [
    {
      name: "Muhammad Ahmed Kamil",
      role: "Event Head",
      subtitle: "President Urdu Debates Society",
      phone: "+92 300 5576705",
      email: "ahmedkami655@gmail.com"
    },
    {
      name: "Muhammad Ahmad Shanawar",
      role: "Event Co-Head",
      subtitle: "Senior Batch Representative",
      phone: "+92 327 9445522",
      email: "m.ahmadshanawar09@gmail.com"
    },
    {
      name: "Hashir Maan",
      role: "Event Co-Head",
      subtitle: "Junior Batch Representative",
      phone: "+92 319 4795102",
      email: "hashirmaan101@gmail.com"
    },
    {
      name: "Sayed Ali Osjah Bukhari",
      role: "Patron",
      subtitle: "Coach",
      phone: "+92 332 9621214",
      email: "sayedaliosjahbukhari@gmail.com"
    }
  ];

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
    <div ref={sectionRef} className={`w-full md:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="px-8 py-16">
        <div className="text-white">
          <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" style={{ fontFamily: 'var(--font-cursive)' }}>
            Contact Details
          </h2>
          
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contacts.map((contact, index) => (
                <div key={index} className="border border-white/10 rounded-lg p-4 hover:border-white/30 transition-colors">
                  <h4 className="text-lg md:text-xl font-light mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    {contact.name}
                  </h4>
                  <p className="text-sm md:text-base opacity-80 mb-3" style={{ fontFamily: 'var(--font-cursive)' }}>
                    {contact.role} | {contact.subtitle}
                  </p>
                  <div className="space-y-1">
                    <p className="text-xs md:text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      <a href={`tel:${contact.phone}`} className="hover:text-white/80 transition-colors">
                        {contact.phone}
                      </a>
                    </p>
                    <p className="text-xs md:text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      <a href={`mailto:${contact.email}`} className="hover:text-white/80 transition-colors break-all">
                        {contact.email}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-light mb-3" style={{ fontFamily: 'var(--font-cursive)' }}>
              Event Email
            </h3>
            <a 
              href="mailto:miudc.26@gmail.com" 
              className="text-base md:text-lg hover:text-white/80 transition-colors"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              miudc.26@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
