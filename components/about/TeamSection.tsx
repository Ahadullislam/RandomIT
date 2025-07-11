import React from 'react';
import Image from 'next/image';

const team = [
  // Fill with real data later
  {
    name: 'Mahfuza',
    role: 'CEO & Co-Founder',
    image: '/images/team/mahfuza.png',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'S.R. Babu',
    role: 'CTO & Co-Founder',
    image: '/images/team/babu.png',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'MD Ahadul Islam',
    role: 'Project Manager & Developer',
    image: '/images/team/ahad.png',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Mehedi Masum',
    role: 'Designer & Developer',
    image: '/images/team/masum.png',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export default function TeamSection() {
  return (
    <section className="mb-16">
      <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="group flex flex-col items-center rounded-2xl border border-primary-100 bg-white/30 p-8 shadow-xl backdrop-blur-lg transition-shadow duration-300 hover:shadow-2xl dark:border-primary-800 dark:bg-gray-900/30"
          >
            <Image src={member.image} alt={member.name} width={112} height={112} className="size-28 rounded-full object-cover shadow-lg" />
            <h3 className="mb-1 text-center text-xl font-bold text-primary-700 dark:text-primary-300">
              {member.name}
            </h3>
            <p className="mb-2 text-center text-primary-600 dark:text-primary-300">{member.role}</p>
            <div className="mt-2 flex gap-3">
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-600"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
                </svg>
              </a>
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-primary-600"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.762.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
