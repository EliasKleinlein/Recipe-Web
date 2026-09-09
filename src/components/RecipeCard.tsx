import Image from 'next/image';
import Link from 'next/link';

type RecipeCardProps = {
  id: number;
  title: string;
  originalTitle: string;
  category: string;
  duration: number;
  servings: number;
  notes: string | null;
  image: string | null;
};

export default function RecipeCard({
  id,
  title,
  originalTitle,
  category,
  duration,
  servings,
  notes,
  image,
}: RecipeCardProps) {
  return (
    <Link
      href={`/recipes/${id}`}
      className="group block overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900/85 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-950/30"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-orange-950 to-zinc-950">
        {image ? (
          <Image
            src={image}
            alt={originalTitle}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-6xl transition duration-300 group-hover:scale-110">
              🍽️
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-xs font-semibold text-orange-200 backdrop-blur">
          {category}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-orange-400">
          {originalTitle}
        </p>

        <h2 className="mt-2 text-xl font-black leading-snug text-white">
          {title}
        </h2>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
            ⏱ {duration} Min.
          </span>

          <span className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-zinc-300">
            👥 {servings} Portionen
          </span>
        </div>

        {notes && (
          <p className="mt-5 border-l-2 border-orange-500 pl-3 text-sm italic leading-6 text-zinc-400">
            „{notes}“
          </p>
        )}

        <div className="mt-5 text-sm font-semibold text-orange-400 transition group-hover:translate-x-1">
          Rezept ansehen →
        </div>
      </div>
    </Link>
  );
}
