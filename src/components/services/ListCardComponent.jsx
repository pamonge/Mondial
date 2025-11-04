import React from "react";
import info from '../../data/dataServices'
import { CardServiceComponent } from "./CardServiceComponent";
import servicesStyle from "../../styles/servicesComponentStyle";

export const ListCardComponent = () => {
    const service = info.buy.cards;
    console.log(service)
    return (
        <div className={servicesStyle.sectionContainer}>
            <div className={servicesStyle.gridContainer}>
                {
                    service.map((prop) => (
                        //  Se Renderiza la tarjeta 
                        <CardServiceComponent 
                            key={prop.id} 
                            info={prop} 
                            link='/detail'
                            desc='Comprar'
                        />
                    ))
                }
            </div>
        </div>
    );
}