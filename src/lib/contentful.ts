import contentful from "contentful";

import type {
  HeroSkeleton,
  MappedRecipe,
  RecipeImage,
  RecipeSkeleton,
} from "../types";
import { getRichTextValue, getStringValue } from "@utils/getContentfulValues";

type ImageOptions = {
  height: number;
  width: number;
};

const baseClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

const contentfulClient = baseClient.withoutUnresolvableLinks.withAllLocales;

const prefixImage = (url = "", { height, width }: ImageOptions) =>
  `https:${url}?w=${width}&h=${height}`;

const getImageProps = (image: RecipeImage, { height, width }: ImageOptions) => {
  return {
    height,
    width,
    alt: image?.["en"]?.fields.title?.["en"] ?? "",
    src:
      prefixImage(image?.["en"]?.fields.file?.["en"]?.url, { height, width }) ??
      null,
  };
};

const getAllRecipes = async () =>
  contentfulClient.getEntries<RecipeSkeleton>({
    content_type: "recipe",
    include: 3,
  });

export const getPages = async () => {
  const recipes = await getAllRecipes();

  return recipes.items.map((recipe, idx, recipes) => {
    const {
      fields: { description, ingredients, slug, title },
    } = recipe;

    const prevIdx = idx == 0 ? recipes.length - 1 : idx - 1;
    const nextIdx = idx == recipes.length - 1 ? 0 : idx + 1;

    const createNavigationTitle = (idx: number) =>
      `${getStringValue(recipes[idx].fields.title["en"])} - ${getStringValue(
        recipes[idx].fields.title["pl"]
      )}`;

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
        image: getImageProps(recipe.fields.image, { height: 500, width: 1000 }),
        ingredients: ingredients["en"],
        recipeNavigation: {
          prev: {
            slug: getStringValue(recipes[prevIdx].fields.slug["en"]),
            title: createNavigationTitle(prevIdx),
          },
          next: {
            slug: getStringValue(recipes[nextIdx].fields.slug["en"]),
            title: createNavigationTitle(nextIdx),
          },
        },
      },
    };
  });
};

export const getRecipeList = async (): Promise<MappedRecipe[]> => {
  const recipes = await getAllRecipes();
  return recipes.items.map(recipe => {
    const { title, slug } = recipe.fields;
    return {
      image: getImageProps(recipe.fields.image, { height: 500, width: 1000 }),
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
  const height = 300;
  const width = 600;

  const heroImage = await contentfulClient
    .getAsset("1BfFi4cIf3oUp66FUnMYhL")
    .then(asset => ({
      height,
      width,
      src: prefixImage(asset.fields.file?.["en"]?.url, {
        height,
        width,
      }),
    }));

  return { hero, heroImage };
};
