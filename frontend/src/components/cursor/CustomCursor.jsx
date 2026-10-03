import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Eye } from "lucide-react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "[role='button']",
  "[data-cursor]",
].join(",");

function getCursorState(element) {
  if (!element) {
    return "default";
  }

  const customState = element.closest("[data-cursor]")?.dataset.cursor;

  if (customState === "project") {
    return "project";
  }

  if (customState === "external") {
    return "external";
  }

  if (customState === "text") {
    return "text";
  }

  return "interactive";
}

function CustomCursor() {
  const orbRef = useRef(null);
  const glowRef = useRef(null);
  const ringRef = useRef(null);

  const mousePosition = useRef({
    x: -100,
    y: -100,
  });

  const smoothPosition = useRef({
    x: -100,
    y: -100,
  });

  const animationFrameRef = useRef(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState("default");
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const motionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateAvailability = () => {
      setIsEnabled(pointerQuery.matches && !motionQuery.matches);
    };

    updateAvailability();

    pointerQuery.addEventListener("change", updateAvailability);
    motionQuery.addEventListener("change", updateAvailability);

    return () => {
      pointerQuery.removeEventListener("change", updateAvailability);
      motionQuery.removeEventListener("change", updateAvailability);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      setIsVisible(false);
      return undefined;
    }

    const handlePointerMove = (event) => {
      mousePosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      setIsVisible(true);
    };

    const handlePointerLeave = () => {
      setIsVisible(false);
    };

    const handlePointerDown = () => {
      setIsPressed(true);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    const handlePointerOver = (event) => {
      const target = event.target.closest(INTERACTIVE_SELECTOR);

      if (!target) {
        setCursorState("default");
        return;
      }

      setCursorState(getCursorState(target));
    };

    const handlePointerOut = (event) => {
      const relatedTarget = event.relatedTarget;

      if (
        relatedTarget &&
        relatedTarget.closest?.(INTERACTIVE_SELECTOR)
      ) {
        return;
      }

      setCursorState("default");
    };

    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseleave", handlePointerLeave);
    window.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mouseup", handlePointerUp);

    document.addEventListener("mouseover", handlePointerOver);
    document.addEventListener("mouseout", handlePointerOut);

    const animate = () => {
      const targetX = mousePosition.current.x;
      const targetY = mousePosition.current.y;

      smoothPosition.current.x +=
        (targetX - smoothPosition.current.x) * 0.18;

      smoothPosition.current.y +=
        (targetY - smoothPosition.current.y) * 0.18;

      const { x, y } = smoothPosition.current;

      if (orbRef.current) {
        orbRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseleave", handlePointerLeave);
      window.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mouseup", handlePointerUp);

      document.removeEventListener("mouseover", handlePointerOver);
      document.removeEventListener("mouseout", handlePointerOut);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isEnabled]);

  if (!isEnabled) {
    return null;
  }

  const isProject = cursorState === "project";
  const isExternal = cursorState === "external";
  const isInteractive =
    cursorState === "interactive" ||
    isProject ||
    isExternal;

  return (
    <>
      {/* Soft trailing glow */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9997] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/10 blur-2xl transition-[width,height,opacity] duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isProject
            ? "h-28 w-28 bg-[var(--accent)]/15"
            : ""
        }`}
      />

      {/* HUD orbit ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--accent)]/40 transition-[width,height,opacity,border-color] duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isInteractive
            ? "h-14 w-14 border-[var(--accent)]/70"
            : ""
        } ${
          isProject
            ? "h-24 w-24 border-[var(--accent)]"
            : ""
        } ${
          isExternal
            ? "h-16 w-16"
            : ""
        } ${
          isPressed
            ? "h-8 w-8"
            : ""
        }`}
      >
        {/* Orbit nodes */}
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />

        <span className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 translate-y-1/2 rounded-full bg-[var(--accent)]/70" />

        <span className="absolute left-0 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]/70" />

        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />
      </div>

      {/* Main cursor orb */}
      <div
        ref={orbRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[10000] flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(124,58,237,0.65)] transition-[width,height,opacity,box-shadow] duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isInteractive
            ? "h-4 w-4 shadow-[0_0_24px_rgba(124,58,237,0.75)]"
            : ""
        } ${
          isProject
            ? "h-5 w-5 shadow-[0_0_30px_rgba(124,58,237,0.85)]"
            : ""
        } ${
          isPressed
            ? "h-2 w-2"
            : ""
        }`}
      >
        {isProject && (
          <Eye
            size={14}
            strokeWidth={2}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
          />
        )}

        {isExternal && (
          <ArrowUpRight
            size={13}
            strokeWidth={2.5}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
          />
        )}
      </div>

      {/* Project HUD label */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -translate-y-1/2 translate-x-8 whitespace-nowrap rounded-full border border-[var(--accent)]/30 bg-[var(--background)]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow-lg backdrop-blur-md transition-all duration-300 ${
          isVisible && isProject
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
        style={{
          transform: `translate3d(${mousePosition.current.x + 32}px, ${mousePosition.current.y}px, 0) translateY(-50%)`,
        }}
      >
        View Project
      </div>

      {/* External link HUD label */}
      <div
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[9999] -translate-y-1/2 translate-x-8 whitespace-nowrap rounded-full border border-[var(--accent)]/30 bg-[var(--background)]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--accent)] shadow-lg backdrop-blur-md transition-all duration-300 ${
          isVisible && isExternal
            ? "scale-100 opacity-100"
            : "scale-75 opacity-0"
        }`}
        style={{
          transform: `translate3d(${mousePosition.current.x + 32}px, ${mousePosition.current.y}px, 0) translateY(-50%)`,
        }}
      >
        Open Link
      </div>
    </>
  );
}

export default CustomCursor;