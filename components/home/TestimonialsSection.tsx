import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Shovon Kumar Ghosh',
    role: 'Lab In charge',
    company: 'ApnarLAB',
    avatar: '/images/testimonials/male1.png',
    quote:
      'Logic & Pixel Technologies transformed our lab operations. Their DMS is fast, reliable, and easy to use!',
  },
  {
    name: 'Uttam Kumar',
    role: 'Lab Technician',
    company: 'NICRH',
    avatar: '/images/testimonials/male2.png',
    quote:
      'The LIS and EHR solutions have made our workflow seamless. Support is always responsive.',
  },
  {
    name: 'Asad',
    role: 'Accountant',
    company: 'BSSMU',
    avatar: '/images/testimonials/male3.png',
    quote: 'Their ERP and Inventory Management systems helped us save time and reduce costs.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-primary-50 py-16 dark:bg-gray-900">
      <h2 className="mb-10 text-center text-3xl font-bold">What Our Clients Say</h2>
      <div className="mx-auto max-w-4xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="group mx-auto flex max-w-lg flex-col items-center rounded-xl bg-white p-8 text-center shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="mb-4 h-20 w-20 rounded-full border-4 border-primary-200 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-300">“{t.quote}”</p>
                <div className="font-semibold text-primary-700 dark:text-primary-300">{t.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}, {t.company}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
