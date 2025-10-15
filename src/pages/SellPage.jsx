import React from 'react'
import sellPage from '../assets/img/sell-page.jpg'
import dataCarousel from '../data/dataCarousel'
import appStyles from '../styles/appStyles'
import dataSell from '../data/dataSell'
import { SellCardComponent } from '../components/sellpage/SellCardComponent'

export const SellPage = () => {
  return (
    <div className='flex flex-col p-5 gap-3'>
      <h2 className={appStyles.title}>VENTA</h2>
      <div className='flex max-md:flex-col gap-5 justify-around'>
        <img className='min-md:max-w-96' src={sellPage} alt="selling contract" />
        <p className='flex text-justify p-5 min-md:max-w-3xl'>
          {dataCarousel[2].description}
        </p>
      </div >
      <div className='flex max-md:flex-col justify-around gap-5 items-center'>
        {
        dataSell.map(info => (
            <div className='max-w-72' key={info.id}>
              <SellCardComponent info={info} />
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
