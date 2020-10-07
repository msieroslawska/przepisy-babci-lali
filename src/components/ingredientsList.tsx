import React from "react";
import { IngredientChunk } from "../../types/graphQlQueries";

interface Props {
  ingredientsChunk: IngredientChunk;
}

const renderIngredientsList = (ingredients: string[]) =>
  ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>);

export const IngredientsList: React.FC<Props> = ({ ingredientsChunk }) => (
  <>
    {Object.keys(ingredientsChunk).map(chunk => (
      <>
        <p>{chunk}</p>
        <ul>{renderIngredientsList(ingredientsChunk[chunk])}</ul>
      </>
    ))}
  </>
);
