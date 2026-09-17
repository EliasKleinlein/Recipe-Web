import FantasyFooter from "@/components/FantasyFooter";
import Navbar from "@/components/Navbar";

export default function StickersPage() {
  return (
    <div className="fantasy-page">
      <Navbar />

      <main className="w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="block h-auto w-full"
        >
          <source src="/video/test_video.mp4?v=1" type="video/mp4" />
        </video>
      </main>

      <FantasyFooter />
    </div>
  );
}
