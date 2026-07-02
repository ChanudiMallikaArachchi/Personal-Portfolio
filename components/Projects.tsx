"use client";

import { Folder, Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="relative w-full bg-black px-6 py-32 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-20 left-10 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[180px]" />
      <div className="absolute bottom-20 right-10 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[180px]" />
      <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Projects I've Built
          </h2>

          <p className="mt-5 text-zinc-400 max-w-2xl mx-auto">
            Real-world projects showcasing my skills in full-stack web and
            mobile application development.
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
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl group-hover:opacity-40 transition duration-700" />

                {/* Gradient Border */}
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                  <div className="overflow-hidden rounded-3xl bg-black">
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
                      scale: 1.2,
                      rotate: 10,
                    }}
                    className="flex items-center gap-2"
                  >
                    <Folder className="h-6 w-6 text-blue-400" />
                    <span className="text-xs uppercase tracking-widest text-zinc-500">
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
                        className="text-zinc-400 hover:text-white"
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
                        className="text-zinc-400 hover:text-white"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <motion.h3
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="mt-5 text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  {project.title}
                </motion.h3>

                {/* Description */}
                <p className="mt-5 text-zinc-400 leading-relaxed text-lg">
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
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="
                        px-4 py-2
                        rounded-full
                        border border-white/10
                        bg-white/5
                        backdrop-blur-md
                        text-sm
                        text-zinc-300
                        hover:border-blue-500/50
                        hover:text-white
                        hover:bg-blue-500/10
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