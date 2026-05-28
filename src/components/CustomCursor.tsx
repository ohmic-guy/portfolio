import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchActive, setIsTouchActive] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const updateMousePosition = (x: number, y: number) => {
      setMousePosition({ x, y });
    };

    const updateFromPointer = (e: PointerEvent) => {
      updateMousePosition(e.clientX, e.clientY);
      if (e.pointerType === "touch") {
        setIsTouchActive(true);
      }
    };

    const updateFromMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateFromTouch = (e: TouchEvent) => {
      const touch = e.touches[0] || e.changedTouches[0];
      if (touch) {
        updateMousePosition(touch.clientX, touch.clientY);
        setIsTouchActive(true);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        setIsTouchActive(true);
        updateMousePosition(e.clientX, e.clientY);
      }
    };

    const handlePointerUp = (e: PointerEvent) => {
      if (e.pointerType === "touch") {
        window.setTimeout(() => setIsTouchActive(false), 120);
      }
    };

    const handleTouchEnd = () => {
      window.setTimeout(() => setIsTouchActive(false), 120);
    };

    window.addEventListener("mousemove", updateFromMouse);
    window.addEventListener("pointermove", updateFromPointer, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("touchstart", updateFromTouch, { passive: true });
    window.addEventListener("touchmove", updateFromTouch, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateFromMouse);
      window.removeEventListener("pointermove", updateFromPointer);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchstart", updateFromTouch);
      window.removeEventListener("touchmove", updateFromTouch);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const shouldHideCursor = isMobile && !isTouchActive;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 2 : 1,
          opacity: shouldHideCursor ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: shouldHideCursor ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
      />
    </>
  );
};

export default CustomCursor;
