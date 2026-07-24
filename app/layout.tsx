import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chanudi MallikaArachchi | Quality Assurance Engineer Portfolio",
  description: "Explore the portfolio of Chanudi MallikaArachchi, a Quality Assurance Engineer specialized in manual testing, test automation, bug tracking, and web application quality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-textPrimary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
