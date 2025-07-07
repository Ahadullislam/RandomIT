'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import Link from 'next/link';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 rounded-full shadow-sm">
              Welcome to Random IT
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Innovative, Secure, and Customizable Software Solutions
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto"
          >
            At Random IT, we craft innovative, secure, and customizable software solutions designed to simplify complex workflows. Whether you’re running a hospital, diagnostic lab, or a growing enterprise — we provide digital systems that improve efficiency, accuracy, and outcomes.
          </motion.p>
          <motion.ul
            variants={itemVariants}
            className="mb-10 max-w-2xl mx-auto text-base text-gray-700 dark:text-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-left"
          >
            <li>• Expertise in healthcare, diagnostics, and enterprise automation</li>
            <li>• Solutions tailored for hospitals, labs, and businesses</li>
            <li>• Focus on security, compliance, and reliability</li>
            <li>• Dedicated to improving your workflow and outcomes</li>
          </motion.ul>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/services" className="btn-primary">
              Explore Our Solutions
            </Link>
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        {/* Hero Image/Animation */}
        <motion.div
          className="mt-16 md:mt-24 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-2xl shadow-2xl opacity-20 blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                {/* Removed Custom Software Solutions card for cleaner About Us section */}
              </div>
            </div>
          </div>
          {/* Animated elements */}
          <motion.div
            className="absolute -top-8 -left-8 w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full hidden md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 w-24 h-24 bg-secondary-100 dark:bg-secondary-900 rounded-full hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
