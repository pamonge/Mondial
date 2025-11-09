import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import cardCarouselStyles from '../../styles/carouselStyles/cardCarouselComponentStyles'

// Componente que se renderiza en ./CarouselComponent.jsx

export const CardCarouselComponent = ({ info, onClick }) => {
  return (
    <div

      className={`${cardCarouselStyles.cardContainer} `}
      onClick={onClick}
    >
      < div className={`${cardCarouselStyles.imgContainer} group`}>
        <img
          src={`/carousel/${info.img}`}
          alt={info.title}
          className={cardCarouselStyles.imgCard}
        />
        {/*degrade negro para q se vea bien el texto*/}
        <div className={cardCarouselStyles.bottomGradient}></div>
        {/*degrade del hover y texto del hover*/}
        <div className={cardCarouselStyles.hoverOverlay}></div>
        <div className={cardCarouselStyles.centerText}><span>Ver detalle</span></div>

        <div className="absolute bottom-4 left-4 p-4   w-[calc(100%-2rem)] z-20">
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



    </div>
  )
}