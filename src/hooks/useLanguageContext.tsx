import React from "react";

import { LanguageContext } from "../pages";

export const useLanguageContext = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguageContext must be used within App");
  }
  return context;
};
