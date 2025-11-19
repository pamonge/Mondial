import React, { useState, useEffect } from 'react'
import { CardCarouselComponent } from './CardCarouselComponent';
import dataServices from '../../data/dataServices.js';
import carouselComponentStyles from '../../styles/carouselStyles/carouselComponentStyles.js';

//carousel de detalle de propiedades 
export const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const cardsArray = dataServices.buy.cards
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === cardsArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    /*  const prevSlide = () => {
         setCurrentIndex((prevIndex) =>
             prevIndex === 0 ? cardsArray.length - 1 : prevIndex - 1
         );
     };
  */
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 10000);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused]);

    return (

        <div className={carouselComponentStyles.componentContainer}>

            {/* Contenedor principal */}
            <div className={carouselComponentStyles.mainContainer}>

                <div className={carouselComponentStyles.overflowContainer}>
                    <div
                        className={carouselComponentStyles.card}
                        style={{
                            transform: `translateX(calc(1% - ${currentIndex} * (40% + 0.25rem)))`
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {cardsArray.map((data, index) => (
                            data.imgArray && data.imgArray.length > 0 ? (
                                data.imgArray.map((imgSrc, imgIndex) => (
                                    <div
                                        key={`${index}-${imgIndex}`}
                                        className={carouselComponentStyles.data}
                                    >
                                        <CardCarouselComponent
                                            key={`${data.id}-${imgIndex}`}
                                            info={{ ...data, img: imgSrc }}
                                            onClick={() => goToSlide(index)}
                                        />
                                    </div>
                                ))
                            ) : null
                        ))}
                    </div>
                </div>
            </div>

            {/* Botones de navegación - Solo en desktop */}
            {/*  <button
                onClick={prevSlide}
                className={carouselComponentStyles.leftButton}
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className={carouselComponentStyles.rightButton}
            >
                ›
            </button> */}

            {/* Indicadores (los puntos debajo de las imagenes) */}
            <div className={carouselComponentStyles.indicators}>
                {cardsArray.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div >
    );
}