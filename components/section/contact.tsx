import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-16 text-center flex flex-col gap-4"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="text-2xl font-semibold tracking-tight ">
          Un projet en tête ?
        </h2>
        <p className="text-white/40 text-sm">Réponse sous 48h.</p>
      </div>

      <Link
        href="mailto:contact.szdev@gmail.com"
        className="rounded-lg bg-white text-gray-950 px-4 py-2 text-sm font-semibold hover:bg-white/90 transition"
      >
        contact.szdev@gmail.com
      </Link>
    </section>
  );
}
