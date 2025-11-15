import React from 'react'
import { GoogleCarouselComponent } from './GoogleCarouselComponent'
import appStyles from '../../styles/appStyles'

export const ReviewsComponent = () => {
  return (
    <div className='flex flex-col gap-10 p-1 min-lg:pb-10 '>
        <h3 className={appStyles.title}>Lo que dicen nuestros clientes</h3>
        <GoogleCarouselComponent />
    </div>
  )
}
