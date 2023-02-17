import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import * as sections from "../components/sections";
import Fallback from "../components/fallback";
import SEOHead from "../components/head";

interface AboutProps {
  data: {
    aboutPage: {
      id: string;
      title: string;
      description: string;
      image: { id: string; url: string };
      blocks: sections.HomepageBlock[];
    };
  };
}

export default function About({ data: { aboutPage } }: AboutProps) {
  return (
    <Layout>
      {aboutPage.blocks.map(block => {
        const { id, blocktype, ...componentProps } = block;
        const Component = sections[blocktype] || Fallback;
        return <Component key={id} {...(componentProps as any)} />;
      })}
    </Layout>
  );
}

export const Head = ({ data: { aboutPage } }: AboutProps) => {
  return <SEOHead {...aboutPage} />;
};

export const query = graphql`
  {
    aboutPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
      }
    }
  }
`;
