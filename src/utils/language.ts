import { Language, Locale } from "../types";

/*
 * A set of helpers translating between locales and languages
 * Needed mostly for navigation purposes:
 * English locale is defined as "en-US",
 * but simplified version for language is "en"
 */

export const localeToLanguage: { [locale in Locale]: Language } = {
  [Locale["en-US"]]: Language.en,
  [Locale.pl]: Language.pl,
};

export const languageToLocale: { [language in Language]: Locale } = {
  [Language.en]: Locale["en-US"],
  [Language.pl]: Locale.pl,
};

export const oppositeLocale: { [locale in Locale]: Locale } = {
  [Locale["en-US"]]: Locale.pl,
  [Locale.pl]: Locale["en-US"],
};

export const oppositeLanguage: { [language in Language]: Language } = {
  [Language.en]: Language.pl,
  [Language.pl]: Language.en,
};

// @TODO: Add flags
