# 🚀 Chanudi MallikaArachchi — Full-Stack & QA Developer Portfolio

A modern, high-performance personal portfolio built with **Next.js 14**, **Tailwind CSS**, and a state-of-the-art **OKLCH Emerald Color Engine**. Designed for optimal responsiveness, visual elegance, and seamless user interaction.

---

## 🎨 Design System & OKLCH Emerald Color Engine

This project utilizes modern **OKLCH CSS Variables** for rich, perceptually uniform color gradients and dark-mode glassmorphism:

- **Core Accent Color**: `oklch(0.571 0.181 145)` (Vivid Emerald Green / Electric Jade)
- **Harmonious Accents**:
  - `oklch(0.76 0.19 125)` — Electric Lime
  - `oklch(0.68 0.19 160)` — Bright Seafoam Mint
  - `oklch(0.72 0.17 190)` — Luminous Aqua Cyan
  - `oklch(0.52 0.15 175)` — Deep Cyber Teal
- **Dark Mode Surface Palette**:
  - Background: `oklch(0.11 0.015 145)`
  - Surface Panel: `oklch(0.15 0.02 145)`
  - Card Glass: `oklch(0.19 0.025 145)`

---

## 🔤 Dual-Font Typography Stack

The site leverages Google Fonts with tailored optical sizing and font variation settings:

- **Primary Font**: `Plus Jakarta Sans` — Clean, ultra-readable body text & functional UI components.
- **Secondary Font**: `Google Sans Flex` — High-impact headings, titles, and brand logo elements with dynamic variable settings (`opsz: 6..144`, `wght: 1..1000`, `slnt: 0`, `wdth: 100`, `GRAD: 0`, `ROND: 0`).

---

## ✨ Features

- ⚡ **Next.js 14 App Router**: Server-side optimized page loading & static rendering.
- 🎨 **Emerald OKLCH Palette**: Perceptually uniform, vibrant color space with CSS variables.
- 💎 **Glassmorphism UI**: Dynamic blurred cards with ambient glowing borders.
- 📱 **Fully Responsive**: Flawless experience across mobile, tablet, and desktop devices.
- 🎭 **Smooth Animations**: Powered by Framer Motion & CSS Keyframes.
- ✉️ **Interactive Contact Form**: Real-time validation & user status feedback.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & OKLCH CSS Variables
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (`Plus Jakarta Sans` & `Google Sans Flex`)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.x or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chanu529/personal-portfolio.git
   cd personal-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Project Architecture

```
personal-portfolio/
├── app/
│   ├── globals.css      # OKLCH Emerald CSS variables & font utilities
│   ├── layout.tsx       # Root layout with font configuration
│   └── page.tsx         # Main portfolio page entry point
├── components/
│   ├── Navbar.tsx       # Glassmorphism Navigation bar
│   ├── Home.tsx         # Hero section with Google Sans Flex branding
│   ├── About.tsx        # Personal bio & experience highlights
│   ├── Skills.tsx       # Interactive skill badges & grid
│   ├── Projects.tsx     # Showcase project cards with tech tags
│   ├── Contact.tsx      # Interactive contact form
│   └── Footer.tsx       # Footer links & copyright
├── data/
│   └── portfolioData.ts # Data structures for projects & socials
├── public/              # Static assets & images
├── tailwind.config.ts   # Tailwind theme extension with OKLCH tokens
└── package.json
```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
