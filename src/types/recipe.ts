import type * as CFRichTextTypes from "@contentful/rich-text-types";
import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeIngredientFields {
  id?: EntryFields.Symbol;
  amount?: EntryFields.Symbol;
  unit?: EntryFields.Symbol;
  name?: EntryFields.Symbol;
}

export type TypeIngredient = Entry<TypeIngredientFields>;

export interface TypeRecipeFields {
  title: EntryFields.Symbol;
  slug: EntryFields.Symbol;
  scannedImage: Asset;
  ingredients: Entry<TypeIngredientFields>[];
  description: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  tags: EntryFields.Symbol[];
}

export type TypeRecipe = Entry<TypeRecipeFields>;