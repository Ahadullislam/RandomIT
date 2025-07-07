'use client';

import React, { useEffect, useRef } from 'react';

// Utility to load particles.js script
const loadParticlesScript = (callback: () => void) => {
  if (typeof window === 'undefined') return;
  if (document.getElementById('particlesjs-script')) {
    callback();
    return;
  }
  const script = document.createElement('script');
  script.id = 'particlesjs-script';
  script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
  script.onload = callback;
  document.body.appendChild(script);
};

const particlesConfig = {
  particles: {
    number: { value: 140, density: { enable: true, value_area: 800 } },
    color: { value: ['#a78bfa', '#0ea5e9', '#8b5cf6', '#f59e42', '#38bdf8'] },
    shape: {
      type: 'circle',
      stroke: { width: 0, color: '#000000' },
      polygon: { nb_sides: 6 },
    },
    opacity: {
      value: 0.8,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.3, sync: false },
    },
    size: {
      value: 6,
      random: true,
      anim: { enable: true, speed: 8, size_min: 2, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: '#a78bfa',
      opacity: 0.7,
      width: 2,
    },
    move: {
      enable: true,
      speed: 8,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      onclick: { enable: true, mode: 'push' },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 6 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
};

const ParticlesBackground: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadParticlesScript(() => {
      if (window.particlesJS && particlesRef.current) {
        window.particlesJS('particles-js', particlesConfig);
      }
    });
    // Cleanup
    return () => {
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      ref={particlesRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default ParticlesBackground;
