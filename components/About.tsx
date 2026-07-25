"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-24 font-primary"
    >
      {/* OKLCH Ambient Background Glows */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[oklch(0.77_0.07_10/0.2)] blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[oklch(0.84_0.08_65/0.18)] blur-[120px]" />

      {/* Large Background Text */}
      <div className="font-secondary absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-[oklch(0.77_0.07_10/0.05)] select-none pointer-events-none">
        ABOUT
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="flex justify-center animate-fadeUp">
          <div className="relative group">

            {/* Glow Ring with OKLCH gradient */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)] blur-xl opacity-60 group-hover:opacity-95 transition duration-500" />

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Chanudi MallikaArachchi Profile"
              className="
                relative
                w-[320px] h-[320px]
                md:w-[420px] md:h-[420px]
                object-cover
                rounded-full
                border-4 border-[oklch(0.14_0.02_10)]
                shadow-2xl
                animate-float
                group-hover:scale-105
                transition duration-500
              "
            />
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="animate-fadeUp">

          <p className="text-[oklch(0.77_0.07_10)] uppercase tracking-[0.3em] text-sm font-bold">
            About Me
          </p>

          <h2 className="font-secondary mt-4 text-5xl md:text-6xl font-black leading-tight text-white">
            Who I Am
          </h2>

          <p className="mt-8 text-lg text-[oklch(0.84_0.015_10)] leading-relaxed hover:text-white transition">
            I am a third-year BSc (Hons) Computer Science undergraduate at
            NSBM Green University.
          </p>

          <p className="mt-4 text-lg text-[oklch(0.84_0.015_10)] leading-relaxed hover:text-white transition">
            I am passionate about software quality assurance and love ensuring the reliability and performance of modern web and mobile applications.
          </p>

          <p className="mt-4 text-lg text-[oklch(0.84_0.015_10)] leading-relaxed hover:text-white transition">
            My focus areas include test automation, manual testing, and utilizing tools like Selenium, Cypress, Appium, and Postman. I enjoy finding edge cases and delivering flawless user experiences.
          </p>

          {/* Highlight Quote */}
          <div className="mt-10 border-l-4 border-[oklch(0.77_0.07_10)] pl-5 text-[oklch(0.92_0.02_10)] italic bg-[oklch(0.77_0.07_10/0.06)] py-3 pr-4 rounded-r-xl">
            “I believe in delivering clean, rigorously tested, and highly reliable software.”
          </div>

        </div>
      </div>
    </section>
  );
}
