import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
// Noticia unica  con todos sus detalles 
const NewsDetailComponents = ({ info }) => {
    //se le pasa la indo de data blog para mostrar los detalles
    return (
        <div >


            <h1 className={detailStyle.title}>
                {info.title}
            </h1>


            <div className={detailStyle.containerCreatorNews}>
                <span className={detailStyle.meta}>Autor: {info.Autor || 'Mondial'}</span>

                <span className={detailStyle.meta}>Fecha: {info.date}</span>
            </div>


            <img
                src={`/blogNews/${info.image}`}
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

