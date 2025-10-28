import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
import { Link } from 'react-router-dom'
const NewsDetailComponents = ({ info }) => {
    return (
        <div className={detailStyle.container}>
            {/* Enlace de regreso a la página de noticias */}
            <Link to="/news" className={detailStyle.backLink}>&lt; Volver</Link>
            <h1 className={detailStyle.title}>
                {info.title}
            </h1>

            <div className={detailStyle.containerCreatorNews}>
                <span className={detailStyle.meta}>Autor: {info.Autor || 'Mondial'}</span>
                <span className={detailStyle.meta}>Fecha: {info.date}</span>
            </div>


            <div className={detailStyle.content}>


                <div className={detailStyle.textBlock}>
                    {
                        //  'map' sobre el array de párrafos
                        info.noticia.map((parrafo, index) => (
                            <p key={index} className="mb-8">
                                {
                                    //  'map' sobre los segmentos de texto
                                    parrafo.content.map((segmento, i) => (
                                        segmento.type === 'bold' ? (
                                            // Si es 'bold', usa <strong>
                                            <strong key={i}>{segmento.text}</strong>
                                        ) : (
                                            // Si es 'text', usa <span> 
                                            <span key={i}>{segmento.text}</span>
                                        )
                                    ))
                                }
                            </p>
                        ))
                    }
                </div>


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