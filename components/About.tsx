"use client";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      {/* Large Background Text */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[120px] font-black text-white/5 select-none">
        ABOUT
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <div className="flex justify-center animate-fadeUp">
          <div className="relative group">

            {/* Glow Ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-xl opacity-60 group-hover:opacity-90 transition duration-500" />

            {/* Profile Image */}
            <img
              src="/profile.png"
              alt="Profile"
              className="
                relative
                w-[320px] h-[320px]
                md:w-[420px] md:h-[420px]
                object-cover
                rounded-full
                border-4 border-zinc-900
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

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-black leading-tight">
            Who I Am
          </h2>

          <p className="mt-8 text-lg text-zinc-400 leading-relaxed hover:text-zinc-200 transition">
            I am a third-year BSc (Hons) Computer Science undergraduate at
            NSBM Green University.
          </p>

          <p className="mt-4 text-lg text-zinc-400 leading-relaxed hover:text-zinc-200 transition">
            I am passionate about software quality assurance and love ensuring the reliability and performance of modern web and mobile applications.
          </p>

          <p className="mt-4 text-lg text-zinc-400 leading-relaxed hover:text-zinc-200 transition">
            My focus areas include test automation, manual testing, and utilizing tools like Selenium, Cypress, Appium, and Postman. I enjoy finding edge cases and delivering flawless user experiences.
          </p>

          {/* Highlight Quote */}
          <div className="mt-10 border-l-4 border-blue-500 pl-5 text-zinc-300 italic">
            “I believe in delivering clean, rigorously tested, and highly reliable software.”
          </div>

        </div>
      </div>
    </section>
  );
}
