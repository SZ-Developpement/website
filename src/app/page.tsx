import { Header } from "@/components/layout/Header";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";
import Team from "@/components/sections/Team";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <About />
        <Services />
        <Stack />
        <Projects />
        <Team />
      </main>
    </>
  );
}