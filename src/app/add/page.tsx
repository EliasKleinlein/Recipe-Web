import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";
import { CookingPot } from "lucide-react";

export default function AddRecipePage() {
  return <div className="fantasy-page"><Navbar /><main className="mx-auto max-w-4xl px-5 py-20"><section className="paper-panel ink-border rounded-[2rem] p-10 text-center text-[#3b2718] sm:p-16"><CookingPot className="mx-auto text-[#9e6029]" size={54} /><p className="mt-5 text-sm font-bold uppercase tracking-[.24em] text-[#9e6029]">Neue Rezeptrolle</p><h1 className="fantasy-title mt-2 text-6xl font-bold">Rezept hinzufügen</h1><p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-8 text-[#654a36]">Der magische Schreibkiel wird in einem kommenden Kapitel freigeschaltet. Bis dahin bleiben alle bestehenden Rezepte sicher in Neon verwahrt.</p></section></main><FantasyFooter /></div>;
}
