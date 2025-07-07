import React from 'react';

const timeline = [
  {
    year: '2018',
    title: 'Founded',
    description: 'Logic & Pixel Technologies was founded with a vision to innovate.',
  },
  {
    year: '2020',
    title: 'First Major Client',
    description: 'Secured our first enterprise client and delivered a custom ERP solution.',
  },
  {
    year: '2021',
    title: 'Healthcare Expansion',
    description: 'Launched EHR and DMS products for healthcare industry.',
  },
  {
    year: '2022',
    title: 'Team Growth',
    description: 'Grew to 30+ team members and expanded to new markets.',
  },
  {
    year: '2023',
    title: 'Award Winner',
    description: 'Recognized as a top software company in the region.',
  },
];

export default function TimelineSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Our Journey</h2>
      <ol className="relative ml-4 border-l-4 border-primary-200 dark:border-primary-800">
        {timeline.map((item, idx) => (
          <li key={item.year} className="mb-10 ml-6">
            <span className="absolute -left-5 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white ring-4 ring-white dark:ring-gray-900">
              {item.year[2]}
              {item.year[3]}
            </span>
            <div className="group rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800">
              <h3 className="mb-1 text-xl font-semibold text-primary-700 dark:text-primary-300">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
