"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_GROUPS } from "@/lib/constants";

export function Footer() {
  return (
    <footer style={{ padding: "64px 40px 36px", background: "var(--navy-d)", color: "rgba(255,255,255,0.4)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <Image
              src="/assets/images/icons/logo-white.png"
              alt="Young Jains"
              width={150}
              height={37}
              style={{ opacity: 0.85, marginBottom: 16 }}
            />
            <p style={{ fontFamily: "var(--fb)", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Empowering the next generation to live with compassion, awareness, and purpose through the timeless wisdom of Jain Dharma.
            </p>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <div style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--red-l)", marginBottom: 18, textTransform: "uppercase" }}>{g.title}</div>
              {g.links.map((l) => (
                <Link key={l.label} href={l.href} style={{ display: "block", fontFamily: "var(--fb)", fontSize: 13, padding: "5px 0", color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >{l.label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--fb)", fontSize: 12 }}>
          <div>© 2026 Young Jains Community. All Rights Reserved.</div>
          <div style={{ display: "flex", gap: 20 }}><span style={{ cursor: "pointer" }}>Terms</span><span style={{ cursor: "pointer" }}>Privacy</span></div>
        </div>
      </div>
    </footer>
  );
}
