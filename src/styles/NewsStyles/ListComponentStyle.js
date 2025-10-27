
//lista de noticias
const colorPrincipal = '#2D2964';

export const ListStyle={
 sectionContainer: 'w-full py-12 lg:py-16 ', 

    //Título principal ("Somos especialistas...")
    mainTitle: 'text-lg italic text-center py-4  font-bold text-center   lg:text-3xl',
    mainTitleColor: `text-[${colorPrincipal}]`, // Color personalizado
    
    title3:`p-6 text-center flex-grow text-[${colorPrincipal}]lg:text-2xl flex flex-col justify-center`,
    // Contenedor de la "caja" blanca que envuelve las 3 tarjetas
  gridContainer: 'container mx-auto p-6 lg:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8',   
}
export default ListStyle;