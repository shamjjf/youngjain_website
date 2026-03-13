// "use client";
import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Volunteer || Seva Pathway" };


const pathways = [
  {
    icon: "📚", title: "Education & Mentorship", points: [
      "Support Pāṭhshālā sessions for children.",
      "Explain Jain values through simple stories and activities.",
      "Encourage reflection, empathy, and mindful thinking.",
    ],
  },
  {
    icon: "📖", title: "Swādhyāya & Learning Circles", points: [
      "Assist in group study and discussion spaces.",
      "Help create respectful, value-based dialogue.",
      "Connect teachings with real-life experiences.",
    ],
  },
  {
    icon: "📋", title: "Event Coordination", points: [
      "Help with registrations, materials, and scheduling.",
      "Support session flow and participant guidance.",
      "Create a warm and welcoming learning environment.",
    ],
  },
  {
    icon: "✍️", title: "Content & Digital Seva", points: [
      "Write blogs and reflective pieces.",
      "Create social media content on Jain values.",
      "Assist with newsletters and short video scripts.",
    ],
  },
  {
    icon: "🎨", title: "Media & Resource Creation", points: [
      "Design learning materials and presentations.",
      "Develop youth-friendly explainer content.",
      "Translate philosophy into visual formats.",
    ],
  },
  {
    icon: "🤝", title: "Community Seva & Welfare", points: [
      "Participate in food donation initiatives.",
      "Support eco-friendly and compassion campaigns.",
      "Engage in outreach rooted in ahimsā.",
    ],
  },
  {
    icon: "🌱", title: "Values-Aligned Projects", points: [
      "Contribute to sustainability drives.",
      "Support awareness and youth-led initiatives.",
      "Work on projects guided by Jain ethics.",
    ],
  },
];

const gains = [
  { num: "1", text: "Clarity of Jain philosophy" },
  { num: "2", text: "Public speaking & facilitation skills" },
  { num: "3", text: "Community belonging (Sangh)" },
  { num: "4", text: "Mindfulness in action" },
  { num: "5", text: "Leadership opportunities" },
];

const impactPoints = [
  "Help a child understand ahimsā for life",
  "Make learning spaces more inclusive and welcoming",
  "Translate philosophy into practical living for youth",
  "Support initiatives that reduce harm and promote care",
  "Strengthen a value-based community ecosystem",
];

export default function SevaPathwaysPage() {
  return (
    <>
      <style>{`
        .pw-card{background:#fff;border-radius:20px;padding:32px 28px;border:1.5px solid rgba(15,35,106,0.06);transition:all 0.5s cubic-bezier(.16,1,.3,1);height:100%;display:flex;flex-direction:column}
        .pw-card:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(15,35,106,0.08);border-color:rgba(15,35,106,0.12)}
        .pw-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .pw-point{display:flex;gap:10px;align-items:flex-start;padding:6px 0}
        .pw-dot{width:6px;height:6px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:7px}
        .gain-card{background:#fff;border-radius:16px;padding:24px 20px;border:1.5px solid rgba(15,35,106,0.06);display:flex;align-items:center;gap:16px;transition:all 0.4s cubic-bezier(.16,1,.3,1)}
        .gain-card:hover{transform:translateY(-4px);box-shadow:0 12px 36px rgba(15,35,106,0.06);border-color:rgba(15,35,106,0.1)}
        .gain-num{width:40px;height:40px;border-radius:12px;background:var(--navy);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:16px;font-weight:800;flex-shrink:0}
        .gain-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .impact-item{display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--ice)}
        .impact-item:last-child{border-bottom:none}
        .impact-check{width:24px;height:24px;border-radius:8px;background:rgba(253,24,16,0.08);color:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:14px;margin-top:1px}
        .path-pill{display:inline-flex;align-items:center;gap:8px;padding:14px 28px;border-radius:14px;font-family:var(--fb);font-size:15px;font-weight:600;transition:all 0.4s;border:1.5px solid var(--ice)}
        .path-pill:hover{border-color:rgba(15,35,106,0.15);background:rgba(15,35,106,0.02)}
        @media(max-width:900px){
          .pw-grid{grid-template-columns:1fr!important}
          .gain-grid{grid-template-columns:1fr!important}
          .three-cols{flex-direction:column!important;gap:16px!important}
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <PageHero
        badge="VOLUNTEER PATHWAYS"
        title={<>Find Your Way of <strong>Serving</strong></>}
        subtitle="Through teaching, creating, organising, and compassionate action — every skill becomes meaningful when guided by Jain values."
      />

      {/* ═══ SANSKRIT INTRO ═══ */}
      <section style={{ padding: "72px 40px 0", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "var(--navy)", opacity: 0.3, marginBottom: 16 }}>
              परस्परोपग्रहो जीवानाम्
            </div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.85, color: "var(--slate)" }}>
              Find your way of serving — through teaching, creating, organising, and compassionate action.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--navy)", fontWeight: 600, marginTop: 12 }}>
              Every skill becomes meaningful when guided by Jain values.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 7 PATHWAY CARDS — 3 columns ═══ */}
      <section style={{ padding: "64px 40px 100px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="pw-grid">
            {pathways.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="pw-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: i % 2 === 0 ? "rgba(15,35,106,0.06)" : "rgba(253,24,16,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                    }}>{p.icon}</div>
                    <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--navy)" }}>{p.title}</h3>
                  </div>
                  <div style={{ flex: 1 }}>
                    {p.points.map((pt, j) => (
                      <div key={j} className="pw-point">
                        <span className="pw-dot" />
                        <span style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.65, color: "var(--slate)" }}>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU WILL GAIN ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>WHAT YOU WILL GAIN</span>
              </div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", marginTop: 4 }}>People commit when they see personal growth.</p>
              <div style={{ fontFamily: "var(--fd)", fontSize: 18, color: "var(--navy)", opacity: 0.3, marginTop: 16 }}>आत्मविकास मार्गः</div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", marginTop: 4, fontStyle: "italic" }}>Growth through service</p>
            </div>
          </Reveal>

          <div className="gain-grid">
            {gains.map((g, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="gain-card">
                  <div className="gain-num">{g.num}</div>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{g.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW YOUR TIME CREATES IMPACT ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="YOUR IMPACT"
              title={<>How Your Time Creates <span style={{ fontWeight: 800, color: "var(--red)" }}>Impact</span></>}
              subtitle="Your few hours of mindful contribution can:"
            />
          </Reveal>

          <div style={{ marginTop: -16 }}>
            {impactPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="impact-item">
                  <div className="impact-check">✓</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.7, color: "var(--slate)" }}>{point}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div style={{
              marginTop: 32, padding: "20px 28px", borderRadius: 16,
              background: "rgba(15,35,106,0.03)", border: "1.5px solid rgba(15,35,106,0.06)",
            }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", fontStyle: "italic", textAlign: "center" }}>
                Small, consistent efforts create long-term cultural change.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ A PATH OF MUTUAL GROWTH ═══ */}
      <section style={{
        padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.08) 0%, transparent 60%)", filter: "blur(50px)" }} />

        <div style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.15)", marginBottom: 20 }}>
              <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red-l)", letterSpacing: 2 }}>A PATH OF MUTUAL GROWTH</span>
            </div>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 36, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Whether you can offer <span style={{ fontWeight: 800 }}>2 hours a month</span> or take up a long-term role,
              <br />
              <span style={{ color: "var(--red-l)", fontWeight: 800 }}>there is a meaningful place for you here.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="three-cols" style={{ display: "flex", justifyContent: "center", gap: 24, marginTop: 48 }}>
              {[
                { text: "Start where you are.", icon: "🌿" },
                { text: "Serve with awareness.", icon: "🙏" },
                { text: "Grow with the Sangh.", icon: "✨" },
              ].map((item, i) => (
                <div key={i} className="path-pill" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.15)" }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <Link href="/volunteer/seva-journey" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 48,
              fontFamily: "var(--fb)", fontWeight: 700, fontSize: 16,
              background: "var(--red)", color: "#fff",
              padding: "18px 44px", borderRadius: 14, textDecoration: "none",
              transition: "all 0.4s",
            }}>
              Join the Seva Journey →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
