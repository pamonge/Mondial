
const colorPrincipal = '#2D2964';
const colorSecundario = '#141230';

export const servicesStyle = {
    // Contenedor de toda la sección
    sectionContainer: 'w-full  py-12 lg:py-16 ', 

    //Título principal ("Somos especialistas...")
    mainTitle: 'text-lg  text-center py-4  font-bolt text-center   lg:text-3xl ',
    mainTitleColor: `text-[${colorPrincipal}]`, // Color personalizado
    
    title3:`p-6 text-center flex-grow text-[${colorPrincipal}]lg:text-2xl flex flex-col justify-center`,
    // Contenedor de la "caja" blanca que envuelve las 3 tarjetas
    gridContainer: 'container mx-auto max-w-7xl  p-6 lg:p-10  grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8',
    
    //  Estilos para CADA tarjeta
    cardContainer: 'flex flex-col rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:shadow-xl hover:scale-95',
    
    
    imgContainer: 'w-full h-84 overflow-hidden',
    
   
    imgCard: 'w-full h-full object-cover',

    // Contenedor del texto debajo de la imagen
    textContainer: `p-6 text-center flex-grow text-[${colorSecundario}]lg:text-sm flex flex-col justify-center `, 

   
    h3Styles: `text-lg font-medium text-[${colorPrincipal}]`, 

    h3SylesBold: 'font-bold',
    pStyles: 'text-base text-gray-600 mt-1', // Texto normal
};

export default servicesStyle;