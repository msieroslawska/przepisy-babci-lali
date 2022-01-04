import "@fontsource/bitter";
import "@fontsource/bitter/700.css";
import "@fontsource/great-vibes";
import "@fontsource/raleway";
import React from "react";

import { LanguageProvider } from "./src/hooks/useLanguageContext";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
