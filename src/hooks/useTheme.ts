import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

const THEME_COLORS: Record<Theme, string> = {
  dark: "#0a0a0f",
  light: "#f6f6fb",
};

function getInitialTheme(): Theme {
  try {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
  } catch {
    /* ignore */
  }
  return "dark";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLORS[theme]);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((current) => (current === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}