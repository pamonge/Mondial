import React from "react";
import dataBlog from "../../data/dataBlog";
import { CardComponent } from "./CardComponent";
import listStyle from "../../styles/NewsStyles/ListComponentStyle";
//lista de tarjetas de noticias del blog
export const CardListComponents = () => {
    // Ordenar las noticias por fecha de publicación
    const newsOrdenadas = [...dataBlog].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    });

    return (
        // Contenedor general de la lista de noticias
        <div className={listStyle.sectionContainer}>

            <div className={listStyle.gridContainer}>
                {
                    newsOrdenadas.map((noticia) => (
                        //  Se Renderiza la tarjeta 
                        <CardComponent key={noticia.id} info={noticia} />
                    ))
                }
            </div>
        </div>
    );
};
