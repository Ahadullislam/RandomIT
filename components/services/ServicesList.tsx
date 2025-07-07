'use client';

import React from 'react';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import Lottie from 'lottie-react';
import dmsAnim from '../lottie/dms.json';
import ehrAnim from '../lottie/ehr.json';
import lisAnim from '../lottie/lis.json';
import erpAnim from '../lottie/erp.json';
import hmsAnim from '../lottie/hms.json';
import inventoryAnim from '../lottie/inventory.json';
import omrAnim from '../lottie/omr.json';

const services = [
  {
    title: 'Diagnostic Management System (DMS)',
    description:
      'Automate diagnostic workflows for hospitals and labs, from test scheduling to result generation.',
    icon: dmsAnim,
    link: '/services/dms',
    features: [
      'Smooth integration with hospital systems',
      'Automated reporting and instant notifications',
      'Real-time tracking of diagnostic processes',
    ],
  },
  {
    title: 'Electronic Health Records (EHR)',
    description:
      'Keep medical histories, prescriptions, and lab reports organized, secure, and accessible.',
    icon: ehrAnim,
    link: '/services/ehr',
    features: [
      'HIPAA-compliant security',
      'Cloud-based real-time collaboration',
      'Centralized patient history and treatment plans',
    ],
  },
  {
    title: 'Lab Investigation System (LIS)',
    description:
      'Manage samples, track progress, and deliver results faster with automated workflows.',
    icon: lisAnim,
    link: '/services/lis',
    features: [
      'Barcode-based sample tracking',
      'Integration with diagnostic machines',
      'Instant result sharing',
    ],
  },
  {
    title: 'ERP (Enterprise Resource Planning)',
    description: 'All-in-one platform for finance, HR, inventory, and supply chain management.',
    icon: erpAnim,
    link: '/services/erp',
    features: [
      'Scalable for all business sizes',
      'Cloud-based remote management',
      'Real-time analytics and reporting',
    ],
  },
  {
    title: 'Health Management System (HMS)',
    description: 'Streamline hospital operations, reduce waiting times, and improve patient care.',
    icon: hmsAnim,
    link: '/services/hms',
    features: [
      'Integrated patient & hospital management',
      'Easy billing & insurance claims',
      'Appointment scheduling and reminders',
    ],
  },
  {
    title: 'Inventory Management System',
    description: 'Optimize stock levels, reduce waste, and simplify supply chain management.',
    icon: inventoryAnim,
    link: '/services/inventory',
    features: [
      'Real-time inventory tracking',
      'Automated reordering',
      'Supplier and vendor management',
    ],
  },
  {
    title: 'OMR Scanner System',
    description:
      'Automate and streamline the processing of multiple-choice documents and generate insightful reports.',
    icon: omrAnim,
    link: '/services/omr-scanner',
    features: ['Template-based detection', 'Auto bubble detection', 'Bulk sheet processing'],
  },
];

export default function ServicesList() {
  return (
    <section className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.title} className="perspective group">
          <div className="relative h-80 w-full transition-transform duration-200 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-primary-100 bg-white/70 p-8 shadow-xl backdrop-blur-lg transition-all duration-200 [backface-visibility:hidden] group-hover:scale-105 group-hover:shadow-2xl dark:border-primary-800 dark:bg-gray-900/70">
              <div className="mb-4 flex size-20 items-center justify-center overflow-hidden rounded-full border border-primary-200 bg-primary-50/60 transition-transform duration-200 group-hover:scale-110 group-hover:shadow-lg dark:border-primary-700 dark:bg-primary-900/60">
                <Lottie animationData={service.icon} loop className="size-16" />
              </div>
              <h3 className="mb-2 text-center text-xl font-bold transition-colors duration-200 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {service.title}
              </h3>
              <p className="mb-4 text-center font-medium text-gray-700 transition-colors duration-200 group-hover:text-gray-900 dark:text-gray-200 dark:group-hover:text-white">
                {service.description}
              </p>
            </div>
            {/* Back Side */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border-2 border-primary-200 bg-primary-100/90 p-8 shadow-xl backdrop-blur-lg [backface-visibility:hidden] [transform:rotateY(180deg)] group-hover:scale-105 group-hover:shadow-2xl dark:border-primary-800 dark:bg-primary-900/90">
              <h3 className="mb-2 text-center text-lg font-bold text-primary-700 dark:text-primary-200">
                {service.title}
              </h3>
              <ul className="mb-2 list-inside list-disc space-y-1 text-center text-base text-gray-800 dark:text-gray-100">
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
