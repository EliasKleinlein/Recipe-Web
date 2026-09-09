import Link from 'next/link';

type RecipeCardProps = {
  id: number;
  title: string;
  originalTitle: string;
  category: string;
  duration: number;
  servings: number;
  notes: string | null;
};

export default function RecipeCard({
  id,
  title,
  originalTitle,
  category,
  duration,
  servings,
  notes,
}: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${id}`}
      className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-orange-950/30"
    >
      <div className="mb-5 flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-orange-950 to-zinc-950">
        <span className="text-5xl transition duration-300 group-hover:scale-110">
          🍽️
        </span>
      </div>

      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-300">
          {category}
        </span>

        <span className="text-xs text-zinc-500">#{id}</span>
      </div>

      <h2 className="text-xl font-bold leading-tight text-white">{title}</h2>

      <p className="mt-2 text-sm text-zinc-400">{originalTitle}</p>

      <div className="mt-5 flex gap-4 text-sm text-zinc-300">
        <span>⏱ {duration} Min.</span>
        <span>👥 {servings}</span>
      </div>

      {notes && (
        <p className="mt-5 border-l-2 border-orange-500 pl-3 text-sm italic text-zinc-400">
          „{notes}“
        </p>
      )}
    </Link>
  );
}
