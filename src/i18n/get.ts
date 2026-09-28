import "server-only";
import type { Locale } from "./config";
import en from "./en";
import fr from "./fr";

const dictionaries = { en, fr };

export const getDictionary = (locale: Locale) => dictionaries[locale];
export type { Dict } from "./en";
