import React from "react";
import { useParams } from "react-router-dom";
import { BlogTitleComponent } from "../components/newsBlog/BlogTitleComponent.jsx";
import dataBlog from "../data/dataBlog.js";
import detailStyle from "../styles/NewsStyles/DetailComponentStyle";
import NewsDetailComponents from "../components/newsBlog/NewsDetailComponent";
//BUSQUEDA DE NOTICIA POR ID DE RUTA Y RENDERIZADO DE DETALLES
export const NewsDetailPage = () => {
    // Obtener el ID de la noticia desde los parámetros de la URL
    const { id } = useParams();
    // Convertir el ID a un número
    const noticiaId = parseInt(id, 10);
    // Buscar la noticia correspondiente de data blog  dependiendo el id obtenido or url
    const noticiaEncontrada = dataBlog.find((noticia) => noticia.id === noticiaId);
    //si no se encuentra la noticia mostrar mensaje de no encontrado
    if (!noticiaEncontrada) {
        return (

            <div className={detailStyle.notFoundContainer}>
                <h2 className={detailStyle.notFoundTitle}>Noticia no encontrada</h2>
                <p>El artículo que buscas no existe o fue movido.</p>

                <LinkComponent to="/news" desc="Volver al Blog" />
            </div>
        );
    }
    return (
        //si se encuentra la noticia mostrar detalles de la noticia
        <div>


            <NewsDetailComponents info={noticiaEncontrada} />
        </div>
    )
}
export default NewsDetailPage;