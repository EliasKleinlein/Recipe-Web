import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";

export default function StickersPage() {
  return (
    <div className="fantasy-page">
      <Navbar />

      <main className="w-full pt-16 sm:pt-20">
        <div className="relative mx-auto w-full max-w-[940px] rounded-[2.2rem] border-[6px] border-[#5b351b] bg-[linear-gradient(145deg,#3a2112,#1b0e08)] p-4 shadow-[0_28px_70px_rgba(0,0,0,.62),inset_0_0_0_2px_#b7833d,inset_0_0_24px_rgba(255,190,90,.08)]">
          <div className="pointer-events-none absolute inset-2 rounded-[1.8rem] border border-[#d5aa63]/35" />
          <div className="relative rounded-[1.5rem] border-2 border-[#b9853e]/55 bg-[#120a06] p-2 shadow-[inset_0_0_18px_rgba(255,210,120,.08)]">
            <section className="mx-auto max-w-[1500px] px-5 py-16 sm:px-8 sm:py-24">
              <div className="ink-border overflow-hidden rounded-[2rem] bg-[#3d2414] p-2 shadow-[0_24px_70px_rgba(0,0,0,.38)]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="block h-auto w-full rounded-[1.5rem] rounded-xl"
                >
                  <source src="/video/test_video.mp4?v=1" type="video/mp4" />
                </video>
              </div>
            </section>
          </div>
        </div>
      </main>

      <FantasyFooter />
    </div>
  );
}
