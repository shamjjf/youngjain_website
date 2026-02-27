export function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function isDevanagari(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}
