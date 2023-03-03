import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";
import { TypeHeroFields } from "../types/hero";
import { TypeRecipeFields } from "../types/recipe";

interface RootProps {
  data: {
    allContentfulRecipe: {
      nodes: TypeRecipeFields[];
    };
    contentfulHero: TypeHeroFields;
  };
  location: any;
}

const RootIndex: React.FC<RootProps> = props => {
  console.log("xxx root", props);
  const recipes = props.data.allContentfulRecipe.nodes;
  const heroImage = props.data.contentfulHero;

  return (
    <Layout location={props.location}>
      <Hero
        image={heroImage.image}
        title={heroImage.name}
        // content={author.shortBio}
      />
      <ArticlePreview recipes={recipes} />
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
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
    contentfulHero(id: { eq: "e0ed6ea4-be8b-5f2c-848c-0c67bc5670f8" }) {
      name
      image {
        gatsbyImage(width: 200, placeholder: BLURRED)
      }
    }
  }
`;
