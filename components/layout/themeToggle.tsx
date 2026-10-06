"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Changer de thème"
      className="text-foreground/50 hover:text-foreground transition size-8 flex items-center justify-center rounded-md hover:bg-foreground/5 cursor-pointer"
    >
      {/* l'icone visible est choisie en CSS par la class du <html> : le serveur
          n'a pas besoin de connaitre le theme, donc aucun mismatch a l'hydratation */}
      <Sun size={17} className="hidden dark:block" />
      <Moon size={17} className="block dark:hidden" />
    </button>
  );
}
