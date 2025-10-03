import React from 'react'
import { HeaderComponent } from './HeaderComponent'
import dataCarousel from '../../data/dataCarousel'
import { CardCarouselComponent } from './CardCarouselComponent';

export const CarouselComponent = () => {

    const infoCarousel = [...dataCarousel, ...dataCarousel];
    
    return (
        <div>
            <HeaderComponent />
            <div className='container py-2 '>
                <div className='overflow-hidden w-full'>
                    <div className='flex whitespace-nowrap animate-scroll'> 
                        {infoCarousel.map((data, index) => (
                            <CardCarouselComponent info={data} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
