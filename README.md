# YoungJains Website

A modern, elegant website for the YoungJains community built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

## 🏗️ Project Structure

```
youngjains/
├── public/                          # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout with metadata & global styles
│   │   └── page.tsx                 # Home page — assembles all sections
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx           # Fixed navigation bar
│   │   │   ├── Footer.tsx           # Site footer
│   │   │   └── index.ts            # Barrel export
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx      # Landing hero with tagline & CTA
│   │   │   ├── AboutSection.tsx     # "Why YoungJains" with mandala
│   │   │   ├── PrinciplesSection.tsx # Interactive 5 Jain principles
│   │   │   ├── GetInvolvedSection.tsx # 4 involvement cards
│   │   │   ├── CTASection.tsx       # Dark call-to-action banner
│   │   │   ├── ContactSection.tsx   # Contact info cards
│   │   │   └── index.ts            # Barrel export
│   │   └── ui/
│   │       ├── Reveal.tsx           # Scroll-triggered animation wrapper
│   │       ├── Button.tsx           # Primary & outline button variants
│   │       ├── SectionLabel.tsx     # Uppercase label + divider line
│   │       ├── SanskritVerse.tsx    # Devanagari + English verse display
│   │       ├── Icons.tsx            # All SVG icon components
│   │       └── index.ts            # Barrel export
│   ├── hooks/
│   │   ├── useInView.ts            # IntersectionObserver hook
│   │   ├── useScrolled.ts          # Scroll position hook
│   │   └── index.ts                # Barrel export
│   ├── lib/
│   │   ├── constants.ts            # Site data, nav links, principles, etc.
│   │   └── utils.ts                # Utility functions (scrollToSection)
│   ├── styles/
│   │   ├── globals.css             # CSS variables, reset, fonts, scrollbar
│   │   ├── Navbar.module.css
│   │   ├── Footer.module.css
│   │   ├── Hero.module.css
│   │   ├── About.module.css
│   │   ├── Principles.module.css
│   │   ├── GetInvolved.module.css
│   │   ├── CTA.module.css
│   │   ├── Contact.module.css
│   │   ├── Button.module.css
│   │   ├── SectionLabel.module.css
│   │   └── SanskritVerse.module.css
│   └── types/
│       └── index.ts                # TypeScript interfaces
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to the project folder
cd youngjains

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors
| Token            | Value     | Usage                    |
|------------------|-----------|--------------------------|
| `--saffron`      | `#D4872C` | Primary accent           |
| `--saffron-light`| `#F0C078` | Highlights, CTA          |
| `--cream`        | `#FDFBF7` | Page background          |
| `--parchment`    | `#F5EDE0` | Alternate section bg     |
| `--earth`        | `#2C2416` | Primary text             |
| `--earth-light`  | `#5C4A32` | Body text                |
| `--sage`         | `#7A8B6F` | Secondary accent         |
| `--gold`         | `#C4A44E` | Decorative accent        |
| `--terracotta`   | `#B85C38` | Hover states             |

### Fonts
- **Heading**: Cormorant Garamond (serif, elegant)
- **Body**: DM Sans (clean, modern)
- **Sanskrit**: Noto Sans Devanagari

### Key Features
- Scroll-triggered reveal animations (IntersectionObserver)
- Interactive principle cards with active state
- Floating mandala decoration with orbital dots
- Responsive mobile navigation
- CSS Modules for scoped styling
- Full TypeScript support
- SEO metadata via Next.js App Router

## 📄 License

Built for the YoungJains Community.
