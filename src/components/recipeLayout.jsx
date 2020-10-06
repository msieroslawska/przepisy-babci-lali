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

const renderInstructions = instructions =>
  instructions.map(instruction => <p key={instruction}>{instruction}</p>);

export default ({ data, pageContext: { ingredientsList, instructions, name } }) => {
  return (
    <PageLayout header={name}>
      {renderIngredients(ingredientsList)}
      {renderInstructions(instructions)}
      <ImageWrapper>
        <img src={data.allFile.edges[0].node.publicURL} alt={name} />
      </ImageWrapper>
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
