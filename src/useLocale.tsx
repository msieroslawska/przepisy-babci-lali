import React from "react";

type Locale = "en-US" | "pl";

export const useLocale = () => {
  const [locale, setLocale] = React.useState<Locale>("en-US");

  const changeLocale = () => {
    if (locale === "en-US") {
      setLocale("pl");
    } else {
      setLocale("en-US");
    }
  };

  return { locale, changeLocale };
};
