'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiMail, FiPhone, FiMessageSquare } from 'react-icons/fi';

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const contactMethods = [
    {
      icon: <FiMail className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      title: 'Email Us',
      description: 'Get in touch via email',
      link: 'mailto:ceo@randomit.com',
      linkText: 'ceo@randomit.com',
    },
    {
      icon: <FiPhone className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      title: 'Call Us',
      description: 'Saturday-Thursday from 9am to 5pm',
      link: 'tel:+8801336191848',
      linkText: '+8801336191848',
    },
    {
      icon: <FiMessageSquare className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
      title: 'Live Chat',
      description: 'Chat with our team',
      link: '/contact',
      linkText: 'Start Chat',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Removed missing pattern.png background for optimization */}
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent"></div>

      <div className="animate-blob absolute right-0 top-0 h-1/3 w-1/3 rounded-full bg-primary-400 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute bottom-0 left-0 h-1/3 w-1/3 rounded-full bg-secondary-400 opacity-20 mix-blend-multiply blur-3xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute left-1/2 top-1/2 h-1/4 w-1/4 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-pink-400 opacity-20 mix-blend-multiply blur-3xl filter"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-200">
            Ready to get started?
          </span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-primary-100">
            Whether you have a project in mind or just want to explore possibilities, we're here to
            help bring your ideas to life.
          </p>
        </motion.div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={item}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl dark:bg-gray-800"
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 dark:bg-gray-700 dark:text-primary-400">
                  {method.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {method.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-flex items-center font-medium text-primary-600 transition-colors duration-200 hover:text-primary-800 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  {method.linkText}
                  <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl dark:bg-gray-800 md:p-12"
          >
            <div className="mb-8 text-center">
              <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Schedule a Free Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let's discuss your project and how we can help you achieve your goals.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <div className="flex items-center">
                <button
                  type="submit"
                  className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Send Message
                  <FiArrowRight className="ml-2" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
