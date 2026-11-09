"use client";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * Card that grows from a smaller, rounder shape to full size as it travels up the viewport.
 * It writes a 0 to 1 progress value to the `--p` CSS variable, which globals.css reads.
 */
export default function ScrollCard({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const p = Math.min(Math.max((vh - el.getBoundingClientRect().top) / (vh * 0.7), 0), 1);
      el.style.setProperty("--p", p.toFixed(3));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={`card ${className}`.trim()}>
      {children}
    </div>
  );
}
