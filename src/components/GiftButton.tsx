import Image from "next/image";
import Link from "next/link";

export default function GiftButton() {
  return (
    <Link
      href="/danke-renke"
      aria-label="Magisches Dankesbuch für Renke öffnen"
      className="group relative block h-28 w-36 shrink-0 transition duration-300 hover:-translate-y-2 hover:rotate-3 hover:scale-105 focus-visible:rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f1c76c]"
    >
      <Image
        src="/images/magietrank-kessel-button.png"
        alt=""
        fill
        sizes="144px"
        className="object-contain drop-shadow-[0_0_24px_rgba(185,255,78,.38)] transition duration-300 group-hover:brightness-110 group-hover:drop-shadow-[0_0_34px_rgba(194,255,91,.68)]"
      />
    </Link>
  );
}
