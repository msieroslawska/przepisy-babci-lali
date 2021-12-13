interface URLNode {
  node: {
    publicURL: string;
  };
}

export interface PublicURLQuery {
  allFile: {
    edges: URLNode[];
  };
}

export interface PathNode {
  node: {
    pageContext: {
      name: string;
    };
    path: string;
  };
}

export interface PathQuery {
  allSitePage: {
    edges: PathNode[];
  };
}

export interface IngredientChunk {
  [key: string]: string[];
}

export interface RecipeData {
  imageName: string;
  name: string;
  instructions: string[];
  ingredientsList: IngredientChunk[];
}
