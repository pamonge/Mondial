import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
// Noticia unica  con todos sus detalles 
const NewsDetailComponents = ({ info }) => {
    //se le pasa la indo de data blog para mostrar los detalles
    return (
        <div className={detailStyle.container}>


            <h1 className={detailStyle.title}>
                {info.title}
            </h1>


            <div className={detailStyle.containerCreatorNews}>
                <span className={detailStyle.meta}>Autor: {info.Autor || 'Mondial'}</span>

                <span className={detailStyle.meta}>Fecha: {info.date}</span>
            </div>





            <div className={detailStyle.content}>

                <p>{info.descripcion}</p>
                <img
                    src={`/blogNews/${info.img}`}
                    alt={info.title}
                    className={detailStyle.image}
                />

            </div>

        </div>
    )
}
export default NewsDetailComponents;

