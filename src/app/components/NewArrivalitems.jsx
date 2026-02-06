import React from 'react'

const NewArrivalitems = () => {
  return (
    <>
               <section className='px-3 py-5 w-full'>
                <div className='grid grid-cols-4 gap-2.5 h-110 w-full'>
                    {topCategory.map(item => (
                        <div key={item.id} className='h-full w-full rounded-2xl overflow-hidden relative group hover:rounded-full transition-all duration-500'>
                            <img className='object-cover h-full w-full' src={item.image} alt="images" />
                            <div className='absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white  text-center flex flex-col gap-2 items-center justify-center group-hover:-translate-y-[60%] transition-all duration-600 '>
                                <p className='inline-block px-5 text-center py-1 rounded-4xl border'>{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    </>
  )
}

export default NewArrivalitems
