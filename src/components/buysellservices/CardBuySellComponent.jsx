import React from "react";
import servicesStyle from "../../styles/servicesComponentStyle"
import cardStyle from '../../styles/servicestyles/cardServicesStyles'
import { LinkComponent } from '../navigation/LinkComponent'
import bathtub from '../../assets/icons/servicesPage/bathtub.png'
import bed from '../../assets/icons/servicesPage/bed.png'
import surface from '../../assets/icons/servicesPage/surface.png'

// Tarjeta individual para la lista de servicios
export const CardBuySellComponent = ({ info, link, desc }) => {
    return ( 
        <div className={servicesStyle.cardContainer}>
            <div className={servicesStyle.imgContainer}>
                <img
                    src={info.img}
                    alt={info.location}
                    className={servicesStyle.imgCard}
                />
                <p>{info.price}</p>
            </div>
            <div className="flex">
                <div className={`${servicesStyle.textContainer} pb-6 gap-8`}>
                    <h3 className={`${servicesStyle.h3Styles} text-left`}>
                        {info.location}
                    </h3>
                    <div className={cardStyle.cardDesc}>
                        <div className={cardStyle.divDesc}>
                            <img className={cardStyle.imgIcon} src={surface} alt="surface" />
                            <p>{info.sup}</p>
                        </div>
                        <div className={cardStyle.divDesc} >
                            <img className={cardStyle.imgIcon} src={bed} alt="rooms" />
                            <p>{info.rooms}</p>
                        </div>
                        <div className={cardStyle.divDesc} >
                            <img className={cardStyle.imgIcon} src={bathtub} alt="bathroom" />
                            <p>{info.bath}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-start p-3">
                    <LinkComponent src={link} state={info} desc={desc} />
                </div>
            </div>

        </div>
    );
}

