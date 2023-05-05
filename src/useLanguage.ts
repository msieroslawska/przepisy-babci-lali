import { changeLocale, useIntl } from "gatsby-plugin-intl";

import { isCorrectLanguage, Language } from "./types";
import { oppositeLanguageMap } from "./utils/language";

type UseLanguageReturnType = {
  changeLanguage(): void;
  format(message: string, prefix?: string): string;
  language: Language;
  oppositeLanguage: Language;
};

export const useLanguage = (): UseLanguageReturnType => {
  const { formatMessage, locale } = useIntl();
  const language = isCorrectLanguage(locale) ? locale : "en";
  const oppositeLanguage = oppositeLanguageMap[language];

  const changeLanguage = () => {
    const newLanguage: Language = oppositeLanguage;
    changeLocale(newLanguage);
  };

  const format = (message: string, prefix?: string) => {
    const id = prefix !== undefined ? `${prefix}.${message}` : message;
    return formatMessage({ id });
  };

  return {
    changeLanguage,
    format,
    language,
    oppositeLanguage,
  };
};
