"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "TechLead Ventures",
    role: "Senior Software Engineer",
    duration: "2021 - Present",
    highlights: [
      "Led migration of legacy system to Next.js 14, improving performance by 40%",
      "Implemented CI/CD pipelines reducing deployment time by 65%"
    ]
  },
  // Add other experiences
];

export default function Experience() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-4xl font-bold text-gray-900">Experience</h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-amber-400 to-purple-400" />
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mb-12 flex w-full items-center justify-center"
            >
              <div className={`w-full max-w-xl ${idx % 2 === 0 ? 'mr-auto' : 'ml-auto'} p-6`}>
                <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
                  <div className="absolute top-6 h-4 w-4 rounded-full bg-gradient-to-r from-amber-400 to-purple-400" />
                  <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="mt-2 text-lg text-amber-600">{exp.company}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-block text-sm font-medium text-purple-600">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
