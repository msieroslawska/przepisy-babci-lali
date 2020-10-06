import React from "react";

import { PageLayout } from "./pageLayout";

const getImageLink = pageName => `${pageName.split(" ").join("-")}.jpg`;

const renderIngredients = ingredients => (
  <ul>
    {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
  </ul>
);

const renderInstructions = instructions =>
  instructions.map(instruction => <p key={instruction}>{instruction}</p>);

export default ({ pageContext: { ingredientsList, instructions, name } }) => {
  const image = getImageLink(name);

  return (
    <PageLayout header={name}>
      <p>{image}</p>
      {renderIngredients(ingredientsList)}
      {renderInstructions(instructions)}
      <img src={image} alt={name} />
    </PageLayout>
  );
};

