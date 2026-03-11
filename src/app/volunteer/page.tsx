"use client";
import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";

const sevaValues = [
  "Practice kindness in action",
  "Reduce harm through mindful speech",
  "Teach with patience and empathy",
  "Listen without judgment",
  "Support with humility",
  "Work with responsibility",
  "Build compassion as a habit",
  "Transform learning into living",
];

const whoCanVolunteer = [
  {
    icon: "🎓", title: "Students",
    desc: "Support campus outreach, events, content, and youth activities while building confidence and leadership.",
  },
  {
    icon: "💼", title: "Young Professionals",
    desc: "Use your skills in management, design, social media, training, or mentoring to strengthen projects.",
  },
  {
    icon: "📖", title: "Beginners in Jain Learning",
    desc: "Learn Jain values while helping in awareness programs and study circles.",
  },
  {
    icon: "🤲", title: "Anyone with Sincerity to Serve",
    desc: "Assist in field work, food drives, cleanliness activities, or logistics. Intent matters most.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <style>{`
        .val-item{display:flex;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid var(--ice)}
        .val-item:last-child{border-bottom:none}
        .val-icon{width:32px;height:32px;border-radius:10px;background:rgba(253,24,16,0.06);color:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px}
        .who-card{background:#fff;border-radius:20px;padding:32px 28px;border:1.5px solid rgba(15,35,106,0.06);transition:all 0.5s cubic-bezier(.16,1,.3,1);height:100%}
        .who-card:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(15,35,106,0.08);border-color:rgba(15,35,106,0.12)}
        .who-icon{width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:18px}
        .who-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
        .explore-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
        @media(max-width:900px){
          .who-grid{grid-template-columns:1fr!important}
          .explore-grid{grid-template-columns:1fr!important}
          .why-split{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <PageHero
        badge="VOLUNTEER"
        title={<>Volunteer with <strong>YoungJains</strong></>}
        subtitle="Serve with awareness. Grow through seva. Live Jain values in action."
      />

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 20, color: "var(--navy)", opacity: 0.3, marginBottom: 20 }}>
              परहित सरिस धर्म नहि भाई
            </div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.85, color: "var(--slate)" }}>
              Become part of a compassionate youth community where learning and service go together.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <Link href="#register" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28,
              fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15,
              background: "var(--red)", color: "#fff",
              padding: "16px 36px", borderRadius: 12, textDecoration: "none",
              transition: "all 0.4s",
            }}>
              → Become a Volunteer
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY VOLUNTEER ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="why-split" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
            {/* Left — text */}
            <div>
              <Reveal>
                <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>WHY VOLUNTEER</span>
                </div>
                <div style={{ fontFamily: "var(--fd)", fontSize: 18, color: "var(--navy)", opacity: 0.35, marginBottom: 8 }}>
                  अहिंसा परमो धर्मः
                </div>
                <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginBottom: 24 }}>
                  Non-violence is the supreme path
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)" }}>
                  Volunteering is not only about giving time — it is about living our values in the world. When we choose to volunteer, we choose <strong style={{ color: "var(--navy)" }}>awareness over indifference</strong>, <strong style={{ color: "var(--navy)" }}>compassion over convenience</strong>, and <strong style={{ color: "var(--navy)" }}>responsibility over passivity</strong>.
                </p>
              </Reveal>
            </div>

            {/* Right — values list */}
            <Reveal delay={0.15}>
              <div style={{
                background: "#fff", borderRadius: 20, padding: "32px 28px",
                border: "1.5px solid rgba(15,35,106,0.06)",
              }}>
                <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}>
                  Through volunteering we:
                </h3>
                {sevaValues.map((val, i) => (
                  <div key={i} className="val-item">
                    <div className="val-icon">✦</div>
                    <span style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", lineHeight: 1.5 }}>{val}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHO CAN VOLUNTEER ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="WHO CAN VOLUNTEER"
              title={<>A Place for <span style={{ fontWeight: 800, color: "var(--red)" }}>Everyone</span></>}
            />
          </Reveal>

          <div className="who-grid">
            {whoCanVolunteer.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="who-card">
                  <div className="who-icon" style={{
                    background: i % 2 === 0 ? "rgba(15,35,106,0.06)" : "rgba(253,24,16,0.06)",
                  }}>{item.icon}</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.75, color: "var(--slate)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div style={{
              marginTop: 32, padding: "18px 28px", borderRadius: 16,
              background: "rgba(15,35,106,0.03)", border: "1.5px solid rgba(15,35,106,0.06)",
              textAlign: "center",
            }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", fontStyle: "italic" }}>
                No prior experience needed — only sincerity.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div id="register" style={{ textAlign: "center", marginTop: 36 }}>
              <Link href="/volunteer/seva-journey" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15,
                background: "var(--red)", color: "#fff",
                padding: "16px 36px", borderRadius: 12, textDecoration: "none",
                transition: "all 0.4s",
              }}>
                Register Now →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ EXPLORE DEEPER ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="EXPLORE" title={<>Dive <span style={{ fontWeight: 800, color: "var(--red)" }}>Deeper</span></>} /></Reveal>
          <div className="explore-grid">
            <Reveal delay={0.08}>
              <Link href="/volunteer/seva-pathways">
                <BentoCard title="Seva Pathways" desc="Discover unique ways to serve — from education and creativity to tech and community building. Find where your skills meet our mission." tagColor="navy">
                  <div style={{ fontSize: 36, marginTop: 10, opacity: 0.5 }}>🛤️</div>
                </BentoCard>
              </Link>
            </Reveal>
            <Reveal delay={0.16}>
              <Link href="/volunteer/seva-journey">
                <BentoCard title="Seva Journey" desc="Follow the volunteer journey — from first step to lasting impact. See how seva transforms both the giver and the receiver." tagColor="red">
                  <div style={{ fontSize: 36, marginTop: 10, opacity: 0.5 }}>🚀</div>
                </BentoCard>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER CTA TAGLINE ═══ */}
      <section style={{
        padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-15%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)", filter: "blur(50px)" }} />

        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fh)", fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>
              Seva with YoungJains
            </div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "rgba(255,255,255,0.4)", marginTop: 16, lineHeight: 1.8 }}>
              Compassion in Action. Values in Practice.
            </p>
            <div style={{ marginTop: 28, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>
                Serve with Humility. Act with Awareness. Rise with Purpose.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
