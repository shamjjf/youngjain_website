import type { Principle, InvolvedItem, NavLink, ContactItem, StatItem } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Principles", href: "principles" },
  { label: "Get Involved", href: "get-involved" },
  { label: "Contact", href: "contact" },
];

export const PRINCIPLES: Principle[] = [
  { name: "Ahimsa", sub: "Non-Violence", desc: "Choose kindness in daily interactions, follow a mindful vegetarian/vegan diet, avoid bullying or hurting others through words or actions.", icon: "🕊️" },
  { name: "Satya", sub: "Truthfulness", desc: "Communicate honestly, avoid gossip, speak with respect, and stay true to your values in tough situations.", icon: "✦" },
  { name: "Asteya", sub: "Non-Stealing", desc: "Respect others' work and time, avoid copying or taking credit unfairly, and use shared resources responsibly.", icon: "◈" },
  { name: "Brahmacharya", sub: "Self-Discipline", desc: "Practise balance, avoid impulsive reactions, stay focused on personal growth, and maintain emotional awareness.", icon: "◉" },
  { name: "Aparigraha", sub: "Non-Attachment", desc: "Choose simplicity, practise gratitude, avoid comparison, and use your time and resources to help others.", icon: "❋" },
];

export const INVOLVED_ITEMS: InvolvedItem[] = [
  { title: "Community Gatherings", desc: "Be part of youth meet-ups, discussions and group activities that encourage learning and connection.", tag: "CONNECT" },
  { title: "Workshops & Service", desc: "Engage in talks, mindfulness sessions, and volunteer projects that promote compassion and positive impact.", tag: "LEARN" },
  { title: "Celebrate Together", desc: "Take part in cultural events, festivals, and meaningful traditions in a welcoming, youth-friendly environment.", tag: "CELEBRATE" },
  { title: "Support & Contribute", desc: "Donate, share your skills, ideas, or creativity; every effort helps strengthen the community and its outreach.", tag: "GIVE" },
];

export const CONTACT_ITEMS: ContactItem[] = [
  { label: "EMAIL", value: "hello@youngjains.org", icon: "✉" },
  { label: "COMMUNITY", value: "Join our WhatsApp", icon: "💬" },
  { label: "SOCIAL", value: "@youngjains", icon: "📱" },
];

export const STAT_CARDS: StatItem[] = [
  { num: "500+", label: "Active Members", bg: "var(--navy)", color: "#fff" },
  { num: "50+", label: "Events Hosted", bg: "var(--red)", color: "#fff" },
  { num: "20+", label: "Cities Reached", bg: "#EEF1F8", color: "var(--navy)" },
  { num: "∞", label: "Compassion Shared", bg: "#FFF0F0", color: "var(--red)" },
];

export const MARQUEE_WORDS = [
  "AHIMSA", "अहिंसा", "SATYA", "सत्य", "ASTEYA", "अस्तेय",
  "BRAHMACHARYA", "ब्रह्मचर्य", "APARIGRAHA", "अपरिग्रह",
  "NON-VIOLENCE", "TRUTHFULNESS", "COMPASSION", "MINDFULNESS",
];

export const FOOTER_GROUPS = [
  { title: "Explore", links: ["Home", "About", "Principles", "Get Involved"] },
  { title: "Community", links: ["Events", "Workshops", "Volunteer", "Donate"] },
  { title: "Connect", links: ["Instagram", "YouTube", "WhatsApp", "Email"] },
];

// Hero background carousel slides
// Replace these .svg placeholders with your actual .jpg/.webp images
export const HERO_SLIDES = [
  { src: "/assets/images/hero/slide-1.svg", alt: "Young Jains community gathering" },
  { src: "/assets/images/hero/slide-2.svg", alt: "Jain temple and youth" },
  { src: "/assets/images/hero/slide-3.svg", alt: "Youth workshop and learning" },
  { src: "/assets/images/hero/slide-4.svg", alt: "Cultural celebration" },
];
