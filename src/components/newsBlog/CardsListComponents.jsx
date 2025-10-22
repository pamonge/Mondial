import React from "react";
import dataBlog from "../../data/dataBlog";
import { CardComponent } from "./CardComponent";
import { ListStyle } from "../../styles/NewsStyles/ListComponentStyle"
export const CardListComponents = () => {
    // Ordenar las noticias por fecha de publicación
    const newsOrdenadas = [...dataBlog].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    });

    return (
        // Contenedor general de la lista de noticias
        <div className={ListStyle.divGeneral}>
            {/*Contenedor de cada tarjeta de noticias*/}
            <div className={ListStyle.container}>
                {/*Lista de tarjetas de noticias ordenadas por fecha de publicación*/}
                {newsOrdenadas.map((noticia) => (
                    <CardComponent
                        key={noticia.id}
                        info={noticia}
                    />
                ))}
            </div>
        </div>
    );
};
