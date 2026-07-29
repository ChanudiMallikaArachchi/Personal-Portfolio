"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PixelImageProps {
  src: string;
  alt?: string;
  className?: string;
  customGrid?: { rows: number; cols: number };
  grayscaleAnimation?: boolean;
  duration?: number;
  imageClassName?: string;
}

export function PixelImage({
  src,
  alt = "Pixel Image",
  className,
  customGrid = { rows: 4, cols: 6 },
  grayscaleAnimation = false,
  duration = 0.8,
  imageClassName,
}: PixelImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { rows, cols } = customGrid;
  const totalPixels = rows * cols;

  return (
    <div
      className={cn("relative overflow-hidden group select-none cursor-pointer", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Base Image */}
      <motion.img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-500",
          grayscaleAnimation ? (isHovered ? "grayscale-0 scale-105" : "grayscale contrast-110") : "",
          imageClassName
        )}
      />

      {/* Interactive Pixel Tile Grid Overlay */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {Array.from({ length: totalPixels }).map((_, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0.9, scale: 1 }}
              animate={
                isHovered
                  ? { opacity: 0, scale: 0.7, filter: "blur(4px)" }
                  : { opacity: 0.9, scale: 1, filter: "blur(0px)" }
              }
              transition={{
                duration: duration / 2,
                delay: (row + col) * 0.04,
                ease: "easeOut",
              }}
              className="relative w-full h-full bg-cover bg-no-repeat overflow-hidden border-[0.5px] border-white/5"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${(col / Math.max(cols - 1, 1)) * 100}% ${(row / Math.max(rows - 1, 1)) * 100}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
