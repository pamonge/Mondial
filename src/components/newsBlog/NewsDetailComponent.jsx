import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'

const NewsDetailComponents = ({ info }) => {
    return (
        <div className={detailStyle.container}>


            <h1 className={detailStyle.title}>
                {info.title}
            </h1>


            <div className={detailStyle.meta}>
                <span>Publicado por: <strong>{info.Autor || 'Mondial'}</strong></span>
                <span className="mx-2">|</span>
                <span>Fecha: <strong>{info.date}</strong></span>
            </div>


            <img
                src={`/blogNews/image-news${info.id}.jpg`}
                alt={info.title}
                className={detailStyle.image}
            />


            <div className={detailStyle.content}>

                <p>{info.noticia}</p>

                {/* Si 'info.noticia' tuviera saltos de línea, podrías hacer esto:
                {info.noticia.split('\n').map((parrafo, index) => (
                    <p key={index} className="mb-4">{parrafo}</p>
                ))}
                */}
            </div>

        </div>
    )
}
export default NewsDetailComponents;

