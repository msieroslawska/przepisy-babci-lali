import React from "react";
import styled from "styled-components";

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

  const FlagButton = styled.button`
    height: 60px;
    width: 60px;
    border: 0;
    background-color: blue;

    img {
      width: auto;
      max-width: 50px;
      height: auto;
      max-height: 50px;
      padding: 5px;
    }
  `;

  const renderFlag = () => {
    const flagName = currentLanguage === "PL" ? "pl" : "en";
    return <img src={`/flag-${flagName}.png`} alt="Language flag" />;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage }}>
      <FlagButton onClick={toggleLanguage}>{renderFlag()}</FlagButton>
      {children}
    </LanguageContext.Provider>
  );
};
