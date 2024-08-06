import { afterEach, describe, expect, it, vi } from "vitest";
import { getPages } from "@lib/contentful";

vi.mock("contentful");
describe.only("getPages()", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns two pages for two recipes", async () => {
    const result = await getPages();
    expect(result).toHaveLength(2);
  });

  // mock does not work for 2nd test???
  it("returns pages with correct format", async () => {
    const result = await getPages();
    expect(result).toHaveLength(2);
    expect(result[0]).toStrictEqual({
      params: { slug: "test-recipe" },
      props: {
        title: {
          en: "Test recipe",
          pl: "Przepis testowy",
        },
        description: {
          en: "Test description",
          pl: "Opis testowy",
        },
        image: {
          src: "https:http://test-domain.com/test-image.jpg?w=1000&h=500",
          alt: "Test image",
          height: 500,
          width: 1000,
        },
        ingredients: ["250 g flour", "2 eggs"],
        recipeNavigation: {
          prev: {
            slug: "test-recipe-2",
            title: "Test recipe 2 - Przepis testowy 2",
          },
          next: {
            slug: "test-recipe-2",
            title: "Test recipe 2 - Przepis testowy 2",
          },
        },
      },
    });
  });
});
