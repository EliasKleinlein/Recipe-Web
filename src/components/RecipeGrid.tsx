import { CookingPot } from "lucide-react";
import RecipeCard from "./RecipeCard";

type Recipe = { id: number; title: string; original_title: string; category: string; duration: number; servings: number; notes: string | null; image: string | null };

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  if (recipes.length === 0) {
    return <div className="paper-panel rounded-3xl p-10 text-center text-[#4c3321]"><CookingPot className="mx-auto mb-4" size={42} /><p className="fantasy-title text-3xl">Der Kessel ist gerade leer.</p></div>;
  }

  return <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">{recipes.map((recipe) => <RecipeCard key={recipe.id} id={recipe.id} title={recipe.title} originalTitle={recipe.original_title} category={recipe.category} duration={recipe.duration} servings={recipe.servings} notes={recipe.notes} image={recipe.image} />)}</div>;
}
