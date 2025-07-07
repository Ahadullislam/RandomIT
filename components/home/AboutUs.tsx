"use client";
import { motion } from "framer-motion";

const points = [
	"Deep domain expertise in both healthcare and business",
	"Modular and scalable solutions tailored to your needs",
	"Continuous support, training, and innovation",
	"Data security and industry compliance focused",
];

export default function AboutUs() {
	return (
		<section className="relative py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
				<motion.h2
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold text-primary-700 dark:text-primary-300 mb-4 text-center"
				>
					About Us
				</motion.h2>
				<motion.h3
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					viewport={{ once: true }}
					className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center"
				>
					Digitizing Workflows. Empowering Growth.
				</motion.h3>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center"
				>
					At Logic & Pixel Technologies, we bridge the gap between operations and
					innovation through smart, reliable software. From frontline healthcare
					providers to enterprise decision-makers, we empower organizations to
					thrive in the digital age.
					<br />
					We blend deep industry knowledge with technical expertise to deliver
					solutions that are not only functional but also intuitive and impactful.
				</motion.p>
				<ul className="grid gap-4 md:grid-cols-2">
					{points.map((point, i) => (
						<motion.li
							key={point}
							initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
							viewport={{ once: true }}
							className="flex items-center gap-3 bg-primary-50 dark:bg-primary-900/40 rounded-lg p-4 shadow-sm"
						>
							<span className="text-green-500 text-xl">✔️</span>
							<span className="text-base text-gray-800 dark:text-gray-100">
								{point}
							</span>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	);
}
