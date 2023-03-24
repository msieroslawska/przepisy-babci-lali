import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Asset, Entry, EntryFields } from "contentful";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface TypeFoodFields {
  id?: EntryFields.Symbol;
  foodName: EntryFields.Symbol;
}

export type TypeFood = Entry<TypeFoodFields>;

export interface TypeIngredientFields {
  id?: EntryFields.Symbol;
  quantity?: Entry<TypeQuantityFields>;
  unit?: Entry<TypeUnitFields>;
  food: Entry<TypeFoodFields>;
}

export type TypeIngredient = Entry<TypeIngredientFields>;
export interface TypeQuantityFields {
  id: EntryFields.Symbol;
  quantityName: EntryFields.Number;
}

export type TypeQuantity = Entry<TypeQuantityFields>;

export interface TypeRecipeFields {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  image: IGatsbyImageData;
  source?: EntryFields.Symbol;
  ingredients: Entry<TypeIngredientFields>[];
  description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  // tags?: EntryFields.Symbol[];
}

export type TypeRecipe = Entry<TypeRecipeFields>;

export interface TypeUnitFields {
  id: EntryFields.Symbol;
  unitName: EntryFields.Symbol;
}

export type TypeUnit = Entry<TypeUnitFields>;
