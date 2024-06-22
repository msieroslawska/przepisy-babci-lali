export type MappedRecipe = {
  title: {
    en?: string;
    pl?: string;
  };
  slug: {
    en?: string;
    pl?: string;
  };
  id: string;
  image: {
    alt: string;
    height: number;
    src: string;
    width: number;
  };
};
