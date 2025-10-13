import React from 'react'
import dataAbout from '../data/dataAboutUs'
import appStyles from '../styles/appStyles'

export const UsPage = () => {
  return (
    <div>
      <h2 className={appStyles.title}>ACERCA DE <strong>NOSOTROS</strong></h2>   
      {
        dataAbout.map(text => (
          <p className='flex text-justify p-5' >{text.paragraph}</p>
        ))
      }   
    </div>
  )
}
