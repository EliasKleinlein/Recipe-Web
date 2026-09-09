import Hero from '@/components/Hero';
import RecipeGrid from '@/components/RecipeGrid';
import { getRecipes } from '@/lib/recipes';

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Hero />

        <section id="rezepte" className="py-14">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Kochbuch
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Renkes Rezept-Sammlung
            </h2>

            <p className="mt-3 max-w-2xl text-zinc-400">
              Hinter jedem schrägen Namen steckt ein echtes Rezept.
            </p>
          </div>

          <RecipeGrid recipes={recipes} />
        </section>
      </div>
    </main>
  );
}
