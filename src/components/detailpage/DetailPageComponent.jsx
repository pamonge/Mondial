import React from 'react'
import { useLocation } from 'react-router-dom'
import { DescriptionDetailCardComponent } from './DescriptionDetailCardComponent'
import { CaracteristicsDetailCardComponent } from './CaracteristicsDetailCardComponent'
import locationIcon from '../../assets/icons/placeMarker.png'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
export const DetailPageComponent = () => {
    const location = useLocation()
    const info = location.state
    return (
        <div className={detailStyle.container}>
            <h2 className={detailStyle.title}>{info.location}</h2>
            <div className={detailStyle.containerCreatorNews}>
                <div className='flex gap-2'>
                    <img className={detailStyle.meta} src={locationIcon} alt="place marker" />
                    <p className={detailStyle.meta} >{info.address}</p>
                </div>
                <span className={detailStyle.price} >{info.price}</span>

                {/* Hay que ver el carousel */}

            </div>

            <DescriptionDetailCardComponent data={info.description} />
            <CaracteristicsDetailCardComponent data={info.caracteristics} />
        </div>
    )
}
