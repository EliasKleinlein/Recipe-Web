"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Person = {
  id: string;
  name: string;
  sticker: string;
};

const people: Person[] = [
  { id: "muju", name: "Muju", sticker: "/stickers/class/muju.png" },
  { id: "elias", name: "Elias", sticker: "/stickers/class/elias.png" },
  { id: "eric", name: "Eric", sticker: "/stickers/class/eric.png" },
  { id: "marco", name: "Marco", sticker: "/stickers/class/marco.png" },
  { id: "christoph", name: "Christoph", sticker: "/stickers/class/christoph.png" },
  { id: "kevin", name: "Kevin", sticker: "/stickers/class/kevin.png" },
  { id: "niko", name: "Niko", sticker: "/stickers/class/niko.png" },
  { id: "marlin", name: "Marlin", sticker: "/stickers/class/marlin.png" },
  { id: "daniel", name: "Daniel", sticker: "/stickers/class/daniel.png" },
  { id: "pavel", name: "Pavel", sticker: "/stickers/class/pavel.png" },
];

const names = people.map((person) => person.name).join(" · ");

export default function ClassThankYouBook() {
  // -1 = Widmung, 0 = Muju, 1 = Elias ...
  const [page, setPage] = useState(-1);
  const [messages, setMessages] = useState<Record<string, string>>({});
  const [turning, setTurning] = useState(false);
  const [targetPage, setTargetPage] = useState<number | null>(null);
  const [turnDirection, setTurnDirection] = useState<1 | -1>(1);

  function turnTo(nextPage: number, direction: 1 | -1) {
    if (turning) return;
    if (nextPage < -1 || nextPage >= people.length) return;

    setTargetPage(nextPage);
    setTurnDirection(direction);
    setTurning(true);
  }

  function finishTurn() {
    if (targetPage !== null) {
      setPage(targetPage);
    }

    setTargetPage(null);
    setTurning(false);
  }

  function DedicationLeft() {
    return (
      <div className="relative flex h-full flex-col overflow-hidden bg-[#ead8b5] px-10 py-8 text-[#4c3628] sm:px-14">
        <PaperTexture />

        <div className="relative z-10 flex h-full flex-col">
          <p className="text-center font-serif text-xl tracking-[0.22em]">
            RENKES KOCHBUCH
          </p>

          <div className="mx-auto mt-3 h-px w-56 bg-[#76543e]/40" />

          <div className="mt-5 text-center">
            <p className="font-[cursive] text-5xl leading-none sm:text-6xl">
              Für
            </p>

            <p className="font-[cursive] text-6xl leading-none sm:text-7xl">
              Renke
            </p>

            <div className="mx-auto mt-4 flex w-52 items-center gap-4">
              <div className="h-px flex-1 bg-[#76543e]/55" />
              <span className="text-lg">♥</span>
              <div className="h-px flex-1 bg-[#76543e]/55" />
            </div>
          </div>

          <div className="relative mt-3 flex flex-1 items-center justify-center">
            <div className="relative h-[470px] w-full max-w-[500px]">
              <Image
                src="/images/renke-steinbock-krieger.png"
                alt="Sayer Renke Walter Malte Brixel als Zwergenkrieger auf einem Steinbock"
                fill
                priority
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>

          <div className="mt-1 flex items-end justify-between gap-6">
            <div className="rotate-[-3deg] font-[cursive] text-lg leading-relaxed text-[#6d503b]">
              Guter Code.<br />
              Gutes Essen.<br />
              Gute Menschen. ♥
            </div>

            <div className="text-right">
              <p className="font-mono text-base text-[#5f4736]">
                {"{ }"}
              </p>
              <p className="mt-2 font-serif text-sm tracking-[0.22em]">
                G-SEAI-8 · 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function DedicationRight() {
    return (
      <div className="relative flex h-full flex-col overflow-hidden bg-[#f1dfbf] px-11 py-10 text-[#4a3528] sm:px-14">
        <PaperTexture />

        <div className="relative z-10 flex h-full flex-col">
          <h2 className="font-[cursive] text-5xl leading-none">
            Lieber Renke,
          </h2>

          <div className="mt-7 space-y-4 font-serif text-[17px] leading-[1.55]">
            <p>
              dieses Kochbuch ist eigentlich als Schulprojekt entstanden.
              Aber mit der Zeit wurde daraus viel mehr als nur Code, Rezepte
              und Aufgaben.
            </p>

            <p>
              Es ist ein kleines Dankeschön für deine Geduld, deinen Humor
              und deine Art, Wissen zu vermitteln.
            </p>

            <p>
              Vor allem aber dafür, dass du{" "}
              <strong>immer ein Lächeln im Gesicht hast</strong> und durch
              deine Art{" "}
              <strong>
                immer – aber wirklich immer – positive Energie ausstrahlst.
              </strong>{" "}
              Genau das macht die Zeit mit dir so besonders.
            </p>

            <p>
              Du hast uns gezeigt, dass Fehler nicht das Ende sind, sondern
              oft einfach nur der Anfang vom nächsten Versuch. Vielleicht
              vergessen wir irgendwann den einen oder anderen Syntaxbefehl
              oder warum ein Build mal wieder nicht laufen wollte.
            </p>

            <p className="font-semibold">
              Aber an die gemeinsame Zeit mit dir werden wir uns erinnern.
            </p>

            <p>
              Deshalb haben wir dir hier noch ein paar Seiten dagelassen.
              Jeder von uns mit seinem eigenen kleinen Eintrag, seinen
              Gedanken und seinem Dank.
            </p>
          </div>

          <div className="my-6 text-center">
            <div className="inline-block rotate-[-1deg] bg-[#e8cfa7]/70 px-8 py-3 font-[cursive] text-3xl">
              Danke für alles, Renke. ♥
            </div>
          </div>

          <p className="text-center font-serif text-sm leading-relaxed text-[#654b39]">
            {names}
          </p>

          <div className="mx-auto my-5 flex w-56 items-center gap-4 text-[#74543d]">
            <div className="h-px flex-1 bg-[#74543d]/40" />
            <span>♥</span>
            <div className="h-px flex-1 bg-[#74543d]/40" />
          </div>

          <div className="mt-auto flex items-end justify-between gap-5">
            <div className="font-mono text-[12px] leading-relaxed text-[#594333]">
              <div>$ git commit -m "Danke Renke"</div>
              <div>$ git push origin erinnerungen</div>
            </div>

            <div className="rotate-[-5deg] text-right font-[cursive] text-base text-[#705440]">
              Manche Menschen
              <br />
              machen alles
              <br />
              ein bisschen besser. ♥
            </div>
          </div>
        </div>
      </div>
    );
  }

  function PersonLeft({ person }: { person: Person }) {
    return (
      <div className="relative flex h-full flex-col items-center justify-center overflow-hidden bg-[#ead8b5] p-10 text-center text-[#533b2c]">
        <PaperTexture />

        <div className="relative z-10">
          <p className="font-[cursive] text-2xl text-[#805b3e]">
            Seite von
          </p>

          <h2 className="mt-2 font-serif text-6xl">
            {person.name}
          </h2>

          <div className="mx-auto mt-9 flex h-72 w-72 items-center justify-center rounded-[2rem] border-2 border-dashed border-[#8a674e]/35 bg-[#f7e7c8]/45">
            <div>
              <div className="text-7xl grayscale">👨‍🍳</div>
              <p className="mt-4 font-[cursive] text-2xl">
                {person.name}-Sticker
              </p>
              <p className="mt-1 text-sm opacity-60">
                kommt hier hinein
              </p>
            </div>
          </div>

          <p className="mx-auto mt-9 max-w-sm font-[cursive] text-2xl leading-relaxed">
            Ein paar persönliche Worte für Renke.
          </p>
        </div>
      </div>
    );
  }

  function PersonRight({ person }: { person: Person }) {
    return (
      <div className="relative flex h-full flex-col overflow-hidden bg-[#f1dfbf] p-10 text-[#523a2c] sm:p-14">
        <PaperTexture />

        <div className="relative z-10 flex h-full flex-col">
          <p className="font-[cursive] text-xl text-[#8b674d]">
            {person.name} schreibt:
          </p>

          <h3 className="mt-2 font-serif text-4xl">
            Ein paar Worte für Renke
          </h3>

          <div className="my-7 h-px w-40 bg-[#856044]/35" />

          <textarea
            value={messages[person.id] ?? ""}
            onChange={(event) =>
              setMessages((current) => ({
                ...current,
                [person.id]: event.target.value,
              }))
            }
            placeholder={`Was möchtest du Renke sagen, ${person.name}?`}
            rows={10}
            className="w-full resize-none rounded-xl border border-[#8a674d]/25 bg-[#f6e8ca]/45 p-5 font-[cursive] text-2xl leading-relaxed outline-none focus:border-[#805b40]"
          />

          <p className="mt-3 text-sm opacity-55">
            Der Eintrag wird später in Neon gespeichert.
          </p>

          <div className="mt-auto flex items-center gap-4 pb-2 text-[#76553d]">
            <div className="h-px flex-1 bg-[#76553d]/25" />
            <span>♥</span>
            <div className="h-px flex-1 bg-[#76553d]/25" />
          </div>
        </div>
      </div>
    );
  }

  function PaperTexture() {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.28),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(105,70,40,.10),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.055] [background-image:repeating-linear-gradient(0deg,#4d3527_0,#4d3527_1px,transparent_1px,transparent_4px)]" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_45px_rgba(77,46,26,.17)]" />
      </>
    );
  }

  const currentPerson = page >= 0 ? people[page] : null;
  const targetPerson =
    targetPage !== null && targetPage >= 0 ? people[targetPage] : null;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#261913] px-4 py-7">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45 grayscale"
        style={{
          backgroundImage: "url('/images/danke-renke-kitchen.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-[#27180f]/58" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-5 text-center">
          <h1 className="font-serif text-4xl text-[#f4ddba] sm:text-5xl">
            Danke Renke
          </h1>
        </div>

        <div
          className="relative mx-auto max-w-6xl"
          style={{ perspective: "2600px" }}
        >
          <div className="relative grid min-h-[760px] overflow-hidden rounded-[24px] border-[10px] border-[#4e2d1c] bg-[#4e2d1c] shadow-[0_35px_120px_rgba(0,0,0,.75)] lg:grid-cols-2">
            {page === -1 ? (
              <>
                <DedicationLeft />
                <DedicationRight />
              </>
            ) : (
              <>
                <PersonLeft person={currentPerson!} />
                <PersonRight person={currentPerson!} />
              </>
            )}

            {/* umblätterndes Blatt */}
            {turning && (
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{
                  rotateY: turnDirection === 1 ? -180 : 180,
                }}
                transition={{
                  duration: 1.15,
                  ease: [0.45, 0.05, 0.15, 1],
                }}
                onAnimationComplete={finishTurn}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin:
                    turnDirection === 1
                      ? "left center"
                      : "right center",
                }}
                className={
                  turnDirection === 1
                    ? "absolute bottom-0 right-0 top-0 z-40 w-1/2"
                    : "absolute bottom-0 left-0 top-0 z-40 w-1/2"
                }
              >
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {page === -1 ? (
                    <DedicationRight />
                  ) : turnDirection === 1 ? (
                    <PersonRight person={currentPerson!} />
                  ) : (
                    <PersonLeft person={currentPerson!} />
                  )}
                </div>

                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {targetPage === -1 ? (
                    <DedicationLeft />
                  ) : targetPerson ? (
                    turnDirection === 1 ? (
                      <PersonLeft person={targetPerson} />
                    ) : (
                      <PersonRight person={targetPerson} />
                    )
                  ) : null}
                </div>
              </motion.div>
            )}

            {/* Buchfalz */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 z-30 hidden w-16 -translate-x-1/2 bg-gradient-to-r from-black/20 via-black/5 to-black/20 lg:block" />
          </div>

          <div className="relative z-50 mx-auto mt-5 flex max-w-3xl items-center justify-between">
            <button
              type="button"
              disabled={page === -1 || turning}
              onClick={() => turnTo(page - 1, -1)}
              className="rounded-full border border-[#d0ac82] bg-[#342116]/90 px-6 py-3 text-[#f4ddbd] transition hover:bg-[#4a3022] disabled:opacity-25"
            >
              ← Zurück
            </button>

            <div className="text-center text-[#ead1ae]">
              <p className="font-[cursive] text-xl">
                {page === -1 ? "Widmung" : currentPerson?.name}
              </p>
              <p className="text-xs opacity-60">
                {page === -1
                  ? "Für Renke"
                  : `${page + 1} von ${people.length}`}
              </p>
            </div>

            <button
              type="button"
              disabled={page === people.length - 1 || turning}
              onClick={() => turnTo(page + 1, 1)}
              className="rounded-full bg-[#7a4a2e] px-6 py-3 text-[#fff0d5] transition hover:bg-[#925a38] disabled:opacity-25"
            >
              Weiter →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
