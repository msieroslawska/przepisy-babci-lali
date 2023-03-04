import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout";
import Hero from "../components/hero";
import RecipePreview from "../components/recipePreview";

type Props = PageProps<Queries.HomeQuery>;

const RootIndex: React.FC<Props> = props => {
  const [locale, setLocale] = React.useState("en-US");

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
  query Home {
    allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
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
    contentfulHero(id: { eq: "e0ed6ea4-be8b-5f2c-848c-0c67bc5670f8" }) {
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
