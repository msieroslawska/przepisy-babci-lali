import React from "react";
import styled from "styled-components";

import { PageLayout } from "../components/pageLayout";
import { Image } from "../components/image";

const PictureWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
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

const Home: React.FC = () => (
  <PageLayout header="Przepisy babci Lali">
    <InProgress>Bardzo, BARDZO w budowie :)!</InProgress>
    <PictureWrapper>
      <Image caption="Babcia w latach 50'" imageSource="babcia-1.png" />

      <Image caption="To młode to ja!" imageSource="babcia-2.png" />
    </PictureWrapper>

    <Text>
      Babcia Lala odeszła kilka lat temu. Zostały mi po niej wspomnienia,
      zdjęcia i jej zeszyty z przepisami.
    </Text>
  </PageLayout>
);

export default Home;
