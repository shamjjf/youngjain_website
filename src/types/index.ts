export interface Principle {
  name: string;
  sub: string;
  desc: string;
  icon: string;
}

export interface InvolvedItem {
  title: string;
  desc: string;
  tag: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactItem {
  label: string;
  value: string;
  icon: string;
}

export interface StatItem {
  num: string;
  label: string;
  bg: string;
  color: string;
}
