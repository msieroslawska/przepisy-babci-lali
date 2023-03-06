import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  graphqlTypegen: {
    typesOutputPath: `./src/types/gatsby-types.d.ts`,
    generateOnBuild: false,
    documentSearchPaths: [`./gatsby-node.ts`, `./plugins/**/gatsby-node.ts`],
  },
  siteMetadata: {
    title: "Grandma Lala's Recipes",
    description: "...trying to preserve my late grandma's recipes",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
  ],
};

export default config;
