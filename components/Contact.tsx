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
      className="relative w-full px-6 py-28 bg-black overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-widest text-blue-400">
            Let’s Connect
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-white">
            Get In Touch
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Have a project idea or opportunity? Let’s build something amazing
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
            <div className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="flex items-center gap-3 text-blue-400">
                <Mail />
                <span className="text-sm">Email Me</span>
              </div>

              <p className="mt-3 text-zinc-300">
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
                  className="group relative"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-110 transition">
                    <item.icon className="text-white group-hover:text-blue-400 transition" />
                  </div>

                  <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition" />
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
            className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-5"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-blue-500 transition"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-purple-500 transition"
            />

            {/* Message */}
            <textarea
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-pink-500 transition resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition disabled:opacity-50"
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
              <p className="text-green-400 text-sm text-center">
                Message sent successfully 🚀
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
