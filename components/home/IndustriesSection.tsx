import React, { useRef, useEffect, useState } from 'react';

const industries = [
  { name: 'BSSMU', image: '/images/industries/bsmmu.png', benefit: 'Streamlined hospital and patient management.' },
  { name: 'NICRH', image: '/images/industries/nicrh.png', benefit: 'Advanced lab and diagnostic solutions.' },
  { name: 'IBN SINA', image: '/images/industries/ibn sina.png', benefit: 'Secure EHR and efficient inventory.' },
  { name: 'ApnarLAB', image: '/images/industries/omr.PNG', benefit: 'Automated lab workflows and reporting.' },
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
      <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {industries.map((ind) => (
          <div key={ind.name} className="rounded-xl shadow-lg p-6 flex flex-col items-center group hover:shadow-2xl transition-shadow duration-300 backdrop-blur-md bg-white/40 dark:bg-gray-800/40">
            <img src={ind.image} alt={ind.name} className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary-200 group-hover:scale-105 transition-transform duration-300" />
            <div className="font-semibold text-lg mb-2">{ind.name}</div>
            <div className="text-gray-600 dark:text-gray-300 text-center">{ind.benefit}</div>
          </div>
        ))}
      </div>

      {/* Marquee/Looping Industry Images Section */}
      <div className="relative mt-16 overflow-x-hidden rounded-2xl backdrop-blur-md bg-white/40 dark:bg-gray-800/40">
        <div
          ref={marqueeRef}
          className="whitespace-nowrap flex items-center gap-8 animate-marquee"
          style={{ minWidth: '100vw' }}
        >
          {Array(3).fill(allIndustryImages).flat().map((ind, idx) => (
            <div
              key={ind.name + idx}
              className="w-24 h-24 rounded-2xl flex items-center justify-center mx-2 border-2 border-primary-100 dark:border-primary-900 overflow-hidden backdrop-blur-md bg-white/60 dark:bg-gray-800/60"
            >
              <img
                src={ind.image}
                alt={ind.name}
                className="w-20 h-20 object-cover rounded-xl"
                draggable="false"
              />
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-${marqueeWidth}px); }
          }
          .animate-marquee {
            animation: marquee 24s linear infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
