import React, { useState, useEffect } from 'react'
import { CardCarouselComponent } from './CardCarouselComponent';
import dataServices from '../../data/dataServices.js';
import carouselComponentStyles from '../../styles/carouselStyles/carouselComponentStyles.js';

//carousel de detalle de propiedades 
export const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const cardsArray = dataServices.buy.cards;
    
    // Crear array plano de todas las imágenes
    const allImages = [];
    cardsArray.forEach((card) => {
        if (card.imgArray && card.imgArray.length > 0) {
            card.imgArray.forEach((img) => {
                allImages.push({ ...card, img });
            });
        }
    });

    const totalImages = allImages.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalImages - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalImages - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleImageClick = (imageData) => {
        setSelectedImage(imageData);
        setIsPaused(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsPaused(false);
    };

    // Auto-play
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, isPaused, totalImages]);

    // Cerrar modal con tecla ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && selectedImage) {
                closeModal();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [selectedImage]);

    return (
        <>
            <div className={carouselComponentStyles.componentContainer}>
                {/* Contenedor principal */}
                <div className={carouselComponentStyles.mainContainer}>
                    <div className={carouselComponentStyles.overflowContainer}>
                        <div
                            className={carouselComponentStyles.card}
                            style={{
                                transform: `translateX(calc(50% - ${currentIndex} * (55vw + 0.25rem) - 27.5vw))`
                            }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {allImages.map((data, index) => (
                                <div
                                    key={index}
                                    className={carouselComponentStyles.data}
                                >
                                    <CardCarouselComponent
                                        info={data}
                                        onClick={() => handleImageClick(data)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Botones de navegación */}
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
                    {allImages.map((_, index) => (
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

            {/* Modal para imagen ampliada */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 transition-colors z-10"
                    >
                        ×
                    </button>
                    <img
                        src={selectedImage.img}
                        alt={selectedImage.location}
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                        <h3 className="text-2xl font-bold mb-2">{selectedImage.location}</h3>
                        <p className="text-lg">{selectedImage.price}</p>
                    </div>
                </div>
            )}
        </>
    );
}