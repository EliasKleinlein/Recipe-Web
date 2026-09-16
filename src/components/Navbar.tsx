import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-1 pt-3 sm:px-2 sm:pt-5">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex min-h-32 max-w-[1500px] items-center justify-center gap-3 px-3 py-2 text-[#3b2514] sm:min-h-48 sm:justify-between sm:px-6 sm:py-3 lg:min-h-[16.5rem] lg:px-10"
        style={{
          backgroundImage: "url('/images/header-papyrus-scroll.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Link
          href="/"
          className="relative h-14 w-14 shrink-0 sm:ml-10 sm:h-[7.4rem] sm:w-[7.4rem] xl:ml-36 xl:h-36 xl:w-[27rem]"
          aria-label="Renkes Kochbuch – Startseite"
        >
          <Image
            src="/images/renkes-kochbuch-logo.png"
            alt=""
            fill
            sizes="432px"
            className="hidden object-contain xl:block"
          />
          <Image
            src="/images/renkes-kochbuch-compact.png"
            alt=""
            fill
            sizes="56px"
            className="object-contain xl:hidden"
          />
        </Link>

        <div className="flex items-center gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mr-8 sm:gap-8 lg:mr-28 lg:gap-11">
          <Link
            href="/#rezepte"
            aria-label="Rezepte"
            className="relative h-14 w-14 shrink-0 sm:h-[7.4rem] sm:w-[7.4rem]"
          >
            <Image
              src="/images/recipes-logo-v2.png"
              alt=""
              fill
              sizes="119px"
              className="object-contain"
            />
          </Link>
          <Link
            href="/stickers"
            aria-label="Sticker"
            className="group relative h-14 w-14 shrink-0 transition duration-300 hover:-translate-y-1 hover:-rotate-3 hover:scale-110 focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c451e] sm:h-[5.9rem] sm:w-[6.75rem]"
          >
            <Image
              src="/images/sticker-button.png"
              alt=""
              fill
              sizes="108px"
              className="object-contain transition duration-300 group-hover:brightness-110"
            />
          </Link>
          <Link
            href="/danke-renke"
            aria-label="Danke Renke"
            className="group relative h-14 w-14 shrink-0 transition duration-300 hover:-translate-y-1 hover:rotate-3 hover:scale-110 focus-visible:rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c451e] sm:h-[4.55rem] sm:w-[5.2rem]"
          >
            <Image
              src="/images/magietrank-kessel-button.png"
              alt=""
              fill
              sizes="84px"
              className="object-contain transition duration-300 group-hover:brightness-110"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
