"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
type Person = {
  id: string;
  name: string;
  portrait: string;
};

const people: Person[] = [
  { id: "muju", name: "Muju", portrait: "/images/class/muju.png" },
  { id: "elias", name: "Elias", portrait: "/images/class/optimized/elias-robotik.webp" },
  { id: "eric", name: "Eric", portrait: "/images/class/optimized/eric-gseai8.webp" },
  { id: "marco", name: "Marco", portrait: "/images/class/marco-stafford.png" },
  { id: "christoph", name: "Christopher", portrait: "/images/class/optimized/christoph-matrix.webp" },
  { id: "kevin", name: "Kevin", portrait: "/images/class/optimized/kevin-leetcode.webp" },
  { id: "niko", name: "Niko", portrait: "/images/class/optimized/niko.webp" },
  { id: "marlin", name: "Marlin", portrait: "/images/class/optimized/marlin.webp" },
  { id: "daniel", name: "Daniel", portrait: "/images/class/optimized/daniel-transparent.webp" },
  { id: "pavel", name: "Pavel", portrait: "/images/class/optimized/pavel-gseai8.webp" },
];

const names = people.map((person) => person.name).join(" · ");

export default function ClassThankYouBook() {
  // -1 = Widmung, 0 = Muju, 1 = Elias ...
  const [page, setPage] = useState(-1);
  const [messages, setMessages] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch("/api/thanks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Einträge konnten nicht geladen werden.");
        }
        return response.json();
      })
      .then((data) => {
        setMessages(data.messages ?? {});
      })
      .catch((error) => {
        console.error("Dankes-Einträge laden:", error);
      });
  }, []);
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
      <div className="relative h-full w-full overflow-hidden bg-[#ead8b5]">
        <div className="absolute bottom-0 left-0 top-0 -right-[36px]">
          <Image
            src="/images/danke-renke-left-page.png"
            alt="Widmungsseite Für Renke"
            fill
            priority
            sizes="50vw"
            className="object-contain scale-[0.97]"
          />
        </div>
      </div>
    );
  }

  function DedicationRight() {
    return (
      <div className="relative flex h-full flex-col overflow-hidden bg-[#f1dfbf] px-10 py-7 text-[#4a3528] sm:px-12">
        <PaperTexture />

        <div className="relative z-10 flex h-full flex-col">
          <h2 className="font-[cursive] text-4xl leading-none">
            Lieber Renke,
          </h2>

          <div className="mt-4 space-y-4 font-serif text-[17px] leading-[1.55]">
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

          <div className="my-4 text-center">
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

          <div className="relative mx-auto mt-7 h-[390px] w-[390px] overflow-hidden rounded-full">
            <Image
              src={person.portrait}
              alt={`${person.name} als Bleistiftzeichnung`}
              fill
              className="object-contain mix-blend-multiply"
            />
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

          <div className="handwriting min-h-[330px] w-full whitespace-pre-wrap rounded-xl border border-[#8a674d]/20 bg-[#f6e8ca]/35 p-5 text-3xl leading-relaxed">
            {messages[person.id]?.trim()
              ? messages[person.id]
              : "Noch kein persönlicher Eintrag vorhanden. ❤️"}
          </div>

          <p className="mt-3 text-sm opacity-55">
            Persönlicher Eintrag aus unserem digitalen Gästebuch.
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


  function KitchenSketchDecor() {
    return (
      <>
        {/* Knoblauch + Kräuter oben links */}
        <svg
          viewBox="0 0 180 180"
          className="pointer-events-none absolute left-5 top-20 z-10 h-36 w-36 rotate-[-8deg] text-[#5d4938] opacity-75"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M83 39c-8 6-18 8-24 20-7 14-5 33 7 43 8 7 25 9 35 2 14-10 17-31 7-45-7-10-17-13-25-20Z" />
          <path d="M82 39c-2-13 2-25 11-35" />
          <path d="M68 59c10 8 17 23 16 43" />
          <path d="M98 58c-9 10-13 25-10 44" />

          <path d="M112 119c17-20 24-40 26-65" />
          <path d="M128 84c12-7 21-13 28-23" />
          <path d="M132 71c-10-3-16-7-22-13" />
          <path d="M138 57c9-5 15-11 20-18" />

          <path d="M50 124c-12-19-17-40-15-62" />
          <path d="M36 92c-10-6-17-13-23-22" />
          <path d="M37 77c10-3 17-8 23-14" />
        </svg>

        {/* Kochlöffel rechts */}
        <svg
          viewBox="0 0 120 420"
          className="pointer-events-none absolute right-2 top-44 z-10 h-[390px] w-28 rotate-[9deg] text-[#5d4938] opacity-70"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="60" cy="63" rx="34" ry="52" />
          <ellipse cx="60" cy="63" rx="20" ry="36" opacity=".45" />
          <path d="M54 112c-3 67-6 139-5 211 0 41 3 68 11 82" />
          <path d="M66 112c4 67 7 139 6 211 0 41-4 68-12 82" />
          <path d="M50 325c6 8 15 12 22 0" />
        </svg>
      </>
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
          className="relative mx-auto w-full max-w-[1320px]"
          style={{ perspective: "2600px" }}
        >
          <div className="relative grid h-[900px] overflow-hidden rounded-[24px] border-[10px] border-[#4e2d1c] bg-[#4e2d1c] shadow-[0_35px_120px_rgba(0,0,0,.75)] lg:grid-cols-2">
            {page === -1 ? (
              <>
                <DedicationLeft />
                <DedicationRight />
              </>
            ) : (
              <>
                {PersonLeft({ person: currentPerson! })}
                {PersonRight({ person: currentPerson! })}
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
                    PersonRight({ person: currentPerson! })
                  ) : (
                    PersonLeft({ person: currentPerson! })
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
