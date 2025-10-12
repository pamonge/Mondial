import React from 'react'
import dataMondial from '../data/dataMondial.js'
import imgSlogan from '../assets/img/mondial-slogan.jpg'

export const MondialSlogan = () => {
  return (

    <div className='bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(222,222,222,1)_7%,rgba(222,222,222,1)_93%,rgba(255,255,255,1)_100%)] ' >
      <div className='flex max-md:flex-col px-5 py-15 gap-5' >
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
  )
}
