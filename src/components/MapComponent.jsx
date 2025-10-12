import React from 'react'
import iconMarc from '../assets/icons/icon-marc.png'

export const MapComponent = () => {
  return (
    <div>
        <div className='flex gap-3 justify-center items-center ' >
        <img className='w-10 h-auto' src={iconMarc} alt="marquer" />
        <p>
           Avenida de Juan Carlos I, 4B, 30008 Murcia Murcia, España
        </p>
      </div>
        <iframe className='w-80 h-auto p-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.472731712569!2d-1.1338396242054027!3d37.94274660246651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6378cdc254e0c3%3A0xa214a22f665a7693!2sAv.%20de%20Juan%20Carlos%20I%2C%204%2C%2030151%20Murcia%2C%20Espa%C3%B1a!5e0!3m2!1ses!2sar!4v1760217273780!5m2!1ses!2sar" 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
