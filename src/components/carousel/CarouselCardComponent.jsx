import React from 'react'

export const CarouselCardComponent = (info, onClick) => {
  return (
    <div> 
        <div>
            <h3>Ver detalle</h3>
            <div>
                <img src={`/carousel/image-carousel${info.id}.jpg`} 
                alt={info.title}  />

                <div>
                    <h4>{info.title}</h4>
                    <p>{info.location}</p>
                    <p>{info.detail}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
