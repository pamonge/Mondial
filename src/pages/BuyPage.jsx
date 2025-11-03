import React from 'react'
import appStyles from '../styles/appStyles'
import { ServicesComponent } from '../components/services/ServicesComponent'

export const BuyPage = () => {
  return (
    <div>
      <h2 className={appStyles.title}>COMPRA</h2>
      <ServicesComponent />
    </div>
  )
}
