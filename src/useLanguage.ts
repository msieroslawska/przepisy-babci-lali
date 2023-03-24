import { changeLocale, useIntl } from "gatsby-plugin-intl";

import { isCorrectLanguage, Language } from "./types";
import { oppositeLanguageMap } from "./utils/language";

type UseLanguageReturnType = {
  language: Language;
  changeLanguage(): void;
  oppositeLanguage: Language;
};

export const useLanguage = (): UseLanguageReturnType => {
  const { locale } = useIntl();
  const language = isCorrectLanguage(locale) ? locale : "en";
  const oppositeLanguage = oppositeLanguageMap[language];

  const changeLanguage = () => {
    const newLanguage: Language = oppositeLanguage;
    changeLocale(newLanguage);
  };

  return {
    changeLanguage,
    language,
    oppositeLanguage,
  };
};
