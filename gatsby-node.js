const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const recipeTemplate = path.resolve("./src/templates/recipe.tsx");

  const result = await graphql(
    `
      {
        allContentfulRecipe {
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

  const recipes = result.data.allContentfulRecipe.nodes;

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (recipes.length > 0) {
    recipes.forEach((recipe, index) => {
      const previousRecipeSlug = index === 0 ? null : recipes[index - 1].slug;
      const nextRecipeSlug =
        index === recipes.length - 1 ? null : recipes[index + 1].slug;

      createPage({
        path: `/recipes/${recipe.slug}/`,
        component: recipeTemplate,
        context: {
          slug: recipe.slug,
          previousRecipeSlug,
          nextRecipeSlug,
        },
      });
    });
  }
};
