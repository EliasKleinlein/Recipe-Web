export type RenkeSticker = {
  id: string;
  title: string;
  text: string;
  emoji: string;
  category: "code" | "küche" | "renke";
};

export const RENKE_STICKERS: RenkeSticker[] = [
  {
    id: "kruste-feature",
    title: "Feature fertig",
    text: "Wenn die Kruste knackt, ist das Feature fertig.",
    emoji: "🥖",
    category: "küche",
  },
  {
    id: "code-sosse",
    title: "Code & Soße",
    text: "Wenn der Code nicht läuft, läuft wenigstens die Soße.",
    emoji: "🍝",
    category: "code",
  },
  {
    id: "kein-bug",
    title: "Kein Bug",
    text: "Wenn es gut schmeckt, war es kein Bug.",
    emoji: "🐛",
    category: "code",
  },
  {
    id: "erst-testen",
    title: "Erst testen",
    text: "Erst abschmecken, dann committen.",
    emoji: "✅",
    category: "code",
  },
  {
    id: "production",
    title: "Production Build",
    text: "Auf meinem Herd funktioniert es.",
    emoji: "🔥",
    category: "code",
  },
  {
    id: "debugging",
    title: "Debugging",
    text: "Debugging ist wie Kochen: Irgendwo fehlt immer eine Zutat.",
    emoji: "🔍",
    category: "code",
  },
  {
    id: "merge",
    title: "Merge approved",
    text: "Kann gemergt werden. Christophus hat probiert.",
    emoji: "🐉",
    category: "renke",
  },
  {
    id: "renke-energie",
    title: "Renke Mode",
    text: "Positive Energie erfolgreich deployed.",
    emoji: "✨",
    category: "renke",
  },
  {
    id: "stack-overflow",
    title: "Stack Overflow",
    text: "Topf zu voll. Klassischer Stack Overflow.",
    emoji: "🍲",
    category: "küche",
  },
  {
    id: "dark-mode",
    title: "Dark Mode",
    text: "Schokolade ist einfach Dark Mode für Kuchen.",
    emoji: "🍫",
    category: "küche",
  },
  {
    id: "404",
    title: "404",
    text: "Keks nicht gefunden. Wahrscheinlich schon gegessen.",
    emoji: "🍪",
    category: "code",
  },
  {
    id: "renke-release",
    title: "Stable Release",
    text: "Renke geprüft. Gute Laune stabil.",
    emoji: "👨‍🍳",
    category: "renke",
  },
];
