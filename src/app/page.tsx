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
        <Hero />
        <About />
        <Skills />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
