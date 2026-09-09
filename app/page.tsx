import NavBar from "@/components/layout/navbar";
import Contact from "@/components/section/contact";
import Hero from "@/components/section/hero";
import Projets from "@/components/section/projets";
import Services from "@/components/section/services";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex flex-col gap-8">
        <Hero />
        <Projets />
        <Services />

        <Contact />
      </main>
    </>
  );
}
