import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Young Jains — Learn | Live | Lead",
  description: "YoungJains helps young people understand and live Jain values — a community focused on learning, self-growth, and service.",
  keywords: ["Young Jains", "Jainism", "Youth Community", "Non-Violence", "Ahimsa"],
  openGraph: {
    title: "Young Jains — Learn | Live | Lead",
    description: "Connect with like-minded individuals, explore spiritual ideas, and grow personally, emotionally, and spiritually.",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  icons: { icon: "/assets/images/icons/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
