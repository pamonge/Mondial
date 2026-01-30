import React from 'react'
import { useLocation } from 'react-router-dom'
import { DescriptionDetailCardComponent } from './DescriptionDetailCardComponent'
import { DetailCardComponent } from './DetailCardComponent'
import locationIcon from '../../assets/icons/placeMarker.png'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
import { CarouselComponent } from '../../components/carouselDetail/CarouselComponent'
import appStyles from '../../styles/appStyles'

export const DetailPageComponent = ({ data }) => {
    const info = data;
    // console.log(`DetailPageComp tiene: ${info.description}`)
    return (
        <div className={detailStyle.container}>
            <h2 className={detailStyle.title}>{info.resume}</h2>
            <div className={detailStyle.containerCreatorNews}>
                <div className='flex gap-2'>
                    <img className={detailStyle.meta} src={locationIcon} alt="place marker" />
                    <p className={detailStyle.meta} >{info.address}</p>
                </div>
                <div className='flex flex-col'>
                    <span className={detailStyle.price} >{info.price}</span>
                    <span className={detailStyle.price} >{info.priceM2}</span>
                </div>

            </div>
            <CarouselComponent />
            <DescriptionDetailCardComponent data={info} />
            <DetailCardComponent title='Características' data={info.caracteristics} />
            <DetailCardComponent title='Certificación Energética' data={info.energyCertification} />
            <DetailCardComponent title='Edificio' data={info.building} />
            <DetailCardComponent title='Equipamiento' data={info.equipment} />
            
            {/* Faltan propiedades Similares */}
    

        </div>
    )
}
