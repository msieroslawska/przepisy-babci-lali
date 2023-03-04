const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const recipeTemplate = path.resolve("./src/templates/recipe.tsx");

  const resultEn = await graphql(
    `
      {
        allContentfulRecipe(filter: { node_locale: { eq: "en-US" } }) {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  const resultPl = await graphql(
    `
      {
        allContentfulRecipe(filter: { node_locale: { eq: "pl" } }) {
          nodes {
            title
            slug
          }
        }
      }
    `
  );

  if (resultEn.errors || resultPl.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      resultEn.errors
    );
    return;
  }

  const recipesEn = resultEn.data.allContentfulRecipe.nodes;
  const recipesPl = resultPl.data.allContentfulRecipe.nodes;

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
};
