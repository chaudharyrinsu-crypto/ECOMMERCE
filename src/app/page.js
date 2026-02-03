import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="px-3 mt-3">
    <div className="w-full h-[600px] relative ">
  <Image src="/hero.jpg" fill alt="heroimage" className="object-cover rounded-2xl"/>
  </div>
  </div>
    </>
  );
}
