import React from 'react'
import { useLocation } from 'react-router-dom'
import { DescriptionDetailCardComponent } from './DescriptionDetailCardComponent'
import { CaracteristicsDetailCardComponent } from './CaracteristicsDetailCardComponent'
import locationIcon from '../../assets/icons/placeMarker.png'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
import { CarouselComponent } from '../../components/carouselDetail/CarouselComponent'
import appStyles from '../../styles/appStyles'

export const DetailPageComponent = ({ data }) => {
    const info = data;
    // console.log(`DetailPageComp tiene: ${info.description}`)
    return (
        <div >
            <h2 className={detailStyle.title}>{info.location}</h2>
            <div className={detailStyle.containerCreatorNews}>
                <div className='flex gap-2'>
                    <img className={detailStyle.meta} src={locationIcon} alt="place marker" />
                    <p className={detailStyle.meta} >{info.address}</p>
                </div>
                <span className={detailStyle.price} >{info.price}</span>

                {/* Hay que ver el carousel */}

            </div>
            {/* Carousel provisorio */}
            <CarouselComponent />
            <DescriptionDetailCardComponent data={info} />
            <CaracteristicsDetailCardComponent data={info.caracteristics} />

            {/* Faltan propiedades Similares */}


        </div>
    )
}
