import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
// import Img from "gatsby-image";

import { PageLayout } from "./pageLayout";

const ImageWrapper = styled.div`
  img {
    width: 60vw;
  }
`;

const renderIngredients = ingredients => (
  <ul>
    {ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
  </ul>
);

const parseIngredientsList = ingredients => {
  ingredients.map(ingredientsObj => {
    console.log(ingredientsObj);
  });
};

const renderInstructions = instructions =>
  instructions.map(instruction => <p key={instruction}>{instruction}</p>);

const renderImage = (data, name) => data.allFile.edges && data.allFile.edges.length > 0
  ? (
    <ImageWrapper>
      <img src={data.allFile.edges[0].node.publicURL} alt={name} />
    </ImageWrapper>
  )
  : (
    <div>Sad panda, there is no image :(</div>
  );

export default ({ data, pageContext: { ingredientsList, instructions, name } }) => {
  return (
    <PageLayout header={name}>
      {ingredientsList.length > 0 && parseIngredientsList(ingredientsList)}
      {instructions.length > 0 && renderInstructions(instructions)}
      {renderImage(data, name)}
    </PageLayout>
  );
};

export const query = graphql`
  query($imageSlug: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "assets" }
        name: { eq: $imageSlug }
      }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
