'use client';

import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

const features = [
  'Template-Based Detection',
  'Auto Bubble Detection',
  'Roll/Registration Number Reader',
  'Bulk Sheet Processing',
  'Instant Result Evaluation',
  'Exportable Results',
  'User-Friendly Interface',
];

const perfectFor = [
  'Schools & Universities',
  'Coaching Centers & Test Prep Institutes',
  'Government & Private Exams',
  'Surveys & Feedback Forms',
  'HR & Recruitment Tests',
];

export default function OMRScannerPage() {
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
          OMR Scanner System
        </h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mx-auto mb-4 flex size-24 items-center justify-center rounded-full bg-blue-100 shadow-lg"
        >
          <span className="text-5xl">📝</span>
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
          Our OMR (Optical Mark Recognition) Scanner System is a cutting-edge solution designed to
          automate and streamline the processing of multiple-choice documents such as exams,
          surveys, and evaluation sheets. It accurately detects filled bubbles, reads roll numbers
          or IDs, compares answers with an answer key, and generates insightful reports — all in
          just a few clicks.
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
              <span className="flex size-6 items-center justify-center rounded-full bg-primary-500 text-white shadow">
                {String.fromCodePoint(0x2714)}
              </span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7, type: 'spring' }}
        className="rounded-xl bg-white/80 p-6 shadow-md backdrop-blur-md dark:bg-gray-800/80"
      >
        <h2 className="mb-4 text-2xl font-semibold text-primary-700 dark:text-primary-300">
          Perfect For
        </h2>
        <ul className="space-y-2">
          {perfectFor.map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 text-base text-gray-700 dark:text-gray-200"
            >
              <span className="inline-block size-4 rounded-full bg-primary-400"></span>
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
