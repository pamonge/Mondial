import React from 'react'
import { HeroComponent } from '../components/HeroComponent'
import { CarouselComponent } from '../components/carousel/CarouselComponent'


export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <h2 className='text-center italic '>LLÁMENOS QUÉ <strong>
        PODEMOS ASESORARLO</strong></h2>
        <CarouselComponent />
      

    </div>
  )
}
