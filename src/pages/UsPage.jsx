import React from 'react'
import dataAbout from '../data/dataAboutUs'

export const UsPage = () => {
  return (
    <div>
      <h2 className='italic text-center py-4'>ACERCA DE <strong>NOSOTROS</strong></h2>   
      {
        dataAbout.map(text => (
          <p className='flex text-justify p-5' >{text.paragraph}</p>
        ))
      }   
    </div>
  )
}
