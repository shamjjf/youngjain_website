import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader, BentoCard } from "@/components/ui";
import Button from "@/components/ui/button/button";
export const metadata = { title: "Agam Vachan" };

export default function AgamVachanPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero badge="AGAM VACHAN" title={<>When Scriptures Start <strong>Speaking to You</strong></>} subtitle="Agam Vachan is the systematic study, recitation, and reflection upon Jain scriptures that preserve the original teachings of the Tirthankaras." />

      {/* ═══ INTRO ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ borderLeft: "4px solid var(--red)", padding: "16px 24px", background: "rgba(253,24,16,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 500, margin: "0 auto 28px" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 18, color: "var(--navy)", fontWeight: 600 }}>&ldquo;शास्त्र आत्मा का दर्पण है।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 6 }}>Scripture is the mirror of the soul.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)" }}>
              The canonical teachings are known as the Agamas, especially preserved within the Śvetāmbara tradition. These sacred texts contain discourses attributed to Mahavira and early Jain monks, carefully transmitted through generations.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--navy)", fontWeight: 600, marginTop: 16 }}>
              Agam Vachan is not merely reading scripture — it is <span style={{ color: "var(--red)" }}>listening to the voice of Dharma itself.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <SectionHeader badge="WHY IT MATTERS" title={<>Why Agam Vachan Matters <span style={{ fontWeight: 800, color: "var(--red)" }}>Today</span></>} center={false} />
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontFamily: "var(--fb)", fontSize: 16, lineHeight: 1.85, color: "var(--slate)" }}>
                  In a world full of opinions, scriptures provide <strong style={{ color: "var(--navy)" }}>clarity</strong>.
                  <br />In a world full of noise, they provide <strong style={{ color: "var(--navy)" }}>direction</strong>.
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "var(--slate)", marginTop: 16 }}>
                  Without scriptural grounding, practice can become routine.
                  <br />With scriptural understanding, practice becomes <strong style={{ color: "var(--navy)" }}>powerful</strong>.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1.5px solid rgba(15,35,106,0.06)" }}>
                <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}>Agam Vachan helps you:</h3>
                {["Think deeply", "Question wisely", "Practice consciously", "Live responsibly"].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: i < 3 ? "1px solid var(--ice)" : "none" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{pt}</span>
                  </div>
                ))}
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", fontStyle: "italic", marginTop: 16 }}>
                  It turns belief into understanding.<br />And understanding into transformation.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHAT YOU EXPLORE ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="WHAT YOU EXPLORE" title={<>What You Explore in <span style={{ fontWeight: 800, color: "var(--red)" }}>Agam Vachan</span></>} subtitle="Agam study is not limited to one topic — it opens the entire framework of Jain philosophy." /></Reveal>

          {/* 1. Foundations of Truth */}
          <div style={{ marginTop: 20, marginBottom: 64 }}>
            <Reveal>
              <div style={{ borderLeft: "4px solid var(--navy)", padding: "12px 20px", background: "rgba(15,35,106,0.03)", borderRadius: "0 12px 12px 0", maxWidth: 400, marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--fd)", fontSize: 16, color: "var(--navy)", fontWeight: 600 }}>&ldquo;जैसा भाव, वैसा भविष्य।&rdquo;</p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>As the intention, so the future.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 style={{ fontFamily: "var(--fh)", fontSize: 26, fontWeight: 700, color: "var(--navy)", marginBottom: 20 }}>1. The Foundations of Truth</h3>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {[
                { title: "Nature of Soul (Jiva)", desc: "The conscious, eternal, pure self." },
                { title: "Non-Soul (Ajiva)", desc: "Matter, time, space, and other non-conscious substances." },
                { title: "Karma & Bondage", desc: "How subtle karmic particles bind to the soul." },
                { title: "Liberation (Moksha)", desc: "The ultimate freedom from karmic bondage." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.06}>
                  <BentoCard title={item.title} desc={item.desc} tagColor={i % 2 === 0 ? "navy" : "red"} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.35}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", fontStyle: "italic", marginTop: 20, textAlign: "center" }}>
                Through this study, seekers understand that the soul is inherently pure, luminous, and capable of infinite knowledge.
              </p>
            </Reveal>
          </div>

          {/* 2. Conduct */}
          <div style={{ marginBottom: 64 }}>
            <Reveal>
              <div style={{ borderLeft: "4px solid var(--red)", padding: "12px 20px", background: "rgba(253,24,16,0.03)", borderRadius: "0 12px 12px 0", maxWidth: 400, marginBottom: 24 }}>
                <p style={{ fontFamily: "var(--fd)", fontSize: 16, color: "var(--navy)", fontWeight: 600 }}>&ldquo;अहिंसा परमॊ धर्मः।&rdquo;</p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>Non-violence is the highest religion.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 style={{ fontFamily: "var(--fh)", fontSize: 26, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>2. Conduct that Aligns with Consciousness</h3>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", lineHeight: 1.75, marginBottom: 20 }}>Scriptural study clarifies how philosophy must translate into conduct. Agam teachings elaborate on:</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {[
                { title: "Monastic Discipline (Mahavrata)", desc: "The absolute path of renunciation." },
                { title: "Lay Vows (Anuvrata)", desc: "Practical vows for householders." },
                { title: "Ahimsa in Depth", desc: "Non-violence in thought, speech, and action." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.06}>
                  <BentoCard title={item.title} desc={item.desc} tagColor={i % 2 === 0 ? "navy" : "red"} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", fontStyle: "italic", marginTop: 20, textAlign: "center" }}>
                The scriptures provide detailed guidance on restraint, humility, truthfulness, and non-attachment — forming the ethical backbone of Jain life.
              </p>
            </Reveal>
          </div>

          {/* 3. Universe */}
          <div>
            <Reveal>
              <h3 style={{ fontFamily: "var(--fh)", fontSize: 26, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>3. A Universe Beyond Imagination</h3>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", lineHeight: 1.75, marginBottom: 20 }}>Agam Vachan also introduces the profound Jain understanding of the universe. Study includes:</p>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { title: "Structure of the Universe", desc: "Lokākāśa — the cosmic framework of existence." },
                { title: "Realms of Existence", desc: "Heavenly, human, animal, and infernal states." },
                { title: "Cycle of Rebirth", desc: "Samsara — the continuous journey shaped by karma." },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <BentoCard title={item.title} desc={item.desc} tagColor={i % 2 === 0 ? "navy" : "red"} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)", fontStyle: "italic", marginTop: 20, textAlign: "center" }}>
                This cosmological vision expands perspective beyond one lifetime and inspires responsibility for every action.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ TEXTS THAT SHAPE UNDERSTANDING ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="KEY TEXTS" title={<>Texts That Shape <span style={{ fontWeight: 800, color: "var(--red)" }}>Understanding</span></>} subtitle="During Agam Vachan, learners are introduced to foundational scriptures:" /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              { icon: "/assets/images/icons/ahimsa-1.png", title: "Acharanga Sutra", desc: "Explains monastic conduct and deeply elaborates non-violence." },
              { icon: "/assets/images/icons/stage.png", title: "Uttaradhyayana Sutra", desc: "Discourses on discipline, detachment, and spiritual wisdom." },
              { icon: "/assets/images/icons/chakra-1.png", title: "Tattvartha Sutra", desc: "A systematic and philosophical summary of Jain doctrine." },
            ].map((text, i) => (
              <Reveal key={text.title} delay={i * 0.1}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "32px 24px", border: "1.5px solid rgba(15,35,106,0.06)", textAlign: "center", height: "100%" }}>
                    <div style={{ fontSize: 36, marginBottom: 14, display: "flex", justifyContent: "center" }}>
                    <img width={36} height={36} src={text.icon} />
                    </div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{text.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, color: "var(--slate)" }}>{text.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", textAlign: "center", marginTop: 28 }}>
              These texts are not just ancient documents. <span style={{ color: "var(--red)" }}>They are spiritual blueprints.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ HOW YOUNGJAINS MAKES IT MEANINGFUL ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div>
              <Reveal>
                <SectionHeader badge="OUR APPROACH" title={<>How YoungJains Makes It <span style={{ fontWeight: 800, color: "var(--red)" }}>Meaningful</span></>} center={false} />
              </Reveal>
              <Reveal delay={0.1}>
                <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.85, color: "var(--slate)" }}>
                  We simplify complex concepts without diluting their depth. We encourage questions. We promote understanding — <strong style={{ color: "var(--navy)" }}>not blind acceptance.</strong>
                </p>
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--navy)", fontStyle: "italic", marginTop: 20, fontWeight: 600 }}>
                  Ancient wisdom. Clear explanation. Real relevance.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.15}>
              <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: "1.5px solid rgba(15,35,106,0.06)" }}>
                <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}>At YoungJains, Agam Vachan is:</h3>
                {["Guided and structured", "Interactive and discussion-based", "Deep yet youth-friendly", "Rooted in authenticity"].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center", padding: "12px 0", borderBottom: i < 3 ? "1px solid var(--ice)" : "none" }}>
                    <span style={{ color: "var(--red)", fontWeight: 700, fontSize: 16 }}>✔</span>
                    <span style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 500, color: "var(--navy)" }}>{pt}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ WHAT IT BUILDS IN YOU ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader badge="YOUR GROWTH" title={<>What Agam Vachan <span style={{ fontWeight: 800, color: "var(--red)" }}>Builds in You</span></>} />
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ borderLeft: "4px solid var(--red)", padding: "16px 24px", background: "rgba(253,24,16,0.03)", borderRadius: "0 14px 14px 0", maxWidth: 500, margin: "0 auto 32px" }}>
              <p style={{ fontFamily: "var(--fd)", fontSize: 17, color: "var(--navy)", fontWeight: 600 }}>&ldquo;ज्ञान बिना साधना अधूरी है।&rdquo;</p>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", fontStyle: "italic", marginTop: 4 }}>Without knowledge, spiritual practice remains incomplete.</p>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 }}>
            {
              [
                "Doctrinal clarity", 
                "Intellectual strength", 
                "Ethical awareness", 
                "Confidence in Jain identity", 
                "Depth in spiritual practice",
                "Compassionate engagement",
                "Resilience in challenges",
                "Commitment to lifelong learning"
              ].map((item, i) => (
              <Reveal key={item} delay={0.15 + i * 0.06}>
                <div style={{ background: "#fff", borderRadius: 14, padding: "20px 18px", border: "1.5px solid rgba(15,35,106,0.06)", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, fontWeight: 700, color: "var(--red)", letterSpacing: 1, marginBottom: 6 }}>0{i + 1}</div>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 600, color: "var(--navy)" }}>{item}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.45}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", textAlign: "center", marginTop: 28, lineHeight: 1.8 }}>
              Because without knowledge, practice becomes mechanical.
              <br /><strong style={{ color: "var(--navy)" }}>With knowledge, practice becomes mindful.</strong>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-15%", right: "8%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)", filter: "blur(50px)" }} />
        <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 34, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Ready to <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Begin?</span>
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: 16, color: "rgba(255,255,255,0.5)", marginTop: 12, lineHeight: 1.7 }}>
              Let the scriptures guide your journey.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
              {/* <Link href="/education" style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, border: "2px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}>Explore Jain Scriptures</Link>
              <Link href="/volunteer" style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, background: "var(--red)", color: "#fff", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}>Join the Agam Vachan Circle →</Link> */}
              <Button style={{ border: "solid gray 2px" }} href="/education" text="Explore Jain Scriptures" primary={false} />
              <Button href="/volunteer" text="Join the Agam Vachan Circle" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>YoungJains</div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.3)", marginTop: 10, lineHeight: 1.8 }}>
                Anchored in Dharma. Advancing with Awareness.
                <br />Understand Clearly. Act Compassionately. Evolve Spiritually.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
