import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";

export default function StickersPage() {
  return (
    <div className="fantasy-page">
      <Navbar />

      <main className="w-full">
        <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
          <div className="ink-border overflow-hidden rounded-[2rem] bg-[#3d2414] p-2 shadow-[0_24px_70px_rgba(0,0,0,.38)]">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="block h-auto w-full rounded-[1.5rem]"
            >
              <source src="/video/test_video.mp4?v=1" type="video/mp4" />
            </video>
          </div>
        </section>
      </main>

      <FantasyFooter />
    </div>
  );
}
