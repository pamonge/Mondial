import React from "react";
import { useParams } from "react-router-dom";
import { BlogTitleComponent } from "../components/newsBlog/BlogTitleComponent.jsx";
import dataBlog from "../data/dataBlog.js";
import detailStyle from "../styles/NewsStyles/DetailComponentStyle";
import NewsDetailComponents from "../components/newsBlog/NewsDetailComponent";
export const NewsDetailPage = () => {
    const { id } = useParams();
    const noticiaId = parseInt(id, 10);
    const noticiaEncontrada = dataBlog.find((noticia) => noticia.id === noticiaId);
    if (!noticiaEncontrada) {
        return (

            <div className="container mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-bold">Noticia no encontrada</h2>
                <p>El artículo que buscas no existe o fue movido.</p>

                <LinkComponent to="/news" desc="Volver al Blog" />
            </div>
        );
    }
    return (
        <div className={detailStyle.cardContainer}>
            <BlogTitleComponent />
            <NewsDetailComponents info={noticiaEncontrada} />
        </div>
    )
}
export default NewsDetailPage;