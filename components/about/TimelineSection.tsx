import React from 'react';

const timeline = [
  {
    year: '2018',
    title: 'Founded',
    description: 'Random IT was founded with a vision to innovate.',
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
        {timeline.map((event) => (
          <li key={event.year} className="mb-8 flex items-center">
            <div className="size-8 flex items-center justify-center rounded-full bg-primary-600 text-white shadow-lg">
              <span className="text-lg font-bold">{event.year}</span>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold text-primary-700 dark:text-primary-300">{event.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
