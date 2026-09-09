export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-zinc-950 via-zinc-900 to-orange-950 px-6 py-16 shadow-2xl sm:px-10 lg:px-16">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
          Renkes Kochbuch
        </p>

        <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
          Mit Geschmack, Humor
          <span className="block text-orange-400">und einer Prise Chaos.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
          Echte Rezepte, schräge Namen und ein Kochbuch für hungrige Entwickler,
          Genießer und alle, die beim Kochen genauso gerne improvisieren wie beim Coden.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#rezepte"
            className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
          >
            Rezepte entdecken
          </a>

          <a
            href="/add"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Rezept hinzufügen
          </a>
        </div>
      </div>
    </section>
  );
}
