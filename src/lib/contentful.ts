import contentful, { type AssetFile } from "contentful";

import type { HeroSkeleton, RecipeSkeleton } from "../types";
import { getRichTextValue, getStringValue } from "@utils/getContentfulValues";

const baseClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

const contentfulClient = baseClient.withoutUnresolvableLinks.withAllLocales;

const prefixImage = (url?: string) => `https:${url}?w=1000&h=500`;

const getAllRecipes = async () =>
  contentfulClient.getEntries<RecipeSkeleton>({
    content_type: "recipe",
    include: 3,
  });

export const getPages = async () => {
  const recipes = await getAllRecipes();

  return recipes.items.map(recipe => {
    const {
      fields: { description, ingredients, slug, title },
    } = recipe;

    return {
      params: { slug: getStringValue(slug["en"]) },
      props: {
        title: {
          en: getStringValue(title["en"]),
          pl: getStringValue(title["pl"]),
        },
        description: {
          en: getRichTextValue(description["en"]),
          pl: getRichTextValue(description["pl"]),
        },
        image: {
          alt: recipe.fields.image?.["en"]?.fields.title?.["en"] ?? "",
          src:
            prefixImage(
              recipe.fields.image?.["en"]?.fields.file?.["en"]?.url
            ) ?? null,
        },
        ingredients: ingredients["en"],
      },
    };
  });
};

export const getMappedRecipes = async () => {
  const recipes = await getAllRecipes();
  return recipes.items.map(recipe => {
    const { title, slug } = recipe.fields;
    return {
      title,
      slug,
      id: recipe.sys.id,
    };
  });
};

export const getHero = async () => {
  const hero = await contentfulClient.getEntry<HeroSkeleton>(
    "C4FseBO0WLxoeZiho1shu"
  );

  const heroImage = await contentfulClient
    .getAsset("1BfFi4cIf3oUp66FUnMYhL")
    .then(asset => prefixImage(asset.fields.file?.["en"]?.url));

  return { hero, heroImage };
};
