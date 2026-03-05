"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Reveal, SectionHeader, CounterCard } from "@/components/ui";
import s from "@/styles/Home.module.css";

// Hero slides — community images
const heroImages = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80",   // youth group
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80",   // meditation calm
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80",   // volunteering seva
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80",   // youth facilitation
];

// Zigzag content blocks with images
const zigzagBlocks = [
  {
    img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80",
    alt: "Youth studying Agam Vachan in a circle",
    title: "Agam Vachan Circles",
    desc: "Young seekers sit together to read, discuss, and internalise the sacred Agam texts — transforming ancient scripture into living dialogue.",
  },
  {
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    alt: "Meditation in a calm hall",
    title: "Meditation & Mindfulness",
    desc: "Silent sessions in calm spaces where youth practise Jain meditation techniques — cultivating inner stillness, awareness, and self-reflection.",
  },
  {
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
    alt: "Seva activity — food drive and eco activity",
    title: "Seva in Action",
    desc: "From food drives to eco-cleanups, our youth channel compassion into tangible impact — making Ahimsa a lived practice, not just a principle.",
  },
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    alt: "Young facilitators leading sessions",
    title: "Youth-Led Sessions",
    desc: "Young facilitators lead workshops, discussions, and learning circles — empowering peers to explore Jain wisdom in their own voice.",
  },
];

// Comparison table data
const comparisonRows = [
  { trad: "Passive listening", turn: "Right vision, knowledge, and conduct align", yj: "Dialogue circles" },
  { trad: "Information overload", turn: "Learning becomes living", yj: "Reflection & journaling" },
  { trad: "Event-based spirituality", turn: "Shift in awareness", yj: "Real-life practices" },
  { trad: "No life integration", turn: "Inner awakening", yj: "Seva in action" },
  { trad: "Temporary inspiration", turn: "Discipline and clarity", yj: "Lasting transformation" },
];

// Process cards
const processCards = [
  { num: "01", title: "Samvaad", sub: "Dialogue", desc: "We don't speak to you — we sit with you.", color: "var(--navy)" },
  { num: "02", title: "Manan", sub: "Reflection", desc: "Silence, journaling, and inner questioning.", color: "var(--red)" },
  { num: "03", title: "Acharan", sub: "Application", desc: "Food choices, speech awareness, digital discipline.", color: "var(--navy)" },
  { num: "04", title: "Parivartan", sub: "Transformation", desc: "Calmer mind. Kinder conduct. Clearer direction.", color: "var(--red)" },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════════════
          HERO — Full-width carousel with overlay
      ═══════════════════════════════════════════════ */}
      <section onMouseMove={handleMouse} style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", background: "#081445" }}>
        {/* Carousel */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {heroImages.map((src, i) => (
            <div key={i} style={{
              position: "absolute", inset: 0, backgroundImage: `url(${src})`, backgroundSize: "cover", backgroundPosition: "center",
              opacity: slide === i ? 1 : 0, transform: slide === i ? "scale(1)" : "scale(1.12)",
              transition: "opacity 1.8s cubic-bezier(.4,0,.2,1), transform 10s cubic-bezier(.4,0,.2,1)",
            }} />
          ))}
          <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "linear-gradient(160deg, rgba(8,20,69,0.93) 0%, rgba(15,35,106,0.8) 35%, rgba(15,35,106,0.73) 60%, rgba(8,20,69,0.9) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, zIndex: 2, transition: "background 0.3s",
            background: `radial-gradient(ellipse 120% 80% at ${mousePos.x*100}% ${mousePos.y*100}%, rgba(15,35,106,0.8) 0%, transparent 55%), radial-gradient(ellipse 80% 100% at 85% 20%, rgba(253,24,16,0.1) 0%, transparent 50%)` }} />
        </div>

        {/* Dots */}
        <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", gap: 8 }}>
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i+1}`} style={{
              width: slide === i ? 40 : 10, height: 10, borderRadius: slide === i ? 5 : "50%",
              background: slide === i ? "var(--red)" : "rgba(255,255,255,0.25)", border: "none", cursor: "pointer",
              transition: "all 0.4s", padding: 0,
            }} />
          ))}
        </div>

        {/* Content */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "160px 40px 100px", width: "100%", position: "relative", zIndex: 5 }}>
          {/* Sanskrit header */}
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 17, color: "rgba(255,255,255,0.4)", marginBottom: 32, letterSpacing: 1 }}>
              संघे शक्ति: &nbsp;|&nbsp; धर्मे श्रद्धा &nbsp;|&nbsp; आत्मनो मोक्षः
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className={s.heroH1} style={{ fontFamily: "var(--fh)", fontSize: 64, fontWeight: 300, lineHeight: 1.08, color: "#fff", maxWidth: 780, letterSpacing: -2 }}>
              <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Ancient Wisdom.</span>{" "}
              <span style={{ fontWeight: 800 }}>Young Energy.</span>
              <br />
              <span style={{ fontWeight: 300, fontSize: "0.75em", opacity: 0.85 }}>Living Jainism.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 18, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", maxWidth: 560, marginTop: 28 }}>
              A space where Jain philosophy is not only studied — it is <strong style={{ color: "rgba(255,255,255,0.8)" }}>experienced, practised, and shared</strong> by youth shaping a compassionate future.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <Link href="/education" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 40,
              fontFamily: "var(--fb)", fontWeight: 700, fontSize: 16, background: "var(--red)", color: "#fff",
              padding: "18px 40px", borderRadius: 12, transition: "all 0.4s", textDecoration: "none",
            }}>
              Experience the Jain Living →
            </Link>
          </Reveal>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 100, background: "linear-gradient(to top, var(--snow), transparent)", zIndex: 6 }} />
      </section>

      {/* ═══════════════════════════════════════════════
          ZIGZAG — Photo + Content alternating
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 40px 60px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {zigzagBlocks.map((block, i) => {
            const isReverse = i % 2 !== 0;
            return (
              <Reveal key={i} delay={0.1}>
                <div className={s.zigGrid} style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
                  marginBottom: 80, direction: isReverse ? "rtl" : "ltr",
                }}>
                  <div style={{ direction: "ltr" }}>
                    <img src={block.img} alt={block.alt} className={s.zigImg} loading="lazy" />
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <div style={{ display: "inline-block", padding: "5px 14px", borderRadius: 8, background: i % 2 === 0 ? "rgba(15,35,106,0.06)" : "rgba(253,24,16,0.06)", marginBottom: 16 }}>
                      <span style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: i % 2 === 0 ? "var(--navy)" : "var(--red)" }}>0{i + 1}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--fh)", fontSize: 32, fontWeight: 700, color: "var(--navy)", marginBottom: 14, letterSpacing: -0.5 }}>{block.title}</h3>
                    <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)" }}>{block.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT IS YOUNGJAINS
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontFamily: "var(--fd)", fontSize: 18, color: "var(--navy)", opacity: 0.3 }}>
                सम्यग्दर्शनज्ञानचारित्राणि मोक्षमार्गः
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>WHAT IS YOUNGJAINS?</span>
              </div>
              <h2 style={{ fontFamily: "var(--fh)", fontSize: 42, fontWeight: 300, color: "var(--navy)", letterSpacing: -1.5 }}>
                When Learning Becomes <span style={{ fontWeight: 800, color: "var(--red)" }}>Living</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--slate)" }}>
                YoungJains is a youth-led learning and seva ecosystem designed for the modern seeker. We translate the depth of Jain Agamas into conversations, circles, and actions that fit today&apos;s world — from classrooms to careers.
              </p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--slate)", marginTop: 20 }}>
                Here, spirituality is not separate from life. It becomes the way we <strong style={{ color: "var(--navy)" }}>think, speak, consume, create, and serve.</strong>
              </p>
            </div>
          </Reveal>

          {/* Mantra Flow */}
          <Reveal delay={0.25}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 48, flexWrap: "wrap" }}>
              {["Agam", "Dialogue", "Reflection", "Action", "Seva"].map((step, i) => (
                <React.Fragment key={step}>
                  {i > 0 && <span style={{ fontFamily: "var(--fh)", fontSize: 20, color: "var(--red)", opacity: 0.4 }}>→</span>}
                  <div style={{
                    padding: "10px 22px", borderRadius: 12, fontFamily: "var(--fb)", fontSize: 14, fontWeight: 700,
                    background: i === 0 || i === 4 ? "var(--navy)" : "#fff",
                    color: i === 0 || i === 4 ? "#fff" : "var(--navy)",
                    border: `1.5px solid ${i === 0 || i === 4 ? "var(--navy)" : "rgba(15,35,106,0.1)"}`,
                    letterSpacing: 0.5,
                  }}>{step}</div>
                </React.Fragment>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 12 }}>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>THE DIFFERENCE</span>
              </div>
              <h2 style={{ fontFamily: "var(--fh)", fontSize: 42, fontWeight: 300, color: "var(--navy)", letterSpacing: -1.5 }}>
                Why YoungJains Feels <span style={{ fontWeight: 800, color: "var(--red)" }}>Different</span>
              </h2>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", marginTop: 10 }}>
                We move from passive listening to conscious living.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className={s.tableWrap}>
              <table className={s.compTable}>
                <thead>
                  <tr>
                    <th>Traditional Model</th>
                    <th style={{ background: "var(--navy-l)" }}>Turning Point</th>
                    <th style={{ background: "var(--red)" }}>YoungJains Experience</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i}>
                      <td>{row.trad}</td>
                      <td>{row.turn}</td>
                      <td>{row.yj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PROCESS CARDS
      ═══════════════════════════════════════════════ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "var(--fh)", fontSize: 38, fontWeight: 300, color: "var(--navy)", letterSpacing: -1 }}>
                A Journey from Dialogue to <span style={{ fontWeight: 800 }}>Inner Transformation</span>
              </h2>
            </div>
          </Reveal>

          <div className={s.processGrid}>
            {processCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className={s.processCard} style={{ borderLeftColor: card.color }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 4, height: "100%", background: card.color, borderRadius: "20px 0 0 20px" }} />
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: card.color, letterSpacing: 2, marginBottom: 8 }}>{card.num}</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 26, fontWeight: 800, color: "var(--navy)", marginBottom: 2 }}>{card.title}</h3>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 600, color: "var(--slate)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 14 }}>{card.sub}</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.75, color: "var(--slate)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <Link href="/education" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15, background: "var(--navy)", color: "#fff",
                padding: "16px 36px", borderRadius: 12, transition: "all 0.4s", textDecoration: "none",
              }}>
                Explore Learning →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════ */}
      <section style={{
        padding: "120px 40px", textAlign: "center", position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)",
      }}>
        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        {/* Glow */}
        <div style={{ position: "absolute", top: "-15%", right: "5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.08) 0%, transparent 60%)", filter: "blur(60px)" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "rgba(255,255,255,0.35)", marginBottom: 28, fontWeight: 500 }}>
              परस्परोपग्रहो जीवानाम्
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 44, fontWeight: 300, color: "#fff", lineHeight: 1.2, letterSpacing: -1.5 }}>
              Your journey is not about<br />becoming a scholar.
              <br />
              <span style={{ fontWeight: 800, color: "var(--red-l)" }}>It is about becoming aware.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 18, color: "rgba(255,255,255,0.45)", marginTop: 24, lineHeight: 1.8 }}>
              Step into a space where learning becomes living.
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.3}>
            <div className={s.statsCtaGrid}>
              <CounterCard end={500} suffix="+" label="Members" />
              <CounterCard end={50} suffix="+" label="Events" />
              <CounterCard end={20} suffix="+" label="Cities" />
              <CounterCard end={10} suffix="+" label="Years" />
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <Link href="/volunteer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 48,
              fontFamily: "var(--fb)", fontWeight: 700, fontSize: 17, background: "var(--red)", color: "#fff",
              padding: "20px 48px", borderRadius: 14, transition: "all 0.4s", textDecoration: "none",
            }}>
              Begin Your Journey →
            </Link>
          </Reveal>

          {/* Tagline */}
          <Reveal delay={0.5}>
            <div style={{ marginTop: 56, paddingTop: 40, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>
                YoungJains
              </div>
              <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.3)", marginTop: 10, lineHeight: 1.8 }}>
                Preserving Wisdom. Empowering Youth.
                <br />
                Live Consciously. Act Responsibly. Evolve Continuously.
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
