import React from 'react'
import sellPage from '../assets/img/sell-page.jpg'
import dataCarousel from '../data/dataCarousel'
import appStyles from '../styles/appStyles'
import dataSell from '../data/dataSell'
import dataServices from '../data/dataServices'
import { SellCardComponent } from '../components/sellpage/SellCardComponent'
import { ServicesComponent } from '../components/buysellservices/ServicesComponent'

export const SellPage = () => {
  const data = dataServices.sell
  return (
    <div className='flex flex-col p-5 gap-3'>
      <ServicesComponent 
        title={data.title}
        text={data.text}
        satisfy={data.satisfy}
      />
      <div className='flex max-md:flex-col justify-around gap-5 items-center'>
        {
          dataSell.map(data => (
            <div className='max-w-72' key={data.id}>
              <SellCardComponent info={data} />
            </div>
          ))
        }
      </div>
      
    </div>
  )
}
