import { Header } from "@/components/layout/Header";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Stack from "@/components/sections/Stack";


export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <Hero />
        <About />
        <Services />
        <Stack />
      </main>
    </>
  );
}