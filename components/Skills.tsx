"use client";

import SectionWrapper from "./SectionWrapper";

const skills = [
  "Java",
  "Selenium",
  "Playwright",
  "Postman",
  "Jenkins",
  "Spring Boot",
  "React",
  "Next.js",
  "MySQL",
  "Flutter",
  "TypeScript",
  "Tailwind CSS",
  "Git",
  "REST APIs",
  "Node.js",
  "Firebase",
];

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="relative w-full bg-black px-6 py-28 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[140px]" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-pink-500/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Title */}
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          My Toolbox
        </p>

        <h2 className="mt-3 text-5xl md:text-6xl font-black text-white">
          Skills & Technologies
        </h2>

        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
          Tools and technologies I use to build scalable modern applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="
                group relative p-[2px] rounded-2xl
                bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                hover:scale-105 transition duration-300
                animate-fadeUp
              "
              style={{
                animationDelay: `${index * 70}ms`,
              }}
            >
              {/* Inner Card */}
              <div className="
                rounded-2xl bg-black/90
                backdrop-blur-md
                px-5 py-6 text-center
                border border-white/10
                group-hover:border-white/30
                transition
              ">

                {/* Glow dot */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl transition" />

                <span className="
                  relative text-zinc-200 font-medium
                  group-hover:text-white
                  transition
                ">
                  {skill}
                </span>

              </div>
            </div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
}