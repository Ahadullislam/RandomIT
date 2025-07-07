'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useRef } from 'react';

const services = [
	{
		title: 'Diagnostic Management',
		description:
			'Streamline diagnostic workflows with our comprehensive management system.',
		image: '/images/services/dms.PNG',
		href: '/services/dms',
		color: 'bg-blue-50 dark:bg-blue-900/20',
		hover: 'hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600',
	},
	{
		title: 'EHR Solutions',
		description:
			'Secure and accessible electronic health records for better patient care.',
		image: '/images/services/ehr.PNG',
		href: '/services/ehr',
		color: 'bg-green-50 dark:bg-green-900/20',
		hover: 'hover:bg-green-500 hover:text-white dark:hover:bg-green-600',
	},
	{
		title: 'Lab Systems',
		description:
			'Efficient lab management with real-time tracking and reporting.',
		image: '/images/services/lis1.png',
		href: '/services/lis',
		color: 'bg-purple-50 dark:bg-purple-900/20',
		hover: 'hover:bg-purple-500 hover:text-white dark:hover:bg-purple-600',
	},
	{
		title: 'ERP Solutions',
		description:
			'Comprehensive enterprise resource planning for business efficiency.',
		image: '/images/services/erp1.png',
		href: '/services/erp',
		color: 'bg-yellow-50 dark:bg-yellow-900/20',
		hover: 'hover:bg-yellow-400 hover:text-white dark:hover:bg-yellow-600',
	},
	{
		title: 'Health Management',
		description:
			'End-to-end healthcare management solutions for modern facilities.',
		image: '/images/services/hms.PNG',
		href: '/services/hms',
		color: 'bg-red-50 dark:bg-red-900/20',
		hover: 'hover:bg-red-500 hover:text-white dark:hover:bg-red-600',
	},
	{
		title: 'Inventory Management',
		description:
			'Optimize your supply chain with our advanced inventory solutions.',
		image: '/images/services/inventory.PNG',
		href: '/services/inventory',
		color: 'bg-teal-50 dark:bg-teal-900/20',
		hover: 'hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600',
	},
	{
		title: 'OMR Scanner',
		description:
			'Automate and streamline the processing of multiple-choice documents and generate insightful reports.',
		image: '/images/services/omr.PNG',
		href: '/services/omr-scanner',
		color: 'bg-indigo-50 dark:bg-indigo-900/20',
		hover: 'hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-600',
	},
];

export default function Services() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<section
			id="services"
			className="py-16 md:py-24"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					ref={ref}
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<span className="text-sm font-semibold tracking-wider text-primary-600 uppercase">
						Our Services
					</span>
					<h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
						Comprehensive IT Solutions
					</h2>
					<p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
						We offer a wide range of technology services to help your business
						thrive in the digital age.
					</p>
				</motion.div>

				<motion.div
					variants={{
						hidden: { opacity: 0 },
						show: {
							opacity: 1,
							transition: { staggerChildren: 0.1, delayChildren: 0.3 },
						},
					}}
					initial="hidden"
					animate={isInView ? 'show' : 'hidden'}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{services.map((service, index) => (
						<motion.div
							key={index}
							variants={{
								hidden: { y: 20, opacity: 0 },
								show: {
									y: 0,
									opacity: 1,
									transition: { duration: 0.5 },
								},
							}}
							className={`group relative p-6 rounded-xl transition-all duration-300 shadow-lg cursor-pointer ${service.color} ${service.hover}`}
						>
							<div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-900/20 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
							<div className="relative flex flex-col items-center">
								<img
									src={service.image}
									alt={service.title}
									className="w-16 h-16 rounded-xl object-cover mb-4 border-2 border-primary-200 dark:border-primary-700 shadow-md group-hover:scale-110 transition-transform duration-300 bg-white dark:bg-gray-800"
									draggable="false"
								/>
								<h3 className="text-xl font-bold mb-2 text-center transition-colors duration-300">
									{service.title}
								</h3>
								<p className="mb-4 text-center transition-colors duration-300">
									{service.description}
								</p>
								<Link
									href={service.href}
									className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:text-white transition-colors duration-200"
								>
									Learn more
									<FiArrowRight className="ml-2 transition-transform duration-200 group-hover:translate-x-1" />
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ delay: 0.6, duration: 0.6 }}
					className="mt-16 text-center"
				>
					<Link
						href="/services"
						className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
					>
						View All Services
						<FiArrowRight className="ml-2" />
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
