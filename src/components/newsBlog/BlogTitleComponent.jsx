import React from "react";
import appStyles from "../../styles/appStyles";
import servicesStyle from "../../styles/servicesComponentStyle";
export const BlogTitleComponent = () => {
    return (
        //titulo para todas las pag que requieran blog
        <div className={appStyles.div}>
            <h1 className={` ${servicesStyle.mainTitleColor} ${servicesStyle.mainTitle}`}>Todas las noticias del mundo <br />  inmobiliario </h1>
        </div>
    );
};