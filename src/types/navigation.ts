export type NavigationItem = {
  title: string;
  path: string;
};

export type Navigation = {
  currentPage: string;
  navigationItems: NavigationItem[];
};
