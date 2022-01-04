const path = require("path");
const fs = require("fs");

const filenames = fs.readdirSync(`${__dirname}/recipeSources`);

const parseIntoPath = name => {
  const [firstWord, ...rest] = name.split(" ");
  const processedFirstWord = firstWord.toLowerCase();
  const processedRest = rest.map(
    word => word[0].toUpperCase() + word.substring(1)
  );

  return `recipes/${[processedFirstWord, ...processedRest].join("")}`;
};

const createLanguagePage = ({
  createPage,
  language,
  languageAssets,
  imageName,
}) => {
  const template = path.resolve("./src/components/recipeLayout.tsx");

  createPage({
    path: parseIntoPath(languageAssets.name),
    component: template,
    context: {
      ingredientsList: languageAssets.ingredientsList,
      instructions: languageAssets.instructions,
      imageName,
      language,
      name: languageAssets.name,
    },
  });
};

exports.createPages = ({ actions: { createPage } }) => {
  let recipes = [];

  filenames.forEach(fileName => {
    const recipe = require(`./recipeSources/${fileName}`);
    recipes.push(recipe);
  });

  recipes.forEach(({ imageName, PL, EN }) => {
    createLanguagePage({
      createPage,
      language: "PL",
      languageAssets: PL,
      imageName,
    });
    createLanguagePage({
      createPage,
      language: "EN",
      languageAssets: EN,
      imageName,
    });
  });
};
