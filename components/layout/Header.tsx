'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiChevronDown } from 'react-icons/fi';
import { useTheme } from 'next-themes';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{
		name: 'Services',
		href: '/services',
		submenu: [
			{ name: 'Diagnostic Management System', href: '/services/dms' },
			{ name: 'Electronic Health Records', href: '/services/ehr' },
			{ name: 'Lab Investigation System', href: '/services/lis' },
			{ name: 'Enterprise Resource Planning', href: '/services/erp' },
			{ name: 'Health Management System', href: '/services/hms' },
			{ name: 'Inventory Management', href: '/services/inventory' },
			{ name: 'OMR Scanner System', href: '/services/omr-scanner' },
		],
	},
	{ name: 'Contact', href: '/contact' },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
	const [showHeader, setShowHeader] = useState(true);
	const lastScrollY = useRef(0);
	const [atTop, setAtTop] = useState(true);
	const { theme, setTheme } = useTheme();
	const pathname = usePathname();

	// Handle scroll and hide/show header
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setScrolled(currentScrollY > 50);
			setAtTop(currentScrollY < 10);
			if (currentScrollY < 10) {
				setShowHeader(true);
			} else if (currentScrollY > lastScrollY.current) {
				setShowHeader(false); // scrolling down
			} else {
				setShowHeader(true); // scrolling up
			}
			lastScrollY.current = currentScrollY;
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Show header if mouse is at the top of the screen
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (e.clientY < 60) {
				setShowHeader(true);
			} else if (!atTop) {
				setShowHeader(false);
			}
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [atTop]);

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
		setOpenSubmenu(null);
	}, [pathname]);

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	const toggleSubmenu = (itemName: string) => {
		if (openSubmenu === itemName) {
			setOpenSubmenu(null);
		} else {
			setOpenSubmenu(itemName);
		}
	};

	return (
		<motion.header
			initial={{ y: 0, opacity: 1 }}
			animate={{ y: showHeader ? 0 : -100, opacity: showHeader ? 1 : 0 }}
			transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.3 }}
			className={`fixed w-full z-50 transition-all duration-300 ${scrolled
					? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
					: 'bg-transparent'
				}`}
			style={{ pointerEvents: showHeader ? 'auto' : 'none' }}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center">
							<span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
								Random IT
							</span>
							<span className="text-sm font-medium bg-primary-600 text-white px-2 py-1 rounded ml-2">
								Tech
							</span>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center space-x-1 ml-auto">
						{navigation.map((item) => (
							<div key={item.name} className="relative group">
								{item.submenu ? (
									<div className="relative">
										<button
											onClick={() => toggleSubmenu(item.name)}
											className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${pathname.startsWith(item.href)
													? 'text-primary-600 dark:text-primary-400'
													: 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
												}`}
										>
											{item.name}
											<FiChevronDown className="ml-1 h-4 w-4" />
										</button>

										<AnimatePresence>
											{openSubmenu === item.name && (
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: 10 }}
													transition={{ duration: 0.2 }}
													className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
												>
													<div className="py-1">
														{item.submenu.map((subItem) => (
															<Link
																key={subItem.name}
																href={subItem.href}
																className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
															>
																{subItem.name}
															</Link>
														))}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								) : (
									<Link
										href={item.href}
										className={`px-3 py-2 rounded-md text-sm font-medium ${pathname === item.href
												? 'text-primary-600 dark:text-primary-400'
												: 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
											}`}
									>
										{item.name}
									</Link>
								)}
							</div>
						))}
					</nav>

					<div className="hidden md:flex items-center space-x-4">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 focus:outline-none"
							aria-label="Toggle theme"
						>
							{theme === 'dark' ? (
								<FiSun className="h-5 w-5" />
							) : (
								<FiMoon className="h-5 w-5" />
							)}
						</button>
						<Link
							href="/contact"
							className="px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
						>
							Get a Quote
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="flex md:hidden items-center">
						<button
							onClick={toggleTheme}
							className="p-2 rounded-full text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 focus:outline-none mr-2"
							aria-label="Toggle theme"
						>
							{theme === 'dark' ? (
								<FiSun className="h-5 w-5" />
							) : (
								<FiMoon className="h-5 w-5" />
							)}
						</button>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 focus:outline-none"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<FiX className="block h-6 w-6" aria-hidden="true" />
							) : (
								<FiMenu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							{navigation.map((item) => (
								<div key={item.name}>
									{item.submenu ? (
										<div>
											<button
												onClick={() => toggleSubmenu(item.name)}
												className={`w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium ${pathname.startsWith(item.href)
														? 'text-primary-600 dark:text-primary-400'
														: 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
													}`}
											>
												{item.name}
												<FiChevronDown
													className={`ml-2 h-4 w-4 transform transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''
														}`}
												/>
											</button>
											<AnimatePresence>
												{openSubmenu === item.name && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: 'auto' }}
														exit={{ opacity: 0, height: 0 }}
														className="pl-4 space-y-1"
													>
														{item.submenu.map((subItem) => (
															<Link
																key={subItem.name}
																href={subItem.href}
																className="block px-3 py-2 text-sm rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-primary-400 dark:hover:bg-gray-800"
															>
																{subItem.name}
															</Link>
														))}
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									) : (
										<Link
											href={item.href}
											className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href
													? 'text-primary-600 dark:text-primary-400'
													: 'text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400'
												}`}
										>
											{item.name}
										</Link>
									)}
								</div>
							))}
							<div className="pt-4 pb-2">
								<Link
									href="/contact"
									className="block w-full text-center px-4 py-2 bg-primary-600 text-white text-base font-medium rounded-md hover:bg-primary-700 transition-colors duration-200"
								>
									Get a Quote
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}
