export interface IngredientsType {
  quantity: number;
  unit?: string;
  ingredient: string;
}

export interface RecipeBase {
  id: number;
  title: string;
  portions: number;
  ingredients: IngredientsType[];
  image: string;
  instructions: string[];
  nb?: string;
}

export interface GalleryType {
  title: string;
  content: RecipeBase[];
}