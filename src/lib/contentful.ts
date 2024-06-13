import contentful from "contentful";
import type { Document } from "@contentful/rich-text-types";
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

const isDocument = (value: unknown): value is Document => {
  return (
    typeof value === "object" &&
    value !== null &&
    "nodeType" in value &&
    value.nodeType === "document"
  );
};

export const getPages = async () => {
  const recipes = await getAllRecipes();

  return recipes.items.map(recipe => {
    const getDescription = (document: unknown) => {
      return isDocument(document)
        ? documentToHtmlString(document)
        : JSON.stringify(document);
    }

    return {
      params: { slug: recipe.fields.slug["en"] },
      props: {
        title: {
          en: recipe.fields.title["en"],
          pl: recipe.fields.title["pl"],
        },
        description: {
          en: getDescription(recipe.fields.description["en"]),
          pl: getDescription(recipe.fields.description["pl"]),
      },
      },
    };
  }
  );
}

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
