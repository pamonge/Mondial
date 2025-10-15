import React from 'react'
import dataAbout from '../data/dataAboutUs'
import appStyles from '../styles/appStyles'

export const UsPage = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className={appStyles.title}>ACERCA DE <strong>NOSOTROS</strong></h2>   
      {
        dataAbout.map(text => (
          <p key={text.paragraph} className='flex text-justify p-5 min-md:max-w-3xl' >{text.paragraph}</p>
        ))
      }   
    </div>
  )
}
