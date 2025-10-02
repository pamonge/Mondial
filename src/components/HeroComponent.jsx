import React from 'react'
import heroStyles from '../styles/heroComponentStyles'
import heroimg from '../assets/img/Wallpaper.png'
import mondial from '../assets/img/Mondial-inmobiliaria.png'
import mondialLogo from '../assets/logo/isotypeMondial.png'

export const HeroComponent = () => {
  return ( 
<div className={heroStyles.heroContainer}>
  <img className={heroStyles.bgImg} src={heroimg} alt="hero image" />

  <div className={heroStyles.bgFadeWhite}></div>

  <div className={heroStyles.heroSec}>
    <img
      className={heroStyles.logoMondial}
      src={mondialLogo}
      alt="Mondial logo"
    />
    <img
      className={heroStyles.mondialText}
      src={mondial}
      alt="mondial"
    />
  </div>
</div>
  )
}
