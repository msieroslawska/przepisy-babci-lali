import type { GatsbyNode } from "gatsby";
import {
  Locale,
  // PageContextWithLocale,
  PageContextWithLocalizedSlugData,
  PageContextWithLocalizedRecipeData,
  Recipes,
} from "./src/types";

const path = require("path");

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const recipeTemplate = path.resolve("./src/templates/recipe.tsx");
  // const recipeIndexTemplate = path.resolve("./src/templates/recipes.tsx");

  const result = await graphql<Queries.AllRecipesQuery>(
    `
      query AllRecipes {
        en: allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
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
        pl: allContentfulRecipe(filter: { node_locale: { eq: "pl" } }) {
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
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    );
    return;
  }

  // const recipesEn = result.data?.en.nodes as Recipes;
  // const recipesPl = result.data?.pl.nodes as Recipes;

  // const createLocalizedRecipePages = (locale: Locale, recipes: Recipes) => {
  //   if (recipes.length > 0) {
  //     recipes.forEach((recipe, index) => {
  //       const previousRecipeSlug = index === 0 ? null : recipes[index - 1].slug;
  //       const nextRecipeSlug =
  //         index === recipes.length - 1 ? null : recipes[index + 1].slug;

  //       createPage<PageContextWithLocalizedRecipeData>({
  //         path: `/recipes/${locale}`,
  //         component: recipeIndexTemplate,
  //         context: {
  //           locale,
  //           title: recipe.title,
  //           slug: recipe.slug,
  //           tags: recipe.tags,
  //           image: recipe.image,
  //           description: recipe.description,
  //         },
  //       });

  //       createPage<PageContextWithLocalizedSlugData>({
  //         path: `/recipes/${locale}/${recipe.slug}`,
  //         component: recipeTemplate,
  //         context: {
  //           slug: recipe.slug,
  //           previousRecipeSlug,
  //           nextRecipeSlug,
  //           locale,
  //         },
  //       });
  //     });
  //   }
  // };

  // createLocalizedRecipePages("en", recipesEn);
  // createLocalizedRecipePages("pl", recipesPl);

  // const indexTemplate = path.resolve("./src/index.tsx");

  // createPage<PageContextWithLocale>({
  //   path: `/home/en-US`,
  //   component: indexTemplate,
  //   context: {
  //     locale: "en-US",
  //   },
  // });

  // createPage<PageContextWithLocale>({
  //   path: `home/pl`,
  //   component: indexTemplate,
  //   context: {
  //     locale: "pl",
  //   },
  // });
};
