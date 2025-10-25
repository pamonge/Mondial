import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'

export const QuestionComponent = () => {
  return (
    <div className='bg-[#312C85] m-10  rounded-2xl flex flex-col gap-6 justify-center items-center py-15' >
        <div className='flex flex-col gap-5'>
            <p className=' text-white text-3xl text-center'>¿Buscas comprar, vender o alquilar una propiedad?</p>
            <p className=' text-white text-3xl text-center'>En Mondial inmobiliaria podemos ayudarte.</p>
        </div>
        <LinkComponent src='/contact' desc='¡Contáctenos!' style='bg-[#76CBE4] py-2 px-4 rounded-2xl ' />
    </div>
  )
}
