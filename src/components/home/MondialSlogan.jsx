import React from 'react'
import dataMondial from '../../data/dataMondial.js'
import imgSlogan from '../../assets/img/mondial-slogan.jpg'

export const MondialSlogan = () => {
  return (

    <div className='bg-[] ' >

      <div className='flex flex-col' >

        <h2>Una vivienda es solo estructura, pero un hogar es donde late el corazón.</h2>

        <div className='flex max-md:flex-col px-5 py-15 gap-5'>

          <div>
            <img className='rounded-2xl' src={imgSlogan} alt="image mondial slogan" />
          </div>
          
          <div className='flex items-center' >
            <p className='text-justify'>
              {dataMondial.text}
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}
