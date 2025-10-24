import React from 'react'
import { HeroComponent } from '../components/header/HeroComponent'
import { MondialSlogan } from '../components/header/MondialSlogan'
import { CardHomeComponent } from '../components/home/CardHomeComponent'
//es la lista de servicios que se muestra en la home
import { ListCardComponent } from '../components/services/ListCardComponent'

export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <ListCardComponent />

      <MondialSlogan />
    </div>
  )
}
