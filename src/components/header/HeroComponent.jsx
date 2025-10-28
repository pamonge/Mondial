import React from 'react'
import heroStyles from '../../styles/heroComponentStyles'
import heroimg from '../../assets/img/Wallpaper.png'
import mondial from '../../assets/logo/imagotipo.png'
import { LinkComponent } from '../navigation/LinkComponent'

export const HeroComponent = () => {
  return ( 
    <div className={heroStyles.heroContainer}>
      <img className={heroStyles.bgImg} src={heroimg} alt="hero image" />
      
        <div className={`${heroStyles.heroSec} min-md:w-2xl text-white px-10`}>
          <h1 className='text-5xl font-medium'>Encuentra tu hogar ideal con nosotros</h1>
          <h2 className='pt-5 satisfy-regular text-4xl ' >25 años a su servicio</h2>
          <div className='pt-8'>
            <LinkComponent src='/contact' desc='Contáctenos!' />
          </div>
          <div className='flex flex-col pt-28'>
            <img
            className={heroStyles.mondialText}
            src={mondial}
            alt="mondial"
            />
            
          </div>
          
        </div>
        
      </div>
  )
}
