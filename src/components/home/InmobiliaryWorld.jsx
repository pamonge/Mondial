import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'

export const InmobiliaryWorld = () => {
  return (
    <div className='bg-white m-10 flex p-10 justify-between rounded-2xl max-md:flex-col gap-8'>
        <div className='flex flex-col gap-5 max-md:text-center'>
            <h3 className='text-3xl' >Te contamos más sobre el mundo inmobiliario</h3>
            <p className='text-2xl min-lg:max-w-4xl'>Consejos, tendencias y novedades del sector para que tomes las mejores decisiones, todo en nuestro blog.</p>
        </div>
        <div className='flex items-center max-md:justify-center'>
            <LinkComponent src='/news' desc='¡Descubre más!' />
        </div> 
    </div>
  )
}
