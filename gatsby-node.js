const path = require('path');

const recipes = require('./recipeList.json');

const parseIntoPath = name => {
  const [firstWord, ...rest] = name.split(' ');
  const processedFirstWord = firstWord.toLowerCase();
  const processedRest = rest.map(
    word => word[0].toUpperCase() + word.substring(1)
  );

  return `recipes/${[processedFirstWord, ...processedRest].join('')}`;
};

const parseIntoImageSlug = name => `${name.split(" ").join("-")}`;

exports.createPages = ({ actions: { createPage } }) => {
  const template = path.resolve('./src/components/recipeLayout.tsx');

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
