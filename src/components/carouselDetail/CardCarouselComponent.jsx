import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import cardCarouselStyles from '../../styles/carouselStyles/cardCarouselComponentStyles'
// card carosuel de detalle de propiedades
export const CardCarouselComponent = ({ info }) => {
    return (
        <div className={`${cardCarouselStyles.cardContainer}`}>


            <div className={`${cardCarouselStyles.imgContainer} group`}>

                <img
                    src={`${info.img}`}
                    alt={info.location}
                    className={cardCarouselStyles.imgCard}
                />
                <div className={cardCarouselStyles.bottomGradient}></div>



            </div>


        </div>
    )
}