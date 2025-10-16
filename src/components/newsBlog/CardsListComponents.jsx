import React from "react";
import dataBlog from "../../data/dataBlog";
import { CardComponent } from "./CardComponent";

export const CardListComponents = () => {
    const newsOrdenadas = [...dataBlog].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    });

    return (
        <div className="w-full bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto px-4">
                {newsOrdenadas.map((noticia) => (
                    <CardComponent
                        key={noticia.id}
                        info={noticia}
                    />
                ))}
            </div>
        </div>
    );
};
