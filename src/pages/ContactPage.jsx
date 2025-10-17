import React from 'react'
import { MapComponent } from '../components/contact/MapComponent'
import appStyles from '../styles/appStyles'

export const ContactPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className={appStyles.title}>CONTÁCTENOS</h2>
      <MapComponent />
    </div>
  )
}
