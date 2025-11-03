import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'
import { Link } from 'react-router-dom'

const NewsDetailComponents = ({ info }) => {
    return (
        <div className={detailStyle.container}>
            <Link to="/news" className={detailStyle.backLink}>&lt; Volver</Link>
            <h1 className={detailStyle.title}>
                {info.title}
            </h1>

            <div className={detailStyle.containerCreatorNews}>
                <span className={detailStyle.meta}>Autor: {info.Autor || 'Mondial'}</span>
                <span className={detailStyle.meta}>Fecha: {info.date}</span>
            </div>

            <div className={detailStyle.content}>
                <img
                    src={`/blogNews/${info.img}`}
                    alt={info.title}
                    className={detailStyle.image}
                />
                <div className={detailStyle.textBlock}>
                    {
                        info.noticia.map((parrafo, index) => (
                            <p key={index} >
                                {
                                    parrafo.content.map((segmento, i) => {
                                        switch (segmento.type) {
                                            case 'text':
                                                return <span key={i} className={detailStyle.text}>{segmento.text}</span>;
                                            case 'subTitle':
                                                return <h2 key={i} className={detailStyle.subTitle}>{segmento.text}</h2>;
                                            case 'subTitle2':
                                                return <h3 key={i} className={detailStyle.subTitle2}>{segmento.text}</h3>;
                                            case 'bold':
                                                return <span key={i} className={detailStyle.bold}>{segmento.text}</span>;
                                            default:
                                                return null;
                                        }
                                    })
                                }
                            </p>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default NewsDetailComponents;