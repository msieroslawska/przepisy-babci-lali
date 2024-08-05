import type { NavigationItem, Navigation } from "../types";

const HOME: NavigationItem = {
  title: "Strona główna | Home",
  path: "/",
};
const RECIPE_LIST: NavigationItem = {
  title: "Przepisy | Recipes",
  path: "/RecipeList",
};

export const createNavigation = (currentPath: string): Navigation => {
  return {
    currentPage: currentPath,
    navigationItems: [HOME, RECIPE_LIST],
  };
};

export const isCurrentPage = (path: string, navItemPath: string): boolean =>
  path === navItemPath;
