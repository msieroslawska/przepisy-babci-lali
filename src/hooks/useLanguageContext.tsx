import React from "react";

interface ContextProps {
  currentLanguage: string;
}

export const LanguageContext = React.createContext<ContextProps | undefined>(
  undefined
);

export const useLanguageContext = () => {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguageContext must be used within App");
  }
  return context;
};

export const LanguageProvider: React.FC = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState("PL");

  const toggleLanguage = () => {
    if (currentLanguage === "PL") {
      setCurrentLanguage("EN");
    } else {
      setCurrentLanguage("PL");
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage }}>
      <button onClick={toggleLanguage}>Change Visibility</button>
      <p>{currentLanguage}</p>
      {children}
    </LanguageContext.Provider>
  );
};
