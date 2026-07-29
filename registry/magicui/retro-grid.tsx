"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface RetroGridProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  angle?: number;
  gridColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  gridColor = "oklch(0.85 0.08 15 / 0.6)",
  ...props
}: RetroGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-95 [perspective:200px] z-0",
        className
      )}
      style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
      {...props}
    >
      {/* Grid container */}
      <div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
        <div
          className="animate-grid [background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:200vw]"
          style={{
            backgroundImage: `linear-gradient(to right, ${gridColor} 1.5px, transparent 0), linear-gradient(to bottom, ${gridColor} 1.5px, transparent 0)`,
          }}
        />
      </div>

      {/* Horizon Fade Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.015_10)] via-[oklch(0.12_0.015_10/0.25)] to-transparent to-95%" />
    </div>
  );
}
