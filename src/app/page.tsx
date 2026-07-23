"use client";

import { CosmicBackground } from "@/components/cosmic/CosmicBackground";
import { CustomCursor } from "@/components/cosmic/CustomCursor";
import { LoadingScreen } from "@/components/cosmic/LoadingScreen";
import { Navbar } from "@/components/cosmic/Navbar";
import { Hero } from "@/components/cosmic/Hero";
import { About } from "@/components/cosmic/About";
import { Skills } from "@/components/cosmic/Skills";
import { Journey } from "@/components/cosmic/Journey";
import { Projects } from "@/components/cosmic/Projects";
import { Contact } from "@/components/cosmic/Contact";
import { Footer } from "@/components/cosmic/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <CosmicBackground />
      <Navbar />
      <main>
        <div style={{ animation: "driftFloat 8s ease-in-out infinite" }}><Hero /></div>
        <div style={{ animation: "driftGlide 10s ease-in-out infinite" }}><About /></div>
        <div><Skills /></div>
        <div style={{ animation: "driftDiagonal 11s ease-in-out infinite" }}><Journey /></div>
        <div style={{ animation: "driftLeft 7s ease-in-out infinite" }}><Projects /></div>
        <div style={{ animation: "driftRight 9s ease-in-out infinite" }}><Contact /></div>
      </main>
      <Footer />
    </>
  );
}
