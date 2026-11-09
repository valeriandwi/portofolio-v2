import type { CSSProperties } from "react";

export type IconName =
  | "react"
  | "nextdotjs"
  | "typescript"
  | "tailwindcss"
  | "redux"
  | "zustand"
  | "nodedotjs"
  | "postgresql"
  | "playwright"
  | "git"
  | "javascript"
  | "python"
  | "docker"
  | "vite"
  | "fastify";

export interface StackItem {
  icon: IconName;
  label: string;
}

/** Single-colour brand icon from /public/icons, drawn in the current text colour. */
export function TechIcon({ name }: { name: IconName }) {
  return (
    <span
      className="ico"
      aria-hidden="true"
      style={{ "--i": `url(/icons/${name}.svg)` } as CSSProperties}
    />
  );
}

export function StackList({ items }: { items: StackItem[] }) {
  return (
    <ul className="stack" aria-label="Tech stack">
      {items.map(({ icon, label }) => (
        <li key={label}>
          <TechIcon name={icon} />
          {label}
        </li>
      ))}
    </ul>
  );
}

const stroke = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  "aria-hidden": true,
} as const;

export const ArrowRight = () => (
  <svg {...stroke}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ArrowUpRight = () => (
  <svg {...stroke}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const Download = () => (
  <svg {...stroke}>
    <path d="M12 4v12M6 11l6 6 6-6M5 20h14" />
  </svg>
);

export const ShieldCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);

export const Sparkle = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.2 6.3L20.5 10l-6.3 2.2L12 18.5l-2.2-6.3L3.5 10l6.3-1.7zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9z" />
  </svg>
);

export const LinkedIn = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5a2.48 2.5 0 1 1-4.96 0 2.48 2.5 0 0 1 4.96 0zM.2 8h4.6v14H.2zm7.5 0h4.4v1.9h.1c.6-1.1 2.1-2.3 4.4-2.3 4.7 0 5.6 3.1 5.6 7.1V22h-4.6v-6.4c0-1.5 0-3.5-2.1-3.5s-2.5 1.7-2.5 3.4V22H7.7z" />
  </svg>
);

export const GitHub = () => (
  <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
);
