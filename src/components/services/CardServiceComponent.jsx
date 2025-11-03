import React from "react";
import servicesStyle from "../../styles/servicesComponentStyle"
import { Link } from "react-router-dom";

// Tarjeta individual de servicio para la lista de servicios
export const CardServiceComponent = ({ info }) => {
    return ( 
        <div className={servicesStyle.cardContainer}>
            <div className={servicesStyle.imgContainer}>
                <img
                    src={`/abouticon${info.id}.png`}
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
        </div>
    );
}

