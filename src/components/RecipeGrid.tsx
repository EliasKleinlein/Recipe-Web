import RecipeCard from './RecipeCard';

type Recipe = {
  id: number;
  title: string;
  original_title: string;
  category: string;
  duration: number;
  servings: number;
  notes: string | null;
};

type RecipeGridProps = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: RecipeGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          originalTitle={recipe.original_title}
          category={recipe.category}
          duration={recipe.duration}
          servings={recipe.servings}
          notes={recipe.notes}
        />
      ))}
    </div>
  );
}
