const cardCarouselStyles = {
    cardContainer: 'h-full w-[85vw] max-w-[480px] mx-auto flex-shrink-0 cursor-pointer bg-white px-4 sm:px-6 py-4 sm:py-6 rounded-2xl shadow-sm hover:shadow-2xl hover:shadow-blue-400 transition-all duration-300 border border-gray-100 hover:border-blue-800', 
    imgContainer: 'rounded-2xl overflow-hidden mb-4 sm:mb-6 relative h-[35vh] min-h-[200px] max-h-[280px]',
    imgCard: "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
    spanCategory: 'absolute top-3 left-4 border border-blue-300 text-xs sm:text-sm rounded-xl px-3 sm:px-4 py-2 font-bold capitalize bg-white/95 text-blue-700 shadow-sm',
    textContainer: 'px-2 sm:px-0 flex flex-col gap-3 sm:gap-4',
    h3Styles: 'whitespace-normal uppercase italic text-center font-bold text-blue-900 leading-snug',
    textStyles: 'whitespace-normal text-justify text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4',
    linkComponentStyles: 'flex justify-center',
}

export default cardCarouselStyles;