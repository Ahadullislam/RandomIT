'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

const features = [
  'Scalable for businesses of all sizes',
  'Cloud-based access for remote management',
  'Real-time data analytics and reporting',
];

export default function ERPPage() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-4 py-12 pt-28 md:px-12">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-center"
      >
        <h1 className="mb-2 bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          Smart Business Management Simplified
        </h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-blue-100 shadow-lg"
        >
          <span className="text-5xl">💼</span>
        </motion.div>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
        className="rounded-xl bg-white/30 p-6 shadow-md backdrop-blur-lg dark:bg-gray-900/30"
      >
        <h2 className="mb-2 text-2xl font-semibold text-primary-700 dark:text-primary-300">
          Overview
        </h2>
        <p className="text-gray-700 dark:text-gray-200">
          Running a business shouldn’t feel overwhelming. Our ERP system brings everything—finance,
          HR, inventory, and supply chain—into one easy-to-use platform. Stay organized, reduce
          manual work, and make smarter business decisions with real-time data.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
        className="rounded-xl bg-gradient-to-br from-blue-100/60 to-primary-100/60 p-6 shadow-md dark:from-blue-900/40 dark:to-primary-900/40"
      >
        <h2 className="mb-4 text-2xl font-semibold text-primary-700 dark:text-primary-300">
          Key Features
        </h2>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 text-white shadow">
                {String.fromCodePoint(0x2714)}
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
