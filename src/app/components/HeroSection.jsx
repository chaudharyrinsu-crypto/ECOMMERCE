import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const HeroSection = () => {
    return (
        <>
            <section className="px-3 mt-3 font-medium">
                <div className="w-full h-[500px] relative">
                    <Image src="/hero.jpg" fill alt="heroimage" className="object-cover rounded-2xl" />
                    <div className='absolute right-16 z-50 bottom-19'>
                        <div className='flex flex-col gap-4'>
                            <p className='uppercase text-white text-sm font-normal'>all new dasher n2 collection</p>
                            <h1 className='capitalize text-white'>Widely comfortable. super natural</h1>
                            <div className=' space-x-4 text-[14px] uppercase font-medium'>
                                <Link className='bg-white py-2 px-6 rounded-4xl' href='/'>
                                    shop men</Link>
                                <Link className='bg-white py-2 px-6 rounded-4xl' href='/'>shop women</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
