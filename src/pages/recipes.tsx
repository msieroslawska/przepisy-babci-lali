import React from "react";
import { graphql, PageProps } from "gatsby";

import { Hero, Layout, RecipePreview } from "../components";
import { PageContextWithLocale } from "../types";

type Props = PageProps<Queries.RecipesIndexQuery, PageContextWithLocale>;

const RecipeIndex: React.FC<Props> = props => {
  const recipes = props.data.allContentfulRecipe.nodes;

  return (
    <Layout>
      <Hero name="Recipes" image={null} description={null} />
      <RecipePreview recipes={recipes} />
    </Layout>
  );
};

export default RecipeIndex;

export const pageQuery = graphql`
  query RecipesIndex($language: String) {
    allContentfulRecipe(filter: { node_locale: { eq: $language } }) {
      nodes {
        title
        slug
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
