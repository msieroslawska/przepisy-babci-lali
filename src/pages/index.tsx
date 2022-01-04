import React from "react";
import styled from "styled-components";

import { PageLayout } from "../components/pageLayout";
import { Image } from "../components/image";

const PictureWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InProgress = styled.h3`
  font-size: 0.9em;
  flex: 0 0 auto;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2em;
  text-align: center;
`;

interface ContextProps {
  currentLanguage: string;
  setCurrentLanguage: any;
}

export const LanguageContext = React.createContext<ContextProps | undefined>(
  undefined
);

const Home: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = React.useState("PL");

  const toggleLanguage = () => {
    if (currentLanguage === "PL") {
      setCurrentLanguage("EN");
    } else {
      setCurrentLanguage("PL");
    }
  };
  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      <button onClick={toggleLanguage}>Change Visibility</button>
      <p>{currentLanguage}</p>
      <PageLayout header="Przepisy babci Lali">
        <InProgress>Bardzo, BARDZO w budowie :)!</InProgress>
        <PictureWrapper>
          <Image caption="Babcia w latach 50'" imageName="mloda-babcia" />

          <Image caption="To młode to ja!" imageName="ja-z-babcia" />
        </PictureWrapper>

        <Text>
          Babcia Lala odeszła kilka lat temu. Zostały mi po niej wspomnienia,
          zdjęcia i jej zeszyty z przepisami.
        </Text>
      </PageLayout>
    </LanguageContext.Provider>
  );
};

export default Home;
