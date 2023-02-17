import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Container, Box, Heading } from "../components/ui";
import SEOHead from "../components/head";

interface PageProps {
  data: {
    page: {
      id: string;
      title: string;
      slug: string;
      description: string;
      image: { id: string; url: string };
      html: string;
    };
  };
}

export default function Page({ data: { page } }: PageProps) {
  return (
    <Layout>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  );
}

export const Head = ({ data: { page } }: PageProps) => {
  return <SEOHead {...page} />;
};

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`;
