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
    <section>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sed labore et ad vero eum adipisci vitae explicabo, soluta, pariatur quia architecto odio consequuntur quam. Neque illum et quisquam at!
    </section>
    </section>
    </>
  );
}
