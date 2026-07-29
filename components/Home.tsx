"use client";

import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { TextAnimate } from "@/registry/magicui/text-animate";
import { RetroGrid } from "@/registry/magicui/retro-grid";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 font-primary"
    >
      {/* 3D Perspective Retro Grid */}
      <RetroGrid />

      {/* OKLCH Ambient Hero Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[oklch(0.77_0.07_10/0.25)] blur-[130px]" />
      <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-[oklch(0.84_0.08_65/0.18)] blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Welcome Badge */}
        <div className="inline-flex items-center rounded-full border border-[oklch(0.77_0.07_10/0.4)] bg-[oklch(0.77_0.07_10/0.12)] px-5 py-2 backdrop-blur-md shadow-[0_0_20px_oklch(0.77_0.07_10/0.2)]">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={0.8}
            as="span"
            className="text-sm font-semibold text-[oklch(0.90_0.04_10)]"
          >
            🚀 Welcome to My Portfolio
          </TextAnimate>
        </div>

        {/* Name with Google Sans Flex font */}
        <h1 className="font-secondary mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1.2}
            as="span"
            className="text-white block"
          >
            Chanudi
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1.5}
            delay={0.2}
            as="span"
            className="bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)] bg-clip-text text-transparent block"
          >
            MallikaArachchi
          </TextAnimate>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-[oklch(0.84_0.015_10)] leading-relaxed">
          Ensuring the quality & performance of scalable applications using{" "}
          <span className="text-[oklch(0.84_0.08_65)] font-semibold">Java</span>,{" "}
          <span className="text-[oklch(0.77_0.07_10)] font-semibold">Selenium</span>,{" "}
          <span className="text-[oklch(0.72_0.12_350)] font-semibold">Postman</span>, and{" "}
          <span className="text-[oklch(0.80_0.10_35)] font-semibold">Playwright</span>.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button
            onClick={() => handleScrollTo("#projects")}
            className="group inline-flex items-center justify-center gap-2 rounded-2xl btn-oklch-primary px-8 py-4 font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            View Projects
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </button>

          <a
            href="/Chanudi_MallikaArachchi.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-2xl btn-oklch-secondary px-8 py-4 font-semibold hover:scale-105 transition duration-300"
          >
            <Download size={18} />
            Download CV
          </a>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <ChevronDown
            size={32}
            className="animate-bounce text-[oklch(0.77_0.07_10)] opacity-80"
          />
        </div>

      </div>
    </section>
  );
}
