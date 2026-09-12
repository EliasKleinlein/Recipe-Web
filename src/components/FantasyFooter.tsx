import Link from "next/link";
import { BookHeart, Code2 } from "lucide-react";

export default function FantasyFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-[#d9a441]/20 bg-[#040914]/80 px-6 py-12 text-[#cdbb96]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(202,122,31,.24),transparent_42%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <p className="fantasy-title text-3xl font-bold text-[#efcf88]">Renkes Kochbuch</p>
          <p className="mt-1 text-sm">Mit Herz kompiliert und mit Butter deployed.</p>
        </div>
        <div className="flex items-center gap-5 text-sm">
          <Link href="/danke-renke" className="flex items-center gap-2 hover:text-[#efcf88]"><BookHeart size={17} /> Dankesbuch</Link>
          <span className="flex items-center gap-2"><Code2 size={17} /> G-SEAI-8</span>
        </div>
      </div>
    </footer>
  );
}
