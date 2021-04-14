import React from "react";
import styled from "styled-components";

import {
  IngredientChunk,
  PublicURLQuery,
  RecipeData,
} from "../../types/graphQlQueries";

import { IngredientsList } from "./ingredientsList";

const RecipeWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-width: 500px;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextWrapper = styled.section`
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  border: 1px solid black;
  background: white;
  padding: 15px;
  margin: auto;
  width: 500px;
  align-self: flex-start;

  img {
    width: 100%;
  }
`;

const Instruction = styled.p``;

const NoImage = styled.p`
  align-self: center;
`;

const renderIngredientsChunk = (ingredients: IngredientChunk) => (
  <IngredientsList ingredientsChunk={ingredients} />
);

const renderIngredients = (allIngredients: IngredientChunk[]) =>
  allIngredients.length > 0 && allIngredients.map(renderIngredientsChunk);

const renderInstructions = (instructions: string[]) =>
  instructions.length > 0 &&
  instructions.map(instruction => (
    <Instruction key={instruction}>{instruction}</Instruction>
  ));

const renderImage = (data: PublicURLQuery, name: string) =>
  data.allFile.edges && data.allFile.edges.length > 0 ? (
    <ImageWrapper>
      <img src={data.allFile.edges[0].node.publicURL} alt={name} />
    </ImageWrapper>
  ) : (
    <NoImage>Sad panda, there is no image :(</NoImage>
  );

interface Props {
  data: PublicURLQuery;
  pageContext: RecipeData;
}

export const Recipe: React.FC<Props> = ({ data, pageContext }) => {
  return (
    <RecipeWrapper>
      <TextWrapper>
        {renderIngredients(pageContext.ingredientsList)}
        {renderInstructions(pageContext.instructions)}
      </TextWrapper>
      {renderImage(data, pageContext.name)}
    </RecipeWrapper>
  );
};
