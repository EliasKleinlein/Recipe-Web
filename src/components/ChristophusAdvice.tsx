import Image from "next/image";

type ChristophusAdviceProps = {
  title: string;
  category: string;
  tags?: string | null;
};

const SPECIAL_ADVICE: Array<[string, string]> = [
  ["Cannabis-Brownies", "Malte, du Schlingel – das ist aber nichts für Kinder."],
];

const GENERAL_ADVICE = [
  "Renke, ich hab da noch was.",
  "Fast richtig. Aber fast zählt im Debugger nicht.",
  "Der Fehler war klein. Ich hab ihn trotzdem gesehen.",
  "Ich wollte nichts sagen. Dann hab ich's gesehen.",
  "Keine Sorge, ich korrigiere nur kurz den Lehrer.",
  "Sieht richtig aus. Ich prüfe es trotzdem.",
  "Kein Bug gefunden. Das macht mich misstrauisch.",
  "Ich habe den Randfall entdeckt.",
  "Funktioniert. Aber elegant ist anders.",
  "Jetzt stimmt's.",
  "Wenn ich schweige, darfst du wirklich zufrieden sein.",
  "Der Lehrer erklärt. Ich validiere.",
  "Ich hab's überprüft. Jetzt kannst du weitermachen.",
  "Der Fehler war gut versteckt. Leider nicht gut genug.",
  "Ich korrigiere ungern. Aber konsequent.",
  "Kein Bug. Noch.",
];

const FISH_ADVICE = [
  "Renke, der Fisch stimmt. Ich habe trotzdem zweimal geprüft.",
  "Garzeit korrekt. Das hätte ich dir fast durchgehen lassen.",
  "Beim Fisch zählt Timing. Beim Unterricht übrigens auch.",
  "Kein Fehler im Lachs gefunden. Ungewöhnlich.",
  "Der Kabeljau kompiliert. Ich bin zufrieden. Vorläufig.",
];

const VEGETARIAN_ADVICE = [
  "Vegetarisch korrekt. Logik ebenfalls. Ich bin enttäuscht.",
  "Ich habe Gemüse und Code geprüft. Beides läuft.",
  "Kein Fleisch, kein Fehler. Zufall?",
  "Das Risotto ist synchron. Sehr verdächtig.",
  "Ich wollte korrigieren. Aber diesmal stimmt es.",
];

const BREAD_ADVICE = [
  "Walter, Backzeit stimmt. Ich hab nachgerechnet.",
  "Der Teig geht auf. Die Logik auch.",
  "Ich habe den Randfall gefunden. Er heißt Kruste.",
  "Backen ist nur Debugging mit Hefe.",
  "Walter, funktioniert. Aber ich behalte den Ofen im Auge.",
];

const SWEET_ADVICE = [
  "Malte, geschmacklich top. Ich prüfe trotzdem die Logik.",
  "Die Schichten stimmen. Ich habe nachgezählt.",
  "Kein Fehler im Kuchen. Das beunruhigt mich.",
  "Zucker ist kein Ersatz für saubere Architektur.",
  "Dessert bestanden. Code Review folgt trotzdem.",
];

const FISH_WORDS =
  /fisch|lachs|kabeljau|garnele|garnelen|meeresfrüchte|meeresfruechte/i;

const VEGETARIAN_WORDS =
  /vegetarisch|vegan|gemüse|gemuese|kichererbse|risotto|pilz/i;

const BREAD_WORDS =
  /brot|backstube|brötchen|broetchen|focaccia|baguette|ciabatta|hefe|laib/i;

const SWEET_WORDS =
  /kuchen|torte|dessert|brownie|keks|pancake|schokolade|schoko|tiramisu|tarte|süß|suess|gebäck|gebaeck/i;

function stableIndex(text: string, length: number) {
  let hash = 0;

  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) >>> 0;
  }

  return hash % length;
}

function getAdvice(title: string, category: string, tags?: string | null) {
  const specialAdvice = SPECIAL_ADVICE.find(([recipeName]) =>
    title.includes(recipeName),
  )?.[1];

  if (specialAdvice) return specialAdvice;

  const text = `${title} ${category} ${tags ?? ""}`;

  let pool = GENERAL_ADVICE;

  if (FISH_WORDS.test(text)) {
    pool = FISH_ADVICE;
  } else if (SWEET_WORDS.test(text)) {
    pool = SWEET_ADVICE;
  } else if (BREAD_WORDS.test(text)) {
    pool = BREAD_ADVICE;
  } else if (VEGETARIAN_WORDS.test(text)) {
    pool = VEGETARIAN_ADVICE;
  }

  return pool[stableIndex(title, pool.length)];
}

export default function ChristophusAdvice({
  title,
  category,
  tags,
}: ChristophusAdviceProps) {
  const advice = getAdvice(title, category, tags);

  return (
    <aside
      className="mx-auto mt-1 flex max-w-2xl flex-col items-start sm:flex-row sm:items-end"
      aria-label="Christophus prüft das Rezept"
    >
      <div className="relative h-44 w-40 shrink-0 sm:h-52 sm:w-48">
        <Image
          src="/images/kitchen-masters/christophus.webp"
          alt="Der Drache Christophus als aufmerksamer Fehlerfinder"
          fill
          sizes="(max-width: 640px) 160px, 192px"
          className="object-contain object-bottom drop-shadow-[0_12px_18px_rgba(36,24,10,.3)]"
        />
      </div>

      <div className="relative z-10 mb-5 max-w-md rounded-[1.5rem] border-2 border-[#705a2a] bg-[#f4ecd2]/95 px-5 py-4 text-[#30291d] shadow-[0_12px_30px_rgba(52,43,24,.22)] sm:mb-8 sm:ml-[-1rem]">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[.18em] text-[#75602f]">
          <span aria-hidden="true">🐉</span>
          Christophus prüft nach
        </div>

        <p className="mt-2 font-serif text-base font-bold italic leading-6 sm:text-lg">
          „{advice}“
        </p>

        <span
          className="absolute -bottom-3 left-10 h-6 w-6 rotate-45 border-b-2 border-r-2 border-[#705a2a] bg-[#f4ecd2] sm:-left-3 sm:bottom-8 sm:border-b-0 sm:border-l-2 sm:border-r-0 sm:border-t-2"
          aria-hidden="true"
        />
      </div>
    </aside>
  );
}
