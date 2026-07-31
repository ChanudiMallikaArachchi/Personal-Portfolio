"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { TextAnimate } from "@/registry/magicui/text-animate";
import { RetroGrid } from "@/registry/magicui/retro-grid";

export default function Home() {
  const [greetingTime, setGreetingTime] = useState("Good Evening!");
  const [timeIcon, setTimeIcon] = useState<"morning" | "afternoon" | "evening" | "default">("evening");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      setGreetingTime("Good Morning!");
      setTimeIcon("morning");
    } else if (hour >= 12 && hour < 17) {
      setGreetingTime("Good Afternoon!");
      setTimeIcon("afternoon");
    } else {
      setGreetingTime("Good Evening!");
      setTimeIcon("evening");
    }
  }, []);

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
      <RetroGrid />

      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[oklch(0.77_0.07_10/0.25)] blur-[130px]" />
      <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-[oklch(0.84_0.08_65/0.18)] blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Highlighted Hero Greeting Pill Badge */}
        <div className="mb-6 flex justify-center">
          <div className="group relative inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[oklch(0.18_0.02_10/0.8)] backdrop-blur-xl border border-[oklch(0.77_0.07_10/0.4)] shadow-[0_0_25px_oklch(0.77_0.07_10/0.2)] hover:border-[oklch(0.77_0.07_10/0.75)] hover:shadow-[0_0_35px_oklch(0.77_0.07_10/0.35)] transition-all duration-300">
            
            {/* Ambient Background Glow */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[oklch(0.84_0.08_65/0.25)] via-[oklch(0.77_0.07_10/0.25)] to-[oklch(0.72_0.12_350/0.25)] blur-md -z-10 group-hover:opacity-100 transition-opacity opacity-70" />

            {/* Time Emoji / Highlight Badge */}
            <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-[oklch(0.84_0.08_65/0.2)] to-[oklch(0.77_0.07_10/0.2)] border border-[oklch(0.84_0.08_65/0.4)] shadow-[0_0_12px_oklch(0.84_0.08_65/0.25)] text-base sm:text-lg md:text-xl font-extrabold text-[oklch(0.86_0.10_65)] drop-shadow-[0_0_8px_oklch(0.86_0.10_65/0.5)]">
              {timeIcon === "morning" && "☀️ "}
              {timeIcon === "afternoon" && "☀️ "}
              {timeIcon === "evening" && "🌙 "}
              <span className="bg-gradient-to-r from-[oklch(0.86_0.10_65)] via-[oklch(0.80_0.10_35)] to-[oklch(0.77_0.07_10)] bg-clip-text text-transparent">
                {greetingTime}
              </span>
            </span>

            <span className="text-[oklch(0.84_0.015_10)] font-medium text-xs sm:text-sm md:text-base tracking-wide">
              Welcome to My Personal Portfolio
            </span>
          </div>
        </div>

        <h1 className="font-secondary mt-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1.0}
            delay={1.2}
            as="span"
            className="text-white block"
          >
            Chanudi
          </TextAnimate>
          <TextAnimate
            animation="blurInUp"
            by="character"
            duration={1.2}
            delay={1.6}
            as="span"
            className="bg-gradient-to-r from-[oklch(0.84_0.08_65)] via-[oklch(0.77_0.07_10)] to-[oklch(0.72_0.12_350)] bg-clip-text text-transparent block"
          >
            MallikaArachchi
          </TextAnimate>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-[oklch(0.84_0.015_10)] leading-relaxed">
          Ensuring the quality & performance of scalable applications using{" "}
          <span className="text-[oklch(0.84_0.08_65)] font-semibold">Java</span>,{" "}
          <span className="text-[oklch(0.77_0.07_10)] font-semibold">Selenium</span>,{" "}
          <span className="text-[oklch(0.72_0.12_350)] font-semibold">Postman</span>, and{" "}
          <span className="text-[oklch(0.80_0.10_35)] font-semibold">Playwright</span>.
        </p>

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
            href="/Chanudi MallikaArachchi.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-2xl btn-oklch-secondary px-8 py-4 font-semibold hover:scale-105 transition duration-300"
          >
            <Download size={18} />
            Download CV
          </a>

        </div>

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
