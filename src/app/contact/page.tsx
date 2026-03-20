"use client";
import React, { useState } from "react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  const inputBase: React.CSSProperties = {
    width: "100%", padding: "14px 18px", borderRadius: 12,
    border: "1.5px solid rgba(15,35,106,0.1)", fontFamily: "var(--fb)",
    fontSize: 15, color: "var(--navy)", background: "#fff", outline: "none",
    transition: "border-color 0.3s",
  };

  const labelBase: React.CSSProperties = {
    fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600,
    color: "var(--navy)", marginBottom: 6, display: "block",
  };

  return (
    <>
      <PageHero badge="CONTACT US" title={<>Get in <strong>Touch</strong></>} subtitle="Have a question, want to volunteer, or wish to connect? We'd love to hear from you." />

      {/* ═══ CONTACT INFO + FORM ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div className="contact-main" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>

          {/* ── Left: Info ── */}
          <div>
            <Reveal>
              <SectionHeader badge="REACH OUT" title={<>We Are <span style={{ fontWeight: 800, color: "var(--red)" }}>Here</span></>} center={false} />
            </Reveal>
            <Reveal delay={0.1}>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.8, color: "var(--slate)", marginBottom: 28 }}>
                Whether you want to join our community, volunteer for seva, collaborate, or learn more — reach out to us.
              </p>
            </Reveal>

            {[
              { icon: "✉️", label: "EMAIL", value: "Info@youngjains.org", href: "mailto:Info@youngjains.org" },
              { icon: "📱", label: "PHONE", value: "+91 95 5280 5280", href: "tel:+91 95 5280 5280" },
              { icon: "📍", label: "LOCATION", value: "Jainam Tower, Sai Park, Thergaon, Pune - 411033, Maharashtra, India", href: "https://maps.app.goo.gl/gHCnkmSYaxzG3yvAA" },
              // { icon: "💬", label: "WHATSAPP", value: "Join our group", href: "#" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={0.15 + i * 0.06}>
                <a href={item.href} style={{ textDecoration: "none", display: "block", marginBottom: 12 }}>
                  <div style={{
                    background: "#fff", borderRadius: 14, padding: "16px 20px",
                    border: "1.5px solid rgba(15,35,106,0.06)", display: "flex", gap: 14, alignItems: "center",
                    transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
                  }}
                    onMouseOver={e => { e.currentTarget.style.transform = "translateX(4px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(15,35,106,0.05)"; }}
                    onMouseOut={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ fontSize: 22, width: 40, height: 40, borderRadius: 10, background: "rgba(15,35,106,0.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontFamily: "var(--fb)", fontSize: 10, fontWeight: 700, color: "var(--red)", letterSpacing: 2 }}>{item.label}</div>
                      <div style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 500, color: "var(--navy)", marginTop: 1 }}>{item.value}</div>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.45}>
              <div style={{ marginTop: 20 }}>
                <div style={{ fontFamily: "var(--fb)", fontSize: 10, fontWeight: 700, color: "var(--red)", letterSpacing: 2, marginBottom: 10 }}>FOLLOW US</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Instagram", "YouTube", "LinkedIn", "Twitter"].map((s) => (
                    <div key={s} style={{
                      padding: "7px 14px", borderRadius: 8, fontFamily: "var(--fb)", fontSize: 12, fontWeight: 600,
                      background: "#fff", color: "var(--navy)", border: "1.5px solid rgba(15,35,106,0.08)", cursor: "pointer", transition: "all 0.3s",
                    }}
                      onMouseOver={e => { e.currentTarget.style.background = "var(--navy)"; e.currentTarget.style.color = "#fff"; }}
                      onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "var(--navy)"; }}
                    >{s}</div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── Right: Form ── */}
          <Reveal delay={0.2}>
            <div style={{
              background: "#fff", borderRadius: 24, padding: "40px 36px",
              border: "1.5px solid rgba(15,35,106,0.06)", boxShadow: "0 8px 40px rgba(15,35,106,0.04)",
            }}>
              <h3 style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>Send Us a Message</h3>
              <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--slate)", marginBottom: 24 }}>Fill the form and we&apos;ll get back to you soon.</p>

              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "40px 16px" }}>
                  <div style={{ fontSize: 44, marginBottom: 12 }}>✅</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>Message Sent!</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--slate)" }}>Thank you! We&apos;ll get back to you soon.</p>
                  <button onClick={() => setStatus("idle")} style={{
                    marginTop: 16, padding: "10px 24px", borderRadius: 10, border: "1.5px solid var(--navy)",
                    background: "transparent", color: "var(--navy)", fontFamily: "var(--fb)", fontWeight: 700, fontSize: 13, cursor: "pointer",
                  }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={labelBase}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" style={inputBase}
                        onFocus={e => e.target.style.borderColor = "var(--navy)"} onBlur={e => e.target.style.borderColor = "rgba(15,35,106,0.1)"} />
                    </div>
                    <div>
                      <label style={labelBase}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" style={inputBase}
                        onFocus={e => e.target.style.borderColor = "var(--navy)"} onBlur={e => e.target.style.borderColor = "rgba(15,35,106,0.1)"} />
                    </div>
                  </div>

                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                    <div>
                      <label style={labelBase}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" style={inputBase}
                        onFocus={e => e.target.style.borderColor = "var(--navy)"} onBlur={e => e.target.style.borderColor = "rgba(15,35,106,0.1)"} />
                    </div>
                    <div>
                      <label style={labelBase}>Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required style={{ ...inputBase, cursor: "pointer" }}
                        onFocus={e => e.target.style.borderColor = "var(--navy)"} onBlur={e => e.target.style.borderColor = "rgba(15,35,106,0.1)"}>
                        <option value="">Select subject</option>
                        <option value="Volunteer">I want to Volunteer</option>
                        <option value="Education">Education Programs</option>
                        <option value="Events">Events & Gatherings</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="General">General Inquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <label style={labelBase}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Write your message..."
                      style={{ ...inputBase, resize: "vertical", minHeight: 100 }}
                      onFocus={e => e.target.style.borderColor = "var(--navy)"} onBlur={e => e.target.style.borderColor = "rgba(15,35,106,0.1)"} />
                  </div>

                  {status === "error" && (
                    <div style={{ padding: "10px 16px", borderRadius: 10, background: "rgba(253,24,16,0.06)", marginBottom: 14 }}>
                      <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--red)" }}>{errorMsg}</p>
                    </div>
                  )}

                  <button type="submit" disabled={status === "loading"} style={{
                    width: "100%", padding: "15px 28px", borderRadius: 12, border: "none",
                    cursor: status === "loading" ? "wait" : "pointer",
                    fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15,
                    background: status === "loading" ? "var(--slate)" : "var(--red)", color: "#fff", transition: "all 0.4s",
                  }}>
                    {status === "loading" ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ QUOTE ═══ */}
      <section style={{ padding: "72px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fd)", fontSize: 20, color: "var(--navy)", opacity: 0.3, marginBottom: 14 }}>परस्परोपग्रहो जीवानाम्</div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, lineHeight: 1.8, color: "var(--slate)" }}>
              We believe in the power of connection. Every message strengthens our community.
            </p>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, fontWeight: 600, color: "var(--navy)", marginTop: 12 }}>
              Your voice matters. <span style={{ color: "var(--red)" }}>Let&apos;s grow together.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <section style={{ padding: "72px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 500, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <div style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>YoungJains</div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.3)", marginTop: 8, lineHeight: 1.7 }}>
              Compassion in Action. Values in Practice.<br />Serve with Humility. Act with Awareness. Rise with Purpose.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
