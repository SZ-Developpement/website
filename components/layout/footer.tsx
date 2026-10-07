import Link from "next/link";
import { navLinks, social } from "@/lib/sz-dev";
import { GitHubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import BlocCTA from "../others/bloc_cta";

const annee = new Date().getFullYear();

/* on range la reference au composant, pas <GitHubIcon /> : un element deja
   rendu ne peut plus recevoir de props, et React refuse de l'instancier */
const socialLinks = [
  { label: "GitHub", Icon: GitHubIcon, href: social.github },
  { label: "LinkedIn", Icon: LinkedinIcon, href: social.linkedin },
];

export default function Footer() {
  return (
    <footer className="px-6 pb-6">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <BlocCTA />

        {/* Footer */}
        <div className="rounded-3xl bg-surface p-8 flex flex-col gap-6">
          {/* Contenu Footer */}
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            {/* Texte de présentation */}
            <div className="flex max-w-xs flex-col gap-2">
              {/* pas de <h1> ici : il n'y en a qu'un par page, c'est le titre
                  du hero. Un second brouille le plan du document. */}
              <span className="text-base font-bold tracking-tight">SZ Dev</span>

              {/* Description */}
              <p className="text-[13px] leading-relaxed text-muted">
                Applications web et mobile, de l&apos;architecture au
                déploiement, sans sous-traiter un maillon.
              </p>

              {/* Réseaux sociaux */}
              <div className="flex gap-2.5 pt-1">
                {socialLinks.map(({ label, Icon, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-foreground hover:text-foreground/60 transition-colors duration-300"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Listes des pages */}
            <div className="flex gap-16">
              <Colonne titre="Navigation">
                {navLinks.map((lien) => (
                  <Lien key={lien.href} href={lien.href}>
                    {lien.label}
                  </Lien>
                ))}
              </Colonne>

              <Colonne titre="Informations">
                <Lien href="/mentions-legales">Mentions légales</Lien>
                <Lien href={`mailto:${social.email}`}>{social.email}</Lien>
              </Colonne>
            </div>
          </div>

          {/* Copyright line */}
          <div className="flex flex-col gap-2 border-t border-line pt-6 text-[12px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© {annee} SZ Dev. Tous droits réservés.</span>
            <span>
              Conçu et développé par{" "}
              <Link
                href="/"
                className="font-semibold text-foreground transition-colors hover:text-foreground/60"
              >
                SZ Dev
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Colonne({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[13px] font-semibold">{titre}</span>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function Lien({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-xs text-muted transition-colors hover:text-foreground/60"
    >
      {children}
    </Link>
  );
}
