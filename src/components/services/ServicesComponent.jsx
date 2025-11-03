import React from 'react'
import info from '../../data/dataServices'

// Este componente es generico para compra, venta o alquiler
export const ServicesComponent = ({ title, text, satisfy, info }) => {
  return (
    <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <span>{satisfy}</span>
        <div>
            {
                info.map(card => (
                    // Renderiza un componente card
                    {card}
                ))
            }
        </div>
    </div>
  )
}
