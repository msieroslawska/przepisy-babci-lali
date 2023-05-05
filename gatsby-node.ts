import type { GatsbyNode } from "gatsby";
import { PageContextWithSlugData } from "./src/types";

const path = require("path");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const recipeTemplate = path.resolve("./src/templates/recipe.tsx");

  const result = await graphql<Queries.AllRecipesQuery>(
    `
      query AllRecipes {
        all: allContentfulRecipe {
          edges {
            next {
              slug
            }
            previous {
              slug
            }
            node {
              slug
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  const edges = result.data?.all.edges;

  if (edges && edges?.length > 0) {
    edges.forEach(edge => {
      const { next, previous, node } = edge;
      createPage<PageContextWithSlugData>({
        path: `/recipes/${node.slug}`,
        component: recipeTemplate,
        context: {
          slug: node.slug,
          previousRecipeSlug: previous?.slug ?? null,
          nextRecipeSlug: next?.slug ?? null,
        },
      });
    });
  }
};
