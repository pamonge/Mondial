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
      <div className={cardCarouselStyles.imgContainer}>
        <img
          src={`/carousel/${info.img}`}
          alt={info.title}
          className={cardCarouselStyles.imgCard}
        />
        <div className="absolute bottom-4 left-4 p-4   w-[calc(100%-2rem)]">
          <h3 className="font-semibold text-lg text-white">
            {info.location}
          </h3>
          <p className="text-sm text-base text-white">
            {info.address}
          </p>
          <p className="text-sm text-base text-white">
            {info.rooms} habitaciones ~ {info.sup}
          </p>
        </div>
      </div>



    </div>
  )
}