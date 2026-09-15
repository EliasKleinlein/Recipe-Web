import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";
import StickerCard from "@/components/stickers/StickerCard";
import RandomRenkeSticker from "@/components/stickers/RandomRenkeSticker";
import { RENKE_STICKERS } from "@/data/renke-stickers";
import { Sparkles, WandSparkles } from "lucide-react";

export default function StickersPage() {
  return (
    <div className="fantasy-page">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <section className="paper-panel ink-border relative overflow-hidden rounded-[2.2rem] p-8 text-center text-[#3b2718] sm:p-14">
          <div className="pointer-events-none absolute -left-10 top-8 opacity-10">
            <WandSparkles size={150} />
          </div>

          <Sparkles
            className="mx-auto text-[#a56327]"
            size={52}
            aria-hidden="true"
          />

          <p className="mt-5 text-sm font-bold uppercase tracking-[.24em] text-[#9e6029]">
            Renkes geheime Sammlung
          </p>

          <h1 className="fantasy-title mt-2 text-5xl font-bold sm:text-6xl">
            Coding-Sticker
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-lg leading-8 text-[#654a36]">
            Direkt aus der magischen Code-Küche: kleine Sprüche für Builds,
            Bugs, Brot, Brownies und natürlich Renke.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-[#75451f]">
            <span className="rounded-full border border-[#8b5a2b]/25 bg-[#8b5a2b]/[.08] px-4 py-2">
              {RENKE_STICKERS.length} Sticker
            </span>
            <span className="rounded-full border border-[#8b5a2b]/25 bg-[#8b5a2b]/[.08] px-4 py-2">
              Coding
            </span>
            <span className="rounded-full border border-[#8b5a2b]/25 bg-[#8b5a2b]/[.08] px-4 py-2">
              Küche
            </span>
            <span className="rounded-full border border-[#8b5a2b]/25 bg-[#8b5a2b]/[.08] px-4 py-2">
              Renke
            </span>
          </div>
        </section>

        <section className="mt-12">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {RENKE_STICKERS.map((sticker) => (
              <StickerCard key={sticker.id} sticker={sticker} />
            ))}
          </div>
        </section>

        <RandomRenkeSticker />
      </main>

      <FantasyFooter />
    </div>
  );
}
