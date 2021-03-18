import React from "react";
import styled from "styled-components";

import { colors } from "../constants/colors";

const getRandom = (max: number) => Math.floor(Math.random() * Math.floor(max));

const StyledRecipeLogo = styled.div<LogoProps>`
  background: radial-gradient(
    ellipse at center,
    ${({ color }) => color} 0%,
    ${({ color }) => color} 70%,
    rgba(0, 0, 0, 0) 70.3%
  );
  height: 150px;
  width: 150px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const getFirstLetter = (recipeName: string) => recipeName[0];

interface LogoProps {
  color: string;
}

interface Props {
  name: string;
}

export const RecipeLogo: React.FC<Props> = ({ name }) => {
  const randomColor = () =>
    colors.recipeLogos[getRandom(colors.recipeLogos.length)];

  return (
    <StyledRecipeLogo color={randomColor()}>
      {getFirstLetter(name)}
    </StyledRecipeLogo>
  );
};
