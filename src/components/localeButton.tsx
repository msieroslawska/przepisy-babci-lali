import React from "react";
import { useLanguage } from "../useLanguage";
import { useIntl } from "gatsby-plugin-intl";

export const LocaleButton: React.FC = () => {
  const intl = useIntl();
  const { changeLanguage, oppositeLanguage } = useLanguage();
  const localeText = intl.formatMessage({ id: "changeLocale" });

  const onClick = () => {
    changeLanguage();
  };

  return (
    <button onClick={onClick}>{`${localeText} ${oppositeLanguage}`}</button>
  );
};
