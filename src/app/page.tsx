import FantasyFooter from "@/components/FantasyFooter";
import GiftButton from "@/components/GiftButton";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecipeGrid from "@/components/RecipeGrid";
import { getRecipes } from "@/lib/recipes";
import { Flame, Sparkles } from "lucide-react";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <div className="fantasy-page">
      <Navbar />
      <main>
        <div className="px-3 sm:px-6"><Hero /></div>
        <section id="rezepte" className="mx-auto max-w-7xl scroll-mt-28 px-5 py-24 sm:px-8">
          <div className="mb-12 flex flex-col gap-9 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[.28em] text-[#dda64c]"><Flame size={17} /> Aus Renkes Zauberküche</p>
              <h2 className="fantasy-title text-5xl font-bold leading-none text-[#fff0c5] sm:text-7xl">Renkes beliebteste Rezepte</h2>
              <div className="ornament-divider mt-5 max-w-lg"><Sparkles size={17} /></div>
              <p className="mt-5 max-w-2xl font-serif text-lg leading-8 text-[#cfc2aa]">Hinter jedem schrägen Namen steckt ein echtes Rezept – getestet, essbar und nur gelegentlich voller Bugs.</p>
            </div>
            <div className="mb-4 self-center sm:self-auto"><GiftButton /></div>
          </div>
          <RecipeGrid recipes={recipes} />
        </section>
      </main>
      <FantasyFooter />
    </div>
  );
}
