import React, { useState, useEffect } from 'react'
import { CardCarouselComponent } from './CardCarouselComponent';
import dataCarousel from '../../data/dataCarousel.js';
import carouselComponentStyles from '../../styles/carouselStyles/carouselComponentStyles.js';

export const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === dataCarousel.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? dataCarousel.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-play
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

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
                            transform: `translateX(-${currentIndex * 100}%)` 
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {dataCarousel.map((data, index) => (
                            <div 
                                key={index} 
                                className={carouselComponentStyles.data}
                            >
                                <div className={carouselComponentStyles.getCenter}>  {/* Centramos la card */}
                                    <CardCarouselComponent 
                                        info={data} 
                                        onClick={() => goToSlide(index)} 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Botones de navegación - Solo en desktop */}
            <button 
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
            </button>

            {/* Indicadores */}
            <div className={carouselComponentStyles.indicators}>
                {dataCarousel.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                            index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}