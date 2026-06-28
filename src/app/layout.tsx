import type { Metadata } from "next";
import { Playfair_Display, Crimson_Pro, Rozha_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import MouseGlow from "@/components/ui/MouseGlow";
import ParticleField from "@/components/ui/ParticleField";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson-pro",
  display: "swap",
});

const rozha = Rozha_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rozha",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chakravyuh | Devise & Dominate",
  description:
    "Chakravyuh is an entanglement of passages — a labyrinth of strategy, power, and prestige. Step into the arena where only the sharpest minds prevail.",
  keywords: ["Chakravyuh", "school event", "competition", "strategy", "labyrinth"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${crimsonPro.variable} ${rozha.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-deep text-text font-body">
        <LoadingScreen />
        <MouseGlow />
        <ParticleField />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
