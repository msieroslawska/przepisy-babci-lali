const path = require("path");

const recipes = require("./recipeList.json");

const parseIntoPath = name => {
  const [firstWord, ...rest] = name.split(" ");
  const processedFirstWord = firstWord.toLowerCase();
  const processedRest = rest.map(
    word => word[0].toUpperCase() + word.substring(1)
  );

  return `recipes/${[processedFirstWord, ...processedRest].join("")}`;
};

const parseIntoImageSlug = name => {
  const normalised = name
    .replace(/[ą]/gi, "a")
    .replace(/[ć]/gi, "c")
    .replace(/[ę]/gi, "e")
    .replace(/[ł]/gi, "l")
    .replace(/[ń]/gi, "n")
    .replace(/[ó]/gi, "o")
    .replace(/[ś]/gi, "s")
    .replace(/[żź]/gi, "z");
  const capitalised =
    normalised.charAt(0).toUpperCase() + normalised.slice(1).toLowerCase();
  return capitalised.split(" ").join("-");
};

exports.createPages = ({ actions: { createPage } }) => {
  const template = path.resolve("./src/components/recipeLayout.tsx");

  recipes.forEach(({ ingredientsList, instructions, name }) => {
    createPage({
      path: parseIntoPath(name),
      component: template,
      context: {
        ingredientsList,
        instructions,
        imageSlug: parseIntoImageSlug(name),
        name,
      },
    });
  });
};
