"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type BookPage = {
  title: string;
  text: string;
};

const pages: BookPage[] = [
  {
    title: "Für Renke",
    text:
      "Dieses Kochbuch ist mehr als nur unser Schulprojekt.\n\n" +
      "Es ist ein kleines Dankeschön für deinen Humor, deine Geduld und die vielen Momente, in denen du uns gezeigt hast, dass Fehler nicht das Ende sind.",
  },
  {
    title: "Was bleibt",
    text:
      "Vielleicht vergessen wir irgendwann einen Syntaxbefehl.\n\n" +
      "Aber die gemeinsame Zeit, deine Erklärungen und dein Humor bleiben hängen.",
  },
  {
    title: "Ein paar Worte",
    text:
      "Danke für deine Geduld und dafür, dass Lernen bei dir nie einfach nur Unterricht war.\n\n— Elias",
  },
  {
    title: "Danke für alles",
    text:
      "Dieses Projekt soll eine kleine Erinnerung an die gemeinsame Zeit sein.\n\n" +
      "Mit Rezepten, Chaos, Code und ziemlich viel Herz.",
  },
];

export default function FlipBook() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function nextPage() {
    if (pageIndex >= pages.length - 1) return;

    setDirection(1);
    setPageIndex((current) => current + 1);
  }

  function previousPage() {
    if (pageIndex <= 0) return;

    setDirection(-1);
    setPageIndex((current) => current - 1);
  }

  const page = pages[pageIndex];

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div
        className="relative mx-auto min-h-[650px]"
        style={{ perspective: "2200px" }}
      >
        <div className="grid min-h-[650px] overflow-hidden rounded-[26px] border border-[#8f6648]/40 bg-[#ead9b6] shadow-[0_30px_100px_rgba(0,0,0,0.5)] lg:grid-cols-2">

          {/* linke feste Buchseite */}
          <div className="relative min-h-[650px] bg-[#efe0bd] p-10 sm:p-14">
            <h2 className="text-center font-[cursive] text-5xl text-[#69442e]">
              Renkes Kochbuch
            </h2>

            <div className="my-10 text-center text-4xl text-[#a77a56]">
              ✦
            </div>

            <p className="font-[cursive] text-2xl leading-[1.8] text-[#59402f]">
              Für Geduld, Humor und eine richtig schöne gemeinsame Zeit.
            </p>

            <p className="mt-8 font-[cursive] text-2xl leading-[1.8] text-[#59402f]">
              Ein kleines digitales Gästebuch – nur für dich.
            </p>

            <div className="absolute bottom-10 left-0 right-0 text-center font-[cursive] text-2xl text-[#8d6548]">
              Danke, Renke.
            </div>
          </div>

          {/* rechte Buchseite */}
          <div className="relative min-h-[650px] bg-[#f7e9c9]">
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.div
                key={pageIndex}
                custom={direction}
                initial={{
                  rotateY: direction === 1 ? -95 : 95,
                  opacity: 0.5,
                }}
                animate={{
                  rotateY: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateY: direction === 1 ? 95 : -95,
                  opacity: 0.5,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin:
                    direction === 1 ? "left center" : "right center",
                  backfaceVisibility: "hidden",
                }}
                className="absolute inset-0 bg-[#f7e9c9] p-10 sm:p-14"
              >
                <div className="flex h-full flex-col">
                  <h3 className="font-[cursive] text-4xl text-[#70472e]">
                    {page.title}
                  </h3>

                  <div className="my-7 h-px w-36 bg-[#b98b61]" />

                  <p className="whitespace-pre-line font-[cursive] text-2xl leading-[1.8] text-[#59402f]">
                    {page.text}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-10">
                    <button
                      type="button"
                      onClick={previousPage}
                      disabled={pageIndex === 0}
                      className="rounded-full border border-[#8b5a3c] px-5 py-2 text-[#73482f] transition hover:bg-[#ecd8b4] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      ← Zurück
                    </button>

                    <span className="text-sm text-[#917059]">
                      Seite {pageIndex + 1} / {pages.length}
                    </span>

                    <button
                      type="button"
                      onClick={nextPage}
                      disabled={pageIndex === pages.length - 1}
                      className="rounded-full bg-[#7c4b30] px-5 py-2 text-[#fff3dc] transition hover:bg-[#633a25] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      Weiter →
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Schatten an der Buchfalz */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-10 bg-gradient-to-r from-black/15 to-transparent" />
          </div>
        </div>

        {/* Buchfalz */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-30 hidden w-10 -translate-x-1/2 bg-gradient-to-r from-black/20 via-black/5 to-black/20 lg:block" />
      </div>
    </div>
  );
}
