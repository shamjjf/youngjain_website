"use client";
import React, { useState } from "react";
import { Reveal, PageHero, SectionHeader } from "@/components/ui";
import Button from "@/components/ui/button/button";

// ─── Gallery Data — replace with your actual images ───
const categories = ["All", "Events", "Seva", "Education", "Celebrations", "Community"];

const photos = [

  // Events images
  { src: "/assets/images/impact-stories/photos/events-1.webp", caption: "Maharshi Anand Seva Puraskar", cat: "Events", tall: false },
  { src: "/assets/images/impact-stories/photos/events-2.webp", caption: "Suryadatta 27th Foundation Day", cat: "Events", tall: false },

  // Seva images
  { src: "/assets/images/impact-stories/photos/seva-1.webp", caption: "Guru Vandana", cat: "Seva", tall: false },
  { src: "/assets/images/impact-stories/photos/seva-2.webp", caption: "Jain Seva", cat: "Seva", tall: false },

  // Education images
  { src: "/assets/images/impact-stories/photos/education-1.webp", caption: "Maharshi Anand Seva Puraskar", cat: "Education", tall: true },
  { src: "/assets/images/impact-stories/photos/education-2.webp", caption: "Anand Darbar", cat: "Education", tall: false },
  // { src: "/assets/images/impact-stories/photos/education-3.webp", caption: "Chaturmas Gathering", cat: "Education", tall: false },
  // { src: "/assets/images/impact-stories/photos/education-4.webp", caption: "Meditation Session", cat: "Education", tall: true },
  // { src: "/assets/images/impact-stories/photos/education-5.webp", caption: "Meditation Session", cat: "Education", tall: true },

  // Celebrations images
  { src: "/assets/images/impact-stories/photos/celebration-1.webp", caption: "Jainam’s Birthday", cat: "Celebrations", tall: true },
  { src: "/assets/images/impact-stories/photos/celebration-2.webp", caption: "Mahavir Janmotsav", cat: "Celebrations", tall: false },
  { src: "/assets/images/impact-stories/photos/celebration-3.webp", caption: "Mahavir Janmotsav", cat: "Celebrations", tall: false },
  { src: "/assets/images/impact-stories/photos/celebration-4.webp", caption: "Mahavir Janmotsav", cat: "Celebrations", tall: true },

  // Community images
  { src: "/assets/images/impact-stories/photos/community-1.webp", caption: "Anand Darbar", cat: "Community", tall: false },
  { src: "/assets/images/impact-stories/photos/community-2.webp", caption: "Anand Darbar", cat: "Community", tall: false },
  { src: "/assets/images/impact-stories/photos/community-4.webp", caption: "Maharshi Anand Seva Puraskar", cat: "Community", tall: false },
  { src: "/assets/images/impact-stories/photos/community-5.webp", caption: "Anand Darbar", cat: "Community", tall: false },
  { src: "/assets/images/impact-stories/photos/community-7.webp", caption: "Leadership Summit", cat: "Community", tall: false },
  // { src: "/assets/images/impact-stories/photos/community-3.webp", caption: "Leadership Summit", cat: "Community", tall: false },
  // { src: "/assets/images/impact-stories/photos/community-6.webp", caption: "Leadership Summit", cat: "Community", tall: false },
  // { src: "/assets/images/impact-stories/photos/community-2.webp", caption: "Leadership Summit", cat: "Community", tall: false },
];

// ─── Videos — replace with your actual YouTube embed IDs ───
const videos = [
  { 
    link: "https://youtu.be/4vGxXuTU0r8?si=wJoVn7RIKsHMgx0u", 
    src: "/assets/images/videos/living-jain-values.jpg", 
    title: "Living Jain Values in Real Life", 
    cat: "Events" 
  },
  { 
    link: "https://www.youtube.com/watch?v=vlf455RrI4A", 
    src: "/assets/images/videos/true-wealth-lies.jpg", 
    title: "True Wealth Lies in Wisdom", 
    cat: "Education" 
  },
  { link: "https://www.youtube.com/watch?v=jcoUZEPwZTY", 
    src: "/assets/images/videos/jain-values-in.jpg", 
    title: "Jain Values in Everyday Life", 
    cat: "Seva" 
  },
  { 
    link: "https://www.youtube.com/watch?v=6P4SsxZXb-s&t=84s", 
    src: "/assets/images/videos/the-jain-way.jpg", 
    title: "The Jain Way Of Life", 
    cat: "Celebrations" 
  },
];

export default function PhotosVideosPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredPhotos = activeFilter === "All" ? photos : photos.filter(p => p.cat === activeFilter);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <PageHero badge="GALLERY" title={<>Photos & <strong>Videos</strong></>} subtitle="Relive our best moments — from community gatherings and seva drives to celebrations and learning circles." />

      {/* ═══ STATS ═══ */}
      <section style={{ padding: "48px 40px", background: "var(--navy)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {[
            { num: `${photos.length}+`, label: "Photos" },
            { num: `${videos.length}+`, label: "Videos" },
            { num: `${categories.length - 1}`, label: "Categories" },
            { num: "5+", label: "Years of Memories" },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px 12px" }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 32, fontWeight: 800, color: "#fff" }}>{s.num}</div>
              <div style={{ fontFamily: "var(--fb)", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 4, letterSpacing: 1.5, textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PHOTO GALLERY ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--snow)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="PHOTOS" title={<>Our <span style={{ fontWeight: 800, color: "var(--red)" }}>Moments</span></>} subtitle="Click any photo to view it full-screen." /></Reveal>

          {/* Filter Tabs */}
          <Reveal delay={0.1}>
            <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 36, flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                  padding: "9px 20px", borderRadius: 10, fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600,
                  border: "1.5px solid", cursor: "pointer", transition: "all 0.3s",
                  background: activeFilter === cat ? "var(--navy)" : "#fff",
                  color: activeFilter === cat ? "#fff" : "var(--navy)",
                  borderColor: activeFilter === cat ? "var(--navy)" : "rgba(15,35,106,0.1)",
                }}>{cat}</button>
              ))}
            </div>
          </Reveal>

          {/* Masonry Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, gridAutoRows: 200 }}>
            {filteredPhotos.map((photo, i) => (
              <Reveal key={`${photo.caption}-${i}`} delay={i * 0.04}>
                <div onClick={() => setLightbox(i)} style={{
                  gridRow: photo.tall ? "span 2" : "span 1", height: "100%",
                  borderRadius: 16, overflow: "hidden", cursor: "pointer", position: "relative",
                  transition: "all 0.4s cubic-bezier(.16,1,.3,1)",
                }}
                  onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(15,35,106,0.1)"; }}
                  onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <img src={photo.src} alt={photo.caption} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(.16,1,.3,1)" }}
                    onMouseOver={e => e.currentTarget.style.transform = "scale(1.06)"}
                    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                  />
                  {/* Hover overlay */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,20,69,0.75) 0%, transparent 50%)", opacity: 0, transition: "opacity 0.4s", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: 16 }}
                    onMouseOver={e => e.currentTarget.style.opacity = "1"}
                    onMouseOut={e => e.currentTarget.style.opacity = "0"}
                  >
                    <span style={{ fontFamily: "var(--fb)", fontSize: 13, fontWeight: 600, color: "#fff" }}>{photo.caption}</span>
                    <span style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--red-l)", marginTop: 2 }}>{photo.cat}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div style={{ fontSize: 48, opacity: 0.3, marginBottom: 12 }}>📷</div>
              <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--slate)" }}>No photos in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{
          position: "fixed", inset: 0, zIndex: 9999, background: "rgba(8,20,69,0.92)",
          backdropFilter: "blur(20px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 40,
        }}>
          {/* Close */}
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: 24, right: 32, background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.7)", fontSize: 32 }}>✕</button>
          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + filteredPhotos.length) % filteredPhotos.length); }} style={{
            position: "absolute", left: 20, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", color: "#fff",
            width: 48, height: 48, borderRadius: "50%", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
          }}>←</button>
          {/* Image */}
          <img src={filteredPhotos[lightbox].src.replace("w=600", "w=1200")} alt={filteredPhotos[lightbox].caption}
            onClick={e => e.stopPropagation()}
            style={{ maxWidth: "90vw", maxHeight: "80vh", borderRadius: 16, objectFit: "contain", boxShadow: "0 20px 80px rgba(0,0,0,0.4)" }}
          />
          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % filteredPhotos.length); }} style={{
            position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)",
            background: "rgba(255,255,255,0.1)", border: "none", cursor: "pointer", color: "#fff",
            width: 48, height: 48, borderRadius: "50%", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
          }}>→</button>
          {/* Caption */}
          <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", textAlign: "center" }}>
            <span style={{ fontFamily: "var(--fb)", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>{filteredPhotos[lightbox].caption}</span>
            <span style={{ fontFamily: "var(--fb)", fontSize: 12, color: "rgba(255,255,255,0.3)", marginLeft: 12 }}>{lightbox + 1} / {filteredPhotos.length}</span>
          </div>
        </div>
      )}

      {/* ═══ VIDEOS ═══ */}
      <section style={{ padding: "100px 40px", background: "var(--ice)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Reveal><SectionHeader badge="VIDEOS" title={<>Watch & <span style={{ fontWeight: 800, color: "var(--red)" }}>Learn</span></>} subtitle="Video highlights from our events, workshops, and community activities." /></Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        {videos.map((video, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <a href={video.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
          <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1.5px solid rgba(15,35,106,0.06)", transition: "all 0.4s cubic-bezier(.16,1,.3,1)", cursor: "pointer" }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(15,35,106,0.08)"; }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            {/* Video Thumbnail */}
            <div style={{ position: "relative", paddingBottom: "56.25%", background: "var(--navy)" }}>
              <img src={video.src} alt={video.title} loading="lazy"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
              />
              {/* Play button overlay */}
              <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
              }}>
            <div style={{
              width: 60, height: 60, borderRadius: "50%", background: "var(--red)", display: "flex",
              alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(253,24,16,0.3)",
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff"><path d="M8 5v14l11-7z" /></svg>
            </div>
              </div>
              {/* Category badge */}
              {/* <div style={{ position: "absolute", top: 12, left: 12, padding: "4px 12px", borderRadius: 6, background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}>
            <span style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 600, color: "#fff", letterSpacing: 1 }}>{video.cat}</span>
              </div> */}
            </div>
            <div style={{ padding: "20px 22px" }}>
              <h3 style={{ fontFamily: "var(--fh)", fontSize: 17, fontWeight: 700, color: "var(--navy)", lineHeight: 1.4 }}>{video.title}</h3>
            </div>
          </div>
            </a>
          </Reveal>
        ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "80px 40px", textAlign: "center", position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #081445 0%, var(--navy) 40%, #1A3494 80%, #142B7A 100%)" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <Reveal>
            <h2 style={{ fontFamily: "var(--fh)", fontSize: 30, fontWeight: 300, color: "#fff", lineHeight: 1.3 }}>
              Have Photos or Videos to <span style={{ fontWeight: 800, color: "var(--red-l)" }}>Share?</span>
            </h2>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "rgba(255,255,255,0.45)", marginTop: 12, lineHeight: 1.7 }}>
              If you have captured moments from our events, we&apos;d love to feature them here.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            {/* <a href="mailto:media@youngjains.org" style={{
              display: "inline-block", marginTop: 24, fontFamily: "var(--fb)", fontWeight: 700, fontSize: 14,
              background: "var(--red)", color: "#fff", padding: "14px 32px", borderRadius: 12, textDecoration: "none",
            }}>
              Submit Your Media →
            </a> */}
            <Button href="#" text="Submit Your Media" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
