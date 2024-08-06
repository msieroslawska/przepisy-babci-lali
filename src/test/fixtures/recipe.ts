import type { Recipe } from "types";

export const testRecipe: Recipe = {
  fields: {
    title: {
      en: "Test recipe",
      pl: "Przepis testowy",
    },
    description: {
      en: "Test description",
      pl: "Opis testowy",
    },
    ingredients: {
      en: ["250 g flour", "2 eggs"],
      pl: ["250 g mąki", "2 jajka"],
    },
    slug: {
      en: "test-recipe",
      pl: "przepis-testowy",
    },
    image: {
      en: {
        fields: {
          file: {
            en: {
              url: "http://test-domain.com/test-image.jpg",
            },
          },
          title: {
            en: "Test image",
          },
        },
      },
    },
  },
} as unknown as Recipe;

export const testRecipe2: Recipe = {
  fields: {
    title: {
      en: "Test recipe 2",
      pl: "Przepis testowy 2",
    },
    description: {
      en: "Test description 2",
      pl: "Opis testowy 2",
    },
    ingredients: {
      en: ["250 g flour", "2 eggs"],
      pl: ["250 g mąki", "2 jajka"],
    },
    slug: {
      en: "test-recipe-2",
      pl: "przepis-testowy-2",
    },
  },
} as unknown as Recipe;
