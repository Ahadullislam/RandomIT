'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const testimonials = [
  {
    name: 'Uttam Kumar',
    role: 'Lab Technician, NICRH',
    content:
      'Their custom LIS solution has been a game-changer for our lab operations. The team was professional, attentive, and delivered beyond our expectations.',
    rating: 5,
    image: '/images/testimonials/michael.jpg',
  },
  {
    name: 'Krishno',
    role: 'Lab Incharge, BSSMU',
    content:
      'The Inventory Manangement system developed by Random IT has transformed our workflow highly effective. The platform is intuitive, secure, and has significantly reduced our administrative workload.',
    rating: 4,
    image: '/images/testimonials/sarah.jpg',
  },
  {
    name: 'Shovon Kumar Ghosh',
    role: 'Lab Incharge, ApnarLAB',
    content:
      'The EHR solution  Random IT they built for us has saved us countless hours and reduced errors by 90%. Their support team is also incredibly responsive.',
    rating: 5,
    image: '/images/testimonials/emily.jpg',
  },
  {
    name: 'David Kim',
    role: 'IT Manager, FinTech Global',
    content:
      'We partnered with Random IT for our mobile banking app, and the results have been outstanding. Their expertise in security and user experience is unmatched.',
    rating: 4,
    image: '/images/testimonials/david.jpg',
  },
  {
    name: 'Priya Patel',
    role: 'Director, CareFirst Hospitals',
    content:
      'The lab information system they implemented has streamlined our operations and improved turnaround times by 40%. Highly recommended for healthcare solutions.',
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
          className={`size-5 ${i < rating ? 'fill-current text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
        />
      ));
  };

  return (
    <section className="bg-white py-16 dark:bg-gray-900 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-600">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with
            us.
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:text-primary-400 md:flex"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="size-6" />
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-hide -mx-4 flex snap-x snap-mandatory overflow-x-auto px-4 pb-8"
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
                  className="w-full shrink-0 snap-center px-4 sm:w-2/3 md:w-1/2 lg:w-1/3"
                >
                  <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md dark:bg-gray-800">
                    <div className="mb-4 flex items-center">
                      <div className="shrink-0">
                        <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 text-lg font-bold text-primary-600 dark:from-primary-900 dark:to-primary-800 dark:text-primary-300">
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
                    <div className="mb-4 flex">{renderStars(testimonial.rating)}</div>
                    <blockquote className="mb-6 grow text-gray-600 dark:text-gray-300">
                      <p className="relative italic">
                        <span className="absolute -left-4 -top-2 text-4xl text-gray-200 dark:text-gray-700">
                          "
                        </span>
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
            className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-white text-gray-700 shadow-lg hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-gray-200 dark:hover:text-primary-400 md:flex"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="size-6" />
          </button>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
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
              className={`size-3 rounded-full transition-colors ${
                index === 0
                  ? 'w-8 bg-primary-600 dark:bg-primary-400'
                  : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
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
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            Ready to join our growing list of satisfied clients?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-200 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
