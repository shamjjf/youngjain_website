import type { NavItem } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Volunteer",
    href: "/volunteer",
    children: [
      { label: "Seva Pathways", href: "/volunteer/seva-pathways" },
      { label: "Seva Journey", href: "/volunteer/seva-journey" },
    ],
  },
  { label: "Events", href: "/events" },
  {
    label: "Impact & Stories",
    href: "/impact-stories",
    children: [
      { label: "Awards", href: "/impact-stories/awards" },
      // { label: "Achievements", href: "/impact-stories/achievements" },
      { label: "Testimonials", href: "/impact-stories/testimonials" },
      { label: "Photos & Videos", href: "/impact-stories/photos-videos" },
    ],
  },
  {
    label: "Education",
    href: "/education",
    children: [
      { label: "Agam Vachan", href: "/education/agam-vachan" },
      // { label: "Paathshala", href: "/education/paathshala" },
      { label: "Swadhyay", href: "/education/swadhyay" },
      { label: "Chaturmas", href: "/education/chaturmas" },
    ],
  },
  // {
  //   label: "Our Bulletins",
  //   href: "/our-bulletins",
  //   children: [
  //     { label: "Blogs", href: "/our-bulletins/blogs" },
  //     { label: "Newsletter", href: "/our-bulletins/newsletter" },
  //   ],
  // },
];

export const HERO_SLIDES = [
  { src: "/assets/images/hero/slide-1.svg", alt: "Young Jains community gathering" },
  { src: "/assets/images/hero/slide-2.svg", alt: "Jain temple and youth" },
  { src: "/assets/images/hero/slide-3.svg", alt: "Youth workshop and learning" },
  { src: "/assets/images/hero/slide-4.svg", alt: "Cultural celebration" },
];

export const PRINCIPLES = [
  { name: "Ahimsa", sub: "Non-Violence", desc: "Choose kindness in daily interactions, follow a mindful vegetarian/vegan diet, avoid bullying or hurting others.", icon: "🕊️" },
  { name: "Satya", sub: "Truthfulness", desc: "Communicate honestly, avoid gossip, speak with respect, and stay true to your values.", icon: "✦" },
  { name: "Asteya", sub: "Non-Stealing", desc: "Respect others' work and time, avoid copying or taking credit unfairly.", icon: "◈" },
  { name: "Brahmacharya", sub: "Self-Discipline", desc: "Practise balance, avoid impulsive reactions, stay focused on personal growth.", icon: "◉" },
  { name: "Aparigraha", sub: "Non-Attachment", desc: "Choose simplicity, practise gratitude, avoid comparison, and help others.", icon: "❋" },
];

export const FOOTER_GROUPS = [
  { title: "Quick Links", links: [
    { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
    { label: "Volunteer", href: "/volunteer" }, { label: "Events", href: "/events" },{ label: "Contact Us", href: "/contact" }
  ]},
  { title: "Education", links: [
    { label: "Agam Vachan", href: "/education/agam-vachan" },
    // { label: "Paathshala", href: "/education/paathshala" },
    { label: "Swadhyay", href: "/education/swadhyay" },
    { label: "Chaturmas", href: "/education/chaturmas" },
  ]},
  // { title: "Connect", links: [
  //   { label: "Instagram", href: "#" }, { label: "YouTube", href: "#" },
  //   { label: "WhatsApp", href: "#" }, { label: "Email", href: "#" },
  // ]},
];

export const MARQUEE_WORDS = [
  "AHIMSA","अहिंसा","SATYA","सत्य","ASTEYA","अस्तेय",
  "BRAHMACHARYA","ब्रह्मचर्य","APARIGRAHA","अपरिग्रह",
  "NON-VIOLENCE","TRUTHFULNESS","COMPASSION","MINDFULNESS",
];
