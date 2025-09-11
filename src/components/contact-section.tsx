'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'shubhamku044@gmail.com',
    href: 'mailto:shubhamku044@gmail.com'
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Kolkata, India',
    href: null
  }
];

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/shubhamku044',
    value: 'github.com/shubhamku044'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shubhamku044',
    value: 'linkedin.com/in/shubhamku044'
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    href: 'https://x.com/shubhamku044',
    value: '@shubhamku044'
  }
];

export default function ContactSection() {
  return (
    <section className="py-4">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-3"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-wide">
            Contact Information
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm uppercase tracking-wide">
              Get In Touch
            </h3>
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-500">{item.label}:</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="ml-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm uppercase tracking-wide">
              Social Links
            </h3>
            <div className="space-y-2">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center gap-3">
                  <social.icon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-500">{social.label}:</span>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      {social.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="mailto:shubhamku044@gmail.com"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <HiMail className="w-4 h-4" />
              Send Email
            </Link>
            <Link
              href="https://la-resume.tech/shared/08583c3b-e208-4256-89d9-73ec36a15957"
              target="_blank"
              className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded text-sm font-medium hover:border-gray-400 dark:hover:border-gray-500 transition-colors"
            >
              Download Resume
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}