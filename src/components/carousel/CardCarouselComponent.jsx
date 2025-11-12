import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import cardCarouselStyles from '../../styles/carouselStyles/cardCarouselComponentStyles'

export const CardCarouselComponent = ({ info, link }) => {
  return (
    <div className={`${cardCarouselStyles.cardContainer}`}>
      <LinkComponent
        src={link}
        desc={
          <div className={`${cardCarouselStyles.imgContainer} group`}>
            <img
              src={`${info.img}`}
              alt={info.title}
              className={cardCarouselStyles.imgCard}
            />
            <div className={cardCarouselStyles.bottomGradient}></div>
            <div className={cardCarouselStyles.hoverOverlay}></div>
            <div className={cardCarouselStyles.centerText}><span>Ver detalle</span></div>

            <div className="absolute bottom-4 left-4 p-4 w-[calc(100%-2rem)] z-20">
              <h3 className="font-semibold text-lg text-white">
                {info.location}
              </h3>
              <p className="text-base text-white">
                {info.address}
              </p>
              <p className="text-base text-white">
                {info.rooms} habitaciones ~ {info.sup}
              </p>
            </div>
          </div>
        }
        style="block"
      />
    </div>
  )
}