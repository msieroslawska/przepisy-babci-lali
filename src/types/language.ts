export type Language = "pl" | "en";

export const isCorrectLanguage = (language: string): language is Language =>
  language === "en" || language === "pl";
