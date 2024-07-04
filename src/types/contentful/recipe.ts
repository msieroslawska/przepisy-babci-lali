import type { ChainModifiers, Entry, EntrySkeletonType, EntryFieldTypes, LocaleCode } from "contentful";
import type { IngredientSkeleton } from "./ingredient"

interface RecipeFields {
    title: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.AssetLink;
    source?: EntryFieldTypes.Symbol;
    ingredients: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<IngredientSkeleton>>;
    description: EntryFieldTypes.RichText;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type RecipeSkeleton = EntrySkeletonType<RecipeFields, "recipe">;
export type Recipe<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<RecipeSkeleton, Modifiers, Locales>;

export type RecipeImage = Recipe<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", "en" | "pl">["fields"]["image"];