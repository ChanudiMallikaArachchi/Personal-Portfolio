"use client";

import { Github, Linkedin, Heart } from "lucide-react";
import { personalInfo, socials } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full px-6 py-10 bg-black overflow-hidden">
      
      {/* 🌈 Background Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* Top border glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">

          {/* LEFT */}
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-white">
              {personalInfo.name}
            </h2>

            <p className="text-zinc-400 text-sm flex items-center gap-1">
              Built with Next.js + Tailwind
              <span className="text-pink-400 animate-pulse">💖</span>
            </p>

            <p className="text-xs text-zinc-500">
              © {currentYear} All rights reserved
            </p>
          </div>

          {/* CENTER */}
          <div className="text-xs text-zinc-500">
            Turning ideas into reality ✨
          </div>

          {/* RIGHT SOCIALS */}
          <div className="flex gap-4">
            {[
              { icon: Github, link: socials.github, color: "hover:text-white" },
              { icon: Linkedin, link: socials.linkedin, color: "hover:text-blue-400" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                {/* Glow background */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 blur-xl group-hover:opacity-30 transition" />

                {/* Icon box */}
                <div className="relative w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition transform group-hover:scale-110">
                  <item.icon className={`w-4 h-4 text-zinc-300 ${item.color} transition`} />
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}
