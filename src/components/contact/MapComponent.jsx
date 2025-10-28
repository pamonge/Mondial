import React from 'react'
import iconMarc from '../../assets/icons/icon-marc.png'
import dataMondial from '../../data/dataMondial'
import mapComponentStyles from '../../styles/mapComponentStyles'

// Este componente renderiza en ContactPage.jsx
export const MapComponent = () => {
  return (
    <div className={mapComponentStyles.mapContainer} >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.262162235979!2d-1.1344183242031902!3d37.99434509948167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638221dfa8822b%3A0xbb6be85f3fc7e86!2sAv.%20Juan%20Carlos%20I%2C%202%2C%2030008%20Murcia%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1760331223817!5m2!1ses!2sar" 
      className={mapComponentStyles.mapStyles}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
