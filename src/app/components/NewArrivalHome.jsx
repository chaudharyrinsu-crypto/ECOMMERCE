import React from 'react'
import { newArrivalShoe } from '../data/Alldata.'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

const NewArrivalHome = () => {
    const [direction, setDirection] = useState('horizontal')

    // Detect screen resize
    useEffect(() => {
        const handleResize = () => {
            setDirection(window.innerWidth <= 760 ? 'vertical' : 'horizontal')
        }

        handleResize() // run on mount
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <>
            <div className="w-full h-screen py-22">
                <h3 className='uppercase underline font-medium tracking-wider text-center'>new arrivals</h3>
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={2}
                    direction={direction}
                    navigation
                    className="w-full h-full"
                >
                    {newArrivalShoe.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-full overflow-hidden">
                                <img
                                    src={img}
                                    alt="new arrivals shoes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* <div className="flex items-center justify-center h-full ">
                               <img src={img} className='' alt='new arrivals shoes' />
                            </div> */}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default NewArrivalHome
