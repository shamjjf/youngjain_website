"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScrolled } from "@/hooks";
import { NAV_ITEMS } from "@/lib/constants";
import styles from "@/styles/Navbar.module.css";
import Button from "../ui/button/button";

export function Navbar() {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState<string | null>(null);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* ── LOGO: swap between white (hero) and color (scrolled) ── */}
        <Link href="/" className={styles.logo}>
          {/* White logo — visible on dark hero */}
          <Image
            src="/assets/images/icons/logo-white.png"
            alt="Young Jains"
            width={170}
            height={42}
            className={styles.logoImg}
            style={{
              opacity: scrolled ? 0 : 1,
              position: scrolled ? "absolute" : "relative",
              pointerEvents: scrolled ? "none" : "auto",
            }}
            priority
          />
          {/* Color logo — visible on white scrolled navbar */}
          <Image
            src="/assets/images/icons/logo-transparent.png"
            alt="Young Jains"
            width={170}
            height={42}
            className={styles.logoImg}
            style={{
              opacity: scrolled ? 1 : 0,
              position: scrolled ? "relative" : "absolute",
              pointerEvents: scrolled ? "auto" : "none",
            }}
            priority
          />
        </Link>

        {/* ── Desktop Nav ── */}
        <div className={styles.desktopNav}>
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={styles.navItem}
              onMouseEnter={() => item.children && setOpenDrop(item.label)}
              onMouseLeave={() => setOpenDrop(null)}
            >
              <Link
                href={item.href}
                className={`${styles.navLink} ${scrolled ? styles.dark : ""}`}
              >
                {item.label}
                {item.children && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ marginLeft: 4, opacity: 0.5 }}>
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                )}
              </Link>
              {item.children && openDrop === item.label && (
                <div className={styles.dropdown}>
                  {item.children.map((child) => (
                    <Link key={child.label} href={child.href} className={styles.dropLink}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className={styles.joinBtn}>Join Us</Link>
        </div>

        {/* ── Mobile toggle ── */}
        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={scrolled ? "#0F236A" : "#fff"} strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div className={styles.mobile}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className={styles.mobileLink}
                onClick={() => { if (!item.children) setMenuOpen(false); }}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className={styles.mobileSub}>
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className={styles.mobileSubLink}
                      onClick={() => setMenuOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" className={styles.joinBtn} style={{ marginTop: 12, alignSelf: "flex-start" }}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
