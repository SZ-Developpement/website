"use client";

import Link from "next/link";
import { NavItems } from "../../../data/pages/header";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 duration-200 border-b" style={{ borderBottom: scrolled ? "1px solid #252525" : "1px solid transparent", background: scrolled ? "rgba(0,0,0,0.85)" : "transparent", backdropFilter: scrolled ? "blur(16px)" : "none", }} >
        <nav className="max-w-300 px-6 mx-auto h-16 grid grid-cols-2 md:grid-cols-4 items-center">
          <Link href="/" className="font-display font-bold text-base cursor-pointer">SZ<span className="text-sz">-</span>Dev</Link>

          <ul className="hidden md:flex flex-row gap-8 justify-center items-center col-span-2">
            {NavItems.map((item) => (
              <li key={item.href}>
                <Link className="text-text-secondary text-sm font-normal transition-colors duration-300 font-body text-decoration-none hover:text-text-primary" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-row justify-end">
            <Link href="#contact" className="hidden md:flex bg-bg-button text-bg-card px-3 py-1.5 text-[13px] rounded-lg font-semibold transition-colors duration-300 font-body text-decoration-none hover:bg-text-primary">Démarrer un projet</Link>
          
            <button
              className="md:hidden z-50 text-text-primary p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col pt-18 p-6 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)" }}
      >
        <ul className="flex flex-col gap-2">
          {NavItems.map((item) => (
            <li key={item.href}>
              <Link
                className="block text-text-secondary text-2xl font-display font-bold py-3 border-b border-border-card hover:text-text-primary transition-colors duration-200"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Link
            href="#contact"
            onClick={closeMenu}
            className="block w-full text-center bg-bg-button text-bg-card px-4 py-3 text-sm rounded-lg font-semibold transition-colors duration-300 font-body hover:bg-text-primary"
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
    </>
  )
}

export { Header };