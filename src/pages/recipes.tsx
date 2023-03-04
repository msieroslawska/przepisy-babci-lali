import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import RecipePreview from "../components/recipePreview";

type Props = PageProps<Queries.RecipesIndexQuery>;

const RecipeIndex: React.FC<Props> = props => {
  const recipes = props.data.allContentfulRecipe.nodes;

  return (
    <Layout location={props.location.pathname}>
      <Hero name="Recipes" image={null} description={null} />
      <RecipePreview recipes={recipes} />
    </Layout>
  );
};

export default RecipeIndex;

export const pageQuery = graphql`
  query RecipesIndex {
    allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
      nodes {
        title
        slug
        tags
        image {
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
