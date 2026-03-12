"use client";
import React from "react";
import { useInView, useCounter } from "@/hooks";
import styles from "@/styles/CounterCard.module.css";

interface CounterCardProps {
  end: number;
  label: string;
  suffix?: string;
}

export const CounterCard: React.FC<CounterCardProps> = ({ end, label, suffix = "" }) => {
  const [ref, visible] = useInView(0.3);
  const count = useCounter(end, 2200, visible);
  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.num}>{count}{suffix}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};
