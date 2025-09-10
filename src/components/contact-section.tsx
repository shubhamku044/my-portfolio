'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const ContactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100),
  message: z.string().min(20, 'Message must be at least 20 characters').max(1000),
  honeypot: z.string(),
});

type ContactFormData = z.infer<typeof ContactSchema>;

const contactInfo = [
  {
    icon: EnvelopeIcon,
    label: 'Email',
    value: 'shubhamku044@gmail.com',
    href: 'mailto:shubhamku044@gmail.com',
    gradient: 'from-red-500 to-pink-500'
  }
];

const socialLinks = [
  {
    icon: FaGithub,
    label: 'GitHub',
    href: 'https://github.com/shubhamku044',
    gradient: 'from-gray-600 to-gray-800'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/shubhamku044',
    gradient: 'from-blue-500 to-blue-700'
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    href: 'https://x.com/shubhamku044',
    gradient: 'from-cyan-400 to-blue-500'
  }
];

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    if (data.honeypot) return; // Bot detection

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-20">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="animate-pulse-slow absolute left-20 top-20 size-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="animate-pulse-slow animation-delay-2000 absolute bottom-20 right-20 size-80 rounded-full bg-pink-400/10 blur-3xl"></div>
        <div className="animate-pulse-slow animation-delay-4000 absolute left-1/2 top-1/2 size-64 rounded-full bg-purple-400/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2">
            <SparklesIcon className="animate-spin-slow size-8 text-cyan-400" />
            <h2 className="text-4xl font-bold md:text-5xl">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let&apos;s Work Together
              </span>
            </h2>
            <SparklesIcon className="animate-spin-slow size-8 text-pink-400" />
          </div>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Have a project in mind or want to discuss opportunities?
            I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">
              <h3 className="mb-6 text-2xl font-bold text-white">
                Get in Touch
              </h3>
              <p className="mb-8 leading-relaxed text-white/80">
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your visions. Feel free to
                reach out through any of the channels below.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-75`}></div>

                    <div className="relative rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 group-hover:border-white/40">
                      <div className="flex items-center gap-4">
                        <div className={`size-12 bg-gradient-to-r ${item.gradient} flex items-center justify-center rounded-xl shadow-lg`}>
                          <item.icon className="size-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white/60">{item.label}</p>
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="font-medium text-white transition-colors hover:text-cyan-300"
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="font-medium text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      {/* Gradient glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75`}></div>

                      <Link
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:text-white group-hover:scale-110"
                      >
                        <social.icon className="size-6" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Gradient border effect for form */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-50 blur-sm"></div>

            <div className="relative rounded-3xl border border-white/20 bg-slate-900/80 p-8 backdrop-blur-lg">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/80">
                    Full Name
                  </label>
                  <input
                    {...register('name')}
                    type="text"
                    id="name"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all placeholder:text-white/50 focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/80">
                    Email Address
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all placeholder:text-white/50 focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-white/80">
                    Subject
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all placeholder:text-white/50 focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    className="w-full resize-none rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white backdrop-blur-sm transition-all placeholder:text-white/50 focus:border-transparent focus:ring-2 focus:ring-cyan-400"
                    placeholder="Tell me more about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Honeypot */}
                <input
                  {...register('honeypot')}
                  type="text"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        Send Message
                        <PaperAirplaneIcon className="size-5 transition-transform group-hover:rotate-12" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}