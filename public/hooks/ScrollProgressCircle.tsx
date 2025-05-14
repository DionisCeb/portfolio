import { useEffect, useState } from 'react';
import React from 'react';
import { navLinks } from '../../src/constants';

const ScrollProgressCircle = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < navLinks.length; i++) {
        const id = navLinks[i].href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= window.innerHeight * 0.3) {
            setCurrentIndex(i + 1);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // on load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const total = navLinks.length;

  return (
    <div
      style={{
        position: 'fixed',
        right: '10px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: '#010103',
        padding: '7px',
        borderRadius: '9999px',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: '14px',
        zIndex: 9999,
        boxShadow: 'rgb(34 211 238) 0px 0px 10px',
        animation: 'pulse 2s infinite',
      }}
    >
      {currentIndex} / {total}
    </div>
  );
};

export default ScrollProgressCircle;
