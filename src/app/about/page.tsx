"use client";
import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <style>{`
        .about-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:stretch}
        .mv-card{border-radius:20px;padding:40px 36px;position:relative;overflow:hidden;transition:transform 0.5s cubic-bezier(.16,1,.3,1)}
        .mv-card:hover{transform:translateY(-6px)}
        .jewel-card{background:#fff;border:1.5px solid rgba(15,35,106,0.06);border-radius:20px;padding:36px 28px;text-align:center;transition:all 0.5s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}
        .jewel-card::before{content:'';position:absolute;bottom:0;left:0;right:0;height:4px;border-radius:0 0 20px 20px;transition:height 0.4s}
        .jewel-card:hover{transform:translateY(-8px);box-shadow:0 20px 50px rgba(15,35,106,0.08)}
        .provides-item{display:flex;gap:16px;align-items:flex-start;padding:20px 0;border-bottom:1px solid var(--ice)}
        .provides-item:last-child{border-bottom:none}
        .quote-block{border-left:4px solid var(--red);padding:20px 28px;background:rgba(253,24,16,0.03);border-radius:0 16px 16px 0;margin:32px 0}
        .philosophy-img{width:100%;height:360px;object-fit:cover;border-radius:20px;transition:transform 0.6s cubic-bezier(.16,1,.3,1)}
        .philosophy-img:hover{transform:scale(1.03)}
        @media(max-width:900px){
          .about-grid-2{grid-template-columns:1fr!important}
          .jewels-grid{grid-template-columns:1fr!important}
          .philosophy-split{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <PageHero
        badge="ABOUT US"
        title={<>Who We <strong>Are</strong></>}
        subtitle="YoungJains is a space for deep learning, honest reflection, compassionate service, and conscious growth."
      />

      {/* ═══ WHO WE ARE ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 18, lineHeight: 1.9, color: "var(--slate)" }}>
                Through study circles, discussions, and seva, we help individuals live Jain values in everyday life.
              </p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 18, lineHeight: 1.9, color: "var(--navy)", fontWeight: 600, marginTop: 20 }}>
                We are not just a platform — we are a <span style={{ color: "var(--red)" }}>living community of practice.</span>
              </p>
            </div>
          </Reveal>

          {/* Mission & Vision Cards */}
          <div className="about-grid-2" style={{ marginTop: 56 }}>
            <Reveal delay={0.1}>
              <div className="mv-card" style={{ background: "var(--navy)", color: "#fff" }}>
                <div style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--red-l)", marginBottom: 16 }}>OUR MISSION</div>
                <h3 style={{ fontFamily: "var(--fh)", fontSize: 26, fontWeight: 700, marginBottom: 16, lineHeight: 1.3 }}>Empowering Through Values</h3>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "rgba(255,255,255,0.65)" }}>
                  To empower young individuals to live and lead with Jain values through education, reflection, community engagement, and seva.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mv-card" style={{ background: "#fff", border: "1.5px solid rgba(15,35,106,0.06)" }}>
                <div style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 2.5, textTransform: "uppercase", color: "var(--red)", marginBottom: 16 }}>OUR VISION</div>
                <h3 style={{ fontFamily: "var(--fh)", fontSize: 26, fontWeight: 700, color: "var(--navy)", marginBottom: 16, lineHeight: 1.3 }}>A Conscious Generation</h3>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "var(--slate)" }}>
                  To nurture a generation that thinks deeply, lives consciously, acts compassionately, and contributes responsibly — helping shape a world guided by peace, empathy, and respect for all living beings.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ UNDERSTANDING JAIN PHILOSOPHY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>UNDERSTANDING JAIN PHILOSOPHY</span>
              </div>
              <h2 style={{ fontFamily: "var(--fh)", fontSize: 42, fontWeight: 300, color: "var(--navy)", letterSpacing: -1.5 }}>
                Our Vision is <span style={{ fontWeight: 800, color: "var(--red)" }}>Inner Transformation</span>
                <br />Leading to Collective Change
              </h2>
            </div>
          </Reveal>

          {/* Sanskrit quote */}
          <Reveal delay={0.1}>
            <div style={{ textAlign: "center", margin: "36px auto 48px", maxWidth: 600 }}>
              <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "var(--navy)", fontWeight: 600, opacity: 0.7 }}>
                परस्परोपग्रहो जीवानाम्
              </div>
              <div style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", marginTop: 6, fontStyle: "italic", letterSpacing: 0.5 }}>
                Parasparopagraho Jīvanām
              </div>
              <div className="quote-block" style={{ marginTop: 20 }}>
                <p style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 500, color: "var(--navy)", fontStyle: "italic", lineHeight: 1.5 }}>
                  &ldquo;All life is bound by mutual support.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          {/* Philosophy content — split with image */}
          <div className="philosophy-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginTop: 20 }}>
            <Reveal delay={0.15}>
              <img
                src="https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=800&q=80"
                alt="Spiritual contemplation"
                className="philosophy-img"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--slate)" }}>
                  Jain philosophy offers a profound way to understand life and our place in the universe. It teaches that every living being is a pure soul, filled with infinite knowledge, energy, and bliss.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--slate)", marginTop: 18 }}>
                  Yet, like dust settling on a mirror, this purity becomes covered by karma.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--navy)", fontWeight: 600, marginTop: 18 }}>
                  Our spiritual journey is not about becoming something new — it is about removing what covers our true nature and rediscovering who we really are.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", marginTop: 24, fontStyle: "italic" }}>
                  → Explore conscious and compassionate living
                </p>
                <Link href="/education" style={{
                  display: "inline-flex", alignItems: "center", gap: 8, marginTop: 20,
                  fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, background: "var(--red)", color: "#fff",
                  padding: "14px 32px", borderRadius: 12, textDecoration: "none", transition: "all 0.4s",
                }}>
                  DISCOVER NOW →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHY JAIN VALUES MATTER TODAY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="WHY IT MATTERS"
              title={<>Why Jain Values Matter <span style={{ fontWeight: 800, color: "var(--red)" }}>Today</span></>}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--slate)", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              In a fast and distracted world, Jain values help youth move from reaction to awareness, choose empathy over judgment, and live with simplicity and inner balance. When the self becomes clear, our actions and choices become conscious.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ THREE JEWELS (RATNATRAYA) ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="OUR PHILOSOPHICAL ROOTS"
              title={<>The Three Jewels — <span style={{ fontWeight: 800, color: "var(--red)" }}>Ratnatraya</span></>}
              subtitle="Our learning framework is inspired by the Three Jewels:"
            />
          </Reveal>

          <div className="jewels-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 8 }}>
            {[
              { icon: "💎", title: "Right Faith", sub: "Samyak Darshan", desc: "Cultivating inner clarity and openness — seeing the world as it truly is, with trust in the path.", color: "var(--navy)" },
              { icon: "📖", title: "Right Knowledge", sub: "Samyak Jnana", desc: "Understanding Jain principles deeply — not just information, but insight that transforms perspective.", color: "var(--red)" },
              { icon: "🙏", title: "Right Conduct", sub: "Samyak Charitra", desc: "Applying values in daily life — from speech and food choices to relationships and service.", color: "var(--navy)" },
            ].map((jewel, i) => (
              <Reveal key={jewel.title} delay={i * 0.12}>
                <div className="jewel-card">
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: jewel.color, borderRadius: "0 0 20px 20px" }} />
                  <div style={{ fontSize: 40, marginBottom: 16 }}>{jewel.icon}</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>{jewel.title}</h3>
                  <div style={{ fontFamily: "var(--fd)", fontSize: 13, color: jewel.color, fontWeight: 500, marginBottom: 14 }}>{jewel.sub}</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.75, color: "var(--slate)" }}>{jewel.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.8, color: "var(--slate)", textAlign: "center", maxWidth: 640, margin: "40px auto 0" }}>
              Through study circles, reflection sessions, and seva initiatives, we help young individuals align knowledge with conduct.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ LEARNING AS A WAY OF LIVING ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="LEARNING AS LIVING"
              title={<>For Us, Jain Philosophy is <span style={{ fontWeight: 800 }}>Not Limited to Theory</span></>}
              subtitle="It becomes meaningful only when it is lived collectively."
            />
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ maxWidth: 700, margin: "0 auto" }}>
              <h4 style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>YoungJains Provides:</h4>
              {[
                { icon: "📚", text: "Swadhyay and Paathshala learning spaces" },
                { icon: "💻", text: "Interactive webinars on Jain ethics and modern life" },
                { icon: "🤝", text: "Youth-led seva initiatives" },
                { icon: "🧘", text: "Reflection circles for inner growth" },
              ].map((item, i) => (
                <Reveal key={i} delay={0.2 + i * 0.06}>
                  <div className="provides-item">
                    <span style={{ fontSize: 24, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "var(--slate)", lineHeight: 1.6 }}>{item.text}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.5}>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", marginTop: 24, fontStyle: "italic" }}>
                  We focus on practice over information — and transformation over instruction.
                </p>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ INVITATION TO WALK THE PATH ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="philosophy-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <Reveal>
              <div>
                <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>AN INVITATION</span>
                </div>
                <h2 style={{ fontFamily: "var(--fh)", fontSize: 36, fontWeight: 300, color: "var(--navy)", lineHeight: 1.2, letterSpacing: -1 }}>
                  Walk the <span style={{ fontWeight: 800, color: "var(--red)" }}>Path</span>
                </h2>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--slate)", marginTop: 20 }}>
                  Whether you are beginning your journey or deepening it, this is a space to learn, reflect, and live consciously — in sangh, through shared understanding and purpose.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--slate)", marginTop: 16 }}>
                  The path of Jain dharma is one of self-awakening; as inner awareness grows, our thoughts become gentler and our actions more compassionate.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--navy)", fontWeight: 600, marginTop: 16 }}>
                  Join us in living knowledge, practicing ahimsa, and growing together with clarity and care.
                </p>
                <Link href="/volunteer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28,
                  fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15, background: "var(--red)", color: "#fff",
                  padding: "16px 36px", borderRadius: 12, textDecoration: "none", transition: "all 0.4s",
                }}>
                  JOIN THE COMMUNITY →
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80"
                alt="Community walking together"
                className="philosophy-img"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
