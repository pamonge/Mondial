import React from 'react'
import { HeroComponent } from '../components/header/HeroComponent'
import { CarouselComponent } from '../components/carousel/CarouselComponent'
import { MondialSlogan } from '../components/header/MondialSlogan'


export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <h2 className='text-center italic pt-8'>Grupo Inmobiliario especialista en el mercado residencial en Murcia.</h2>
      <CarouselComponent />
      <MondialSlogan />
    </div>
  )
}
