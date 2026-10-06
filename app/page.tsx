import NavBar from "@/components/layout/navbar";
import Contact from "@/components/section/contact";
import Hero from "@/components/section/hero";
import Histoire from "@/components/section/histoire";
import Projets from "@/components/section/projets";
import Services from "@/components/section/services";
import Stack from "@/components/section/stack";
import Steps from "@/components/section/step";
import Teams from "@/components/section/teams";

export default function Home() {
  return (
    <>
      <NavBar />

      <main className="flex flex-col gap-22">
        <Hero />
        <Histoire />
        <Projets />
        <Services />
        <Steps />
        <Stack />
        <Teams />
        <Contact />
      </main>
    </>
  );
}
