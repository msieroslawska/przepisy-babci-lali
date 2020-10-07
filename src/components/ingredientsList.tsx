import React from "react";
import styled from "styled-components";
import { IngredientChunk } from "../../types/graphQlQueries";

const IngredientsWrapper = styled.div`
  margin: 15px;
`;

interface Props {
  ingredientsChunk: IngredientChunk;
}

const renderIngredientsList = (ingredients: string[]) =>
  ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>);

export const IngredientsList: React.FC<Props> = ({ ingredientsChunk }) => (
  <>
    {Object.keys(ingredientsChunk).map(chunk => (
      <IngredientsWrapper key={chunk}>
        <h2>{chunk}</h2>
        <ul>{renderIngredientsList(ingredientsChunk[chunk])}</ul>
      </IngredientsWrapper>
    ))}
  </>
);
