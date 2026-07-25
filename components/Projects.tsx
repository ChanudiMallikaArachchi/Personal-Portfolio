"use client";

import { Folder, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="relative w-full bg-[oklch(0.12_0.015_10)] px-6 py-32 overflow-hidden font-primary"
    >
      {/* Background Glows */}
      <div className="absolute top-20 left-10 h-[450px] w-[450px] rounded-full bg-[oklch(0.77_0.07_10/0.2)] blur-[180px]" />
      <div className="absolute bottom-20 right-10 h-[450px] w-[450px] rounded-full bg-[oklch(0.84_0.08_65/0.18)] blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[oklch(0.72_0.12_350/0.1)] blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[oklch(0.77_0.07_10)] font-bold">
            Portfolio
          </p>

          <h2 className="font-secondary mt-4 text-5xl md:text-6xl font-black text-white">
            {"Projects I've Built"}
          </h2>

          <p className="mt-5 text-[oklch(0.84_0.015_10)] max-w-2xl mx-auto">
            Real-world projects showcasing my skills in software quality assurance,
            full-stack web, and mobile application development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-24 space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group grid md:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <div className="relative">
                {/* Glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)] opacity-20 blur-2xl group-hover:opacity-45 transition duration-700" />

                {/* Gradient Border */}
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)]">
                  <div className="overflow-hidden rounded-3xl bg-[oklch(0.16_0.02_10)]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[260px] md:h-[340px] object-cover"
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      whileHover={{
                        scale: 1.08,
                        rotate: 1,
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div>
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      rotate: 6,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Folder className="h-6 w-6 text-[oklch(0.77_0.07_10)]" />
                    <span className="text-xs uppercase tracking-widest text-[oklch(0.62_0.02_10)] font-semibold">
                      Featured Project
                    </span>
                  </motion.div>

                  <div className="flex gap-5">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.25,
                          rotate: 8,
                        }}
                        className="text-[oklch(0.70_0.02_10)] hover:text-white transition"
                      >
                        <Github className="h-5 w-5" />
                      </motion.a>
                    )}

                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.25,
                          rotate: 8,
                        }}
                        className="text-[oklch(0.70_0.02_10)] hover:text-white transition"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <motion.h3
                  whileHover={{
                    scale: 1.02,
                  }}
                  className="font-secondary mt-5 text-3xl md:text-4xl font-bold oklch-gradient-text"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="mt-5 text-[oklch(0.84_0.015_10)] leading-relaxed text-lg">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tag) => (
                    <motion.span
                      key={tag}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                      }}
                      className="
                        px-4 py-2
                        rounded-full
                        border border-[oklch(0.77_0.07_10/0.25)]
                        bg-[oklch(0.18_0.02_10/0.8)]
                        backdrop-blur-md
                        text-sm
                        text-[oklch(0.90_0.01_10)]
                        hover:border-[oklch(0.77_0.07_10)]
                        hover:text-white
                        hover:bg-[oklch(0.77_0.07_10/0.15)]
                        transition-all
                      "
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
