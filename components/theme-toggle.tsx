"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle({ label, darkText, lightText }: { label: string; darkText: string; lightText: string }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("restory-theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
    } else {
      document.documentElement.dataset.theme = "dark";
    }
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("restory-theme", nextTheme);
  }

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
      <span className="theme-toggle__text">{theme === "light" ? darkText : lightText}</span>
    </button>
  );
}
