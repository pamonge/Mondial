import React from 'react'
import { useLocation } from 'react-router-dom'
import { DescriptionDetailCardComponent } from './DescriptionDetailCardComponent'
import { CaracteristicsDetailCardComponent } from './CaracteristicsDetailCardComponent'
import locationIcon from '../../assets/icons/placeMarker.png'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
import { CarouselComponent } from '../../components/carousel/CarouselComponent'
import appStyles from '../../styles/appStyles'
import { ListBuySellCardComponent } from '../../components/buysellservices/ListBuySellCardComponent'
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
            {/* Carousel provisorio */}
            <CarouselComponent />
            <DescriptionDetailCardComponent data={info.description} />
            <CaracteristicsDetailCardComponent data={info.caracteristics} />
            {/* Faltan propiedades Similares */}
            <h2 className={appStyles.mainTitle}>Propiedades Similares</h2>

        </div>
    )
}
