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
      icon: <FiMail className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Email Us',
      description: 'Get in touch via email',
      link: 'mailto:ceo@logicandpixel.com',
      linkText: 'ceo@logicandpixel.com',
    },
    {
      icon: <FiPhone className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Call Us',
      description: 'Saturday-Thursday from 9am to 5pm',
      link: 'tel:+8801336191848',
      linkText: '+8801336191848',
    },
    {
      icon: <FiMessageSquare className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: 'Live Chat',
      description: 'Chat with our team',
      link: '/contact',
      linkText: 'Start Chat',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        {/* Removed missing pattern.png background for optimization */}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent"></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-200 uppercase">Ready to get started?</span>
          <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="mt-4 text-xl text-primary-100 max-w-3xl mx-auto">
            Whether you have a project in mind or just want to explore possibilities, we're here to help bring your ideas to life.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 dark:bg-gray-700 text-primary-600 dark:text-primary-400 mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{method.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{method.description}</p>
                <a
                  href={method.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-200"
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
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Schedule a Free Consultation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Let's discuss your project and how we can help you achieve your goals.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="How can we help you?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
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
