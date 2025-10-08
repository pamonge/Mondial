import React from 'react'
import { HeroComponent } from '../components/HeroComponent'
import { CarouselComponent } from '../components/carousel/CarouselComponent'
import { MondialSlogan } from '../components/MondialSlogan'


export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <h2 className='text-center italic pt-8'>LLÁMENOS, <strong>
        PODEMOS ASESORARLO</strong></h2>
        <CarouselComponent />
        <MondialSlogan />
    </div>
  )
}
