import React from "react";
import cardStyle from "../../styles/NewsStyles/CardComponentStyle";
import { LinkComponent } from "../navigation/LinkComponent";

//Tarjeta individual de noticia para la lista de noticias
export const CardComponent = ({ info, onClick }) => {
    return (
        <div className={cardStyle.cardContainer} onClick={onClick}>
            <div className={cardStyle.imgContainer}>
                <img
                    src={`/blogNews/${info.img}`}
                    alt={info.title}
                    className={cardStyle.imgCard}
                />
            </div>

            <div className={cardStyle.contentContainer}>
                {/* Título */}
                <h3
                    className={cardStyle.h3Styles}
                    style={{
                        color: '#2D2964',
                        letterSpacing: '0.02em',
                        lineHeight: '1.2'
                    }}
                >
                    {info.title}
                </h3>

                {/* Descripción */}
                <div className={cardStyle.textContainer}>
                    <p
                        className={cardStyle.pStyles}
                        style={{
                            color: '#141230',
                            letterSpacing: '0em',
                            lineHeight: '1.4'
                        }}
                    >
                        {info.descripcion}
                    </p>
                </div>

                {/* Link */}
                <div className={cardStyle.linkComponentStyles}>
                    <LinkComponent src={`/news/${info.id}`} desc='Leer más' />
                </div>
            </div>
        </div>
    );
}