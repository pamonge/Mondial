import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import cardCarouselStyles from '../../styles/carouselStyles/cardCarouselComponentStyles'

// Componente que se renderiza en ./CarouselComponent.jsx

export const CardCarouselComponent = ({ info, onClick }) => {
  return (
    <div 
        className={cardCarouselStyles.cardContainer}
        onClick={onClick} 
    >
      <div className={cardCarouselStyles.imgContainer}>
        <img 
            src={`/carousel/image-carousel${info.id}.jpg`} 
            alt={info.title} 
            className={cardCarouselStyles.imgCard}
        />
        <span className={cardCarouselStyles.spanCategory}>
          {info.category}
        </span>
      </div>
      
      <div className={cardCarouselStyles.textContainer}>
        <h3 className={cardCarouselStyles.h3Styles}>
          {info.title}
        </h3>
        <p className={cardCarouselStyles.textStyles}>
          {info.description}
        </p>
      </div>
    </div>
  )
}