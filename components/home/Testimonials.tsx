'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
    {
    name: 'Uttam Kumar',
    role: 'Lab Technician, NICRH',
    content: 'Their custom LIS solution has been a game-changer for our lab operations. The team was professional, attentive, and delivered beyond our expectations.',
    rating: 5,
    image: '/images/testimonials/michael.jpg',
  },
  {
    name: 'Krishno',
    role: 'Lab Incharge, BSSMU',
    content: 'The Inventory Manangement system developed by Logic & Pixel has transformed our workflow highly effective. The platform is intuitive, secure, and has significantly reduced our administrative workload.',
    rating: 4,
    image: '/images/testimonials/sarah.jpg',
  },
  {
    name: 'Shovon Kumar Ghosh',
    role: 'Lab Incharge, ApnarLAB',
    content: 'The EHR solution  Logic & Pixel they built for us has saved us countless hours and reduced errors by 90%. Their support team is also incredibly responsive.',
    rating: 5,
    image: '/images/testimonials/emily.jpg',
  },
  {
    name: 'David Kim',
    role: 'IT Manager, FinTech Global',
    content: 'We partnered with Logic & Pixel for our mobile banking app, and the results have been outstanding. Their expertise in security and user experience is unmatched.',
    rating: 4,
    image: '/images/testimonials/david.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Director, CareFirst Hospitals',
    content: 'The lab information system they implemented has streamlined our operations and improved turnaround times by 40%. Highly recommended for healthcare solutions.',
    rating: 5,
    image: '/images/testimonials/priya.jpg',
  },
];

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

export default function Testimonials() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FiStar
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'}`}
        />
      ));
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-600 uppercase">Testimonials</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory"
          >
            <motion.div 
              className="flex space-x-8"
              variants={container}
              initial="hidden"
              animate={isInView ? 'show' : 'hidden'}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 snap-center"
                >
                  <div className="h-full bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center text-primary-600 dark:text-primary-300 font-bold text-lg">
                            {testimonial.name.charAt(0)}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <blockquote className="flex-grow text-gray-600 dark:text-gray-300 mb-6">
                      <p className="relative italic">
                        <span className="absolute -left-4 -top-2 text-4xl text-gray-200 dark:text-gray-700">"</span>
                        {testimonial.content}
                      </p>
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg items-center justify-center text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollRef.current) {
                  const container = scrollRef.current;
                  const card = container.children[0].children[index] as HTMLElement;
                  card.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center',
                  });
                }
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === 0
                  ? 'bg-primary-600 dark:bg-primary-400 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to join our growing list of satisfied clients?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
