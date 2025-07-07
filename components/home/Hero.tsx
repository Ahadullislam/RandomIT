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
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute right-0 top-0 h-1/3 w-1/3 rounded-full bg-primary-200 opacity-20 mix-blend-multiply blur-3xl filter dark:bg-primary-900"></div>
        <div className="animate-blob animation-delay-2000 absolute bottom-0 left-0 h-1/3 w-1/3 rounded-full bg-secondary-200 opacity-20 mix-blend-multiply blur-3xl filter dark:bg-secondary-800"></div>
        <div className="animate-blob animation-delay-4000 absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-pink-200 opacity-20 mix-blend-multiply blur-3xl filter dark:bg-pink-900"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary-700 shadow-sm dark:bg-gray-800 dark:text-primary-300">
              Welcome to Random IT
            </span>
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold leading-tight text-gray-900 dark:text-white md:text-6xl"
          >
            Innovative, Secure, and Customizable Software Solutions
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-6 max-w-3xl text-xl text-gray-600 dark:text-gray-300"
          >
            At Random IT, we craft innovative, secure, and customizable software solutions designed
            to simplify complex workflows. Whether you’re running a hospital, diagnostic lab, or a
            growing enterprise — we provide digital systems that improve efficiency, accuracy, and
            outcomes.
          </motion.p>
          <motion.ul
            variants={itemVariants}
            className="mx-auto mb-10 grid max-w-2xl grid-cols-1 gap-2 text-left text-base text-gray-700 dark:text-gray-200 sm:grid-cols-2"
          >
            <li>• Expertise in healthcare, diagnostics, and enterprise automation</li>
            <li>• Solutions tailored for hospitals, labs, and businesses</li>
            <li>• Focus on security, compliance, and reliability</li>
            <li>• Dedicated to improving your workflow and outcomes</li>
          </motion.ul>
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Link href="/services" className="btn-primary">
              Explore Our Solutions
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        {/* Hero Image/Animation */}
        <motion.div
          className="relative mt-16 md:mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400 to-secondary-500 opacity-20 shadow-2xl blur-3xl"></div>
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-gray-800">
              <div className="aspect-w-16 aspect-h-9 flex w-full items-center justify-center bg-gray-100 dark:bg-gray-700">
                {/* Removed Custom Software Solutions card for cleaner About Us section */}
              </div>
            </div>
          </div>
          {/* Animated elements */}
          <motion.div
            className="absolute -left-8 -top-8 hidden h-20 w-20 rounded-full bg-primary-100 dark:bg-primary-900 md:block"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-8 -right-8 hidden h-24 w-24 rounded-full bg-secondary-100 dark:bg-secondary-900 md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
