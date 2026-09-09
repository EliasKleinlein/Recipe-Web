export type Recipe = {
  id: number;
  title: string;
  original_title: string;
  category: string;
  duration: number;
  servings: number;
  image: string | null;
  ingredients: string;
  instructions: string;
  notes: string | null;
  tags: string | null;
  created_at: Date;
};
