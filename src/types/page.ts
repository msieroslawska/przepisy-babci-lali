import { Locale } from "./";

export type Recipes = Queries.AllRecipesQuery["en"]["nodes"];
export type Recipe = Recipes extends readonly (infer U)[] ? U : never;
type Slug = Recipe["slug"];

export type PageContextWithLocale = { locale: Locale };
export type PageContextWithSlugData = {
  slug: Slug;
  previousRecipeSlug: Slug;
  nextRecipeSlug: Slug;
};

export type PageContextWithRecipeData = {
  title: Recipe["title"];
  slug: Recipe["slug"];
  // tags: Recipe["tags"];
  image: Recipe["image"];
  description: Recipe["description"];
};

export type PageContextWithLocalizedSlugData = PageContextWithLocale &
  PageContextWithSlugData;
export type PageContextWithLocalizedRecipeData = PageContextWithLocale &
  PageContextWithRecipeData;
