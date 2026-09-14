"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const CHRISTOPHUS_SAYINGS = [
  "Hast du gespeichert? Ich meine das Rezept.",
  "Renke, ich hab da noch was.",
  "Fast richtig. Aber fast zählt im Debugger nicht.",
  "Ich hab den Fehler schon gesehen.",
  "Der Lehrer erklärt. Ich validiere.",
  "Kein Bug gefunden. Das macht mich misstrauisch.",
  "Ich wollte nichts sagen. Dann hab ich’s gesehen.",
  "Wenn nichts mehr geht, frag Christophus.",
  "Ich hab’s geprüft. Jetzt kannst du weitermachen.",
  "Der Fehler war klein. Ich hab ihn trotzdem gesehen.",
  "Speichern ist kein Backup.",
  "Renke, bevor du weitermachst: Da fehlt noch was.",
  "Das ist kein Fehler. Das ist nur sehr mutig.",
  "Wenn ich nichts sage, ist wirklich alles korrekt.",
  "Fast perfekt. Also leider noch nicht perfekt.",
  "Ich korrigiere nicht gern. Ich kann nur nicht anders.",
  "Diesmal stimmt alles. Ich prüfe sicherheitshalber nochmal.",
  "Funktioniert. Aber elegant ist anders.",
  "Kein Bug. Noch.",
  "Ich wollte nur helfen. Schon wieder.",
];

export default function ChristophusCompanion() {
  const [sayingIndex, setSayingIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSayingIndex((current) => (current + 1) % CHRISTOPHUS_SAYINGS.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  function showNextSaying() {
    setSayingIndex((current) => (current + 1) % CHRISTOPHUS_SAYINGS.length);
  }

  return (
    <aside className="absolute left-[43%] top-[55%] z-30 sm:left-[37%] sm:top-[51%] lg:left-[23%] lg:top-[21%]" aria-label="Christophus, Renkes Küchenhelfer">
      <button
        type="button"
        onClick={showNextSaying}
        className="group relative block h-20 w-16 cursor-pointer sm:h-24 sm:w-20 lg:h-28 lg:w-[5.5rem]"
        aria-label="Nächsten Christophus-Spruch anzeigen"
      >
        <Image
          src="/images/kitchen-masters/christophus.webp"
          alt="Christophus, der kleine grüne Küchenhelfer mit Kochmütze"
          fill
          priority
          sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 88px"
          className="object-contain drop-shadow-[0_12px_16px_rgba(0,0,0,.62)] transition duration-300 group-hover:-translate-y-1 group-hover:rotate-2"
        />
      </button>

      <div
        className="absolute left-[66%] top-[-105%] w-44 rounded-[1.2rem] border border-[#8d5729]/70 bg-[#fff0c3]/95 px-3 py-2 font-serif text-[.7rem] font-bold leading-4 text-[#402716] shadow-[0_12px_28px_rgba(0,0,0,.42)] sm:left-[76%] sm:top-[-92%] sm:w-52 sm:px-4 sm:py-3 sm:text-xs lg:left-[82%] lg:top-[-82%] lg:w-60 lg:text-sm lg:leading-5"
        aria-live="polite"
      >
        <span className="mb-1 block text-[.55rem] font-black uppercase tracking-[.18em] text-[#9c5c22] sm:text-[.62rem]">
          Wenn es nicht weitergeht, hilft Christophus gern
        </span>
        {CHRISTOPHUS_SAYINGS[sayingIndex]}
        <span className="absolute -bottom-2 left-5 h-4 w-4 rotate-45 border-b border-r border-[#8d5729]/70 bg-[#fff0c3]" aria-hidden="true" />
      </div>
    </aside>
  );
}
