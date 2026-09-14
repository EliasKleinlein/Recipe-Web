import ChristophusCompanion from "@/components/ChristophusCompanion";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative mx-auto mt-4 min-h-[860px] max-w-[1600px] overflow-hidden rounded-[1.75rem] border border-[#d4a64e]/45 bg-[#140d08] shadow-[0_35px_100px_rgba(0,0,0,.72)] sm:min-h-[920px] lg:aspect-[16/9] lg:min-h-0">
      <Image
        src="/images/fantasy-old-castle-kitchen.webp"
        alt="Handgemalte alte Burgkueche mit Steinboegen, Feuerstelle, Kupferkesseln und schwerem Holztisch"
        fill
        priority
        sizes="(max-width: 1660px) 100vw, 1600px"
        className="object-cover object-[48%_center] lg:object-center"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,5,7,.16),transparent_24%,transparent_70%,rgba(3,3,4,.42))]" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,.5)]" />

      <div className="absolute left-1/2 top-[4%] z-20 h-[54%] w-[96%] -translate-x-1/2 sm:top-[3%] sm:h-[57%] sm:w-[82%] lg:left-auto lg:right-[2.5%] lg:top-[7%] lg:h-[84%] lg:w-[56%] lg:translate-x-0">
        <Image
          src="/images/fantasy-hero-parchment.webp"
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 96vw, (max-width: 1024px) 82vw, 56vw"
          className="object-contain drop-shadow-[0_22px_35px_rgba(0,0,0,.6)]"
        />

        <div className="absolute inset-x-[15%] top-[13%] flex h-[72%] flex-col items-center justify-center text-center text-[#392313] sm:inset-x-[16%] lg:inset-x-[17%] lg:top-[12%] lg:h-[74%]">
          <div className="mb-2 inline-flex items-center gap-2 text-[.58rem] font-black uppercase tracking-[.2em] text-[#8a521d] min-[390px]:text-[.65rem] sm:text-xs lg:text-[clamp(.62rem,.72vw,.76rem)]">
            <Sparkles size={14} aria-hidden="true" /> Magie trifft Quellcode
          </div>

          <h1 className="fantasy-title text-[3.25rem] font-bold leading-[.78] text-[#3b2112] drop-shadow-[0_2px_0_rgba(255,244,207,.75)] min-[390px]:text-6xl sm:text-7xl lg:text-[clamp(4.1rem,5.4vw,6.5rem)]">
            Renkes
            <span className="block text-[#a4521d]">Kochbuch</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md font-serif text-[.78rem] font-semibold leading-5 text-[#51351f] min-[390px]:text-sm sm:mt-5 sm:text-base sm:leading-6 lg:mt-[clamp(.55rem,1.15vw,1.25rem)] lg:text-[clamp(.76rem,1vw,1rem)] lg:leading-relaxed">
            Wo Bugs gebraten, Commits abgeschmeckt und hungrige Entwickler mit echten Rezepten versorgt werden.
          </p>

          <Link
            href="#rezepte"
            className="magic-glow mt-3 inline-flex items-center gap-2 rounded-full border border-[#6f3f19]/45 bg-gradient-to-b from-[#d68a2c] to-[#8d4319] px-4 py-2 text-xs font-black text-[#fff1ca] transition hover:-translate-y-1 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8d4319] sm:mt-5 sm:px-5 sm:py-3 sm:text-sm lg:mt-[clamp(.55rem,1.2vw,1.25rem)]"
          >
            Renkes Rezepte entdecken <ArrowDown size={17} aria-hidden="true" />
          </Link>

          <div className="mx-auto mt-3 max-w-sm font-mono text-[.52rem] font-bold leading-4 text-[#744014] min-[390px]:text-[.6rem] sm:mt-4 sm:text-xs sm:leading-5 lg:mt-[clamp(.4rem,.75vw,.8rem)] lg:text-[clamp(.54rem,.68vw,.72rem)]">
            <span className="opacity-70">{"// Küchenzauber ohne Endlosschleife"}</span>
            <br />while (hungry) &#123; cook(); eat(); &#125;
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-1%] left-[-15%] z-10 h-[51%] w-[92%] sm:left-[-7%] sm:h-[53%] sm:w-[66%] lg:left-[1%] lg:h-[91%] lg:w-[39%]">
        <Image
          src="/images/renke-chef-transparent.webp"
          alt="Renke als freigestellter gezeichneter Fantasy-Koch mit schwarzer Kochkleidung und Kochloeffel"
          fill
          priority
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 66vw, 39vw"
          className="object-contain object-bottom drop-shadow-[0_22px_28px_rgba(0,0,0,.75)]"
        />
        <div className="pointer-events-none absolute left-[43%] top-[57%] hidden -translate-x-1/2 -rotate-2 rounded-md border border-[#c58b36]/25 bg-[#100d0b]/68 px-2 py-1.5 text-center font-mono text-[clamp(6px,.5vw,9px)] leading-[1.45] text-[#edbd5f] shadow-lg lg:block">
          while(hungry) &#123;<br />&nbsp;&nbsp;cook();<br />&nbsp;&nbsp;eat();<br />&#125;
        </div>
      </div>

      <ChristophusCompanion />

      <p className="absolute bottom-4 right-5 z-30 hidden rounded-full border border-[#f1c56c]/35 bg-[#140d08]/72 px-4 py-2 font-serif text-xs italic text-[#f5d895] shadow-lg backdrop-blur-sm sm:block">
        Kompiliert mit einer Prise Magie
      </p>
    </section>
  );
}
