"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Send, Loader2 } from "lucide-react";
import { socials } from "@/data/portfolioData";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    }, 1200);
  };

  return (
    <SectionWrapper
      id="contact"
      className="relative w-full px-6 py-28 bg-[oklch(0.11_0.015_25)] overflow-hidden font-primary"
    >
      {/* OKLCH Ambient Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[oklch(0.503_0.172_25/0.2)] blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[oklch(0.65_0.22_350/0.15)] blur-[160px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-[oklch(0.503_0.172_25)] font-bold">
            Let’s Connect
          </p>

          <h2 className="font-secondary mt-3 text-4xl md:text-5xl font-extrabold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-[oklch(0.82_0.015_25)] max-w-2xl mx-auto">
            Have a QA or development project idea or opportunity? Let’s build something amazing
            together.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-6 rounded-2xl border border-[oklch(0.503_0.172_25/0.25)] bg-[oklch(0.16_0.02_25/0.7)] backdrop-blur-xl">
              <div className="flex items-center gap-3 text-[oklch(0.503_0.172_25)] font-medium">
                <Mail />
                <span className="text-sm">Email Me</span>
              </div>

              <p className="mt-3 text-[oklch(0.90_0.01_25)] font-medium">
                chanudiwassala@gmail.com
              </p>
            </div>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { icon: Github, link: socials.github },
                { icon: Linkedin, link: socials.linkedin },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-[oklch(0.503_0.172_25/0.3)] bg-[oklch(0.16_0.02_25/0.8)] backdrop-blur-xl hover:scale-110 transition">
                    <item.icon className="text-white group-hover:text-[oklch(0.503_0.172_25)] transition" />
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-[oklch(0.503_0.172_25/0.3)] blur-xl opacity-0 group-hover:opacity-100 transition" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-[oklch(0.503_0.172_25/0.25)] bg-[oklch(0.16_0.02_25/0.7)] backdrop-blur-xl space-y-5"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.015_25/0.8)] border border-[oklch(0.503_0.172_25/0.2)] text-white placeholder-[oklch(0.60_0.02_25)] outline-none focus:border-[oklch(0.503_0.172_25)] transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.015_25/0.8)] border border-[oklch(0.503_0.172_25/0.2)] text-white placeholder-[oklch(0.60_0.02_25)] outline-none focus:border-[oklch(0.75_0.18_55)] transition"
            />

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-[oklch(0.12_0.015_25/0.8)] border border-[oklch(0.503_0.172_25/0.2)] text-white placeholder-[oklch(0.60_0.02_25)] outline-none focus:border-[oklch(0.65_0.22_350)] transition resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl btn-oklch-primary font-semibold hover:scale-105 transition disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {/* Success */}
            {status === "success" && (
              <p className="text-[oklch(0.75_0.18_140)] text-sm text-center font-medium">
                Message sent successfully 🚀
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
