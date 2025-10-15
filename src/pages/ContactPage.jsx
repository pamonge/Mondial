import React from 'react'
import { MapComponent } from '../components/contact/MapComponent'

export const ContactPage = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='italic text-center py-4 font-bold'>CONTÁCTENOS</h2>
      <MapComponent />
    </div>
  )
}
