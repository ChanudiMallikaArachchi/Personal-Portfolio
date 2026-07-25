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
      className="relative w-full bg-[oklch(0.12_0.015_10)] px-6 py-28 overflow-hidden font-primary"
    >
      {/* Background OKLCH Glows */}
      <div className="absolute top-20 left-10 h-80 w-80 rounded-full bg-[oklch(0.77_0.07_10/0.2)] blur-[140px]" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-[oklch(0.84_0.08_65/0.15)] blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Title */}
        <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.77_0.07_10)] font-bold">
          My Toolbox
        </p>

        <h2 className="font-secondary mt-3 text-5xl md:text-6xl font-black text-white">
          Skills & Technologies
        </h2>

        <p className="mt-4 text-[oklch(0.84_0.015_10)] max-w-2xl mx-auto">
          Tools and technologies I use to build & test scalable modern applications.
        </p>

        {/* Skills Grid */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={skill}
              className="
                group relative p-[2px] rounded-2xl
                bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)]
                hover:scale-105 transition duration-300
                animate-fadeUp
              "
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              {/* Inner Card */}
              <div className="
                rounded-2xl bg-[oklch(0.16_0.02_10)]
                backdrop-blur-md
                px-5 py-6 text-center
                border border-[oklch(0.77_0.07_10/0.25)]
                group-hover:border-[oklch(0.77_0.07_10/0.6)]
                transition
              ">

                {/* Glow dot */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-25 bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)] blur-xl transition" />

                <span className="
                  relative text-[oklch(0.92_0.01_10)] font-semibold
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