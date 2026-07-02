import image from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export const personalInfo = {
  name: "Chanudi MallikaArachchi",
  role: "Full-Stack Developer",
  tagline: "I build robust, scalable web applications and high-fidelity user experiences.",
  bio: "I am a software engineer focused on crafting clean, high-performance web applications. With expertise in React, Next.js, Node.js, and cloud infrastructure, I specialize in taking products from concept to production. I design systems that are fast, accessible, and built with maintainability in mind.",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Service Booking Site (ServiGo)",
    description: "A full-stack service booking platform where users can browse services, schedule appointments, and manage bookings efficiently. Built with a clean UI and secure backend APIs.",
    tech: ["React", "Spring Boot", "Java", "MySQL", "REST API", "Tailwind CSS"],
    github: "https://github.com/ChanudiMallikaArachchi/ServiGo-Frontend.git",
    image: "/project1.png",  
  },
  {
    id: "2",
    title: "Vehicle Rent App (RentRide)",
    description: "A mobile application for renting vehicles easily. Users can browse available vehicles, make bookings, and manage rental history with a smooth user experience.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/ChanudiMallikaArachchi/RentRide.git",
  },
  {
    id: "3",
    title: "Personal Portfolio",
    description: "A modern personal portfolio website to showcase my projects, skills, and experience. Designed with responsive UI and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ChanudiMallikaArachchi/Personal-Portfolio.git",
    image: "/project3.png",
  },
];

export const skills: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "Zustand"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "AWS", "Vercel", "CI/CD", "Jest / Cypress"],
  },
];

export const socials = {
  github: "https://github.com/ChanudiMallikaArachchi",
  linkedin: "https://www.linkedin.com/in/chanudi-mallikaarachchi-805062339 ",
};
