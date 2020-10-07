interface URLNode {
  node: {
    publicURL: string;
  }
}

export interface PublicURLQuery {
  allFile: {
    edges: URLNode[];
  }
}

export interface PathNode {
  node: {
    context: {
      name: string;
    };
    path: string;
  }
}

export interface PathQuery {
  allSitePage: {
    edges: PathNode[];
  }
}

export interface Ingredient {
  [key: string]: string;
}

export interface Recipe {
  name: string;
  instructions: string[];
  ingredientsList: Ingredient[];
}