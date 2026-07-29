"use client";

import { ElementType } from "react";
import { motion, MotionProps, Variants, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export type AnimationType =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

export type AnimationBy = "text" | "word" | "character" | "line";

export interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: ElementType;
  startOnView?: boolean;
  once?: boolean;
  by?: AnimationBy;
  animation?: AnimationType;
  segmentClassName?: string;
}

const defaultItemVariants: Record<AnimationType, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    show: { opacity: 1, filter: "blur(0px)" },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
    show: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1 },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.5 },
    show: { opacity: 1, scale: 1 },
  },
};

export function TextAnimate({
  children,
  className,
  delay = 0,
  duration = 0.3,
  variants,
  as: Component = "p",
  startOnView = true,
  once = true,
  by = "word",
  animation = "fadeIn",
  segmentClassName,
  ...props
}: TextAnimateProps) {
  const textContent = String(children || "");

  // Support string-based motion components
  const MotionComponent = (
    typeof Component === "string" && Component in motion
      ? motion[Component as keyof typeof motion]
      : motion(Component as ElementType)
  ) as ElementType;

  const itemVariants = variants || defaultItemVariants[animation];

  // Calculate stagger time based on animation duration and granularity
  const baseStagger = by === "character" ? 0.03 : 0.08;
  const stagger = (duration / 0.3) * baseStagger;

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemTransition: Transition = {
    duration,
    ease: [0.25, 0.4, 0.25, 1],
  };

  if (by === "character") {
    const words = textContent.split(" ");
    return (
      <MotionComponent
        className={cn("inline-block", className)}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        viewport={{ once }}
        variants={containerVariants}
        {...props}
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={itemVariants}
                transition={itemTransition}
                className={cn("inline-block", segmentClassName)}
              >
                {char}
              </motion.span>
            ))}
            {wordIdx < words.length - 1 && (
              <motion.span
                variants={itemVariants}
                transition={itemTransition}
                className="inline-block"
              >
                &nbsp;
              </motion.span>
            )}
          </span>
        ))}
      </MotionComponent>
    );
  }

  if (by === "word") {
    const words = textContent.split(" ");
    return (
      <MotionComponent
        className={cn("inline-block", className)}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        viewport={{ once }}
        variants={containerVariants}
        {...props}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            transition={itemTransition}
            className={cn("inline-block", "me-[0.25em]", segmentClassName)}
          >
            {word}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  if (by === "line") {
    const lines = textContent.split("\n");
    return (
      <MotionComponent
        className={className}
        initial="hidden"
        whileInView={startOnView ? "show" : undefined}
        animate={!startOnView ? "show" : undefined}
        viewport={{ once }}
        variants={containerVariants}
        {...props}
      >
        {lines.map((line, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            transition={itemTransition}
            className={cn("block", segmentClassName)}
          >
            {line}
          </motion.span>
        ))}
      </MotionComponent>
    );
  }

  // by === "text"
  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView={startOnView ? "show" : undefined}
      animate={!startOnView ? "show" : undefined}
      viewport={{ once }}
      variants={containerVariants}
      {...props}
    >
      <motion.span
        variants={itemVariants}
        transition={itemTransition}
        className={cn("inline-block", segmentClassName)}
      >
        {textContent}
      </motion.span>
    </MotionComponent>
  );
}
