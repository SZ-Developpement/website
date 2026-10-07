import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/section/hero";
import Engagements from "@/components/section/engagements";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col">
        <Hero />
        <Engagements />
      </main>
      <Footer />
    </>
  );
}
