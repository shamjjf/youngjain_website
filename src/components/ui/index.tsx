"use client";
import React from "react";
import { useInView, useCounter } from "@/hooks";

/* ─── Scroll Reveal ─── */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [ref, visible] = useInView(0.1);

  return (
    <div
      ref={(el) => {
        if (ref) ref.current = el;
      }}
      className={className}
      style={{
        ...style,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.9s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Page Hero Banner ─── */
export function PageHero({
  title,
  subtitle,
  badge,
}: {
  title: React.ReactNode;
  subtitle?: string;
  badge?: string;
}) {
  return (
    <section
      style={{
        background:
          "linear-gradient(160deg, #081445 0%, #0F236A 40%, #1A3494 80%)",
        color: "#fff",
        padding: "160px 40px 80px",
        position: "relative",
        overflow: "hidden",
        minHeight: 340,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {badge && (
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 8,
              background: "rgba(253,24,16,0.15)",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "var(--fb)",
                fontSize: 12,
                fontWeight: 700,
                color: "var(--red-l)",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {badge}
            </span>
          </div>
        )}

        <h1
          style={{
            fontFamily: "var(--fh)",
            fontSize: 52,
            fontWeight: 300,
            lineHeight: 1.1,
            letterSpacing: -2,
          }}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            style={{
              fontFamily: "var(--fb)",
              fontSize: 17,
              color: "rgba(255,255,255,0.5)",
              marginTop: 16,
              maxWidth: 600,
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

/* ─── Section Header ─── */
export function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: {
  badge?: string;
  title: React.ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      {badge && (
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 8,
            background: "rgba(253,24,16,0.08)",
            marginBottom: 16,
          }}
        >
          <span
            style={{
              fontFamily: "var(--fb)",
              fontSize: 12,
              fontWeight: 700,
              color: "var(--red)",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {badge}
          </span>
        </div>
      )}

      <h2
        style={{
          fontFamily: "var(--fh)",
          fontSize: 44,
          fontWeight: 300,
          color: "var(--navy)",
          letterSpacing: -1.5,
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            fontFamily: "var(--fb)",
            fontSize: 15,
            color: "var(--slate)",
            marginTop: 12,
            maxWidth: center ? 520 : undefined,
            margin: center ? "12px auto 0" : "12px 0 0",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Counter Card ─── */
export function CounterCard({
  end,
  label,
  suffix = "",
}: {
  end: number;
  label: string;
  suffix?: string;
}) {
  const [ref, visible] = useInView(0.3);
  const count = useCounter(end, 2200, visible);

  return (
    <div
      ref={(el) => {
        if (ref) ref.current = el;
      }}
      style={{
        textAlign: "center",
        padding: "32px 16px",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          fontFamily: "var(--fh)",
          fontSize: 48,
          fontWeight: 800,
          color: "#fff",
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </div>

      <div
        style={{
          fontFamily: "var(--fb)",
          fontSize: 12,
          color: "rgba(255,255,255,0.5)",
          marginTop: 8,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─── Bento Card ─── */
export function BentoCard({
  tag,
  title,
  desc,
  tagColor = "navy",
  children,
}: {
  tag?: string;
  title: string;
  desc?: string;
  tagColor?: "navy" | "red";
  children?: React.ReactNode;
}) {
  const bg =
    tagColor === "red"
      ? "rgba(253,24,16,0.06)"
      : "rgba(15,35,106,0.06)";
  const clr = tagColor === "red" ? "var(--red)" : "var(--navy)";

  return (
    <div
      style={{
        background: "#fff",
        border: "1.5px solid rgba(15,35,106,0.06)",
        borderRadius: 24,
        padding: "36px 32px",
        transition: "all 0.5s cubic-bezier(.16,1,.3,1)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow =
          "0 20px 50px rgba(15,35,106,0.08)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {tag && (
        <div
          style={{
            display: "inline-block",
            padding: "4px 12px",
            borderRadius: 6,
            background: bg,
            fontFamily: "var(--fb)",
            fontSize: 11,
            fontWeight: 700,
            color: clr,
            letterSpacing: 2,
            marginBottom: 16,
          }}
        >
          {tag}
        </div>
      )}

      <h3
        style={{
          fontFamily: "var(--fh)",
          fontSize: 20,
          fontWeight: 700,
          color: "var(--navy)",
          marginBottom: 10,
        }}
      >
        {title}
      </h3>

      {desc && (
        <p
          style={{
            fontFamily: "var(--fb)",
            fontSize: 14,
            lineHeight: 1.75,
            color: "var(--slate)",
          }}
        >
          {desc}
        </p>
      )}

      {children}
    </div>
  );
}

/* ─── Placeholder Grid ─── */
export function PlaceholderGrid({
  items,
}: {
  items: { title: string; desc: string; icon: string }[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 20,
      }}
    >
      {items.map((item, i) => (
        <Reveal key={i} delay={i * 0.08}>
          <BentoCard
            title={item.title}
            desc={item.desc}
            tagColor={i % 2 === 0 ? "navy" : "red"}
          >
            <div
              style={{
                fontSize: 36,
                marginTop: 12,
                opacity: 0.5,
              }}
            >
              {item.icon}
            </div>
          </BentoCard>
        </Reveal>
      ))}
    </div>
  );
}