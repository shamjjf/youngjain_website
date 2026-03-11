"use client";
import React, { useState } from "react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";

// ─── Awards Data — replace images with your actual award photos ───
const featuredAwards = [
  {
    title: "Best Youth Community Initiative",
    year: "2025",
    org: "Jain International Organisation",
    desc: "Recognised for outstanding contribution towards youth engagement in Jain education and cultural preservation.",
    img: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",
  },
  {
    title: "Excellence in Seva & Outreach",
    year: "2024",
    org: "National Seva Foundation",
    desc: "Awarded for impactful community service projects including food drives, eco-cleanups, and health camps.",
    img: "https://images.unsplash.com/photo-1553729459-uj4a9e2d0dec?w=600&q=80",
  },
  {
    title: "Spiritual Education Leadership",
    year: "2024",
    org: "Jain Education Board",
    desc: "Honoured for innovative Paathshala and Swadhyay programs that made Jain philosophy accessible to youth.",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
  },
  {
    title: "Youth Empowerment Award",
    year: "2023",
    org: "Cultural Heritage Council",
    desc: "Recognised for creating platforms that empower young Jains to lead, learn, and serve their communities.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
  },
];

// ─── Gallery Images — replace with your actual award ceremony / event photos ───
const galleryImages = [
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", caption: "Award Ceremony 2025" },
  { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80", caption: "Youth Leadership Summit" },
  { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80", caption: "Community Recognition Event" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", caption: "Seva Excellence Honours" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", caption: "Annual Gathering 2024" },
  { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&q=80", caption: "Team Celebration" },
  { src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80", caption: "Education Workshop Award" },
  { src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80", caption: "Paathshala Recognition" },
];

export default function AwardsPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <style>{`
        .award-card{background:#fff;border-radius:20px;overflow:hidden;border:1.5px solid rgba(15,35,106,0.06);transition:all 0.5s cubic-bezier(.16,1,.3,1)}
        .award-card:hover{transform:translateY(-8px);box-shadow:0 24px 60px rgba(15,35,106,0.1)}
        .award-img{width:100%;height:220px;object-fit:cover;transition:transform 0.6s cubic-bezier(.16,1,.3,1)}
        .award-card:hover .award-img{transform:scale(1.05)}
        .gallery-item{border-radius:16px;overflow:hidden;cursor:pointer;position:relative;transition:all 0.4s cubic-bezier(.16,1,.3,1)}
        .gallery-item:hover{transform:translateY(-4px);box-shadow:0 16px 40px rgba(15,35,106,0.1)}
        .gallery-item img{width:100%;height:100%;object-fit:cover;transition:transform 0.6s cubic-bezier(.16,1,.3,1)}
        .gallery-item:hover img{transform:scale(1.08)}
        .gallery-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(8,20,69,0.7) 0%,transparent 50%);opacity:0;transition:opacity 0.4s;display:flex;align-items:flex-end;padding:16px}
        .gallery-item:hover .gallery-overlay{opacity:1}
        .lightbox{position:fixed;inset:0;z-index:9999;background:rgba(8,20,69,0.92);backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:center;padding:40px;animation:fadeIn 0.3s ease}
        .lightbox img{max-width:90vw;max-height:80vh;border-radius:16px;object-fit:contain;box-shadow:0 20px 80px rgba(0,0,0,0.4)}
        .lightbox-close{position:absolute;top:24px;right:32px;background:none;border:none;cursor:pointer;color:rgba(255,255,255,0.7);font-size:32px;transition:color 0.3s}
        .lightbox-close:hover{color:#fff}
        .lightbox-nav{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.1);border:none;cursor:pointer;color:#fff;width:48px;height:48px;border-radius:50%;font-size:20px;transition:all 0.3s;display:flex;align-items:center;justify-content:center}
        .lightbox-nav:hover{background:rgba(255,255,255,0.2)}
        .lightbox-caption{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);color:rgba(255,255,255,0.6);font-family:var(--fb);font-size:14px;letter-spacing:1px}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        .stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px}
        @media(max-width:900px){
          .awards-grid{grid-template-columns:1fr!important}
          .gallery-grid{grid-template-columns:repeat(2,1fr)!important}
          .stats-row{grid-template-columns:repeat(2,1fr)!important}
        }
      `}</style>

      {/* ═══ HERO ═══ */}
      <PageHero
        badge="RECOGNITION"
        title={<>Awards & <strong>Honours</strong></>}
        subtitle="Celebrating the milestones, recognitions, and accolades that honour our community's dedication to Jain values and youth empowerment."
      />

      {/* ═══ STATS STRIP ═══ */}
      <section style={{ padding: "60px 40px", background: "var(--navy)", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="stats-row">
            {[
              { num: "12+", label: "Awards Won" },
              { num: "8+", label: "Organisations" },
              { num: "5+", label: "Years Running" },
              { num: "50+", label: "Members Recognised" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div style={{ textAlign: "center", padding: "20px 12px" }}>
                  <div style={{ fontFamily: "var(--fh)", fontSize: 40, fontWeight: 800 }}>{stat.num}</div>
                  <div style={{ fontFamily: "var(--fb)", fontSize: 12, opacity: 0.5, marginTop: 4, letterSpacing: 1.5, textTransform: "uppercase" }}>{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED AWARDS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="FEATURED"
              title={<>Our Proudest <span style={{ fontWeight: 800, color: "var(--red)" }}>Moments</span></>}
              subtitle="Key awards and recognitions that mark our community's journey."
            />
          </Reveal>

          <div className="awards-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {featuredAwards.map((award, i) => (
              <Reveal key={award.title} delay={i * 0.1}>
                <div className="award-card">
                  <div style={{ overflow: "hidden" }}>
                    <img src={award.img} alt={award.title} className="award-img" loading="lazy" />
                  </div>
                  <div style={{ padding: "28px 28px 32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                      <span style={{
                        fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 1.5,
                        background: "rgba(253,24,16,0.08)", color: "var(--red)",
                        padding: "4px 10px", borderRadius: 6,
                      }}>{award.year}</span>
                      <span style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--slate)" }}>{award.org}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--fh)", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{award.title}</h3>
                    <p style={{ fontFamily: "var(--fb)", fontSize: 14, lineHeight: 1.7, color: "var(--slate)" }}>{award.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PHOTO GALLERY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal>
            <SectionHeader
              badge="GALLERY"
              title={<>Award <span style={{ fontWeight: 800, color: "var(--red)" }}>Moments</span></>}
              subtitle="Capturing the joy, pride, and togetherness from our award ceremonies and recognition events."
            />
          </Reveal>

          {/* Masonry-style grid with varying heights */}
          <div className="gallery-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            gridAutoRows: 180,
          }}>
            {galleryImages.map((img, i) => {
              // Make some images taller for masonry effect
              const tall = i === 0 || i === 3 || i === 5;
              return (
                <Reveal key={i} delay={i * 0.06}>
                  <div
                    className="gallery-item"
                    style={{ gridRow: tall ? "span 2" : "span 1", height: "100%" }}
                    onClick={() => setLightbox(i)}
                  >
                    <img src={img.src} alt={img.caption} loading="lazy" />
                    <div className="gallery-overlay">
                      <span style={{ fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, color: "#fff" }}>
                        {img.caption}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ LIGHTBOX MODAL ═══ */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <button
            className="lightbox-nav"
            style={{ left: 20 }}
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length); }}
          >←</button>
          <img
            src={galleryImages[lightbox].src.replace("w=600", "w=1200")}
            alt={galleryImages[lightbox].caption}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav"
            style={{ right: 20 }}
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % galleryImages.length); }}
          >→</button>
          <div className="lightbox-caption">
            {galleryImages[lightbox].caption} — {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}

      {/* ═══ CTA ═══ */}
      <section style={{
        padding: "80px 40px", textAlign: "center",
        background: "linear-gradient(135deg, #081445 0%, var(--navy) 50%, #1A3494 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 600, margin: "0 auto" }}>
          <Reveal>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🏆</div>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 32, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Want to Be Part of Our <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Next Achievement?</span>
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "rgba(255,255,255,0.45)", marginTop: 12, lineHeight: 1.7 }}>
              Join YoungJains and help us create more moments worth celebrating.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="/volunteer" style={{
              display: "inline-block", marginTop: 28,
              fontFamily: "var(--fb)", fontWeight: 700, fontSize: 15,
              background: "var(--red)", color: "#fff",
              padding: "16px 36px", borderRadius: 12, textDecoration: "none",
              transition: "all 0.4s",
            }}>
              Join the Community →
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
