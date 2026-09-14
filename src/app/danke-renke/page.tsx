import ClassThankYouBook from "@/components/thanks/ClassThankYouBook";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Danke Renke",
  description: "Unser persönliches Dankeschön für Renke.",
};

export default function DankeRenkePage() {
  return (
    <>
      <Link href="/" className="fixed left-4 top-4 z-[100] inline-flex items-center gap-2 rounded-full border border-[#e0bc82]/50 bg-[#2d1c12]/90 px-4 py-2.5 text-sm font-bold text-[#f6dfb9] shadow-xl backdrop-blur transition hover:bg-[#4a2d1c]" aria-label="Zurück zu Renkes Kochbuch">
        <ArrowLeft size={17} /> Zum Kochbuch
      </Link>
      <ClassThankYouBook />
    </>
  );
}
