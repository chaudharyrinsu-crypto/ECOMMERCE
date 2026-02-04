'use client'
import React from 'react'
import { topCategory } from '../data/Alldata.'
import Link from 'next/link'

const TopCategory = () => {
    return (
        <>
            <section className='px-3 py-5'>
                <div className='grid grid-cols-4 gap-2.5 h-110 '>
                    {topCategory.map(item => (
                        <div key={item.id} className='h-full rounded-2xl bg-red-500 overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                            <img className='object-cover h-full w-full   ' src={item.image} alt="images" />
                            <div className='absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                <p className='inline-block px-5 text-center py-1  rounded-4xl border'>{item.category}</p>
                                {/* hidden group-hover:block */}
                                <div className='flex flex-col gap-2 opacity-0 group-hover:opacity-[100]  
                                transition-all duration-500'>
                                    <Link className='inline-block px-5 text-center py-1 rounded-4xl border  duration-500' href='/'>{item.shopcategory}</Link>
                                    {item.shopwomencategory && (<Link href='/' className=' inline-block px-5 text-center py-1 rounded-4xl border  duration-500'>{item.shopwomencategory}</Link>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TopCategory
