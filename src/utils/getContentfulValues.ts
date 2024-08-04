import type { Document } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import type { Ingredient } from "types/contentful/ingredient";

const isDocument = (value: unknown): value is Document => {
  return (
    typeof value === "object" &&
    value !== null &&
    "nodeType" in value &&
    value.nodeType === "document"
  );
};
export const getRichTextValue = (document: unknown) => {
  return isDocument(document)
    ? documentToHtmlString(document)
    : JSON.stringify(document);
};

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
export const getStringValue = (value: unknown) => {
  return isString(value) ? value : "";
};

type ParsedIngredients = {
  en: string[];
  pl: string[];
};

// What an ugly ass code
export const parseIngredients = (
  ingredients: Ingredient[]
): ParsedIngredients => {
  return ingredients.reduce(
    (acc: ParsedIngredients, cur) => {
      const quantityName =
        cur.fields.quantity?.en?.fields.quantityName.en ?? "";
      const enUnitName = cur.fields.unit?.en?.fields.unitName.en ?? "";
      const plUnitName = cur.fields.unit?.en?.fields.unitName.pl ?? "";
      const enFoodName = cur.fields.food?.en?.fields.foodName.en ?? "";
      const plFoodName = cur.fields.food?.en?.fields.foodName.pl ?? "";

      acc.en.push(`${quantityName} ${enUnitName} ${enFoodName}`);
      acc.pl.push(`${quantityName} ${plUnitName} ${plFoodName}`);
      return acc;
    },
    { en: [], pl: [] }
  );
};
