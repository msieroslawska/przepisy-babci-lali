import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";

import Layout from "../components/layout";
import Hero from "../components/hero";
import ArticlePreview from "../components/article-preview";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface RootProps {
  data: {
    allContentfulBlogPost: {
      nodes: any;
    };
    contentfulHero: {
      name: string;
      image: IGatsbyImageData;
    };
  };
  location: any;
}

const RootIndex: React.FC<RootProps> = props => {
  console.log("xxx root", props);
  const posts = props.data.allContentfulBlogPost.nodes;
  const heroImage = props.data.contentfulHero;

  return (
    <Layout location={props.location}>
      <Hero
        image={heroImage.image}
        title={heroImage.name}
        // content={author.shortBio}
      />
      <ArticlePreview posts={posts} />
    </Layout>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { publishDate: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
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
