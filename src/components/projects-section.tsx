"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Content Generation Platform",
    description: "AI-powered social media content generator supporting LinkedIn, X, and Medium integrations",
    tech: ["Next.js 15", "TypeScript", "LLM Integration", "AWS"]
  },
  // Add other projects
];

export default function Projects() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-4xl font-bold text-gray-900">Featured Work</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <p className="mt-4 text-gray-600">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
