import React from 'react'

// Componente que se renderiza en /pages/HomePage.jsx

export const CardHomeComponent = ({ info }) => {
  return (
    <div >
      <div >
        <img 
            src={`/carousel/image-homeCard${info.id}.jpg`} 
            alt={info.title} 
            
        />
      </div>
      
      <div >
        <h3 className={cardCarouselStyles.h3Styles}>
          {info.title}
        </h3>
        <p className={cardCarouselStyles.textStyles}>
          {info.description}
        </p>
        <div className={cardCarouselStyles.linkComponentStyles}>
          <LinkComponent src={info.linkData} desc='Ver más'/>  
        </div>
      </div>
    </div>
  )
}