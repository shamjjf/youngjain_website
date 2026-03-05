export function isDevanagari(text: string): boolean {
  return /[\u0900-\u097F]/.test(text);
}
