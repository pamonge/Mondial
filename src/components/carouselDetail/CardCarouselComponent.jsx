import React from 'react'
import { LinkComponent } from '../navigation/LinkComponent'
import cardCarouselStyles from '../../styles/carouselStyles/cardCarouselComponentStyles'

// card carousel de detalle de propiedades
export const CardCarouselComponent = ({ info, onClick }) => {
    return (
        <div
            className={`${cardCarouselStyles.cardContainer}`}
            style={{ display: 'block' }}
            onClick={onClick}
        >
            <div className={`${cardCarouselStyles.imgContainer} group cursor-pointer`}>
                <img
                    src={`${info.img}`}
                    alt={info.resume}
                    className={cardCarouselStyles.imgCard}
                />
                <div className={cardCarouselStyles.bottomGradient}></div>
            </div>
        </div>
    )
}