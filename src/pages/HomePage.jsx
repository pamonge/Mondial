import React from 'react'
import { HeroComponent } from '../components/header/HeroComponent'
import { MondialSlogan } from '../components/home/MondialSlogan'
import { CardHomeComponent } from '../components/home/CardHomeComponent'
//es la lista de servicios que se muestra en la home
import { ListCardComponent } from '../components/services/ListCardComponent'
import { QuestionComponent } from '../components/home/QuestionComponent'
import { CarouselComponent } from '../components/carousel/CarouselComponent'
import { InmobiliaryWorld } from '../components/home/InmobiliaryWorld'

export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <ListCardComponent />
      <MondialSlogan />
      <QuestionComponent />
      <CarouselComponent />
      <InmobiliaryWorld />
    </div>
  )
}
