import Link from 'next/link';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Diagnostic Management', href: '/services/dms' },
    { name: 'EHR Solutions', href: '/services/ehr' },
    { name: 'Lab Systems', href: '/services/lis' },
    { name: 'ERP Solutions', href: '/services/erp' },
    { name: 'Health Management', href: '/services/hms' },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      text: 'House:232/a, Road 60 Feet West Agargaon, Dhaka 1207',
    },
    {
      icon: <FaPhone className="text-primary-500" />,
      text: '+8801336191848',
      href: 'tel:+8801336191848',
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      text: 'ceo@randomit.com',
      href: 'mailto:ceo@randomit.com',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook className="size-5" />, href: 'https://facebook.com/randomittech' },
    { icon: <FaTwitter className="size-5" />, href: 'https://twitter.com/randomittech' },
    { icon: <FaLinkedin className="size-5" />, href: 'https://linkedin.com/company/randomittech' },
    { icon: <FaGithub className="size-5" />, href: 'https://github.com/randomittech' },
  ];

  return (
    <footer className="bg-gray-900 pb-8 pt-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-400">Random IT</span>
              <span className="ml-2 rounded bg-primary-600 px-2 py-1 text-sm font-medium text-white">
                Tech
              </span>
            </div>
            <p className="text-gray-400">
              Innovative IT solutions tailored to your business needs. We help companies transform
              their ideas into reality through cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors duration-200 hover:text-primary-400"
                  aria-label={social.href.split('/')[2]}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors duration-200 hover:text-primary-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 transition-colors duration-200 hover:text-primary-400"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="mt-1">{item.icon}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-400 transition-colors duration-200 hover:text-primary-400"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-gray-400">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary-700"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Random IT. All rights reserved.
          </p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-primary-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-primary-400"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-gray-400 transition-colors duration-200 hover:text-primary-400"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
