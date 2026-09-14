import Link from "next/link";
import { Gift, Sparkles } from "lucide-react";

export default function GiftButton() {
  return (
    <Link href="/danke-renke" aria-label="Magisches Dankesbuch für Renke öffnen" className="group relative grid h-24 w-24 shrink-0 place-items-center rounded-full border-2 border-[#f0c36a]/70 bg-[radial-gradient(circle_at_35%_28%,#dca64c,#6f3217_72%)] text-[#fff1bf] shadow-[0_0_38px_rgba(231,161,53,.46),0_16px_30px_rgba(0,0,0,.45)] transition duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-105">
      <Sparkles size={18} className="ember absolute -right-1 top-0 text-[#ffdb83]" aria-hidden="true" />
      <Gift size={38} strokeWidth={1.6} aria-hidden="true" />
      <span className="absolute -bottom-8 whitespace-nowrap text-xs font-bold uppercase tracking-[.18em] text-[#e7c57f]">Danke Renke</span>
    </Link>
  );
}
