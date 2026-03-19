"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_GROUPS } from "@/lib/constants";
import WhatsappLink from "../whatsapp-link/whatsapp-link";
import { ScrollToTop } from "../ui/scroll-top/scroll-top";

export function Footer() {
  const socialLinks = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/TeamYoungJains/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.427.402a4.92 4.92 0 0 1 1.788 1.164 4.92 4.92 0 0 1 1.164 1.788c.162.457.346 1.257.402 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.402 2.427a4.92 4.92 0 0 1-1.164 1.788 4.92 4.92 0 0 1-1.788 1.164c-.457.162-1.257.346-2.427.402-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.427-.402a4.92 4.92 0 0 1-1.788-1.164 4.92 4.92 0 0 1-1.164-1.788c-.162-.457-.346-1.257-.402-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.402-2.427a4.92 4.92 0 0 1 1.164-1.788A4.92 4.92 0 0 1 4.723 2.635c.457-.162 1.257-.346 2.427-.402 1.266-.058 1.646-.07 4.85-.07zm0 1.838c-3.18 0-3.557.012-4.808.069-1.03.046-1.59.218-1.96.363a3.107 3.107 0 0 0-1.124.73 3.107 3.107 0 0 0-.73 1.124c-.145.37-.317.93-.363 1.96-.057 1.251-.069 1.628-.069 4.808s.012 3.557.069 4.808c.046 1.03.218 1.59.363 1.96.17.434.407.828.73 1.124.296.323.69.56 1.124.73.37.145.93.317 1.96.363 1.251.057 1.628.069 4.808.069s3.557-.012 4.808-.069c1.03-.046 1.59-.218 1.96-.363a3.107 3.107 0 0 0 1.124-.73 3.107 3.107 0 0 0 .73-1.124c.145-.37.317-.93.363-1.96.057-1.251.069-1.628.069-4.808s-.012-3.557-.069-4.808c-.046-1.03-.218-1.59-.363-1.96a3.107 3.107 0 0 0-.73-1.124 3.107 3.107 0 0 0-1.124-.73c-.37-.145-.93-.317-1.96-.363-1.251-.057-1.628-.069-4.808-.069z"/>
          <path d="M12 5.838a6.163 6.163 0 1 0 0 12.326 6.163 6.163 0 0 0 0-12.326zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z"/>
          <circle cx="18.406" cy="5.594" r="1.44"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/TeamJJFIndia/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5C4.98 5.3 3.4 6.7 1.5 6.7S-1 5.3-1 3.5 0.6.3 2.5.3s2.48 1.4 2.48 3.2zM0 8.5h5v15H0v-15zm7.5 0h4.8v2.1h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8v8.8h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8h-5v-15z"/>
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/TeamYoungJains/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.35C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.919.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.592l-.467 3.622h-3.125V24h6.127C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@TeamYoungJains",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a2.96 2.96 0 0 0-2.086-2.096C19.659 3.5 12 3.5 12 3.5s-7.659 0-9.412.59A2.96 2.96 0 0 0 .502 6.186 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .502 5.814 2.96 2.96 0 0 0 2.086 2.096c1.753.59 9.412.59 9.412.59s7.659 0 9.412-.59a2.96 2.96 0 0 0 2.086-2.096A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.502-5.814zM9.546 15.568V8.432l6.545 3.568-6.545 3.568z"/>
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com/TeamYoungJains/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      ),
    },
    {
      label: "Thread",
      href: "https://www.threads.net/@TeamYoungJains/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6.81 9.204c0-.41.197-1.062 1.727-1.062.469 0 .758.034 1.146.121-.124 1.606-.91 1.818-1.674 1.818-.418 0-1.2-.218-1.2-.877Z"/>
          <path d="M2.59 16h10.82A2.59 2.59 0 0 0 16 13.41V2.59A2.59 2.59 0 0 0 13.41 0H2.59A2.59 2.59 0 0 0 0 2.59v10.82A2.59 2.59 0 0 0 2.59 16M5.866 5.91c.567-.81 1.315-1.126 2.35-1.126.73 0 1.351.246 1.795.711.443.466.696 1.132.754 1.983q.368.154.678.363c.832.559 1.29 1.395 1.29 2.353 0 2.037-1.67 3.806-4.692 3.806-2.595 0-5.291-1.51-5.291-6.004C2.75 3.526 5.361 2 8.033 2c1.234 0 4.129.182 5.217 3.777l-1.02.264c-.842-2.56-2.607-2.968-4.224-2.968-2.675 0-4.187 1.628-4.187 5.093 0 3.107 1.69 4.757 4.222 4.757 2.083 0 3.636-1.082 3.636-2.667 0-1.079-.906-1.595-.953-1.595-.177.925-.651 2.482-2.733 2.482-1.213 0-2.26-.838-2.26-1.936 0-1.568 1.488-2.136 2.663-2.136.44 0 .97.03 1.247.086 0-.478-.404-1.296-1.426-1.296-.911 0-1.16.288-1.45.624l-.024.027c-.202-.135-.875-.601-.875-.601Z"/>
        </svg>
      ),
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/TeamYoungJains/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.372 0 0 5.373 0 12c0 4.99 3.657 9.14 8.438 10.086-.117-.856-.222-2.172.047-3.106.242-.82 1.56-5.216 1.56-5.216s-.398-.798-.398-1.977c0-1.852 1.073-3.235 2.409-3.235 1.137 0 1.686.854 1.686 1.877 0 1.143-.727 2.85-1.103 4.436-.314 1.34.667 2.43 1.981 2.43 2.378 0 4.21-2.503 4.21-6.106 0-3.189-2.295-5.422-5.567-5.422-3.792 0-6.03 2.845-6.03 5.781 0 1.14.438 2.363.986 3.027a.397.397 0 0 1 .09.383c-.098.421-.316 1.34-.358 1.526-.056.248-.18.302-.415.183-1.542-.72-2.505-2.966-2.505-4.773 0-3.889 2.829-7.464 8.166-7.464 4.28 0 7.604 3.05 7.604 7.131 0 4.252-2.677 7.673-6.395 7.673-1.247 0-2.419-.648-2.818-1.413l-.766 2.91c-.277 1.056-1.03 2.377-1.532 3.188C8.678 23.847 10.3 24 12 24c6.628 0 12-5.373 12-12S18.628 0 12 0z"/>
        </svg>
      ),
    },
    {
      label: "Medium",
      href: "https://medium.com/@TeamYoungJains/",
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/>
          </svg>
      ),
    },
  ];

  return (
    <footer style={{ padding: "64px 40px 36px", background: "var(--navy-d)", color: "rgba(255,255,255,0.4)" }}>
      <WhatsappLink />
      <ScrollToTop />
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div>
            <Image
              src="/assets/images/icons/logo-white.png"
              alt="Young Jains"
              width={150}
              height={37}
              style={{ opacity: 0.85, marginBottom: 16 }}
            />
            <p style={{ fontFamily: "var(--fb)", fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Empowering the next generation to live with compassion, awareness, and purpose through the timeless wisdom of Jain Dharma.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <div key={g.title}>
              <div style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--red-l)", marginBottom: 18, textTransform: "uppercase" }}>{g.title}</div>
              {g.links.map((l) => (
                <Link key={l.label} href={l.href} style={{ display: "block", fontFamily: "var(--fb)", fontSize: 13, padding: "5px 0", color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >{l.label}</Link>
              ))}
            </div>
          ))}

          <div>
            <div style={{ fontFamily: "var(--fb)", fontSize: 11, fontWeight: 700, letterSpacing: 2, color: "var(--red-l)", marginBottom: 18, textTransform: "uppercase" }}>Stay Connected</div>
            
            {/* <div style={{ display: "flex", gap: 8, alignItems: "flex-start", padding: "5px 0" }}>
              <div style={{ fontFamily: "var(--fb)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>Jainam Tower, Sai Park, Thergaon, Pune - 411033, Maharashtra, India</div>
            </div> */}
            <Link href="mailto:info@youngjains.com" style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 0", color: "rgba(255,255,255,0.4)", transition: "color 0.3s", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--fb)", fontSize: 13 }}>Jainam Tower, Sai Park, Thergaon, Pune - 411033, Maharashtra, India</span>
            </Link>
            
            <Link href="mailto:info@youngjains.com" style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 0", color: "rgba(255,255,255,0.4)", transition: "color 0.3s", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--fb)", fontSize: 13 }}>info@youngjains.com</span>
            </Link>

            <Link href="tel:+919552805280" style={{ display: "flex", gap: 8, alignItems: "center", padding: "5px 0", color: "rgba(255,255,255,0.4)", transition: "color 0.3s", textDecoration: "none" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                </svg>
              </div>
              <span style={{ fontFamily: "var(--fb)", fontSize: 13 }}>+91 95 5280 5280</span>
            </Link>
          </div>
        </div>

        <div style={{ paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "var(--fb)", fontSize: 12 }}>
          <div>© 2026 Young Jains Community. All Rights Reserved.</div>
          <div style={{ display: "flex", gap: 20 }}><span style={{ cursor: "pointer" }}>Terms</span><span style={{ cursor: "pointer" }}>Privacy</span></div>
        </div>
      </div>
    </footer>
  );
}
