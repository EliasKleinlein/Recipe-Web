"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type GuestEntry = {
  id: number;
  name: string;
  message: string;
};

const memoryPages = [
  {
    title: "Für Renke",
    text:
      "Dieses Kochbuch ist mehr als nur unser Schulprojekt.\n\n" +
      "Es ist ein kleines Dankeschön für deinen Humor, deine Geduld, deine Erklärungen und all die Momente, in denen du uns gezeigt hast, dass ein Fehler nicht das Ende ist, sondern meistens nur der Anfang vom nächsten Versuch.",
  },
  {
    title: "Was bleibt",
    text:
      "Vielleicht vergessen wir irgendwann einen Syntaxbefehl.\n\n" +
      "Aber die gemeinsame Zeit werden wir nicht vergessen.\n\n" +
      "Manche Rezepte bleiben. Manche Menschen auch.",
  },
];

const initialEntries: GuestEntry[] = [
  {
    id: 1,
    name: "Elias",
    message:
      "Danke für die gemeinsame Zeit, die vielen Erklärungen und dafür, dass Lernen bei dir nie einfach nur Unterricht war.",
  },
  {
    id: 2,
    name: "Muju",
    message:
      "Danke für deine Geduld, deinen Humor und dafür, dass du uns immer wieder motiviert hast, auch wenn der Code mal gar nichts mehr machen wollte.",
  },
];

export default function ThankYouBook() {
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<GuestEntry[]>(initialEntries);

  const totalPages = memoryPages.length + entries.length + 1;

  function nextPage() {
    if (pageIndex >= totalPages - 1) return;
    setDirection(1);
    setPageIndex((current) => current + 1);
  }

  function previousPage() {
    if (pageIndex <= 0) return;
    setDirection(-1);
    setPageIndex((current) => current - 1);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !message.trim()) return;

    setEntries((current) => [
      ...current,
      {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
      },
    ]);

    setName("");
    setMessage("");
  }

  function renderCurrentPage() {
    if (pageIndex < memoryPages.length) {
      const page = memoryPages[pageIndex];

      return (
        <>
          <h2 className="font-serif text-4xl text-[#603c27]">
            {page.title}
          </h2>

          <div className="my-6 flex items-center gap-4 text-[#866044]">
            <div className="h-px flex-1 bg-[#9c7659]/40" />
            <span className="text-xl">✦</span>
            <div className="h-px flex-1 bg-[#9c7659]/40" />
          </div>

          <p className="whitespace-pre-line font-[cursive] text-2xl leading-[1.75] text-[#4e392c]">
            {page.text}
          </p>
        </>
      );
    }

    const entryIndex = pageIndex - memoryPages.length;

    if (entryIndex < entries.length) {
      const entry = entries[entryIndex];

      return (
        <>
          <h2 className="font-serif text-3xl text-[#603c27]">
            Ein paar Worte für Renke
          </h2>

          <div className="my-7 h-px w-32 bg-[#9c7659]/40" />

          <p className="font-[cursive] text-3xl leading-[1.7] text-[#49362a]">
            {entry.message}
          </p>

          <p className="mt-8 text-right font-[cursive] text-2xl text-[#80583e]">
            — {entry.name}
          </p>
        </>
      );
    }

    return (
      <>
        <h2 className="font-serif text-3xl text-[#603c27]">
          Schreib Renke ein paar Worte
        </h2>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="guest-name"
              className="mb-2 block font-[cursive] text-xl text-[#674a37]"
            >
              Dein Name
            </label>

            <input
              id="guest-name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full border-0 border-b-2 border-[#8f6a4d]/35 bg-transparent px-1 py-3 font-[cursive] text-2xl outline-none focus:border-[#815b40]"
              placeholder="Dein Name ..."
            />
          </div>

          <div>
            <label
              htmlFor="guest-message"
              className="mb-2 block font-[cursive] text-xl text-[#674a37]"
            >
              Deine Nachricht
            </label>

            <textarea
              id="guest-message"
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full resize-none rounded-xl border border-[#8f6a4d]/25 bg-white/20 p-4 font-[cursive] text-2xl leading-relaxed outline-none focus:border-[#815b40]"
              placeholder="Was möchtest du Renke sagen?"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-[#70442d] px-6 py-3 font-semibold text-[#fff1d7] shadow-lg"
          >
            Ins Buch eintragen
          </motion.button>
        </form>
      </>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#30231d] px-4 py-12">
      {/* Bleistift-Küchenhintergrund */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 grayscale"
        style={{
          backgroundImage: "url('/images/danke-renke-kitchen.jpg')",
        }}
      />

      {/* dunkler Filter */}
      <div className="absolute inset-0 bg-[#2b1c15]/70" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Überschrift OHNE geschwungene Linie */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h1 className="font-serif text-5xl text-[#f3dfbd] sm:text-7xl">
            Danke Renke
          </h1>

          <p className="mx-auto mt-4 max-w-2xl font-[cursive] text-xl text-[#d5c0a3] sm:text-2xl">
            Für Geduld, Humor und eine richtig schöne gemeinsame Zeit.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="closed-book"
              type="button"
              onClick={() => setIsOpen(true)}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.025, rotate: -1 }}
              whileTap={{ scale: 0.98 }}
              className="relative mx-auto block aspect-[4/3] w-full max-w-xl rounded-r-[2rem] rounded-l-md border-[10px] border-[#51301f] bg-[#82472e] p-10 shadow-[0_35px_100px_rgba(0,0,0,0.65)]"
            >
              <div className="absolute bottom-0 left-8 top-0 w-2 bg-black/20" />

              <div className="flex h-full flex-col items-center justify-center rounded-xl border border-[#d6ac77]/35">
                <div className="text-6xl">🌿</div>

                <div className="mt-5 font-[cursive] text-5xl text-[#f1d5ad]">
                  Renkes Kochbuch
                </div>

                <p className="mt-4 text-sm uppercase tracking-[0.32em] text-[#d9b68a]">
                  Ein kleines Dankeschön
                </p>

                <motion.p
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-10 font-[cursive] text-xl text-[#ead0aa]"
                >
                  Zum Öffnen anklicken
                </motion.p>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="open-book"
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.9,
                type: "spring",
                stiffness: 70,
                damping: 16,
              }}
              className="relative mx-auto min-h-[680px] max-w-6xl"
              style={{
                perspective: "2400px",
                transformOrigin: "center",
              }}
            >
              <div className="grid min-h-[680px] overflow-hidden rounded-[26px] border border-[#6d4c36]/40 shadow-[0_35px_120px_rgba(0,0,0,0.7)] lg:grid-cols-2">
                {/* linke Buchseite */}
                <div className="relative min-h-[680px] bg-[#eddbb8] p-10 sm:p-14">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_40%_30%,#51301f_1px,transparent_1px)] bg-[size:13px_13px]" />
                  </div>

                  <div className="relative">
                    <h2 className="text-center font-serif text-4xl text-[#65412d]">
                      Renkes Kochbuch
                    </h2>

                    <p className="mt-10 font-[cursive] text-2xl leading-[1.8] text-[#574131]">
                      Ein kleines digitales Erinnerungsbuch.
                    </p>

                    <p className="mt-7 font-[cursive] text-2xl leading-[1.8] text-[#574131]">
                      Mit Rezepten, Chaos, Code, vielen Ideen und ziemlich viel Herz.
                    </p>

                    <div className="mt-12 text-center text-5xl">
                      🌿
                    </div>

                    <p className="mt-10 text-center font-[cursive] text-3xl text-[#7d563d]">
                      Manche Rezepte bleiben.
                    </p>

                    <p className="mt-3 text-center font-[cursive] text-3xl text-[#7d563d]">
                      Manche Menschen auch.
                    </p>
                  </div>
                </div>

                {/* rechte Buchseite */}
                <div className="relative min-h-[680px] bg-[#f5e6c7]">
                  <AnimatePresence mode="popLayout" custom={direction}>
                    <motion.div
                      key={pageIndex}
                      custom={direction}
                      initial={{
                        rotateY: direction === 1 ? -95 : 95,
                        opacity: 0.45,
                      }}
                      animate={{
                        rotateY: 0,
                        opacity: 1,
                      }}
                      exit={{
                        rotateY: direction === 1 ? 95 : -95,
                        opacity: 0.45,
                      }}
                      transition={{
                        duration: 0.95,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        transformOrigin:
                          direction === 1 ? "left center" : "right center",
                        backfaceVisibility: "hidden",
                      }}
                      className="absolute inset-0 flex flex-col bg-[#f5e6c7] p-10 sm:p-14"
                    >
                      <div className="flex-1">
                        {renderCurrentPage()}
                      </div>

                      <div className="mt-10 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={previousPage}
                          disabled={pageIndex === 0}
                          className="rounded-full border border-[#80583e] px-5 py-2 text-[#68462f] transition hover:bg-[#ead6b2] disabled:cursor-not-allowed disabled:opacity-25"
                        >
                          ← Zurück
                        </button>

                        <span className="text-sm text-[#8d6d58]">
                          Seite {pageIndex + 1} / {totalPages}
                        </span>

                        <button
                          type="button"
                          onClick={nextPage}
                          disabled={pageIndex === totalPages - 1}
                          className="rounded-full bg-[#70442d] px-5 py-2 text-[#fff1d7] transition hover:bg-[#5d3624] disabled:cursor-not-allowed disabled:opacity-25"
                        >
                          Weiter →
                        </button>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Schatten der Buchfalz */}
                  <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-10 bg-gradient-to-r from-black/15 to-transparent" />
                </div>
              </div>

              {/* mittlere Buchfalz */}
              <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-30 hidden w-12 -translate-x-1/2 bg-gradient-to-r from-black/20 via-black/5 to-black/20 lg:block" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
