"use client";
import React from "react";
import { useInView } from "@/hooks";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = "", style = {} }) => {
  const [ref, visible] = useInView(0.1);
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(50px)",
      transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
    }}>{children}</div>
  );
};
