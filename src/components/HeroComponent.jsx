import React from 'react'
import heroStyles from '../styles/heroComponentStyles'
import heroimg from '../assets/img/Wallpaper.png'
import mondial from '../assets/img/Mondial-inmobiliaria.png'
import mondialLogo from '../assets/logo/isotypeMondial.png'

export const HeroComponent = () => {
  return ( 
    <div className={heroStyles.heroContainer}>
      <img className={heroStyles.bgImg} src={heroimg} alt="hero image" />
      <div className={heroStyles.bgFadeWhite}>
        <div className={heroStyles.heroSec}>
          <img
            className={heroStyles.logoMondial}
            src={mondialLogo}
            alt="Mondial logo"
          />
          <div className='flex flex-col items-center'>
            <img
            className={heroStyles.mondialText}
            src={mondial}
            alt="mondial"
            />
            <h2 className='font-extrabold text-indigo-900 pt-5 italianno-regular text-4xl ' >25 años a su servicio</h2>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}
