"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Reveal, CounterCard } from "@/components/ui";
import { useScrolled } from "@/hooks";
import { NAV_LINKS, PRINCIPLES, INVOLVED_ITEMS, CONTACT_ITEMS, MARQUEE_WORDS, FOOTER_GROUPS, HERO_SLIDES } from "@/lib/constants";
import { scrollToSection, isDevanagari } from "@/lib/utils";
import styles from "@/styles/Page.module.css";

export default function HomePage() {
  const scrolled = useScrolled(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <div className={styles.page}>
      {/* ═══ NAVIGATION ═══ */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.navInner}>
          <div className={styles.navLogo} onClick={() => handleNav("home")}>
            <Image
              src="/assets/images/icons/logo.png"
              alt="Young Jains"
              width={180}
              height={46}
              className={`${styles.logoImg} ${scrolled ? "" : styles.logoWhite}`}
              priority
            />
          </div>
          <div className={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                className={`${styles.navLink} ${scrolled ? styles.navLinkDark : ""}`}
                onClick={() => handleNav(l.href)}
              >
                {l.label}
              </button>
            ))}
            <button className={styles.joinBtn}>Join Us</button>
          </div>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} className={styles.mobileLink} onClick={() => handleNav(l.href)}>{l.label}</button>
            ))}
            <button className={styles.joinBtn} style={{ alignSelf: "flex-start", marginTop: 8 }}>Join Us</button>
          </div>
        )}
      </nav>

      {/* ═══ HERO WITH BACKGROUND CAROUSEL ═══ */}
      <section
        id="home"
        className={styles.hero}
        onMouseMove={handleMouse}
      >
        {/* ── Background Carousel ── */}
        <div className={styles.carouselWrap}>
          {HERO_SLIDES.map((slide, i) => (
            <div
              key={i}
              className={`${styles.carouselSlide} ${carouselIndex === i ? styles.carouselSlideActive : ""}`}
              style={{ backgroundImage: `url(${slide.src})` }}
              aria-hidden={carouselIndex !== i}
            />
          ))}
          {/* Dark overlay on top of images */}
          <div className={styles.carouselOverlay} />
          {/* Animated gradient mesh on top of overlay */}
          <div
            className={styles.carouselGradient}
            style={{
              background: `
                radial-gradient(ellipse 120% 80% at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(15,35,106,0.85) 0%, transparent 55%),
                radial-gradient(ellipse 80% 100% at 85% 20%, rgba(253,24,16,0.12) 0%, transparent 50%),
                radial-gradient(ellipse 60% 60% at 15% 80%, rgba(26,52,148,0.18) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        {/* Floating shapes */}
        <div className={`${styles.floatShape} ${styles.float1}`} style={{ top:"12%", right:"12%", width:120, height:120, borderRadius:24, border:"1.5px solid rgba(255,255,255,0.08)" }} />
        <div className={`${styles.floatShape} ${styles.float2}`} style={{ top:"60%", right:"8%", width:80, height:80, borderRadius:"50%", border:"1.5px solid rgba(253,24,16,0.12)" }} />
        <div className={`${styles.floatShape} ${styles.float3}`} style={{ bottom:"20%", left:"8%", width:60, height:60, borderRadius:16, background:"rgba(253,24,16,0.06)" }} />
        <div className={styles.grain} />

        {/* Carousel Indicators */}
        <div className={styles.carouselDots}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              className={`${styles.carouselDot} ${carouselIndex === i ? styles.carouselDotActive : ""}`}
              onClick={() => setCarouselIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className={styles.heroContent}>
          <Reveal>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>THE YOUNG SPIRIT OF JAIN DHARMA</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={styles.heroTitle}>
              Where <span className={styles.heroTitleRed}>Ancient Wisdom</span>
              <br />Meets <span className={styles.heroTitleBold}>Young Minds</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className={styles.heroTagline}>
              {["Learn", "Live", "Lead"].map((w, i) => (
                <React.Fragment key={w}>
                  {i > 0 && <span className={styles.taglineLine} />}
                  <span>{w}</span>
                </React.Fragment>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className={styles.heroDesc}>
              Jainism is rooted in non-violence, mindfulness, and compassion — teaching that every soul is pure and capable of attaining Moksha through responsible and conscious living.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className={styles.heroActions}>
              <button className={`${styles.btnGlow} ${styles.btnPrimary}`}>Join Our Community →</button>
              <button className={`${styles.btnGlow} ${styles.btnOutline}`} onClick={() => handleNav("about")}>Explore More</button>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className={styles.heroVerse}>
              <div className={styles.verseDevanagari}>अहिंसा परमोधर्मः &nbsp;|&nbsp; आत्मज्ञानं मोक्षमार्गः</div>
              <p className={styles.verseEnglish}>Non-violence is the supreme religion · Self-Knowledge is the path to salvation</p>
            </div>
          </Reveal>
        </div>

        <div className={styles.heroFade} />
      </section>

      {/* ═══ MARQUEE ═══ */}
      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {[0, 1].map((k) => (
            <React.Fragment key={k}>
              {MARQUEE_WORDS.map((w, i) => (
                <span
                  key={`${k}-${i}`}
                  className={styles.marqueeWord}
                  style={{
                    fontFamily: isDevanagari(w) ? "var(--fd)" : "var(--fh)",
                    color: i % 3 === 0 ? "var(--red-l)" : "rgba(255,255,255,0.3)",
                  }}
                >
                  {w}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className={styles.section} style={{ background: "var(--snow)" }}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div>
              <Reveal>
                <div className={styles.sectionBadge}>WHY YOUNGJAINS?</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className={styles.sectionTitle}>
                  A Space for <span className={styles.bold}>Growth</span>,<br />
                  Rooted in <span className={styles.red}>Compassion</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className={styles.bodyText}>
                  Because here, you connect with like-minded individuals, explore spiritual ideas in a relatable way, take part in activities that create a positive impact, and find a space where you can grow — personally, emotionally, and spiritually — while staying rooted in compassion and awareness.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className={styles.bodyText}>
                  YoungJains helps young people understand and live these values in today&apos;s world by creating a supportive community focused on learning, self-growth, and service.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <button className={`${styles.btnGlow} ${styles.btnNavy}`} style={{ marginTop: 32 }}>Learn More →</button>
              </Reveal>
            </div>
            <div className={styles.statsGrid}>
              {[
                { num: "500+", label: "Active Members", bg: "var(--navy)", color: "#fff" },
                { num: "50+", label: "Events Hosted", bg: "var(--red)", color: "#fff" },
                { num: "20+", label: "Cities Reached", bg: "#EEF1F8", color: "var(--navy)" },
                { num: "∞", label: "Compassion Shared", bg: "#FFF0F0", color: "var(--red)" },
              ].map((c, i) => (
                <Reveal key={i} delay={0.1 * i}>
                  <div className={styles.statCard} style={{ background: c.bg, color: c.color }}>
                    <div className={styles.statNum}>{c.num}</div>
                    <div className={styles.statLabel}>{c.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section id="principles" className={styles.section} style={{ background: "var(--ice)" }}>
        <div className={styles.container}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className={styles.sectionBadge} style={{ margin: "0 auto 16px" }}>LIVING OUR VALUES</div>
              <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
                The Five <span className={styles.red}>Principles</span>
              </h2>
              <p className={styles.bodyText} style={{ textAlign: "center", maxWidth: 480, margin: "12px auto 0" }}>
                How we practise as YoungJains — turning ancient wisdom into daily action
              </p>
            </div>
          </Reveal>

          <div className={styles.principlesLayout}>
            <div className={styles.principlesList}>
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08}>
                  <div
                    className={`${styles.principlePill} ${activePrinciple === i ? styles.principlePillActive : ""}`}
                    onClick={() => setActivePrinciple(i)}
                  >
                    <span className={styles.principleIcon}>{p.icon}</span>
                    <div>
                      <div className={styles.principleName}>{p.name}</div>
                      <div className={styles.principleSub}>{p.sub}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2} className={styles.principleDetail}>
              <div className={styles.principleCard}>
                <div className={styles.principleCardNum}>PRINCIPLE 0{activePrinciple + 1}</div>
                <h3 className={styles.principleCardTitle}>{PRINCIPLES[activePrinciple].name}</h3>
                <div className={styles.principleCardSub}>{PRINCIPLES[activePrinciple].sub}</div>
                <p className={styles.principleCardDesc}>{PRINCIPLES[activePrinciple].desc}</p>
                <div className={styles.principleCardVerse}>धर्मे स्थिरता | सेवया आत्मशुद्धिः | ज्ञानेन मोक्षः</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ GET INVOLVED ═══ */}
      <section id="get-involved" className={styles.section} style={{ background: "var(--snow)" }}>
        <div className={styles.container}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className={styles.sectionBadge} style={{ margin: "0 auto 16px" }}>FOR EVERYONE WHO BELIEVES IN KINDNESS</div>
              <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
                Get <span className={styles.bold}>Involved</span>
              </h2>
            </div>
          </Reveal>
          <div className={styles.bentoGrid}>
            {INVOLVED_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className={styles.bentoCard}>
                  <div className={styles.bentoTag} style={{
                    background: i % 2 === 0 ? "rgba(15,35,106,0.06)" : "rgba(253,24,16,0.06)",
                    color: i % 2 === 0 ? "var(--navy)" : "var(--red)",
                  }}>{item.tag}</div>
                  <h3 className={styles.bentoTitle}>{item.title}</h3>
                  <p className={styles.bentoDesc}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className={`${styles.cta} ${styles.grain}`}>
        <div className={styles.ctaGrid} />
        <div className={styles.ctaGlow1} />
        <div className={styles.ctaGlow2} />
        <div className={styles.ctaInner}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 20, color: "rgba(255,255,255,0.3)" }}>आत्मनो मोक्षार्थम् जगद्धिताय च</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className={styles.ctaTitle}>
              Be Part of a<br /><span className={styles.ctaTitleAccent}>Movement That Matters</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className={styles.ctaBody}>Join a community of young people dedicated to living with compassion, awareness, and purpose.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className={styles.ctaStats}>
              <CounterCard end={500} suffix="+" label="Members" />
              <CounterCard end={50} suffix="+" label="Events" />
              <CounterCard end={20} suffix="+" label="Cities" />
              <CounterCard end={10} suffix="+" label="Years" />
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <button className={`${styles.btnGlow} ${styles.btnPrimary}`} style={{ marginTop: 40, fontSize: 16, padding: "18px 44px" }}>Join YoungJains Today →</button>
          </Reveal>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className={styles.section} style={{ background: "var(--snow)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div className={styles.sectionBadge} style={{ margin: "0 auto 16px" }}>REACH OUT</div>
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              Let&apos;s <span className={styles.bold}>Connect</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className={styles.contactGrid}>
              {CONTACT_ITEMS.map((c) => (
                <div key={c.label} className={styles.bentoCard} style={{ textAlign: "center", padding: "36px 24px" }}>
                  <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
                  <div className={styles.bentoTag} style={{ background: "rgba(253,24,16,0.06)", color: "var(--red)", margin: "0 auto 8px" }}>{c.label}</div>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 16, fontWeight: 600, color: "var(--navy)" }}>{c.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerGrid}>
            <div>
              <Image src="/assets/images/icons/logo.png" alt="Young Jains" width={150} height={40} className={styles.footerLogo} />
              <p className={styles.footerDesc}>Empowering the next generation to live with compassion, awareness, and purpose through Jain Dharma.</p>
            </div>
            {FOOTER_GROUPS.map((g) => (
              <div key={g.title}>
                <div className={styles.footerGroupTitle}>{g.title}</div>
                {g.links.map((l) => (
                  <div key={l} className={styles.footerLink}>{l}</div>
                ))}
              </div>
            ))}
          </div>
          <div className={styles.footerBottom}>
            <div>© 2026 Young Jains Community. All Rights Reserved.</div>
            <div className={styles.footerLegal}><span>Terms</span><span>Privacy</span></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
