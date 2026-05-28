import React, { Suspense, useState } from "react";
import BootSequence from "@/components/BootSequence";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import Blog from "@/sections/Blog";
import Contact from "@/sections/Contact";

const ParticleBackground = React.lazy(() => import("@/components/ParticleBackground"));

const Home = () => {
  const [bootComplete, setBootComplete] = useState(false);

  return (
    <>
      {!bootComplete && <BootSequence onComplete={() => setBootComplete(true)} />}
      
      {bootComplete && (
        <div className="relative w-full bg-[#050510] text-[#E0F0FF] selection:bg-cyan-500/30 selection:text-cyan-100">
          <CustomCursor />
          <ScrollProgress />

          <Suspense fallback={<div className="fixed inset-0 bg-[#050510] -z-10" />}>
            <ParticleBackground />
          </Suspense>

          <Navbar />
          
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Blog />
            <Contact />
          </main>

          <footer className="py-8 text-center font-mono text-sm text-cyan-500/50 border-t border-cyan-900/30 relative z-10 glass-panel border-x-0 border-b-0">
            <p>© {new Date().getFullYear()} OMMKAR ANKIT ROUT. ALL SYSTEMS SECURE.</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Home;
