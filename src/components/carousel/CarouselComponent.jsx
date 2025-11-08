import React, { useState, useEffect } from 'react'
import { CardCarouselComponent } from './CardCarouselComponent';
import dataServices from '../../data/dataServices.js';
import carouselComponentStyles from '../../styles/carouselStyles/carouselComponentStyles.js';
import appStyles from '../../styles/appStyles.js';
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
            <h2 className={appStyles.mainTitle}>Espacios para vivir y disfrutar</h2>
            {/* Contenedor principal */}
            <div className={carouselComponentStyles.mainContainer}>

                <div className={carouselComponentStyles.overflowContainer}>
                    <div
                        className={carouselComponentStyles.card}
                        style={{
                            transform: `translateX(calc(1% - ${currentIndex} * (98% + 0.25rem)))`
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {cardsArray.map((data, index) => (
                            <div
                                key={index}
                                className={carouselComponentStyles.data}
                            >

                                <CardCarouselComponent
                                    info={data}
                                    onClick={() => goToSlide(index)}
                                />

                            </div>
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