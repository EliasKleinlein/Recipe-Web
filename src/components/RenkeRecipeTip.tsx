import Image from "next/image";

const RECIPE_TIPS: Array<[string, string]> = [
  ["Cannabis-Brownies", "Dieser Build wird von mir garantiert niemals ausgeführt!"],
  ["Schweinehaxe", "Die Kruste muss lauter knacken als deine Tastatur."],
  ["Debugger-Bolognese", "Die Soße lange köcheln lassen – gute Bugs brauchen schließlich auch Zeit."],
  ["Merge-Conflict", "Saubere Schichten verhindern Konflikte auf dem Teller."],
  ["Stack Overflow", "Den Topf nicht bis zum letzten Byte füllen."],
  ["Boolean-Beast", "Käse geschmolzen? true. Hunger? gleich false."],
  ["Commit-Crash", "Erst abschmecken, dann den finalen Commit setzen."],
  ["Stable Release", "Käsekuchen im ausgeschalteten Ofen abkühlen lassen – so bleibt der Release stabil."],
  ["Dark Mode", "Je dunkler die Schokolade, desto besser der Dark Mode."],
  ["Runtime Error", "Brownies rechtzeitig herausnehmen – trocken ist kein Feature."],
  ["Promise-All", "Erst wenden, wenn alle Bläschen gleichzeitig aufgelöst sind."],
  ["While-Schleife", "Nicht endlos rollen – einmal fest einschlagen reicht."],
  ["Not Found", "Leere Keksdose? Dann war das Deployment erfolgreich."],
];

function getTip(title: string) {
  return RECIPE_TIPS.find(([recipeName]) => title.includes(recipeName))?.[1]
    ?? "Erst lesen, dann würzen – Debugging schmeckt rückwärts nicht besser.";
}

export default function RenkeRecipeTip({ title }: { title: string }) {
  return (
    <aside className="ml-auto mt-12 flex max-w-2xl flex-col items-end justify-end sm:flex-row sm:items-end" aria-label="Renkes Rezepttipp">
      <div className="relative z-10 mb-[-.5rem] max-w-md rounded-[1.5rem] border-2 border-[#9a5c25] bg-[#fff1c6]/95 px-5 py-4 text-[#432818] shadow-[0_12px_30px_rgba(61,31,12,.24)] sm:mb-12 sm:mr-[-1.1rem]">
        <div className="text-xs font-black uppercase tracking-[.2em] text-[#a05b20]">Renkes Tipp</div>
        <p className="mt-2 font-serif text-base font-bold leading-6 sm:text-lg">{getTip(title)}</p>
        <span className="absolute -bottom-3 right-10 h-6 w-6 rotate-45 border-b-2 border-r-2 border-[#9a5c25] bg-[#fff1c6] sm:-right-3 sm:bottom-8" aria-hidden="true" />
      </div>

      <div className="relative h-56 w-48 shrink-0 sm:h-64 sm:w-56">
        <Image
          src="/images/renke-tip-sticker.webp"
          alt="Renke als gezeichneter Koch mit erhobenem Zeigefinger"
          fill
          sizes="(max-width: 640px) 192px, 224px"
          className="object-contain object-bottom drop-shadow-[0_12px_16px_rgba(57,27,8,.3)]"
        />
      </div>
    </aside>
  );
}
