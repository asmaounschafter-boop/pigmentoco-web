export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Single place to change the contact address used across the site. */
export const CONTACT_EMAIL = "contact@pigmentoco.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/pigmentoco";
export const INSTAGRAM_URL = "https://www.instagram.com/pigmentoco/";
export const SITE_URL = "https://pigmentoco.com";
