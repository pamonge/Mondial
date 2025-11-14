import React, { useRef, useState, useEffect } from "react";
import googleReviews from "../../assets/review/reviews.png";
import review0 from '../../assets/review/review0.png'
import review1 from '../../assets/review/review1.png'
import review2 from '../../assets/review/review2.png'
import review3 from '../../assets/review/review3.png'
import review4 from '../../assets/review/review4.png'
import review5 from '../../assets/review/review5.png'

export const GoogleCarouselComponent = () => {
  // Array de imágenes a mostrar en el carrusel
  const images = [
    review0,
    review1,
    review2,
    review3,
    review4,
    review5,
  ];

  const trackRef = useRef(null);

  // Para controlar pausa al presionar click
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Velocidad del movimiento automático
  const speed = 0.6;

  useEffect(() => {
    let animationFrame;

    const move = () => {
      if (!isDragging && trackRef.current) {
        trackRef.current.scrollLeft += speed;

        // Reinicia el carrusel cuando llega al final
        if (
          trackRef.current.scrollLeft >=
          trackRef.current.scrollWidth / 2
        ) {
          trackRef.current.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(move);
    };

    move();
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  // Cuando se inicia el drag con click sostenido
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  // Mientras arrastra con el mouse apretado
  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = x - startX; // desplazamiento
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Se suelta el click → vuelve a moverse solo
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Mouse sale del carrusel mientras arrastra
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="flex gap-4 w-screen ">
      {/* Encabezado: imagen de Google Reviews */}
      <div className="flex justify-center w-1/3 " >
        <img
          src={googleReviews}
          alt="Google reviews"
          className="h-45 object-contain"
        />
      </div>

      {/* Carrusel */}
      <div
        className=" max-w-2/3 overflow-hidden select-none"
      >
        <div
          ref={trackRef}
          className="flex gap-4 overflow-hidden cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          {/* Se duplican las imágenes para generar loop infinito */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="shrink-0 h-45 w-71 bg-white rounded-xl shadow-md overflow-hidden flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Review ${index}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};