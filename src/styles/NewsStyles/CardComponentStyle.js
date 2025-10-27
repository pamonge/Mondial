//Tarjeta de noticias
const cardStyle = {
   cardContainer: 'flex flex-col rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 bg-white',
    
   imgContainer: 'w-full h-48 overflow-hidden',
   
   imgCard: 'w-full h-full object-cover',
    
   // Contenedor del contenido (título + descripción)
   contentContainer: 'p-6 flex flex-col flex-grow',
   
   // Título - con line-height ajustado para evitar saltos de línea
   
   h3Styles: 'font-poppins font-medium text-base mb-3 leading-tight  ',
   
   textContainer: 'flex-grow mb-4',
   
   
   pStyles: 'font-poppins font-normal text-sm line-clamp-2 leading-tight',
   
   
   linkComponentStyles: 'mt-auto ',
};

export default cardStyle;