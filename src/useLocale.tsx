import { navigate } from "gatsby";
export type Locale = "en-US" | "pl";

export const useLocale = (currentLocation: string) => {
  const extractLocaleFromLocation = () => {
    const currentLocale = currentLocation.match(/\/(pl|en-US)\//);

    return !currentLocale ? "en-US" : (currentLocale[1] as Locale);
  };

  const locale = extractLocaleFromLocation();
  const localeToChange = locale === "pl" ? "en-US" : "pl";

  const navigateToAnotherLocale = () => {
    const newPath = currentLocation.replace(locale, localeToChange);
    navigate(newPath);
  };

  return { locale, navigateToAnotherLocale };
};
