export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSlide {
  src: string;
  alt: string;
}

export interface Principle {
  name: string;
  sub: string;
  desc: string;
  icon: string;
}
