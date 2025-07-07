'use client';

import React, { useRef, useEffect, useState } from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import Image from 'next/image';

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
    <section className="relative py-16">
      <ParticlesBackground />
      <div className="absolute inset-0 -z-10" />
      <h2 className="mb-8 text-center text-2xl font-bold text-primary-700 drop-shadow dark:text-primary-300 md:text-3xl">
        Our Clients
      </h2>
      <div
        className="relative mx-auto max-w-5xl overflow-x-hidden rounded-2xl border border-primary-100 bg-white/30 shadow-xl backdrop-blur-lg dark:border-primary-900 dark:bg-gray-900/30"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div
          ref={marqueeRef}
          className={`flex items-center gap-10 whitespace-nowrap animate-marquee${
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
                className="mx-2 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary-200 bg-white/60 shadow-lg backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl dark:border-primary-800 dark:bg-gray-800/60"
                style={{
                  boxShadow: '0 4px 24px 0 rgba(80, 120, 255, 0.10)',
                }}
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-xl object-cover drop-shadow-lg"
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
