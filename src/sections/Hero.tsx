import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const subtitles = [
  "GenAI Engineer",
  "Cybersecurity Specialist",
  "3× Hackathon Winner",
  "AI/ML Engineer"
];

const Hero = () => {
  const [currentSubtitle, setCurrentSubtitle] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = subtitles[subtitleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && textIndex < currentFullText.length) {
        setCurrentSubtitle(prev => prev + currentFullText.charAt(textIndex));
        setTextIndex(prev => prev + 1);
      } else if (isDeleting && textIndex > 0) {
        setCurrentSubtitle(prev => prev.slice(0, -1));
        setTextIndex(prev => prev - 1);
      } else if (!isDeleting && textIndex === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && textIndex === 0) {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [textIndex, isDeleting, subtitleIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-cyan-300 text-sm font-mono mb-8"
          data-testid="hero-badge"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Agentic AI Engineer — Cybersecurity Specialist
        </div>

        {/* Name */}
        <h1
          className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-violet-500 mb-6 glitch-hover tracking-wider"
          data-text="OMMKAR ANKIT ROUT"
          data-testid="hero-name"
        >
          OMMKAR ANKIT ROUT
        </h1>

        {/* Typewriter */}
        <div
          className="h-8 mb-12 flex items-center justify-center"
          data-testid="hero-typewriter"
        >
          <p className="font-mono text-xl md:text-2xl text-cyan-300/80">
            {'>'} {currentSubtitle}
            <span className="inline-block w-2 h-6 bg-cyan-400 ml-1 animate-pulse align-middle" />
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16">
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-cyan-500/10 text-cyan-400 border border-cyan-400 rounded-sm font-display font-bold tracking-widest neon-glow hover:bg-cyan-400/20 transition-all uppercase"
            data-testid="btn-hire-me"
          >
            Hire Me
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-violet-500/10 text-violet-400 border border-violet-500/50 rounded-sm font-display font-bold tracking-widest hover:border-violet-400 hover:bg-violet-500/20 transition-all uppercase"
            data-testid="btn-collaborate"
          >
            Collaborate
          </button>
        </div>

        {/* Decorative Orb */}
        <div
          className="w-48 h-48 md:w-64 md:h-64 relative"
          data-testid="hero-orb"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-violet-600/20 blur-2xl animate-pulse" />
          <div className="absolute inset-4 rounded-full border border-cyan-500/40 animate-spin" style={{ animationDuration: "8s" }} />
          <div className="absolute inset-8 rounded-full border border-violet-500/30 animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 blur-sm opacity-80" />
          </div>
        </div>

      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-cyan-500/50 animate-bounce"
        data-testid="hero-scroll-hint"
      >
        <span className="font-mono text-xs mb-2">SCROLL INITIATED</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
