"use client";

import React, { useRef, useEffect, useState } from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

const clients = [
  { name: 'BSSMU', image: '/images/industries/bsmmu.png' },
  { name: 'NICRH', image: '/images/industries/nicrh.png' },
  { name: 'IBN SINA', image: '/images/industries/ibn sina.png' },
  { name: 'ApnarLAB', image: '/images/industries/omr.PNG' },
];

export default function ClientsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 3); // 3x repeat
    }
  }, []);

  return (
    <section className="py-16 relative">
      <ParticlesBackground />
      <div className="absolute inset-0 -z-10" />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-primary-700 dark:text-primary-300 drop-shadow">
        Our Clients
      </h2>
      <div
        className="relative overflow-x-hidden rounded-2xl shadow-xl max-w-5xl mx-auto bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-primary-100 dark:border-primary-900"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          ref={marqueeRef}
          className={`whitespace-nowrap flex items-center gap-10 animate-marquee${
            hovering ? '' : ' paused'
          }`}
          style={{ minWidth: '100vw' }}
        >
          {Array(3)
            .fill(clients)
            .flat()
            .map((client, idx) => (
              <div
                key={client.name + idx}
                className="w-28 h-28 rounded-2xl bg-white/60 dark:bg-gray-800/60 shadow-lg flex items-center justify-center mx-2 border-2 border-primary-200 dark:border-primary-800 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-md"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(80, 120, 255, 0.10)',
                }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 object-cover rounded-xl drop-shadow-lg"
                  draggable="false"
                />
              </div>
            ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${marqueeWidth}px);
            }
          }
          .animate-marquee {
            animation: marquee 24s linear infinite;
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    </section>
  );
}
