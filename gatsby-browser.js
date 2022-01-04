import "@fontsource/bitter";
import "@fontsource/bitter/700.css";
import "@fontsource/great-vibes";
import "@fontsource/raleway";
import React from "react";

import { LanguageProvider } from "./src/utils/languageContext";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
