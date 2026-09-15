"use client";

import { useState } from "react";
import { RefreshCw, Sparkles } from "lucide-react";
import { RENKE_STICKERS } from "@/data/renke-stickers";

export default function RandomRenkeSticker() {
  const [index, setIndex] = useState(0);

  function nextSticker() {
    let next = index;
    while (next === index && RENKE_STICKERS.length > 1) {
      next = Math.floor(Math.random() * RENKE_STICKERS.length);
    }
    setIndex(next);
  }

  const sticker = RENKE_STICKERS[index];

  return (
    <section className="paper-panel ink-border mt-12 rounded-[2rem] p-8 text-center text-[#3b2718] sm:p-10">
      <Sparkles className="mx-auto text-[#a56327]" size={34} />
      <p className="mt-3 text-xs font-bold uppercase tracking-[.22em] text-[#9e6029]">
        Der Spruch-Orakel-Kessel
      </p>
      <h2 className="fantasy-title mt-2 text-4xl font-bold">
        Zufälliger Renke-Spruch
      </h2>
      <div className="mx-auto mt-7 max-w-2xl rounded-[1.5rem] border border-[#8b5a2b]/25 bg-[#f2d99d]/30 p-7">
        <div className="text-5xl">{sticker.emoji}</div>
        <p className="mt-5 font-serif text-2xl italic leading-9 text-[#5b402d]">
          „{sticker.text}“
        </p>
      </div>
      <button
        type="button"
        onClick={nextSticker}
        className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#8b5a2b]/40 bg-[#6f431f] px-6 py-3 font-bold text-[#f5dfad] transition hover:-translate-y-1 hover:bg-[#8e5728]"
      >
        <RefreshCw size={18} />
        Neuen Spruch ziehen
      </button>
    </section>
  );
}
