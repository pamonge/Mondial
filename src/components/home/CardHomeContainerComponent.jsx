import React from 'react'
import info from '../../data/dataCarousel'
import { CardHomeComponent } from './CardHomeComponent'
import { NavLink } from 'react-router-dom'

export const CardHomeContainerComponent = () => {
  return (
    <div>
        {
            info.map(data => (
                <NavLink key={data.id} to={data.linkData} >
                    <CardHomeComponent info={data} />
                </NavLink>
                 
            ))
        }
    </div>
  )
}
