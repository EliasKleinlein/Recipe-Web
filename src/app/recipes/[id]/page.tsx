import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";
import { getRecipeById } from "@/lib/recipes";
import { RecipeIdSchema } from "@/schemas/recipeSchema";
import { ArrowLeft, Clock3, CookingPot, ScrollText, UsersRound } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ id: string }> };

export default async function RecipeDetailPage({ params }: Props) {
  const parsedId = RecipeIdSchema.safeParse(Number((await params).id));
  if (!parsedId.success) notFound();
  const recipe = await getRecipeById(parsedId.data);
  if (!recipe) notFound();

  const ingredients = recipe.ingredients.split("\n").filter(Boolean);
  const instructions = recipe.instructions.split("\n").filter(Boolean);

  return (
    <div className="fantasy-page">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-20">
        <Link href="/#rezepte" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#e8bd68] hover:text-[#ffe09a]"><ArrowLeft size={17} /> Zurück zu den Rezepten</Link>
        <article className="paper-panel ink-border overflow-hidden rounded-[2rem] p-7 sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[.22em] text-[#9a5c25]">{recipe.original_title} · {recipe.category}</p>
          <h1 className="fantasy-title mt-3 max-w-4xl text-5xl font-bold leading-none text-[#352013] sm:text-7xl">{recipe.title}</h1>
          <div className="mt-7 flex flex-wrap gap-3 text-[#604026]">
            <span className="flex items-center gap-2 rounded-full border border-[#7b4d27]/20 bg-[#7b4d27]/[.08] px-4 py-2 font-bold"><Clock3 size={18} /> {recipe.duration} Minuten</span>
            <span className="flex items-center gap-2 rounded-full border border-[#7b4d27]/20 bg-[#7b4d27]/[.08] px-4 py-2 font-bold"><UsersRound size={18} /> {recipe.servings} Portionen</span>
          </div>
          {recipe.notes && <blockquote className="mt-8 border-l-4 border-[#c57b2a] bg-[#ba7628]/[.08] p-5 font-serif text-lg italic text-[#67462f]">„{recipe.notes}“</blockquote>}

          <div className="mt-10 grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <section className="rounded-2xl border border-[#79502c]/20 bg-[#fff6db]/45 p-6">
              <h2 className="fantasy-title flex items-center gap-3 text-4xl font-bold"><CookingPot size={28} /> Zutaten</h2>
              <ul className="mt-5 space-y-3 font-serif text-lg">{ingredients.map((item) => <li key={item} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#a36327]" />{item}</li>)}</ul>
            </section>
            <section className="rounded-2xl border border-[#79502c]/20 bg-[#fff6db]/45 p-6">
              <h2 className="fantasy-title flex items-center gap-3 text-4xl font-bold"><ScrollText size={28} /> Zubereitung</h2>
              <ol className="mt-5 space-y-4 font-serif text-lg leading-8">{instructions.map((step, index) => <li key={`${index}-${step}`} className="grid grid-cols-[2rem_1fr] gap-3"><span className="fantasy-title text-2xl font-bold text-[#a36327]">{index + 1}.</span><span>{step}</span></li>)}</ol>
            </section>
          </div>
        </article>
      </main>
      <FantasyFooter />
    </div>
  );
}
