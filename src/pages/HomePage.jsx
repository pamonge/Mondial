import React from 'react'
import { HeroComponent } from '../components/header/HeroComponent'
import { MondialSlogan } from '../components/home/MondialSlogan'
import { CardHomeComponent } from '../components/home/CardHomeComponent'


export const HomePage = () => {
  return (
    <div>
      <HeroComponent />
      <MondialSlogan />
    </div>
  )
}
