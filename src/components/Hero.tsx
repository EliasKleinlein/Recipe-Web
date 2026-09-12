import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto mt-4 min-h-[900px] max-w-[1600px] overflow-hidden rounded-[1.75rem] border border-[#e2b85f]/45 bg-[#160f0a] shadow-[0_35px_100px_rgba(0,0,0,.68)] lg:aspect-[16/9] lg:min-h-0">
      <Image
        src="/images/fantasy-kitchen-hero.webp"
        alt="Gemalte magische Schlossküche mit Pergament, Kerzen, Kräutern, Büchern und Blick auf ein nächtliches Schloss"
        fill
        priority
        sizes="(max-width: 1660px) 100vw, 1600px"
        className="object-cover object-[56%_center] lg:object-center"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,7,13,.14),transparent_24%,transparent_73%,rgba(3,5,9,.42))]" />

      <div className="paper-panel absolute left-1/2 top-[8%] z-20 w-[88%] -translate-x-1/2 rounded-2xl border border-[#6e421e]/45 px-6 py-7 text-center text-[#392313] shadow-2xl sm:w-[76%] sm:px-10 lg:left-[36%] lg:top-[15%] lg:w-[32%] lg:translate-x-0 lg:border-0 lg:!bg-none lg:px-2 lg:py-0 lg:!shadow-none">
        <div className="mb-2 inline-flex items-center gap-2 text-[.68rem] font-black uppercase tracking-[.28em] text-[#8a521d] sm:text-xs">
          <Sparkles size={14} aria-hidden="true" /> Magie trifft Quellcode
        </div>

        <h1 className="fantasy-title text-6xl font-bold leading-[.78] text-[#3b2112] drop-shadow-[0_2px_0_rgba(255,244,207,.75)] sm:text-7xl lg:text-[clamp(4.2rem,5.8vw,7rem)]">
          Renkes
          <span className="block text-[#a4521d]">Kochbuch</span>
        </h1>

        <p className="mx-auto mt-5 max-w-md font-serif text-base font-semibold leading-6 text-[#51351f] sm:text-lg lg:mt-[clamp(.7rem,1.4vw,1.5rem)] lg:text-[clamp(.82rem,1.12vw,1.08rem)] lg:leading-relaxed">
          Wo Bugs gebraten, Commits abgeschmeckt und hungrige Entwickler mit echten Rezepten versorgt werden.
        </p>

        <Link
          href="#rezepte"
          className="magic-glow mt-6 inline-flex items-center gap-2 rounded-full border border-[#6f3f19]/45 bg-gradient-to-b from-[#d68a2c] to-[#8d4319] px-5 py-3 text-sm font-black text-[#fff1ca] transition hover:-translate-y-1 hover:brightness-110 lg:mt-[clamp(.7rem,1.6vw,1.5rem)]"
        >
          Renkes Rezepte entdecken <ArrowDown size={17} aria-hidden="true" />
        </Link>

        <div className="mx-auto mt-4 max-w-sm font-mono text-[.68rem] font-bold leading-5 text-[#744014] sm:text-xs lg:mt-[clamp(.5rem,1vw,1rem)]">
          <span className="opacity-70">{"// Küchenzauber ohne Endlosschleife"}</span>
          <br />while (hungry) &#123; cook(); eat(); &#125;
        </div>
      </div>

      <div className="absolute bottom-[-2%] left-[-11%] z-10 h-[68%] w-[76%] sm:left-[-5%] sm:h-[72%] sm:w-[58%] lg:left-[1%] lg:h-[88%] lg:w-[34%]">
        <Image
          src="/images/renke-chef-transparent.webp"
          alt="Renke als freigestellter gezeichneter Fantasy-Koch mit schwarzer Kochkleidung und Kochlöffel"
          fill
          priority
          sizes="(max-width: 640px) 76vw, (max-width: 1024px) 58vw, 34vw"
          className="object-contain object-bottom drop-shadow-[0_20px_24px_rgba(0,0,0,.68)]"
        />
        <div className="pointer-events-none absolute left-[42%] top-[56%] hidden -translate-x-1/2 -rotate-2 rounded-md border border-[#c58b36]/25 bg-[#100d0b]/65 px-2 py-1.5 text-center font-mono text-[clamp(6px,.52vw,9px)] leading-[1.45] text-[#edbd5f] shadow-lg lg:block">
          while(hungry) &#123;<br />&nbsp;&nbsp;cook();<br />&nbsp;&nbsp;eat();<br />&#125;
        </div>
      </div>

      <p className="absolute bottom-4 right-5 z-20 hidden rounded-full border border-[#f1c56c]/35 bg-[#140d08]/65 px-4 py-2 font-serif text-xs italic text-[#f5d895] backdrop-blur-sm sm:block">
        Kompiliert mit einer Prise Magie
      </p>
    </section>
  );
}
