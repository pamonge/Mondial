import React from "react";
import cardStyle from "../../styles/NewsStyles/CardComponentStyle";
import { LinkComponent } from "../navigation/LinkComponent";

//Tarjeta individual de noticia para la lista de noticias
export const CardComponent = ({ info, onClick }) => {
    const getPreviewNews = (noticiaArray) => {
        try {
            //solo guarda el primer parrafo
            const firstParagraph = noticiaArray[0];

            return firstParagraph.content;

        } catch (error) {
            // Si algo falla (ej: noticia está vacío), mostramos un texto por defecto.
            console.error("Error al generar vista previa de noticia:", error);
            return "Haz clic en 'Leer más' para ver el contenido.";
        }
    }

    // Llamamos a la función para obtener el texto
    const previewText = getPreviewNews(info.noticia);
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
                        {previewText.map((segmento, i) => {
                            if (segmento.type === 'bold') {
                                return <strong key={i}>{segmento.text}</strong>;
                            }
                            return <span key={i}>{segmento.text}</span>;
                        })
                        }

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