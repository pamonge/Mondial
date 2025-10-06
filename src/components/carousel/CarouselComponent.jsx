import React, { useState, useEffect } from 'react'
import { CardCarouselComponent } from './CardCarouselComponent';
import dataCarousel from '../../data/dataCarousel.js';

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
        <div className="relative">
            {/* Contenedor principal */}
            <div className="container mx-auto py-8 px-4">
                <div className="overflow-hidden">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ 
                            transform: `translateX(-${currentIndex * 100}%)` 
                        }}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {dataCarousel.map((data, index) => (
                            <div 
                                key={index} 
                                className="w-full flex-shrink-0 px-4 py-4"
                            >
                                <div className="max-w-md mx-auto">  {/* Centramos la card */}
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
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 border transition-all hover:scale-110 hidden md:block"
            >
                ‹
            </button>
            <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 border transition-all hover:scale-110 hidden md:block"
            >
                ›
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-3 pb-8">
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