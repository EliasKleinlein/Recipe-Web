import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";
import { Sparkles } from "lucide-react";

export default function StickersPage() {
  return <div className="fantasy-page"><Navbar /><main className="mx-auto max-w-4xl px-5 py-20"><section className="paper-panel ink-border rounded-[2rem] p-10 text-center text-[#3b2718] sm:p-16"><Sparkles className="mx-auto text-[#a56327]" size={52} /><p className="mt-5 text-sm font-bold uppercase tracking-[.24em] text-[#9e6029]">Renkes geheime Sammlung</p><h1 className="fantasy-title mt-2 text-6xl font-bold">Coding-Sticker</h1><p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#654a36]">Die Sticker werden gerade zwischen Zauberkessel und Compiler getrocknet. Ihre Galerie folgt als eigenes Kapitel.</p></section></main><FantasyFooter /></div>;
}
