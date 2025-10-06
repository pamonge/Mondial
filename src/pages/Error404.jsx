import React from 'react'
import error404 from '../assets/icons/icon-error-globe.png'
import { LinkComponent } from '../components/LinkComponent'
import { Link } from 'react-router-dom'

export const Error404 = () => {
  return (
    <div className='flex max-md:flex-col gap-4 justify-center items-center py-8 ' >
        <div>
            <img src={error404} alt="Error 404" />
        </div>
        <div className='flex flex-col justify-center items-center gap-8'>
            <h3 className='text-center italic '>EL SITIO QUE USTED BUSCA <strong>NO SE ENCUENTRA DISPONIBLE</strong></h3>
            <LinkComponent src='/' desc='Volver'/>
        </div>

    </div>
  )
}
