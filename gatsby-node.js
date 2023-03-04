const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const recipeTemplate = path.resolve("./src/templates/recipe.tsx");

  const result = await graphql(
    `
      {
        en: allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
          nodes {
            title
            slug
          }
        }
        pl: allContentfulRecipe(filter: { node_locale: { eq: "pl" } }) {
          nodes {
            title
            slug
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

  const recipesEn = result.data.en.nodes;
  const recipesPl = result.data.pl.nodes;

  const createLocalizedRecipePages = (locale, recipes) => {
    if (recipes.length > 0) {
      recipes.forEach((recipe, index) => {
        const previousRecipeSlug = index === 0 ? null : recipes[index - 1].slug;
        const nextRecipeSlug =
          index === recipes.length - 1 ? null : recipes[index + 1].slug;

        createPage({
          path: `/recipes/${locale}/${recipe.slug}/`,
          component: recipeTemplate,
          context: {
            slug: recipe.slug,
            previousRecipeSlug,
            nextRecipeSlug,
            locale,
          },
        });
      });
    }
  };

  createLocalizedRecipePages("en-US", recipesEn);
  createLocalizedRecipePages("pl", recipesPl);

  const indexTemplate = path.resolve("./src/templates/index.tsx");

  createPage({
    path: `/en/`,
    component: indexTemplate,
    context: {
      locale: "en-US",
    },
  });

  createPage({
    path: `/pl/`,
    component: indexTemplate,
    context: {
      locale: "pl",
    },
  });
};
