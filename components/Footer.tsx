"use client";

import { Github, Linkedin } from "lucide-react";
import { personalInfo, socials } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full px-6 py-10 bg-[oklch(0.11_0.015_145)] overflow-hidden font-primary">
      
      {/* 🌈 Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[oklch(0.571_0.181_145/0.2)] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-[oklch(0.72_0.17_190/0.15)] blur-[120px] rounded-full pointer-events-none" />

      {/* Top border glow line with OKLCH gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.571_0.181_145/0.6)] to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* LEFT */}
          <div className="space-y-2">
            <h2 className="font-secondary text-lg font-bold text-white">
              {personalInfo.name}
            </h2>

            <p className="text-[oklch(0.82_0.015_145)] text-sm flex items-center justify-center md:justify-start gap-1">
              Built with Next.js & OKLCH Emerald Engine
              <span className="text-[oklch(0.571_0.181_145)] animate-pulse">💖</span>
            </p>

            <p className="text-xs text-[oklch(0.60_0.02_145)]">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* CENTER */}
          <div className="text-xs text-[oklch(0.60_0.02_145)]">
            Ensuring software excellence & quality ✨
          </div>

          {/* RIGHT SOCIALS */}
          <div className="flex gap-4">
            {[
              { icon: Github, link: socials.github, color: "hover:text-white" },
              { icon: Linkedin, link: socials.linkedin, color: "hover:text-[oklch(0.571_0.181_145)]" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[oklch(0.76_0.19_125)] via-[oklch(0.571_0.181_145)] to-[oklch(0.72_0.17_190)] opacity-0 blur-xl group-hover:opacity-35 transition" />

                {/* Icon box */}
                <div className="relative w-10 h-10 flex items-center justify-center rounded-xl border border-[oklch(0.571_0.181_145/0.25)] bg-[oklch(0.16_0.02_145/0.8)] backdrop-blur-md transition transform group-hover:scale-110">
                  <item.icon className={`w-4 h-4 text-[oklch(0.84_0.015_145)] ${item.color} transition`} />
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
