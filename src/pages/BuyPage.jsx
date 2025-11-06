import React from 'react'
import { ServicesComponent } from '../components/buysellservices/ServicesComponent'
import { ListBuySellCardComponent } from '../components/buysellservices/ListBuySellCardComponent'
import data from '../data/dataServices'

export const BuyPage = () => {
  const buyInfo = data.buy;
  const cards = buyInfo.cards;
  console.log(cards);
  return (
    <div>
      <ServicesComponent 
        title={buyInfo.title} 
        text={buyInfo.text} 
        satisfy={buyInfo.satisfy} 
        list={<ListBuySellCardComponent service={cards} />} 
      />
    </div>
  )
}
