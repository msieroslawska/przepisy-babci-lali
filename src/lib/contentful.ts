import contentful from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

import type { HeroSkeleton, RecipeSkeleton } from "../types";

const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

const getAllRecipes = async () =>
  contentfulClient.withoutUnresolvableLinks.withAllLocales.getEntries<RecipeSkeleton>(
    {
      content_type: "recipe",
    },
  );

const isDocument = (value: any): value is Document => {
  return value.sys?.type === "Document";
};

export const getPages = async () => {
  const recipes = await getAllRecipes();

  return recipes.items.map(recipe => {
    const document = recipe.fields.description["pl"];
    const description = isDocument(document)
      ? documentToHtmlString(document)
      : document;
    return {
      params: { slug: recipe.fields.slug["pl"] },
      props: {
        title: recipe.fields.title["pl"],
        description,
      },
    };
  });
};

export const getMappedRecipes = async () => {
  const recipes = await getAllRecipes();
  return recipes.items.map(recipe => {
    const { image, title, slug } = recipe.fields;
    return {
      image,
      title,
      slug,
      id: recipe.sys.id,
    };
  });
};

export const getHero = async () => {
  const hero =
    await contentfulClient.withoutUnresolvableLinks.withAllLocales.getEntry<HeroSkeleton>(
      "C4FseBO0WLxoeZiho1shu",
    );

  const heroImage = await contentfulClient
    .getAsset("1BfFi4cIf3oUp66FUnMYhL")
    .then(asset => `https:${asset.fields.file?.url}?w=1000&h=500`);

  // const localizedHero = hero.fields.hero[currentLocale];
  console.log(heroImage);

  return { hero, heroImage };
};
