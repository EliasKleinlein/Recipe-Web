import FantasyFooter from "@/components/FantasyFooter";
import Hero from "@/components/Hero";
import KitchenMasterExperience from "@/components/KitchenMasterExperience";
import Navbar from "@/components/Navbar";
import { getRecipes } from "@/lib/recipes";

export default async function Home() {
  const recipes = await getRecipes();
  const recipeCards = recipes.map((recipe) => ({
    id: recipe.id,
    title: recipe.title,
    original_title: recipe.original_title,
    category: recipe.category,
    duration: recipe.duration,
    servings: recipe.servings,
    notes: recipe.notes,
    image: recipe.image,
  }));

  return (
    <div className="fantasy-page">
      <Navbar />
      <main>
        <div className="px-3 sm:px-6">
          <Hero />
        </div>
        <KitchenMasterExperience recipes={recipeCards} />
      </main>
      <FantasyFooter />
    </div>
  );
}
