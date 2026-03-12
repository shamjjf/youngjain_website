import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
export const metadata = { title: "Swadhyay" };

export default function SwadhyayPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero badge="SWADHYAY" title={<>Inner Study & <strong>Reflection</strong></>} subtitle="In Jainism, Swadhyay is more than reading scriptures — it is intentional inner study. It is the bridge between knowledge and transformation." />

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 22, color: "var(--navy)", opacity: 0.3, marginBottom: 20 }}>ज्ञानं बन्धविमोक्षहेतुः</div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 17, lineHeight: 1.9, color: "var(--slate)" }}>
              Through Swadhyay, philosophy becomes personal experience, and learning becomes self-purification.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.9, color: "var(--navy)", fontWeight: 600, marginTop: 16 }}>
              For YoungJains, Swadhyay is not just scriptural reading — it is <span style={{ color: "var(--red)" }}>self-growth with spiritual direction.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ NINE TATTVAS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="CONTEMPLATION" title={<>Reflection on the <span style={{ fontWeight: 800, color: "var(--red)" }}>Nine Tattvas</span></>} subtitle="Swadhyay begins with contemplation of reality through the Nine Tattvas, especially the karmic process:" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {[
              { title: "Āsrava (Influx of Karma)", desc: "Understanding how actions, speech, and thoughts invite karmic particles into the soul." },
              { title: "Bandha (Bondage)", desc: "Recognizing how attachment and passions bind karma to the soul." },
              { title: "Samvara (Stopping Karma)", desc: "Practising restraint, awareness, and vows to prevent new karmic influx." },
              { title: "Nirjarā (Shedding Karma)", desc: "Removing accumulated karma through austerity, repentance, and right conduct." },
              { title: "Moksha (Liberation)", desc: "Realizing the ultimate state of complete freedom from karma." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <BentoCard title={item.title} desc={item.desc} tagColor={i % 2 === 0 ? "navy" : "red"} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <div style={{ borderLeft: "4px solid var(--navy)", padding: "16px 24px", background: "rgba(15,35,106,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 640, margin: "32px auto 0" }}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--navy)", fontWeight: 500, fontStyle: "italic", lineHeight: 1.7 }}>
                Swadhyay transforms these from abstract ideas into daily self-examination:
                <br /><strong>&ldquo;Where did I allow the influx today? Where did I practise restraint?&rdquo;</strong>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ KASHAYAS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <SectionHeader badge="INNER AWARENESS" title={<>Observing the <span style={{ fontWeight: 800, color: "var(--red)" }}>Passions (Kashayas)</span></>} center={false} />
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "var(--slate)" }}>
                  The four core passions distort the soul&apos;s purity. Swadhyay cultivates awareness of these inner movements. Instead of reacting unconsciously, one begins to observe.
                </p>
                <div style={{ borderLeft: "4px solid var(--red)", padding: "14px 20px", background: "rgba(253,24,16,0.03)", borderRadius: "0 12px 12px 0", marginTop: 20 }}>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--navy)", fontStyle: "italic", fontWeight: 500 }}>
                    &ldquo;Why did anger arise? What insecurity fed pride?&rdquo;
                  </p>
                </div>
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", marginTop: 16, fontStyle: "italic" }}>
                  This awareness weakens karmic bondage and strengthens equanimity.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {[
                  { name: "Krodha", eng: "Anger", icon: "🔥" },
                  { name: "Mana", eng: "Pride", icon: "👑" },
                  { name: "Maya", eng: "Deceit", icon: "🎭" },
                  { name: "Lobha", eng: "Greed", icon: "💰" },
                ].map((k, i) => (
                  <div key={k.name} style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1.5px solid rgba(15,35,106,0.06)", textAlign: "center" }}>
                    <div style={{ fontSize: 28, marginBottom: 10 }}>{k.icon}</div>
                    <div style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--navy)" }}>{k.name}</div>
                    <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--red)", fontWeight: 600, marginTop: 2 }}>{k.eng}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ SCRIPTURAL MEDITATION ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="PRACTICE" title={<>Scriptural <span style={{ fontWeight: 800, color: "var(--red)" }}>Meditation</span></>} subtitle="Swadhyay includes contemplative reading of Jain texts such as the Tattvartha Sutra or teachings from the Agamas." /></Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--navy)", fontWeight: 600, textAlign: "center", marginBottom: 24 }}>
              It is not passive reading. It involves reflection:
            </p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 800, margin: "0 auto" }}>
            {[
              "What does this teaching reveal about attachment?",
              "How does it challenge my ego?",
              "How can I apply this in speech, food habits, or decision-making today?",
            ].map((q, i) => (
              <Reveal key={i} delay={0.15 + i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 16, padding: "24px 20px", border: "1.5px solid rgba(15,35,106,0.06)", textAlign: "center", height: "100%" }}>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 1, marginBottom: 10 }}>0{i + 1}</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, color: "var(--slate)" }}>{q}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", textAlign: "center", marginTop: 28, fontStyle: "italic" }}>
              This method turns scripture into a <span style={{ color: "var(--red)" }}>mirror.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ KNOWLEDGE HIERARCHY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="FIVE TYPES OF KNOWLEDGE" title={<>Understanding the Knowledge <span style={{ fontWeight: 800, color: "var(--red)" }}>Hierarchy</span></>} subtitle="Jain philosophy describes five types of knowledge:" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 14 }}>
            {[
              { name: "Mati Jnana", eng: "Sensory Knowledge", num: "01" },
              { name: "Shruta Jnana", eng: "Scriptural Knowledge", num: "02" },
              { name: "Avadhi Jnana", eng: "Clairvoyance", num: "03" },
              { name: "Manahparyaya Jnana", eng: "Telepathy", num: "04" },
              { name: "Kevala Jnana", eng: "Omniscience", num: "05" },
            ].map((k, i) => (
              <Reveal key={k.name} delay={i * 0.07}>
                <div style={{
                  background: i === 4 ? "var(--navy)" : "#fff", color: i === 4 ? "#fff" : "var(--navy)",
                  borderRadius: 16, padding: "24px 18px", border: `1.5px solid ${i === 4 ? "var(--navy)" : "rgba(15,35,106,0.06)"}`, textAlign: "center",
                }}>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, color: i === 4 ? "var(--red-l)" : "var(--red)", letterSpacing: 1, marginBottom: 8 }}>{k.num}</div>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 16, fontWeight: 700 }}>{k.name}</div>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 11, opacity: 0.6, marginTop: 4 }}>{k.eng}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", textAlign: "center", marginTop: 24, lineHeight: 1.75 }}>
              Swadhyay refines the first two and prepares the soul for higher states. It gradually clears ignorance, leading toward the purity of <strong style={{ color: "var(--navy)" }}>Kevala Jnana</strong> — the state attained by the Tirthankaras.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ PURPOSE OF SWADHYAY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="THE PURPOSE" title={<>The Purpose of <span style={{ fontWeight: 800, color: "var(--red)" }}>Swadhyay</span></>} /></Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "var(--navy)", fontWeight: 600, textAlign: "center", marginBottom: 28 }}>
              Swadhyay is not for intellectual pride. <span style={{ color: "var(--red)" }}>It is for inner cleansing.</span>
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", textAlign: "center", marginBottom: 24 }}>Through disciplined study and reflection, the soul moves:</p>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { from: "Reaction", to: "Awareness" },
              { from: "Attachment", to: "Restraint" },
              { from: "Confusion", to: "Clarity" },
              { from: "Bondage", to: "Liberation" },
            ].map((item, i) => (
              <Reveal key={i} delay={0.2 + i * 0.07}>
                <div style={{ background: "#fff", borderRadius: 14, padding: "22px 20px", border: "1.5px solid rgba(15,35,106,0.06)", textAlign: "center" }}>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)" }}>From </span>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 700, color: "var(--slate)", textDecoration: "line-through", opacity: 0.5 }}>{item.from}</span>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)" }}> to </span>
                  <span style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 700, color: "var(--red)" }}>{item.to}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", fontStyle: "italic", textAlign: "center", marginTop: 24 }}>
              It is the silent, personal practice that steadily guides one toward Moksha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ YOUNGJAINS APPROACH ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="OUR APPROACH" title={<>Swadhyay <span style={{ fontWeight: 800, color: "var(--red)" }}>Becomes</span></>} /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
            {[
              { text: "Clarity in thinking", icon: "💡" },
              { text: "Discipline in action", icon: "⚡" },
              { text: "Calmness in conflict", icon: "🧘" },
              { text: "Purpose in life", icon: "🎯" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ background: "#fff", borderRadius: 16, padding: "28px 20px", border: "1.5px solid rgba(15,35,106,0.06)", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{item.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.35}>
            <div style={{ fontFamily: "var(--fd)", fontSize: 20, color: "var(--navy)", opacity: 0.3, textAlign: "center", marginTop: 36 }}>धम्मो मंगल मुक्किट्ठं</div>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)", filter: "blur(50px)" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 34, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Begin Your <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Swadhyay Practice</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
              <Link href="/education" style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, border: "2px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}>Download Reflection Material</Link>
              <Link href="/volunteer" style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, background: "var(--red)", color: "#fff", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}>Join a Study Circle →</Link>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>YoungJains</div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.3)", marginTop: 10, lineHeight: 1.8 }}>
                Rooted in Jain Dharma. Rising with Purpose.
                <br />Learn Deeply. Live Mindfully. Rise Spiritually.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
