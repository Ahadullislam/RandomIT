"use client";

import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';

const features = [
  'HIPAA-compliant security to protect patient data',
  'Cloud-based access for real-time collaboration',
  'Centralized patient history and treatment plans',
];

export default function EHRPage() {
  return (
    <main className="min-h-screen pt-28 py-12 px-4 md:px-12 max-w-3xl mx-auto flex flex-col gap-10 relative">
      <ParticlesBackground />
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 bg-gradient-to-r from-primary-500 to-blue-500 bg-clip-text text-transparent">
          All Your Health Records in One Secure Place
        </h1>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="mx-auto w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center shadow-lg mb-4"
        >
          <span className="text-5xl">🩺</span>
        </motion.div>
      </motion.div>
      <motion.section
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
        className="bg-white/30 dark:bg-gray-900/30 rounded-xl p-6 shadow-md backdrop-blur-lg"
      >
        <h2 className="text-2xl font-semibold mb-2 text-primary-700 dark:text-primary-300">Overview</h2>
        <p className="text-gray-700 dark:text-gray-200">
          No more misplaced files or delayed treatments. Our EHR system keeps medical histories, prescriptions, and lab reports organized, secure, and accessible anytime, from anywhere.
        </p>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
        className="bg-gradient-to-br from-blue-100/60 to-primary-100/60 dark:from-blue-900/40 dark:to-primary-900/40 rounded-xl p-6 shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary-700 dark:text-primary-300">Key Features</h2>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
              className="flex items-center gap-3 text-lg text-gray-700 dark:text-gray-200"
            >
              <span className="inline-block w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center shadow">{String.fromCodePoint(0x2714)}</span>
              {feature}
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
