import React from "react";
import { LinkComponent } from "../navigation/LinkComponent";
import cardStyle from "../../styles/NewsStyles/CardComponentStyle";

export const CardComponent = ({ info, onClick }) => {
    return (
        <div className={cardStyle.cardContainer} onClick={onClick}>
            <div className={cardStyle.imgContainer}>
                <img
                    src={`/blogNews/image-news${info.id}.jpg`}
                    alt={info.title}
                    className={cardStyle.imgCard}
                />
            </div>

            <div className={cardStyle.textContainer}>
                <h3 className={cardStyle.h3Styles}>
                    {info.title}
                </h3>
                <div className={cardStyle.linkComponentStyles}>
                    <LinkComponent src={info.linkData} desc='Leer más...' />
                </div>
            </div>

        </div>
    );
}