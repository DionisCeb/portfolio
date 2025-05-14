import { useEffect, useState } from 'react';
import React from 'react';
import { navLinks } from '../../src/constants';

const ScrollTracker = () => {
    const [currentSection, setCurrentSection] = useState('');
  
    useEffect(() => {
      const handleScroll = () => {
        let found = '';
        for (const { href } of navLinks) {
          const id = href.replace('#', '');
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
              found = href;
              break;
            }
          }
        }
        setCurrentSection(found);
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // initial load
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 md:flex flex-col gap-3 items-center tracker">
        {navLinks.map(({ id, name, href }) => (
          <a
            key={id}
            href={href}
            title={name}

            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 relative group
                ${currentSection === href ? 'bg-red-500 border-red-500 scale-125' : 'border-red-500'}
              `}
          >
           <span className="absolute right-5 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                {name}
            </span>
          </a>
        ))}
      </div>
    );
};
  

export default ScrollTracker;
