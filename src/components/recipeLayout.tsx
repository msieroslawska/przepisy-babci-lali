import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
// import Img from "gatsby-image";
import {
  IngredientChunk,
  PublicURLQuery,
  Recipe,
} from "../../types/graphQlQueries";

import { IngredientsList } from "./ingredientsList";
import { PageLayout } from "./pageLayout";

const ImageWrapper = styled.div`
  img {
    width: 60vw;
  }
`;

const renderIngredientsChunk = (ingredients: IngredientChunk) => (
  <IngredientsList ingredientsChunk={ingredients} />
);

const renderIngredients = (allIngredients: IngredientChunk[]) =>
  allIngredients.map(renderIngredientsChunk);

const renderInstructions = (instructions: string[]) =>
  instructions.map(instruction => <p key={instruction}>{instruction}</p>);

const renderImage = (data: PublicURLQuery, name: string) =>
  data.allFile.edges && data.allFile.edges.length > 0 ? (
    <ImageWrapper>
      <img src={data.allFile.edges[0].node.publicURL} alt={name} />
    </ImageWrapper>
  ) : (
    <div>Sad panda, there is no image :(</div>
  );

interface Props {
  data: PublicURLQuery;
  pageContext: Recipe;
}

const RecipeLayout: React.FC<Props> = ({
  data,
  pageContext: { ingredientsList, instructions, name },
}) => {
  return (
    <PageLayout header={name}>
      {ingredientsList.length > 0 && renderIngredients(ingredientsList)}
      {instructions.length > 0 && renderInstructions(instructions)}
      {renderImage(data, name)}
    </PageLayout>
  );
};

export default RecipeLayout;

export const query = graphql`
  query($imageSlug: String!) {
    allFile(
      filter: { sourceInstanceName: { eq: "assets" }, name: { eq: $imageSlug } }
    ) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
