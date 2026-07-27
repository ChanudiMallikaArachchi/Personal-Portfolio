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
  role: "Quality Assurance Engineer Portfolio",
  tagline: "I build robust, scalable web applications and high-fidelity user experiences.",
  bio: "I am a software engineer focused on crafting clean, high-performance web applications. With expertise in React, Next.js, Node.js, and cloud infrastructure, I specialize in taking products from concept to production. I design systems that are fast, accessible, and built with maintainability in mind.",
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio",
    description: "A modern personal portfolio website to showcase my projects, skills, and experience. Designed with responsive UI and smooth animations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/ChanudiMallikaArachchi/Personal-Portfolio.git",
    image: "/portfolio.png",
  },
  {
    id: "2",
    title: "OpenCart Automation Testing ",
    description: "Engineered an end-to-end (E2E) test automation framework using Playwright and JavaScript for an OpenCart ecommerce platform, following the Page Object Model (POM) architecture. ",
    tech: ["Playwright", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/ChanudiMallikaArachchi/Automation_testing_OpenCart.git",
    image: "/openCart.png",  
  },
  {
    id: "3",
    title: "OrangeHRM Automation Testing",
    description: "Developed a robust, scalable end-to-end test automation framework using Playwright and JavaScript to automate core HR workflows on the OrangeHRM enterprise platform. ",
    tech: ["Playwright", "JavaScript"],
    github: "https://github.com/ChanudiMallikaArachchi/Automation_testing_OrangeHRM.git",
    image: "/orangeHRM.png",
  },
  {
    id: "4",
    title: "SauceDemo Automation Testing",
    description: "Developed an automated UI testing project for the SauceDemo e-commerce application using Java, Selenium WebDriver, TestNG, and Maven.",
    tech: ["Selenium WebDriver", "TestNG", "Maven"],
    github: "https://github.com/ChanudiMallikaArachchi/saucedemo-automation-java.git",
    image: "/sauceDemo.png",
  },
  {
    id: "5",
    title: "Automation Testing — Product Store ",
    description: "Developed an end-to-end UI automation test framework using Playwright (JavaScript) and the Page Object Model (POM). ",
    tech: ["Playwright", "JavaScript", "CSS3"],
    github: "https://github.com/ChanudiMallikaArachchi/Automation_testing_productStore.git",
    image: "/productStore.png",
  }
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
