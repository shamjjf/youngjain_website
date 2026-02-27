# Public Assets — Image Directory

Place your images in the appropriate subfolders below. These are referenced throughout the site components.

## 📁 Folder Structure

```
public/
├── assets/
│   └── images/
│       ├── hero/              ← Hero section background & decorative images
│       │   ├── hero-bg.jpg       (optional full-width background)
│       │   └── hero-pattern.svg  (optional decorative SVG pattern)
│       │
│       ├── about/             ← About / "Why YoungJains" section
│       │   ├── community.jpg     (group photo / community image)
│       │   └── mandala.svg       (decorative mandala if replacing CSS one)
│       │
│       ├── principles/        ← Five Jain Principles section
│       │   ├── ahimsa.jpg
│       │   ├── satya.jpg
│       │   ├── asteya.jpg
│       │   ├── brahmacharya.jpg
│       │   └── aparigraha.jpg
│       │
│       ├── involved/          ← Get Involved section card images
│       │   ├── gatherings.jpg
│       │   ├── workshops.jpg
│       │   ├── celebrations.jpg
│       │   └── contribute.jpg
│       │
│       ├── icons/             ← Custom icon assets (favicon, logos, etc.)
│       │   ├── logo.svg          (YoungJains logo)
│       │   ├── logo-white.svg    (white variant for dark backgrounds)
│       │   └── favicon.ico
│       │
│       └── backgrounds/       ← Reusable background textures & patterns
│           ├── noise.png         (subtle grain texture overlay)
│           ├── pattern-dots.svg  (dot pattern for section backgrounds)
│           └── mandala-bg.svg    (large decorative mandala background)
├── favicon.ico
└── og-image.jpg               ← Open Graph social sharing image (1200×630)
```

## 🖼️ Recommended Image Specs

| Location         | Dimensions       | Format     | Notes                          |
|------------------|------------------|------------|--------------------------------|
| hero-bg          | 1920×1080+       | .jpg/.webp | Compress to < 200KB            |
| community photo  | 800×600          | .jpg/.webp | Warm, candid group shots       |
| principle cards  | 600×400          | .jpg/.webp | Symbolic/abstract visuals      |
| involved cards   | 600×400          | .jpg/.webp | Event/activity photography     |
| logo             | SVG preferred    | .svg       | Vector for crisp rendering     |
| favicon          | 32×32 & 16×16   | .ico       | Multi-size favicon             |
| og-image         | 1200×630         | .jpg       | Social sharing preview         |
| noise texture    | 200×200 tileable | .png       | Seamless, very subtle          |

## 💡 Usage in Components

Reference images from `/assets/images/...` in your Next.js components:

```tsx
import Image from "next/image";

// Using Next.js Image component (recommended)
<Image
  src="/assets/images/hero/hero-bg.jpg"
  alt="YoungJains community"
  width={1920}
  height={1080}
  priority
/>

// Or as a CSS background
background-image: url('/assets/images/backgrounds/noise.png');
```
