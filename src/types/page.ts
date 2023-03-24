import { Language } from "./language";

export type Recipes = Queries.AllRecipesQuery["en"]["nodes"];
export type Recipe = Recipes extends readonly (infer U)[] ? U : never;
type Slug = Recipe["slug"];

export type PageContextWithLocale = { language: Language };
export type PageContextWithSlugData = {
  slug: Slug;
  previousRecipeSlug: Slug;
  nextRecipeSlug: Slug;
};

export type PageContextWithRecipeData = {
  title: Recipe["title"];
  slug: Recipe["slug"];
  image: Recipe["image"];
  description: Recipe["description"];
};

export type PageContextWithLocalizedSlugData = PageContextWithLocale &
  PageContextWithSlugData;
export type PageContextWithLocalizedRecipeData = PageContextWithLocale &
  PageContextWithRecipeData;
