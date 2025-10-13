import React from 'react'
import sellPage from '../assets/img/sell-page.jpg'
import dataCarousel from '../data/dataCarousel'
import appStyles from '../styles/appStyles'

export const SellPage = () => {
  return (
    <div className='flex flex-col p-5 gap-3'>
      <h2 className={appStyles.title}>VENTA</h2>
      <div className='flex flex-col gap-5'>
        <img src={sellPage} alt="selling contract" />
        <p className='text-justify'>
          {dataCarousel[2].description}
        </p>
      </div>
    </div>
  )
}
