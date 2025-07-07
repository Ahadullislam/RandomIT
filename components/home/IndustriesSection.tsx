import React, { useRef, useEffect, useState } from 'react';

const industries = [
  {
    name: 'BSSMU',
    image: '/images/industries/bsmmu.png',
    benefit: 'Streamlined hospital and patient management.',
  },
  {
    name: 'NICRH',
    image: '/images/industries/nicrh.png',
    benefit: 'Advanced lab and diagnostic solutions.',
  },
  {
    name: 'IBN SINA',
    image: '/images/industries/ibn sina.png',
    benefit: 'Secure EHR and efficient inventory.',
  },
  {
    name: 'ApnarLAB',
    image: '/images/industries/omr.PNG',
    benefit: 'Automated lab workflows and reporting.',
  },
];

const allIndustryImages = [
  { name: 'BSSMU', image: '/images/industries/bsmmu.png' },
  { name: 'NICRH', image: '/images/industries/nicrh.png' },
  { name: 'IBN SINA', image: '/images/industries/ibn sina.png' },
  { name: 'ApnarLAB', image: '/images/industries/omr.PNG' },
];

export default function IndustriesSection() {
  // For dynamic marquee width
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 3); // 3x repeat
    }
  }, []);

  return (
    <section className="py-16">
      <h2 className="mb-10 text-center text-3xl font-bold">Industries We Serve</h2>
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="group flex flex-col items-center rounded-xl bg-white/40 p-6 shadow-lg backdrop-blur-md transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800/40"
          >
            <img
              src={ind.image}
              alt={ind.name}
              className="mb-4 h-20 w-20 rounded-full border-4 border-primary-200 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="mb-2 text-lg font-semibold">{ind.name}</div>
            <div className="text-center text-gray-600 dark:text-gray-300">{ind.benefit}</div>
          </div>
        ))}
      </div>

      {/* Marquee/Looping Industry Images Section */}
      <div className="relative mt-16 overflow-x-hidden rounded-2xl bg-white/40 backdrop-blur-md dark:bg-gray-800/40">
        <div
          ref={marqueeRef}
          className="animate-marquee flex items-center gap-8 whitespace-nowrap"
          style={{ minWidth: '100vw' }}
        >
          {Array(3)
            .fill(allIndustryImages)
            .flat()
            .map((ind, idx) => (
              <div
                key={ind.name + idx}
                className="mx-2 flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-2 border-primary-100 bg-white/60 backdrop-blur-md dark:border-primary-900 dark:bg-gray-800/60"
              >
                <img
                  src={ind.image}
                  alt={ind.name}
                  className="h-20 w-20 rounded-xl object-cover"
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
        `}</style>
      </div>
    </section>
  );
}
