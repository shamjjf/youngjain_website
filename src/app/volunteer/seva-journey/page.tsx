// "use client";
import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";
export const metadata = { title: "Volunteer || Seva Journey" };


const steps = [
  {
    num: "01",
    title: "Register Your Interest",
    desc: "Fill out the volunteer form to share your skills, availability, and areas where you would like to contribute.",
    points: [
      "This is not an application — it is a way to express your willingness to participate and learn.",
      "Your intention sets the foundation for a purposeful journey.",
    ],
  },
  {
    num: "02",
    title: "Join the Orientation Circle",
    desc: "New volunteers are welcomed into a small introductory group. Here you will:",
    points: [
      "Understand the vision and values of YoungJains",
      "Learn how to participate mindfully and responsibly",
      "Meet fellow volunteers and coordinators",
    ],
    note: "This helps you start with clarity, comfort, and connection.",
  },
  {
    num: "03",
    title: "Choose Your Role",
    desc: "Select an area based on your interests and strengths, such as:",
    points: [
      "Education & mentorship",
      "Content creation & digital projects",
      "Event coordination",
      "Study circles & learning groups",
      "Media & resource development",
      "Community initiatives",
    ],
    note: "Guidance is provided so you can begin where you feel most aligned.",
  },
  {
    num: "04",
    title: "Begin with a Supported Role",
    desc: "Every new volunteer starts with guidance. You will:",
    points: [
      "Work alongside an experienced volunteer",
      "Learn the flow of sessions and activities",
      "Gradually take on small independent tasks",
    ],
    note: "This ensures confidence, quality, and a mindful approach while building skills.",
  },
  {
    num: "05",
    title: "Grow into Leadership",
    desc: "With experience, volunteers can move into deeper roles:",
    points: [
      "Facilitating discussions and activities",
      "Mentoring new members",
      "Leading projects and initiatives",
    ],
    note: "Leadership here is responsibility rooted in awareness and humility, not position. Your growth naturally leads to greater impact.",
  },
];

const impactPoints = [
  "Empower children and youth with value-based learning",
  "Strengthen the community and its programs",
  "Translate philosophy into practical action",
  "Inspire others through mindful participation",
];

export default function SevaJourneyPage() {
  return (
    <>
      <style>{`
        .step-card{background:#fff;border-radius:20px;padding:36px 32px;border:1.5px solid rgba(15,35,106,0.06);transition:all 0.5s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}
        .step-card:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(15,35,106,0.06);border-color:rgba(15,35,106,0.1)}
        .step-row{display:grid;grid-template-columns:80px 1fr;gap:28px;align-items:start;position:relative;padding-bottom:0}
        .step-num-circle{width:64px;height:64px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--fh);font-size:20px;font-weight:800;color:#fff;position:relative;z-index:2;flex-shrink:0}
        .step-connector{position:absolute;left:39px;top:72px;bottom:-40px;width:2px;background:linear-gradient(to bottom,var(--ice),rgba(238,241,248,0.3));z-index:1}
        .step-point{display:flex;gap:10px;align-items:flex-start;padding:5px 0}
        .step-dot{width:6px;height:6px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:8px}
        .step-note{margin-top:14px;padding:14px 20px;border-radius:12px;background:rgba(15,35,106,0.03);border-left:3px solid var(--navy)}
        .impact-card{display:flex;gap:16px;align-items:flex-start;padding:20px 24px;background:#fff;border-radius:16px;border:1.5px solid rgba(15,35,106,0.06);transition:all 0.4s cubic-bezier(.16,1,.3,1)}
        .impact-card:hover{transform:translateX(6px);box-shadow:0 8px 28px rgba(15,35,106,0.05);border-color:rgba(15,35,106,0.1)}
        .impact-icon{width:36px;height:36px;border-radius:10px;background:rgba(253,24,16,0.08);color:var(--red);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:16px;font-weight:700}
        @media(max-width:900px){
          .step-row{grid-template-columns:56px 1fr!important;gap:16px!important}
          .step-num-circle{width:52px!important;height:52px!important;font-size:18px!important}
          .step-connector{left:25px!important}
          .step-card{padding:24px 20px!important}
          .impact-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <PageHero
        badge="SEVA JOURNEY"
        title={<>Your Seva <strong>Journey</strong></>}
        subtitle="Volunteering at YoungJains is a guided journey where learning, reflection, and action come together."
      />

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "var(--navy)", opacity: 0.3, marginBottom: 16 }}>
              सेवया आत्मशुद्धिः
            </div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.85, color: "var(--slate)" }}>
              Volunteering at YoungJains is a guided journey where learning, reflection, and action come together. Each step helps you contribute effectively while growing personally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 5 STEPS TIMELINE ═══ */}
      <section style={{ padding: "40px 40px 100px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            const color = i % 2 === 0 ? "var(--navy)" : "var(--red)";
            return (
              <Reveal key={step.num} delay={i * 0.08}>
                <div style={{ marginBottom: isLast ? 0 : 40, position: "relative" }}>
                  <div className="step-row">
                    {/* Number circle + connector line */}
                    <div style={{ position: "relative" }}>
                      <div className="step-num-circle" style={{ background: color }}>{step.num}</div>
                      {!isLast && <div className="step-connector" />}
                    </div>

                    {/* Content card */}
                    <div className="step-card">
                      <h3 style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
                        {step.title}
                      </h3>
                      <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.75, color: "var(--slate)", marginBottom: 14 }}>
                        {step.desc}
                      </p>

                      {/* Bullet points */}
                      <div>
                        {step.points.map((pt, j) => (
                          <div key={j} className="step-point">
                            <span className="step-dot" />
                            <span style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.65, color: "var(--slate)" }}>{pt}</span>
                          </div>
                        ))}
                      </div>

                      {/* Note (if exists) */}
                      {step.note && (
                        <div className="step-note">
                          <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, color: "var(--navy)", fontWeight: 500, fontStyle: "italic" }}>
                            {step.note}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══ THE IMPACT OF YOUR CONTRIBUTION ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="YOUR IMPACT"
              title={<>The Impact of Your <span style={{ fontWeight: 800, color: "var(--red)" }}>Contribution</span></>}
              subtitle="Your involvement helps:"
            />
          </Reveal>

          <div className="impact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {impactPoints.map((point, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="impact-card">
                  <div className="impact-icon">✓</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.7, color: "var(--navy)", fontWeight: 500 }}>{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{
        padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", bottom: "-20%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)", filter: "blur(50px)" }} />

        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 34, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Take the first step.
              <br />
              <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Start your journey today.</span>
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "rgba(255,255,255,0.45)", marginTop: 16, lineHeight: 1.8 }}>
              Fill out your volunteer form and begin your seva journey with YoungJains.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Link href="/volunteer" style={{
              display: "inline-flex", alignItems: "center", gap: 10, marginTop: 36,
              fontFamily: "var(--fb)", fontWeight: 700, fontSize: 16,
              background: "var(--red)", color: "#fff",
              padding: "18px 44px", borderRadius: 14, textDecoration: "none",
              transition: "all 0.4s",
            }}>
              Register Now →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
