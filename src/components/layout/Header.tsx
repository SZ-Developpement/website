"use client";

import Link from "next/link";
import { NavItems } from "../../../data/pages/header";
import { useEffect, useState } from "react";


function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-100 duration-200 border-b" style={{ borderBottom: scrolled ? "1px solid #252525" : "1px solid transparent", background: scrolled ? "rgba(0,0,0,0.85)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", }} >
      <nav className="max-w-300 px-6 mx-auto h-16 grid grid-cols-4 items-center">
        <Link href="/" className="font-display font-bold text-base cursor-pointer">SZ<span className="text-sz">-</span>Dev</Link>

        <ul className="flex flex-row gap-8 justify-center items-center col-span-2">
          {NavItems.map((item) => (
            <li key={item.href}>
              <Link className="text-text-secondary text-sm font-normal transition-colors duration-300 font-body text-decoration-none hover:text-text-primary" href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end">
          <Link href="#contact" className="bg-bg-button text-bg-card px-3 py-1.5 text-[13px] rounded-lg font-semibold transition-colors duration-300 font-body text-decoration-none hover:bg-text-primary">Démarrer un projet</Link>
        </div>
      </nav>
    </header>
  )
}

export { Header };