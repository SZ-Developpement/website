import NavBar from "@/components/layout/navbar";
import Contact from "@/components/section/contact";
import Hero from "@/components/section/hero";
import Projets from "@/components/section/projets";
import Services from "@/components/section/services";
import Stack from "@/components/section/stack";
import Teams from "@/components/section/teams";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex flex-col gap-16">
        <Hero />
        <Projets />
        <Services />

        <Stack />

        <Teams />

        <Contact />
      </main>
    </>
  );
}
