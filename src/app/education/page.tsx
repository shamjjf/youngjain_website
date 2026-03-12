import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
export const metadata = { title: "Education" };

export default function EducationPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero badge="EDUCATION" title={<>Welcome to the <strong>Education Corner</strong></>} subtitle="Jai Jinendra! Your gateway to learning, reflecting, and growing in the timeless wisdom of Jain Dharma." />

      {/* ═══ WELCOME ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--slate)" }}>
              This space is thoughtfully created to help you explore Jain philosophy, deepen your understanding of scriptures, and strengthen your spiritual practice in a meaningful and structured way.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--navy)", fontWeight: 600, marginTop: 16 }}>
              Here, knowledge is not just studied — <span style={{ color: "var(--red)" }}>it is lived.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ KNOWLEDGE THAT LIBERATES ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="JAIN EDUCATION" title={<>Knowledge That <span style={{ fontWeight: 800, color: "var(--red)" }}>Liberates</span></>} /></Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)", maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
              In Jain Dharma, education is not merely the accumulation of information — it is the awakening of consciousness. It is a sacred journey through which the soul gradually sheds ignorance and moves toward liberation (Moksha).
            </p>
          </Reveal>

          {/* Ratnatraya */}
          <Reveal delay={0.15}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", textAlign: "center", marginTop: 32, marginBottom: 20 }}>
              The teachings of the 24 Tirthankaras are rooted in the <strong style={{ color: "var(--navy)" }}>Ratnatraya (Three Jewels):</strong>
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 900, margin: "0 auto" }}>
            {[
              { icon: "💎", title: "Samyak Darshan", sub: "Right Faith" },
              { icon: "📖", title: "Samyak Jnana", sub: "Right Knowledge" },
              { icon: "🙏", title: "Samyak Charitra", sub: "Right Conduct" },
            ].map((r, i) => (
              <Reveal key={r.title} delay={0.2 + i * 0.08}>
                <BentoCard title={r.title} desc={r.sub} tagColor={i === 1 ? "red" : "navy"}>
                  <div style={{ fontSize: 32, marginTop: 8 }}>{r.icon}</div>
                </BentoCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div style={{ borderLeft: "4px solid var(--red)", padding: "16px 24px", background: "rgba(253,24,16,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 600, margin: "36px auto 0" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 18, color: "var(--navy)", fontWeight: 600 }}>&ldquo;सम्यक ज्ञान ही मोक्ष का द्वार है।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 6 }}>True knowledge is the doorway to liberation.</p>
            </div>
          </Reveal>
          <Reveal delay={0.45}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", textAlign: "center", marginTop: 24, fontStyle: "italic" }}>Jain education is not old wisdom — it is timeless intelligence.</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 1. SIX DRAVYAS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="WHAT JAIN EDUCATION TEACHES" title={<>1. The Nature of <span style={{ fontWeight: 800, color: "var(--red)" }}>Reality</span></>} subtitle="A seeker who walks this path gradually understands the deeper structure of reality." /></Reveal>

          <Reveal delay={0.1}>
            <h3 style={{ fontFamily: "var(--fh)", fontSize: 24, fontWeight: 700, color: "var(--navy)", textAlign: "center", marginBottom: 20 }}>
              Six Dravyas <span style={{ fontWeight: 400, color: "var(--slate)", fontSize: 18 }}>(Six Substances)</span>
            </h3>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, maxWidth: 800, margin: "0 auto" }}>
            {[
              { name: "Jiva", eng: "Soul" }, { name: "Pudgala", eng: "Matter" }, { name: "Dharma Dravya", eng: "Medium of Motion" },
              { name: "Adharma Dravya", eng: "Medium of Rest" }, { name: "Akasha", eng: "Space" }, { name: "Kala", eng: "Time" },
            ].map((d, i) => (
              <Reveal key={d.name} delay={0.12 + i * 0.05}>
                <BentoCard title={d.name} desc={d.eng} tagColor={i % 2 === 0 ? "navy" : "red"} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}><p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", textAlign: "center", marginTop: 20, fontStyle: "italic" }}>Understanding these eternal substances removes confusion about life and existence.</p></Reveal>

          {/* Nine Tattvas */}
          <Reveal delay={0.45}>
            <h3 style={{ fontFamily: "var(--fh)", fontSize: 24, fontWeight: 700, color: "var(--navy)", textAlign: "center", marginTop: 56, marginBottom: 16 }}>
              Nine Tattvas <span style={{ fontWeight: 400, color: "var(--slate)", fontSize: 18 }}>(Fundamental Principles)</span>
            </h3>
          </Reveal>
          <Reveal delay={0.5}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {["Jiva", "Ajiva", "Asrava", "Bandha", "Samvara", "Nirjara", "Moksha", "Punya", "Papa"].map((t) => (
                <span key={t} style={{ padding: "8px 18px", borderRadius: 10, fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, border: "1.5px solid rgba(15,35,106,0.08)", background: "#fff", color: "var(--navy)" }}>{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.55}><p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", textAlign: "center", marginTop: 16 }}>These principles explain how karmic bondage happens — and how liberation becomes possible.</p></Reveal>
          <Reveal delay={0.6}>
            <div style={{ borderLeft: "4px solid var(--navy)", padding: "16px 24px", background: "rgba(15,35,106,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 500, margin: "24px auto 0" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 17, color: "var(--navy)", fontWeight: 600 }}>&ldquo;जैसा भाव, वैसा बंधन।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>As the intention, so the karmic bondage.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 2. KARMA THEORY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: 8, background: "rgba(253,24,16,0.08)", marginBottom: 16 }}>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>SECTION 2</span>
                </div>
                <h2 style={{ fontFamily: "var(--fh)", fontSize: 36, fontWeight: 300, color: "var(--navy)", lineHeight: 1.2 }}>
                  Karma Theory — <span style={{ fontWeight: 800, color: "var(--red)" }}>The Science of Bondage</span>
                </h2>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)", marginTop: 20 }}>
                  In Jain philosophy, karma is subtle matter that binds to the soul due to attachment and passions. Through education, we learn:
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", border: "1.5px solid rgba(15,35,106,0.06)" }}>
                {["How karmas bind", "How awareness stops their inflow", "How discipline weakens them", "How liberation becomes achievable"].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: i < 3 ? "1px solid var(--ice)" : "none" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.25}><p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", textAlign: "center", marginTop: 36, fontStyle: "italic" }}>Ignorance creates bondage. Awareness creates freedom.</p></Reveal>
          <Reveal delay={0.3}>
            <div style={{ borderLeft: "4px solid var(--red)", padding: "16px 24px", background: "rgba(253,24,16,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 500, margin: "20px auto 0" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 17, color: "var(--navy)", fontWeight: 600 }}>&ldquo;आत्मा स्वयं प्रकाशमान है।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>The soul is self-illuminating.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 3. SPIRITUAL PRACTICE ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="SECTION 3" title={<>Spiritual Practice — <span style={{ fontWeight: 800, color: "var(--red)" }}>Applying Knowledge</span></>} subtitle="Knowledge must transform into practice." /></Reveal>
          <Reveal delay={0.1}>
            <div style={{ borderLeft: "4px solid var(--navy)", padding: "16px 24px", background: "rgba(15,35,106,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 540, margin: "0 auto 32px" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 17, color: "var(--navy)", fontWeight: 600 }}>&ldquo;संयम ही आत्मा की असली शक्ति है।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>Self-restraint is the true strength of the soul.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, maxWidth: 800, margin: "0 auto" }}>
            {[
              { name: "Meditation", sub: "Dhyana" }, { name: "Fasting", sub: "Tap / Upvas" },
              { name: "Pratikraman", sub: "Self-reflection" }, { name: "Self-Restraint", sub: "Sanyam" },
            ].map((p, i) => (
              <Reveal key={p.name} delay={0.15 + i * 0.08}>
                <BentoCard title={p.name} desc={p.sub} tagColor={i % 2 === 0 ? "navy" : "red"} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.45}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", textAlign: "center", marginTop: 24, fontStyle: "italic" }}>These disciplines purify the soul and strengthen clarity.</p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--navy)", textAlign: "center", marginTop: 12, fontWeight: 600, opacity: 0.5 }}>Ancient scriptures. Modern understanding. Rooted in values. Fearless in thought.</p>
          </Reveal>
        </div>
      </section>

      {/* ═══ 4. FOUR PILLARS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="FOUR PILLARS" title={<>The Four Pillars of <span style={{ fontWeight: 800, color: "var(--red)" }}>Jain Education</span></>} subtitle="YoungJains unfolds this journey through four interconnected pathways:" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[
              { num: "01", title: "Agam Vachan", sub: "Scriptural Foundation", desc: "The Agamas preserve the original teachings of the Tirthankaras. Through listening to pravachans and scriptural study, seekers connect with authentic wisdom.", quote: "स्वाध्याय बिना आत्मा अज्ञान में रहती है।", quoteEng: "Without self-study, the soul remains in ignorance.", cta: "Explore the Agamas", href: "/education/agam-vachan" },
              { num: "02", title: "Paathshala", sub: "Structured Learning", desc: "Paathshala provides organized education for children and youth — building scriptural understanding, stories of Tirthankaras, moral clarity, and ritual awareness.", cta: "Join YoungJains Paathshala", href: "/education/paathshala" },
              { num: "03", title: "Swadhyay", sub: "Self-Study & Reflection", desc: "Swadhyay deepens knowledge through independent reading, reflection, and discussion. It transforms information into wisdom and strengthens inner awareness.", cta: "Start Swadhyay Today", href: "/education/swadhyay" },
              { num: "04", title: "Chaturmas", sub: "Intensive Spiritual Season", desc: "Chaturmas is a sacred four-month spiritual period dedicated to deeper practice — daily pravachans, special vows, austerities, and community learning.", cta: "Participate in Chaturmas", href: "/education/chaturmas" },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 24, padding: "40px 36px", border: "1.5px solid rgba(15,35,106,0.06)", height: "100%" }}>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 2, marginBottom: 10 }}>{p.num}</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 24, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>{p.title}</h3>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 500, color: "var(--slate)", letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 16 }}>{p.sub}</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.75, color: "var(--slate)" }}>{p.desc}</p>
                  {p.quote && (
                    <div style={{ borderLeft: "4px solid var(--red)", padding: "12px 18px", background: "rgba(253,24,16,0.03)", borderRadius: "0 12px 12px 0", margin: "16px 0" }}>
                      <p style={{ fontFamily: "var(--fd)", fontSize: 15, color: "var(--navy)", fontWeight: 600 }}>&ldquo;{p.quote}&rdquo;</p>
                      <p style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>{p.quoteEng}</p>
                    </div>
                  )}
                  <Link href={p.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 16, fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, padding: "12px 24px", borderRadius: 10, textDecoration: "none", background: i % 2 === 0 ? "var(--red)" : "var(--navy)", color: "#fff" }}>
                    {p.cta} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CYCLE OF LEARNING ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal><SectionHeader badge="THE JOURNEY" title={<>The Complete Cycle of <span style={{ fontWeight: 800, color: "var(--red)" }}>Learning</span></>} subtitle="YoungJains believes education is a lifelong journey:" /></Reveal>
          <Reveal delay={0.15}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap", marginTop: 32 }}>
              {["Study", "Understand", "Reflect", "Practice", "Transform"].map((step, i, arr) => (
                <React.Fragment key={step}>
                  {i > 0 && <span style={{ fontFamily: "var(--fh)", fontSize: 20, color: "var(--red)", opacity: 0.4 }}>→</span>}
                  <div style={{ padding: "12px 24px", borderRadius: 12, fontFamily: "var(--fb)", fontSize: 15, fontWeight: 700, background: i === 0 || i === arr.length - 1 ? "var(--navy)" : "#fff", color: i === 0 || i === arr.length - 1 ? "#fff" : "var(--navy)", border: `1.5px solid ${i === 0 || i === arr.length - 1 ? "var(--navy)" : "rgba(15,35,106,0.1)"}` }}>{step}</div>
                </React.Fragment>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div style={{ borderLeft: "4px solid var(--red)", padding: "16px 24px", background: "rgba(253,24,16,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 560, margin: "40px auto 0" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 17, color: "var(--navy)", fontWeight: 600 }}>&ldquo;ज्ञान से जागृति, संयम से शक्ति, और चरित्र से मुक्ति।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 6 }}>Knowledge awakens, discipline strengthens, character liberates.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal><h2 style={{ fontFamily: "var(--fh)", fontSize: 34, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>Begin Your <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Learning Journey</span></h2></Reveal>
          <Reveal delay={0.1}><Link href="/volunteer" style={{ display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, fontFamily: "var(--fb)", fontWeight: 700, fontSize: 16, background: "var(--red)", color: "#fff", padding: "18px 44px", borderRadius: 14, textDecoration: "none" }}>Become a YoungJains Member →</Link></Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>YoungJains</div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.3)", marginTop: 10, lineHeight: 1.8 }}>Rooted in Jain Dharma. Rising with Purpose.<br />Learn Deeply. Live Mindfully. Rise Spiritually.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
