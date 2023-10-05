import contentful from "contentful";
import type { RecipeSkeleton } from "../types";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

export const getAllRecipes = async () =>
  contentfulClient.withoutUnresolvableLinks.getEntries<RecipeSkeleton>({
    content_type: "recipe",
  });

type RecipeItems = Awaited<ReturnType<typeof getAllRecipes>>;

export const mapRecipes = (recipes: RecipeItems) =>
  recipes.items.map(recipe => {
    const { image, title, slug } = recipe.fields;
    return {
      image,
      title,
      slug,
      id: recipe.sys.id,
    };
  });

export const getHero = async () =>
  contentfulClient.withoutUnresolvableLinks
    .getAsset("1BfFi4cIf3oUp66FUnMYhL")
    .then(asset => `${asset.fields.file?.url}?w=1000&h=500`);
