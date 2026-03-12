import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
export const metadata = { title: "Chaturmas" };

export default function ChaturmasPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero badge="CHATURMAS" title={<>A Sacred Season of Discipline & <strong>Spiritual Renewal</strong></>} subtitle="For four sacred months, Jain monks and nuns remain in one place, offering continuous guidance through discourses and scriptural teachings." />

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "var(--navy)", opacity: 0.3, marginBottom: 20 }}>अप्पा सो परमगुरु</div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--slate)" }}>
              At YoungJains, Chaturmas is understood not merely as a monsoon observance, but as a period of <strong style={{ color: "var(--navy)" }}>intensified spiritual commitment.</strong>
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--slate)", marginTop: 16 }}>
              This practice reflects the highest expression of Ahimsa, as movement is minimized to prevent harm to subtle life forms that flourish during the rainy season.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--navy)", fontWeight: 600, marginTop: 16 }}>
              Chaturmas teaches us steadiness — <span style={{ color: "var(--red)" }}>in body, in conduct, and in thought.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ DEEPENING UNDERSTANDING ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <SectionHeader badge="STUDY & REFLECTION" title={<>Deepening Understanding Through <span style={{ fontWeight: 800, color: "var(--red)" }}>Study</span></>} center={false} />
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "var(--slate)" }}>
                  During Chaturmas, daily discourses offer structured insight into Jain philosophy and ethical living. Teachings explore the nature of the soul, the workings of karma, and the path toward liberation.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "var(--slate)", marginTop: 14 }}>
                  Foundational texts such as the <strong style={{ color: "var(--navy)" }}>Tattvartha Sutra</strong> are studied with depth and reflection, helping seekers strengthen doctrinal clarity.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1.5px solid rgba(15,35,106,0.06)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 0", borderBottom: "1px solid var(--ice)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>Listening becomes contemplation.</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", padding: "14px 0" }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>Contemplation becomes transformation.</span>
                </div>
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", fontStyle: "italic", marginTop: 16 }}>
                  This season encourages focused reflection on the Nine Tattvas, the Three Jewels, and the Six Substances — ensuring that knowledge matures into conviction.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ RENEWAL AND DISCIPLINE ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="DISCIPLINE" title={<>A Time for Renewal and <span style={{ fontWeight: 800, color: "var(--red)" }}>Discipline</span></>} subtitle="Chaturmas invites both monks and lay followers to recommit to foundational values:" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              { title: "Ahimsa", desc: "Non-violence in thought, speech, and action.", icon: "🕊️" },
              { title: "Aparigraha", desc: "Limiting attachment and material excess.", icon: "🪷" },
              { title: "Sanyam (Self-restraint)", desc: "Regulating desires and impulses.", icon: "🧘" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <BentoCard title={item.title} desc={item.desc} tagColor={i % 2 === 0 ? "navy" : "red"}>
                  <div style={{ fontSize: 28, marginTop: 8 }}>{item.icon}</div>
                </BentoCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", textAlign: "center", marginTop: 24, lineHeight: 1.75 }}>
              Many undertake personal resolutions such as fasting, dietary discipline, mindful speech, and reduced indulgence.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", textAlign: "center", marginTop: 10 }}>
              Chaturmas becomes a <span style={{ color: "var(--red)" }}>conscious strengthening of character.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ HOW YOU CAN PARTICIPATE ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="PARTICIPATE" title={<>How You Can <span style={{ fontWeight: 800, color: "var(--red)" }}>Participate</span></>} /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {[
              { num: "01", title: "Take a Personal Resolution", desc: "Commit to a vow that strengthens self-restraint — whether through fasting, mindful speech, reduced consumption, or disciplined daily practice." },
              { num: "02", title: "Engage in Daily Pravachans", desc: "Attend discourses to deepen your understanding of karma, liberation, and ethical living." },
              { num: "03", title: "Strengthen Scriptural Study", desc: "Dedicate time to structured study and reflection on core Jain teachings." },
              { num: "04", title: "Practise Forgiveness & Reflection", desc: "Use this sacred period to purify intentions, forgive sincerely, and cultivate humility." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1.5px solid rgba(15,35,106,0.06)", height: "100%" }}>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: i % 2 === 0 ? "var(--navy)" : "var(--red)", letterSpacing: 2, marginBottom: 10 }}>{item.num}</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.75, color: "var(--slate)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EMBRACE WITH INTENTION ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <SectionHeader badge="INTENTION" title={<>Embrace Chaturmas with <span style={{ fontWeight: 800, color: "var(--red)" }}>Intention</span></>} />
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)" }}>
              Chaturmas is a sacred opportunity to pause, realign, and deepen one&apos;s spiritual journey. It invites us to move from routine observance to <strong style={{ color: "var(--navy)" }}>conscious discipline.</strong>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28, flexWrap: "wrap" }}>
              {["Attend Daily Pravachans", "Commit to Scriptural Study", "Practise Forgiveness & Self-Restraint"].map((item, i) => (
                <span key={i} style={{ padding: "10px 20px", borderRadius: 10, fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, background: i === 0 ? "var(--navy)" : "#fff", color: i === 0 ? "#fff" : "var(--navy)", border: `1.5px solid ${i === 0 ? "var(--navy)" : "rgba(15,35,106,0.1)"}` }}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-15%", left: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)", filter: "blur(50px)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ borderLeft: "4px solid var(--red-l)", padding: "16px 24px", background: "rgba(255,255,255,0.04)", borderRadius: "0 14px 14px 0", maxWidth: 460, margin: "0 auto 32px", textAlign: "left" }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "rgba(255,255,255,0.7)", fontStyle: "italic", lineHeight: 1.7 }}>
                Consistency in small disciplines<br />leads to <strong style={{ color: "#fff" }}>lasting inner transformation.</strong>
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 32, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Take a <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Chaturmas Resolution</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/volunteer" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15, background: "var(--red)", color: "#fff", padding: "16px 36px", borderRadius: 12, textDecoration: "none" }}>
              Begin Your Chaturmas Journey →
            </Link>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>YoungJains</div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
