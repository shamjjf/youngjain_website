"use client";
import { useRef, useState, useEffect } from "react";

export function useInView(threshold = 0.12): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function useScrolled(offset = 50): boolean {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > offset);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, [offset]);
  return scrolled;
}

export function useCounter(end: number, duration = 2000, start = false): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let s: number | null = null;
    const step = (ts: number) => { if (!s) s = ts; const p = Math.min((ts - s) / duration, 1); setVal(Math.floor(p * end)); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return val;
}
