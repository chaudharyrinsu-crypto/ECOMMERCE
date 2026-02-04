'use client'
import HeroSection from "./components/HeroSection";
import NewArrivalHome from "./components/NewArrivalHome";
import TopCategory from "./components/TopCategory";

export default function Home() {
  return (
    <>
    <section className="bg-[#ECE9E2]">
    <HeroSection/>
    <TopCategory/>
    <NewArrivalHome/>
    </section>
    </>
  );
}
