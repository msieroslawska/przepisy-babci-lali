import React from "react";
import styled from "styled-components";

import { RGB } from "../../types/colors";
import { colors, rgbObjToRgb } from "../constants/colors";

const getRandom = (max: number) => Math.floor(Math.random() * Math.floor(max));
const createCircle = (color: RGB) => `
  background: radial-gradient(
    ellipse at center,
    ${rgbObjToRgb(color)} 0%,
    ${rgbObjToRgb(color)} 70%,
    rgba(0, 0, 0, 0) 70.3%
  );
`;

const LetterWithOffset = styled.p`
  position: relative;
  left: -15px;
  font-family: "Great Vibes", serif;
  font-weight: 900;
  font-size: 50px;
  font-style: italic;
`;

const StyledRecipeLogo = styled.div<LogoProps>`
  ${({ rgbColor }) => createCircle(rgbColor)}
  height: 150px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  :hover {
    ${({ rgbColor: { a = 0, ...rest } }) =>
      createCircle({ a: a + 0.4, ...rest })}

    ${LetterWithOffset} {
      font-size: 90px;
    }
  }
`;

const getFirstLetter = (recipeName: string) => recipeName[0];

interface LogoProps {
  rgbColor: RGB;
}

interface Props {
  name: string;
}

export const RecipeLogo: React.FC<Props> = ({ name }) => {
  const randomColor = (): RGB =>
    colors.recipeLogos[getRandom(colors.recipeLogos.length)];

  return (
    <StyledRecipeLogo rgbColor={randomColor()}>
      <LetterWithOffset>{getFirstLetter(name)}</LetterWithOffset>
    </StyledRecipeLogo>
  );
};
