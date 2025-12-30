"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
    { name: "Location", href: "/#location" },
    { name: "Event Invite", action: () => window.open('/invite.pdf', '_blank') },
    { name: "Register", href: "/register" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "contact", "location"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current.charAt(0).toUpperCase() + current.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleClick = (item) => {
    if (item.action) {
      item.action();
    } else if (item.href) {
      if (item.href.startsWith('/#')) {
        const element = document.querySelector(item.href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    handleClose();
  };

  const toggleMenu = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-8 py-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-8">
          {navItems.map((item) => (
            item.href && !item.href.startsWith('/#') ? (
              <Link
                key={item.name}
                to={item.href}
                className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wide cursor-pointer"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-wide cursor-pointer"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {item.name}
              </button>
            )
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-between w-full text-white cursor-pointer"
          >
            <span className="text-lg font-light" style={{ fontFamily: 'var(--font-cursive)' }}>
              {activeSection}
            </span>
            <svg
              className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {(isOpen || isClosing) && (
            <div className={`absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}>
              {navItems.map((item, index) => (
                item.href && !item.href.startsWith('/#') ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleClose}
                    className={`block w-full text-left px-8 py-4 text-white/80 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 cursor-pointer ${isClosing ? 'opacity-0' : 'opacity-0 animate-fadeInUp'}`}
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      animationDelay: isClosing ? '0s' : `${index * 0.05}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item)}
                    className={`block w-full text-left px-8 py-4 text-white/80 hover:text-white hover:bg-white/5 transition-all border-b border-white/5 cursor-pointer ${isClosing ? 'opacity-0' : 'opacity-0 animate-fadeInUp'}`}
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      animationDelay: isClosing ? '0s' : `${index * 0.05}s`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    {item.name}
                  </button>
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
