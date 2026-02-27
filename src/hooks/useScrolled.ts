"use client";
import { useState, useEffect } from "react";

export function useScrolled(offset = 50): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [offset]);
  return scrolled;
}
