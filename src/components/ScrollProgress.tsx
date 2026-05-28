import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";

const sections = [
  { id: "hero",          label: "HOME" },
  { id: "about",         label: "ABOUT" },
  { id: "experience",    label: "EXP" },
  { id: "projects",      label: "PROJECTS" },
  { id: "skills",        label: "SKILLS" },
  { id: "certifications",label: "CERTS" },
  { id: "blog",          label: "BLOG" },
  { id: "contact",       label: "CONTACT" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredDot, setHoveredDot] = useState<string | null>(null);
  const [scanY, setScanY] = useState<number | null>(null);
  const [showScan, setShowScan] = useState(false);
  const prevSection = useRef("hero");
  const scanTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Raw scroll progress (0–1)
  const rawProgress = useMotionValue(0);
  const progress = useSpring(rawProgress, { stiffness: 80, damping: 20 });
  const trackFill = useTransform(progress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      rawProgress.set(maxScroll > 0 ? scrollTop / maxScroll : 0);

      // Determine active section
      const scrollMid = scrollTop + window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) current = id;
      }

      if (current !== prevSection.current) {
        // Fire scanline when crossing into a new section
        const el = document.getElementById(current);
        if (el) {
          const rect = el.getBoundingClientRect();
          // clamp to stay within viewport
          setScanY(Math.max(0, Math.min(rect.top, window.innerHeight - 4)));
        }
        setShowScan(true);
        if (scanTimeout.current) clearTimeout(scanTimeout.current);
        scanTimeout.current = setTimeout(() => setShowScan(false), 600);
        prevSection.current = current;
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scanTimeout.current) clearTimeout(scanTimeout.current);
    };
  }, [rawProgress]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scanline sweep — flashes across viewport on section change */}
      <motion.div
        className="fixed left-0 right-0 z-[60] pointer-events-none h-px"
        style={{ top: scanY ?? "50%" }}
        animate={showScan ? { opacity: [0, 1, 1, 0], scaleX: [0, 1, 1, 1] } : { opacity: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        initial={{ opacity: 0 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
        {/* glow */}
        <div className="absolute inset-x-0 -top-1 h-3 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent blur-sm" />
      </motion.div>

      {/* Right-side HUD */}
      <div
        className="fixed right-5 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-0 select-none"
        data-testid="scroll-progress-hud"
      >
        {/* Track background */}
        <div className="relative flex flex-col items-center">
          {/* Full track line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-cyan-900/40" />

          {/* Filled progress line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px overflow-hidden" style={{ height: "100%" }}>
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 to-violet-500"
              style={{ height: trackFill }}
            />
          </div>

          {/* Section dots */}
          <div className="relative flex flex-col gap-7 py-1">
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;
              const isHovered = hoveredDot === id;

              return (
                <div
                  key={id}
                  className="relative flex items-center justify-center cursor-pointer"
                  onMouseEnter={() => setHoveredDot(id)}
                  onMouseLeave={() => setHoveredDot(null)}
                  onClick={() => scrollTo(id)}
                  data-testid={`scroll-dot-${id}`}
                >
                  {/* Label on hover */}
                  <motion.span
                    className="absolute right-6 font-mono text-[10px] tracking-widest whitespace-nowrap text-cyan-300 pointer-events-none"
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 6 }}
                    transition={{ duration: 0.15 }}
                  >
                    {label}
                  </motion.span>

                  {/* Outer ring — active only */}
                  <motion.div
                    className="absolute rounded-full border border-cyan-400/60"
                    animate={isActive
                      ? { width: 16, height: 16, opacity: 1 }
                      : { width: 8, height: 8, opacity: 0 }
                    }
                    transition={{ duration: 0.2 }}
                  />

                  {/* Dot */}
                  <motion.div
                    className="rounded-full z-10"
                    style={{
                      background: isActive
                        ? "radial-gradient(circle, #00F5FF 0%, #7B2FFF 100%)"
                        : "rgba(0, 245, 255, 0.25)",
                      boxShadow: isActive
                        ? "0 0 8px #00F5FF, 0 0 16px rgba(0,245,255,0.4)"
                        : "none",
                    }}
                    animate={{
                      width: isActive ? 8 : isHovered ? 6 : 4,
                      height: isActive ? 8 : isHovered ? 6 : 4,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
