import type { Colors } from "@/types";
export const colorMap: Record<Colors, string> = {
  "text-secondary": "#b3b3b3",
  "top-rated": "#2d2d2d",
  text: "#ffffff",
  background: "#0a0a0a",
  surface: "#1a1a1a",
  popular: "#3b82f6",
  accent: "#ff6b35",
  primary: "#1a1a1a",
  secondary: "#2d2d2d",
  upcoming: "#10b981",
};

export const colorVarMap: Record<Colors, string> = {
  "primary": "var(--color-primary)",
  "secondary": "var(--color-secondary)",
  "accent": "var(--color-accent)", 
  "text": "var(--color-text)",     
  "text-secondary": "var(--color-text-secondary)",
  "background": "var(--color-background)",
  "surface": "var(--color-surface)",
  "popular": "var(--color-popular)",
  "top-rated": "var(--color-top-rated)",
  "upcoming": "var(--color-upcoming)",   
};
