import { Code2, CookingPot, Sparkles } from "lucide-react";
import type { RenkeSticker } from "@/data/renke-stickers";

type StickerCardProps = {
  sticker: RenkeSticker;
};

function getCategoryIcon(category: RenkeSticker["category"]) {
  if (category === "code") return <Code2 size={14} />;
  if (category === "küche") return <CookingPot size={14} />;
  return <Sparkles size={14} />;
}

function getCategoryLabel(category: RenkeSticker["category"]) {
  if (category === "code") return "Coding";
  if (category === "küche") return "Küche";
  return "Renke";
}

export default function StickerCard({ sticker }: StickerCardProps) {

  return (
    <article className="paper-panel renke-card fantasy-shine-card group relative overflow-hidden rounded-[2rem] border border-[#8b5a2b]/45 p-6 text-[#3b2718] shadow-[0_18px_45px_rgba(0,0,0,.28)] transition duration-300 hover:-translate-y-2 hover:rotate-[.3deg] hover:shadow-[0_25px_60px_rgba(218,145,44,.24)]">
      <div className="absolute -right-5 -top-5 text-8xl opacity-[.08] transition duration-300 group-hover:rotate-12 group-hover:scale-110">
        {sticker.emoji}
      </div>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full border border-[#8b5a2b]/30 bg-[#f2d99d]/45 text-3xl shadow-inner">
            {sticker.emoji}
          </div>

          <span className="flex items-center gap-1.5 rounded-full border border-[#8b5a2b]/20 bg-[#6f431f]/[.08] px-3 py-1.5 text-xs font-bold uppercase tracking-[.16em] text-[#8b5727]">
            {getCategoryIcon(sticker.category)}
            {getCategoryLabel(sticker.category)}
          </span>
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[.22em] text-[#9a622d]">
          Renke-Sticker
        </p>

        <h2 className="fantasy-title mt-2 text-3xl font-bold text-[#3a2415]">
          {sticker.title}
        </h2>

        <blockquote className="mt-5 border-l-2 border-[#b87531] pl-4 font-serif text-lg italic leading-8 text-[#654a36]">
          „{sticker.text}“
        </blockquote>

        <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#8e4d1e]">
          <Sparkles size={16} />
          Aus Renkes magischer Code-Küche
        </div>
      </div>
    </article>
  );
}
