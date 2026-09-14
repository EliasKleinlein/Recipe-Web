export default function Loading() {
  return (
    <main className="fantasy-page grid min-h-screen place-items-center px-6">
      <div className="paper-panel rounded-3xl px-8 py-10 text-center text-[#3b2718] shadow-[0_20px_60px_rgba(0,0,0,.4)]">
        <div
          className="mx-auto mb-5 h-12 w-12 animate-spin rounded-full border-4 border-[#b8752d]/25 border-t-[#b8752d]"
          aria-hidden="true"
        />
        <p className="fantasy-title text-3xl font-bold">
          Renke richtet das Rezept an …
        </p>
      </div>
    </main>
  );
}
