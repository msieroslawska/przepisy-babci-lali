import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import RecipePreview from "../components/recipe-preview";
import { TypeRecipeFields } from "../types/recipe";

interface Props {
  data: {
    allContentfulRecipe: {
      nodes: TypeRecipeFields[];
    };
  };
  location: any;
}

const RecipeIndex: React.FC<Props> = props => {
  const recipes = props.data.allContentfulRecipe.nodes;

  return (
    <Layout location={props.location}>
      <Hero title="Recipes" />
      <RecipePreview recipes={recipes} />
    </Layout>
  );
};

export default RecipeIndex;

export const pageQuery = graphql`
  query RecipesIndexQuery {
    allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        title
        slug
        tags
        scannedImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`;
