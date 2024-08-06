import type { Ingredient } from "types";

export const flourIngredient: Ingredient = {
  fields: {
    quantity: {
      en: {
        fields: { id: { en: "250" }, quantityName: { en: 250 } },
      },
    },
    unit: {
      en: {
        fields: { id: { en: "g" }, unitName: { en: "g", pl: "g" } },
      },
    },
    food: {
      en: {
        fields: { id: { en: "Flour" }, foodName: { en: "flour", pl: "mąki" } },
      },
    },
  },
} as unknown as Ingredient;

export const eggsIngredient: Ingredient = {
  fields: {
    quantity: {
      en: {
        fields: { id: { en: "2" }, quantityName: { en: 2 } },
      },
    },
    food: {
      en: {
        fields: { id: { en: "Eggs" }, foodName: { en: "eggs", pl: "jajka" } },
      },
    },
  },
} as unknown as Ingredient;
