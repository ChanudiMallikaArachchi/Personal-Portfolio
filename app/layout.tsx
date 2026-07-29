import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
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
        className={`${inter.variable} ${openSans.variable} font-primary bg-background text-textPrimary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
