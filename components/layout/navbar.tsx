import Link from "next/link";
import { navLinks } from "@/lib/sz-dev";

export default function NavBar() {
  return (
    <header className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex w-fit items-center gap-6 rounded-full bg-foreground py-1.5 pl-5 pr-1.5 shadow-[0_6px_24px_rgba(0,0,0,0.18)]"
      >
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-background"
        >
          SZ Dev
        </Link>

        <ul className="hidden items-center gap-5 sm:flex">
          {navLinks.map((lien) => (
            <li key={lien.href}>
              <Link
                href={lien.href}
                className="text-[13px] font-medium text-background/60 transition-colors hover:text-background"
              >
                {lien.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/#contact"
          className="rounded-full bg-surface px-4 py-2 text-[13px] font-bold text-foreground transition-opacity hover:opacity-90"
        >
          Démarrer un projet
        </Link>
      </nav>
    </header>
  );
}
