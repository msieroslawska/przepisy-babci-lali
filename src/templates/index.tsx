import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import RecipePreview from "../components/recipePreview";

type Props = PageProps<Queries.HomeQuery>;
export const RootIndex: React.FC<Props> = props => {
  const renderHero = () => {
    if (props.data.contentfulHero === null) {
      return null;
    }

    return <Hero {...props.data.contentfulHero} />;
  };
  return (
    <Layout>
      {renderHero()}
      <RecipePreview recipes={props.data.allContentfulRecipe.nodes} />
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query Home($locale: String) {
    allContentfulRecipe(filter: { node_locale: { eq: $locale } }) {
      nodes {
        title
        slug
        tags
        image {
          gatsbyImage(layout: FULL_WIDTH, placeholder: BLURRED, width: 424)
        }
        description {
          raw
        }
      }
    }
    contentfulHero(node_locale: { eq: $locale }) {
      name
      image {
        gatsbyImage(width: 200, placeholder: BLURRED)
      }
      description {
        description
      }
    }
  }
`;
