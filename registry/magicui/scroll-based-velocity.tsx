"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useVelocity,
  useTransform,
  useSpring,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollVelocityContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface ScrollVelocityRowProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  className?: string;
  numCopies?: number;
  scrollerClassName?: string;
}

export function ScrollVelocityContainer({
  children,
  className,
  ...props
}: ScrollVelocityContainerProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    >
      {children}
    </div>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function ScrollVelocityRow({
  children,
  baseVelocity = 5,
  direction = 1,
  className,
  numCopies = 6,
  scrollerClassName,
  ...props
}: ScrollVelocityRowProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100 / numCopies, 0, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1 * direction;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1 * direction;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={cn("w-full overflow-hidden whitespace-nowrap", className)}
      {...props}
    >
      <motion.div
        className={cn("inline-flex whitespace-nowrap font-bold tracking-tight", scrollerClassName)}
        style={{ x }}
      >
        {Array.from({ length: numCopies }).map((_, i) => (
          <span key={i} className="inline-flex items-center">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
