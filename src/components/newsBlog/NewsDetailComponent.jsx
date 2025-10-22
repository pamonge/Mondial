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


            <div className={detailStyle.meta}>
                <span>Publicado por: <strong>{info.Autor || 'Mondial'}</strong></span>
                <span className={detailStyle.separator}>|</span>
                <span>Fecha: <strong>{info.date}</strong></span>
            </div>


            <img
                src={`/blogNews/image-news${info.id}.jpg`}
                alt={info.title}
                className={detailStyle.image}
            />


            <div className={detailStyle.content}>

                <p>{info.noticia}</p>


            </div>

        </div>
    )
}
export default NewsDetailComponents;

