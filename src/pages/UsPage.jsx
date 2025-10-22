import React from 'react'
import { AboutUsComponent } from '../components/aboutUs/AboutUsComponent'

// sobre nosotros pagina 
export const UsPage = () => {
  return (
    //llama al componente AboutUsComponent  q muestra la informacion sobre nosotros
    <div className='flex flex-col items-center'>
      <AboutUsComponent />
    </div>
  )
}
