import Link from "next/link";
import { GitHubIcon } from "../icon/github";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-[#030303]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[250px_auto_250px] gap-4 items-center">
        {/* Gauche */}
        <div className="flex items-center gap-2.5">
          <Link href="#hero" className="text-base font-semibold">
            SZ Dev
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex mx-auto items-center gap-1 text-sm text-white/45">
          <ItemNav href="#projects">Projets</ItemNav>
          <ItemNav href="#services">Services</ItemNav>
          <ItemNav href="#process">Process</ItemNav>
          <ItemNav href="#team">Équipe</ItemNav>
        </nav>

        {/* Droite */}
        <div className="flex items-center justify-end gap-3">
          <Link
            href="https://github.com/SZ-Developpement"
            target="_blank"
            className="text-white/50 hover:text-white transition size-8 flex items-center justify-center"
          >
            <GitHubIcon size={18} />
          </Link>
          <Link
            href="#contact"
            className="rounded-lg bg-white text-gray-950 px-3.5 py-1.5 text-sm font-semibold hover:bg-white/90 transition"
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
    </header>
  );
}

function ItemNav({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="px-3.5 py-1.5 rounded-md hover:text-white hover:bg-white/5 transition-all duration-200 outline-0 "
    >
      {children}
    </Link>
  );
}
