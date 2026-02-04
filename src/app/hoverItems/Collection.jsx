'use client'
import React from 'react'
import { allCollection, customerFavorites, menShoes, topAddOns } from '../data/Alldata.'
import Link from 'next/link'

const Collection = () => {
  return (
    <>
      <section className='absolute top-0 left-0 z-50 bg-[#ECE9E2] w-full py-40'>
        <div className='max-w-[1320px] m-auto'>
            <div className='grid grid-cols-4 gap-3 text-[14px]'>
            <div>
                {allCollection.map(a=>(
                    <Link className='uppercase flex mt-6 font-semibold' key={a} href='/'>{a}</Link>
                ))}
            </div>
            <div>
                <h5 className='mt-6'>Men's Shoes</h5>
                {menShoes.map(a=>(
                    <Link className='text-[#575757] flex mt-3' key={a} href='/'>{a}</Link>
                ))}
            </div>
            <div>
                 <h5 className='mt-6'>Customer Favorites</h5>
                {customerFavorites.map(a=>(
                    <Link className='text-[#575757] flex mt-3' key={a} href='/'>{a}</Link>
                ))}
            </div>
            <div>
                <h5 className='mt-6'>Top Add-Ons</h5>
                {topAddOns.map(a=>(
                    <Link className='text-[#575757] flex mt-3' key={a} href='/'>{a}</Link>
                ))}
            </div>
           
            </div>
        </div>
      </section>
    </>
  )
}

export default Collection
