import React from "react";
import servicesStyle from "../../styles/servicesComponentStyle"
import { Link } from "react-router-dom";

// Tarjeta individual de servicio para la lista de servicios
export const CardServiceComponent = ({ info, onClick }) => {
    return ( 
        <Link to={info.linkData} className={servicesStyle.cardContainer} onClick={onClick}>
            <div className={servicesStyle.imgContainer}>
                <img
                    src={info.img}
                    alt={info.title}
                    className={servicesStyle.imgCard}
                />
            </div>
            <div className={servicesStyle.textContainer}>
                <h3 className={servicesStyle.h3Styles}>
                    Quiero <strong>{info.service}</strong>
                    <br />
                    una propiedad
                </h3>

            </div>
        </Link>
    );
}