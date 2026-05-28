import { useEffect } from "react";

/**
 * Physics-based momentum scroll — Apple liquid glass feel.
 * Intercepts wheel events and animates window scroll with
 * velocity accumulation + exponential ease-out deceleration.
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Skip on mobile — native touch scrolling already has momentum
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let velocity = 0;
    let rafId: number | null = null;
    let isScrolling = false;

    const FRICTION = 0.88;       // deceleration per frame (lower = faster stop)
    const SPEED_MULTIPLIER = 1.4; // how much each wheel tick moves
    const STOP_THRESHOLD = 0.05; // px/frame below which we consider stopped

    function clampTarget() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetY = Math.max(0, Math.min(targetY, maxScroll));
    }

    function tick() {
      // Spring toward target, accumulate momentum
      const distance = targetY - currentY;
      velocity = velocity * FRICTION + distance * (1 - FRICTION);

      currentY += velocity;

      window.scrollTo(0, currentY);

      if (Math.abs(velocity) > STOP_THRESHOLD || Math.abs(distance) > STOP_THRESHOLD) {
        rafId = requestAnimationFrame(tick);
      } else {
        currentY = targetY;
        window.scrollTo(0, targetY);
        isScrolling = false;
        rafId = null;
      }
    }

    function onWheel(e: WheelEvent) {
      // Let horizontal scroll pass through (for cert cards etc.)
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();

      // Normalize delta across different wheel modes
      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 32;       // line mode
      if (e.deltaMode === 2) delta *= window.innerHeight; // page mode

      targetY += delta * SPEED_MULTIPLIER;
      clampTarget();

      if (!isScrolling) {
        isScrolling = true;
        // Sync current position in case user jumped via anchor
        currentY = window.scrollY;
        rafId = requestAnimationFrame(tick);
      }
    }

    // Sync target if page is scrolled externally (e.g. anchor nav clicks)
    function onScrollExternal() {
      if (!isScrolling) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScrollExternal, { passive: true });

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScrollExternal);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);
}
