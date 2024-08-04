import type {
  ChainModifiers,
  Entry,
  EntrySkeletonType,
  EntryFieldTypes,
  LocaleCode,
} from "contentful";
import type { IngredientSkeleton, Loc, Mod } from "./";

interface RecipeFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  image: EntryFieldTypes.AssetLink;
  source?: EntryFieldTypes.Symbol;
  ingredients: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<IngredientSkeleton>
  >;
  description: EntryFieldTypes.RichText;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type RecipeSkeleton = EntrySkeletonType<RecipeFields, "recipe">;
type R<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<
  RecipeSkeleton,
  Modifiers,
  Locales
>;
export type Recipe = R<Mod, Loc>;

export type RecipeImage = R<Mod, Loc>["fields"]["image"];
