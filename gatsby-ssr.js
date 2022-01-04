import React from "react";

import { LanguageProvider } from "./src/utils/languageContext";

export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>;
};
