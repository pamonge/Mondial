import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'

export const InmobiliaryWorld = () => {
  return (
    <div className='bg-white m-1 min-lg:m-10 flex p-15 justify-between rounded-2xl max-md:flex-col gap-8'>
        <div className='flex flex-col gap-4 max-md:text-center min-lg:max-w-2/3'>
            <h3 className='max-lg:text-2x1 text-3xl' >Te contamos más sobre el mundo inmobiliario</h3>
            <p className='max-md:text-xl text-2xl'>Consejos, tendencias y novedades del sector para que tomes las mejores decisiones, todo en nuestro blog.</p>
        </div>
        <div className='flex items-center max-md:justify-center max-lg:min-w-1/3'>
            <LinkComponent src='/news' desc='¡Descubre más!' />
        </div> 
    </div>
  )
}
