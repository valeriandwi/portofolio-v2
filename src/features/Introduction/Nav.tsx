"use client";
import { useEffect, useRef, useState } from "react";
import { navLinks, profile } from "@/constants/contents";

/** Top navigation. Below 820px the links collapse into a burger menu. */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!(e.target as Element).closest(".nav__burger, #nav-links")) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        burger.current?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="nav wrap" aria-label="Main">
      <div className="nav__meta">
        <a href="#top" className="nav__logo">
          V ++ P
        </a>
        <div>
          <span>{profile.role}</span>
          <span>{profile.location}</span>
        </div>
        <div>
          <span>Available for</span>
          <span>new roles</span>
        </div>
      </div>
      <button
        ref={burger}
        className="nav__burger"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div id="nav-links" className={`nav__links${open ? " open" : ""}`}>
        {navLinks.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
