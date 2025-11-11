import React from 'react'
import { useLocation } from 'react-router-dom'
import { DescriptionDetailCardComponent } from './DescriptionDetailCardComponent'
import { CaracteristicsDetailCardComponent } from './CaracteristicsDetailCardComponent'
import locationIcon from '../../assets/icons/placeMarker.png'

export const DetailPageComponent = () => {
    const location = useLocation()
    const info = location.state 
    return (
        <div>
        <h2>{info.location}</h2>
        <div>
            <div>
            <img src={locationIcon} alt="place marker" />
            <p>{info.address}</p>
            </div>
            <span>{info.price}</span>
            
            {/* Hay que ver el carousel */}
            
            <DescriptionDetailCardComponent data={info.description} />
            <CaracteristicsDetailCardComponent data={info.caracteristics}  />
        </div>
        </div>
    )
    }
