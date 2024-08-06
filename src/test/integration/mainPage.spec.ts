import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test.describe("Main page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/");
    });
    test("Visiting the main page", async ({ page }) => {
      await expect(page.getByText("Strona główna | Home")).toBeVisible();
      await expect(page.getByText("Przepisy | Recipes")).toBeVisible();

      await expect(page.getByText("Dzień dobry")).toBeVisible();
      await expect(page.getByAltText("Babcia i ja")).toBeVisible();
      await expect(
        page.getByText("Page built using Contentful and Astro")
      ).toBeVisible();
    });

    test.skip("Navigation to the main page should not be possible", async ({
      page,
    }) => {
      const link = page.getByRole("link", {
        name: "Strona główna | Home",
      });
      expect(link).toBeVisible();
      // await link.click();
      // await expect(page).toHaveURL("http://localhost:4321/");
    });

    test("Navigation to the recipe list page should be possible", async ({
      page,
    }) => {
      const link = page.getByRole("link", {
        name: "Przepisy | Recipes",
      });
      expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL("http://localhost:4321/RecipeList");
    });
  });

  test.describe("Recipe list page", () => {
    test.beforeEach(async ({ page }) => {
      await page.goto("/RecipeList");
    });
    test("Visiting the recipe list page", async ({ page }) => {
      await expect(page.getByText("Strona główna | Home")).toBeVisible();
      await expect(page.getByText("Przepisy | Recipes")).toBeVisible();

      await expect(
        page.getByText("Page built using Contentful and Astro")
      ).toBeVisible();
    });

    test("Navigation to the main page should be possible", async ({ page }) => {
      const link = page.getByRole("link", {
        name: "Strona główna | Home",
      });
      expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL("http://localhost:4321/");
    });

    test.skip("Navigation to the recipe list page should not be possible", async ({
      page,
    }) => {
      const link = page.getByRole("link", {
        name: "Przepisy | Recipes",
      });
      expect(link).toBeVisible();
      // await link.click();
      // await expect(page).toHaveURL("http://localhost:4321/RecipeList");
    });
  });
});
