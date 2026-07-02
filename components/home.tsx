"use client";

import { ArrowRight, Download, ChevronDown } from "lucide-react";

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Welcome Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 backdrop-blur-sm">
          <span className="text-sm font-medium text-blue-400">
            🚀 Welcome to My Portfolio
          </span>
        </div>

        {/* Name */}
        <h1 className="mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
          <span className="text-white">Chanudi</span>
          <br />
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            MallikaArachchi
          </span>
        </h1>


        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-zinc-400 leading-relaxed">
          Ensuring the quality of scalable web and mobile applications using
          <span className="text-blue-400"> Java</span>,
          <span className="text-purple-400"> Selenium</span>,
          <span className="text-cyan-400"> Playwright</span>,
          <span className="text-pink-400"> Postman</span> and
          <span className="text-yellow-400"> Jenkins</span>.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => handleScrollTo("#projects")}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>

          <a
            href="/Chanudi mallikaArachchi(CV).pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg px-8 py-4 text-white hover:bg-white/10 hover:scale-105 transition duration-300"
          >
            <Download size={18} />
            Download CV
          </a>

        </div>


        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <ChevronDown
            size={32}
            className="animate-bounce text-zinc-500"
          />
        </div>

      </div>
    </section>
  );
}
