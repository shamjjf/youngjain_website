import React from "react";
import Link from "next/link";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";
import Button from "@/components/ui/button/button";
export const metadata = { title: "Testimonials" };

const featured = {
  quote: "YoungJains didn't just teach me Jain philosophy — it gave me a community where I could question, reflect, and grow at my own pace. The Swadhyay circles changed the way I see myself and the world around me.",
  name: "Ananya Mehta",
  role: "",
  location: "Mumbai",
};

const testimonials = [
  {
    quote: "The Agam Vachan sessions opened my eyes to the depth of our scriptures. I went from passively attending to actively seeking knowledge.",
    name: "Rohan Jain",
    role: "Education Seva Volunteer",
    tag: "AGAM VACHAN",
  },
  {
    quote: "Seva at YoungJains taught me that service is not about doing things for others — it's about growing together. Every session left me more grounded.",
    name: "Priya Shah",
    role: "Community Seva Lead",
    tag: "SEVA",
  },
  {
    quote: "Chaturmas with YoungJains was transformative. The daily pravachans, the discipline, the reflection circles — it felt like a spiritual reset.",
    name: "Arjun Kothari",
    role: "Chaturmas Participant",
    tag: "CHATURMAS",
  },
  {
    quote: "I joined as someone who barely knew Jain philosophy. The Paathshala sessions made everything so relatable. Now I teach children myself.",
    name: "Nisha Sanghvi",
    role: "Paathshala Mentor",
    tag: "PAATHSHALA",
  },
  {
    quote: "The reflection circles after each session are the most powerful part. That's where real transformation happens — in honest conversation.",
    name: "Karan Doshi",
    role: "Swadhyay Circle Member",
    tag: "SWADHYAY",
  },
  {
    quote: "As a young professional, I struggled to connect faith with daily life. YoungJains bridged that gap with practical wisdom and real community.",
    name: "Meera Vora",
    role: "Young Professional Member",
    tag: "COMMUNITY",
  },
  // {
  //   quote: "Volunteering in the content team helped me use my design skills for something meaningful. Creating materials for Paathshala was deeply fulfilling.",
  //   name: "Dhruv Bhandari",
  //   role: "Creative Seva Volunteer",
  //   tag: "CREATIVE SEVA",
  // },
  // {
  //   quote: "The meditation sessions during Chaturmas brought a stillness I had never experienced. It wasn't about escaping life — it was about truly being present.",
  //   name: "Riya Jain",
  //   role: "Meditation Practitioner",
  //   tag: "MEDITATION",
  // },
];

const stats = [
  { num: "200+", label: "Members Impacted" },
  { num: "50+", label: "Seva Volunteers" },
  { num: "30+", label: "Sessions Held" },
  { num: "12+", label: "Cities Reached" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero badge="TESTIMONIALS" title={<>What Our Members <strong>Say</strong></>} subtitle="Real stories from real members — hear how YoungJains has made a difference in their lives, learning, and spiritual growth." />

      {/* ═══ STATS STRIP ═══ */}
      <section style={{ padding: "48px 40px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div style={{ textAlign: "center", padding: "16px 12px" }}>
                <div style={{ fontFamily: "var(--fh)", fontSize: 36, fontWeight: 800, color: "#fff" }}>{s.num}</div>
                <div style={{ fontFamily: "var(--fb)", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ FEATURED TESTIMONIAL ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <Reveal>
            <div style={{ background: "#fff", borderRadius: 24, padding: "48px 44px", border: "1.5px solid rgba(15,35,106,0.06)", position: "relative", overflow: "hidden" }}>
              {/* Accent bar */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--red), var(--navy))" }} />
              {/* Quote mark */}
              <div style={{ fontFamily: "serif", fontSize: 72, color: "var(--red)", opacity: 0.12, lineHeight: 1, marginBottom: -10 }}>&ldquo;</div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 20, lineHeight: 1.85, color: "var(--navy)", fontStyle: "italic" }}>
                {featured.quote}
              </p>
              <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--ice)", display: "flex", alignItems: "center", gap: 16 }}>
                {/* Avatar placeholder */}
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, flexShrink: 0 }}>
                  {featured.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--navy)" }}>{featured.name}</div>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)" }}>{/* featured.role */} {featured.location}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ MEMBER STORIES GRID ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="MEMBER STORIES" title={<>Voices from the <span style={{ fontWeight: 800, color: "var(--red)" }}>Community</span></>} subtitle="Every journey is unique. Here's what our members and volunteers have to say." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div style={{
                  background: "#fff", borderRadius: 20, padding: "32px 28px",
                  border: "1.5px solid rgba(15,35,106,0.06)", height: "100%",
                  display: "flex", flexDirection: "column",
                }}>
                  {/* Tag */}
                  <div style={{ display: "inline-block", padding: "4px 10px", borderRadius: 6, background: i % 2 === 0 ? "rgba(15,35,106,0.06)" : "rgba(253,24,16,0.06)", alignSelf: "flex-start", marginBottom: 16 }}>
                    <span style={{ fontFamily: "var(--fb)", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: i % 2 === 0 ? "var(--navy)" : "var(--red)" }}>{t.tag}</span>
                  </div>
                  {/* Quote */}
                  <div style={{ fontFamily: "serif", fontSize: 36, color: "var(--red)", opacity: 0.15, lineHeight: 1, marginBottom: -4 }}>&ldquo;</div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.8, color: "var(--slate)", fontStyle: "italic", flex: 1 }}>
                    {t.quote}
                  </p>
                  {/* Author */}
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid var(--ice)", display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: i % 2 === 0 ? "var(--navy)" : "var(--red)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontFamily: "var(--fh)", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: "var(--navy)" }}>{t.name}</div>
                      <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--slate)" }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SHARE YOUR STORY ═══ */}
      <section style={{ padding: "80px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <SectionHeader badge="YOUR TURN" title={<>Share Your <span style={{ fontWeight: 800, color: "var(--red)" }}>Story</span></>} subtitle="Have YoungJains made a difference in your life? We'd love to hear from you." />
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)", lineHeight: 1.75 }}>
              Send your testimonial to <strong style={{ color: "var(--navy)" }}>stories@youngjains.org</strong> and inspire others on their journey.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "absolute", top: "-15%", right: "10%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(253,24,16,0.07) 0%, transparent 60%)", filter: "blur(50px)" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 34, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Want to Be Part of <span style={{ fontWeight: 800, color: "var(--red-l)" }}>These Stories?</span>
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "rgba(255,255,255,0.45)", marginTop: 12, lineHeight: 1.7 }}>
              Join YoungJains and begin your own journey of learning, seva, and transformation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
              {/* <Link href="/volunteer" style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, background: "var(--red)", color: "#fff", padding: "14px 32px", borderRadius: 12, textDecoration: "none" }}>Join the Community →</Link> */}
              {/* <Link href="/impact-stories" style={{ fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14, border: "2px solid rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: 12, textDecoration: "none" }}>← Back to Impact</Link> */}
              <Button href="/volunteer" text="Join the Community" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
