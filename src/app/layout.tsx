import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fontsource/caveat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Renkes Kochbuch",
    template: "%s | Renkes Kochbuch",
  },
  description: "Echte Rezepte, magischer Kochbuch-Humor und eine Prise Code.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
