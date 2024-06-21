import type { NavigationItem, NavigationOptions } from "../types";

const HOME: NavigationItem = {
  title: "Strona główna | Home",
  path: "/",
};
const RECIPE_LIST: NavigationItem = {
  title: "Przepisy | Recipes",
  path: "/RecipeList",
};

export const createNavigation = (
  options: NavigationOptions
): NavigationItem[] => {
  const navigation: NavigationItem[] = [];

  if (!options.showHome && !options.showRecipes) {
    return navigation;
  }
  if (options.showHome) {
    navigation.push(HOME);
  }
  if (options.showRecipes) {
    navigation.push(RECIPE_LIST);
  }
  return navigation;
};
