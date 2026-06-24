/**
 * Site identification utility.
 *
 * Each deployment (server) sets VITE_SITE_ID in its .env file.
 * This module exposes helpers for the rest of the app to adapt
 * theme, locale defaults, and navigation per-site without any
 * multi-tenant DB complexity.
 */

export type SiteId = "ai4cris" | "vcris";

export const SITE_ID: SiteId =
  (import.meta.env.VITE_SITE_ID as SiteId) || "ai4cris";

/**
 * Toggle this to false when the backend is ready.
 * When true, the site uses static content instead of fetching from the DB.
 */
export const USE_STATIC_DATA = true;

export interface SiteTheme {
  /** CSS colour for the primary accent */
  primaryColor: string;
  /** Dark navy / header background */
  navyColor: string;
  /** Display heading font family */
  fontDisplay: string;
  /** Default UI locale */
  defaultLocale: string;
  /** Human-readable conference name */
  conferenceName: string;
}

const themes: Record<SiteId, SiteTheme> = {
  ai4cris: {
    primaryColor: "#C12026",
    navyColor: "#0b2740",
    fontDisplay: "Montserrat",
    defaultLocale: "vi",
    conferenceName: "AI4CRIS 2026",
  },
  vcris: {
    primaryColor: "#0EA5A0",
    navyColor: "#071525",
    fontDisplay: "Cormorant Garamond",
    defaultLocale: "en",
    conferenceName: "VCRIS 2026",
  },
};

export const siteTheme: SiteTheme = themes[SITE_ID];
