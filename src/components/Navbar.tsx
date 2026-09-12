import Link from "next/link";
import { BookOpen, ChefHat, Gift, ScrollText } from "lucide-react";

const links = [
  { href: "/#rezepte", label: "Rezepte", icon: ScrollText },
  { href: "/stickers", label: "Sticker", icon: ChefHat },
  { href: "/danke-renke", label: "Danke Renke", icon: Gift },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <nav aria-label="Hauptnavigation" className="paper-panel mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-[#8b5a2b]/60 px-4 py-3 text-[#3b2514] shadow-2xl sm:px-6">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Renkes Kochbuch – Startseite">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-[#9a672e] bg-[#342015] text-[#f2c568] shadow-inner transition group-hover:rotate-[-6deg]">
            <BookOpen size={21} aria-hidden="true" />
          </span>
          <span className="fantasy-title hidden text-3xl font-bold leading-none sm:block">Renkes Kochbuch</span>
        </Link>

        <div className="flex items-center gap-1 overflow-x-auto">
          {links.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-sm font-bold transition hover:bg-[#74451f]/10 hover:text-[#7c451e] sm:px-4">
              <Icon size={16} aria-hidden="true" />
              <span className={label === "Danke Renke" ? "hidden sm:inline" : ""}>{label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
