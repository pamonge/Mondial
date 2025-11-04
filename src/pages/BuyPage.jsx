import React from 'react'
import appStyles from '../styles/appStyles'
import { ServicesComponent } from '../components/services/ServicesComponent'
import { ListCardComponent } from '../components/services/ListCardComponent'
import data from '../data/dataServices'

export const BuyPage = () => {
  const buyInfo = data.buy;
  return (
    <div>
      <ServicesComponent 
        title={buyInfo.title} 
        text={buyInfo.text} 
        satisfy={buyInfo.satisfy} 
        list={<ListCardComponent />}
      />
    </div>
  )
}
