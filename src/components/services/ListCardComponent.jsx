
import React from "react";
import dataCarousel from "../../data/dataCarousel";

import { CardServiceComponent } from "./CardServiceComponent";

import servicesStyle from "../../styles/servicesComponentStyle";

export const ListCardComponent = () => {
    return (
        <div className={servicesStyle.sectionContainer}>

            {/*  Título principal  */}
            <h2 className={` ${servicesStyle.mainTitleColor} ${servicesStyle.mainTitle}`}>
                Somos especialistas en el mercado
                <br />
                residencial en Murcia
            </h2>

            <div className={servicesStyle.gridContainer}>
                {
                    dataCarousel.map((service) => (
                        //  Se Renderiza la tarjeta 
                        <CardServiceComponent key={service.id} info={service} />
                    ))
                }
            </div>
        </div>
    );
}