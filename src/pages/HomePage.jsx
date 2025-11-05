import React from 'react'
import { HeroComponent } from '../components/header/HeroComponent'
import { MondialSlogan } from '../components/home/MondialSlogan'
import { CardHomeComponent } from '../components/home/CardHomeComponent'
//es la lista de servicios que se muestra en la home
import { ListCardComponent } from '../components/services/ListCardComponent'
import { CarouselComponent } from '../components/carousel/CarouselComponent'
export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <ListCardComponent />
      <CarouselComponent />
      <MondialSlogan />
    </div>
  )
}
