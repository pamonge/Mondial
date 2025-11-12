const cardCarouselStyles = {
    cardContainer: `
                h-full
                w-[98%] 
                flex-shrink-0
                cursor-pointer
                rounded-2xl   `, 
                
    imgContainer: `
        rounded-2xl 
        overflow-hidden 
        mb-4 sm:mb-6 
        relative 
        aspect-square
        h-auto
        lg:h-[500px] 
        lg:aspect-auto
    `,
    imgCard: "w-full h-full object-cover transition-transform duration-500 hover:scale-110",
    spanCategory: `absolute top-3 left-4 border border-blue-300 text-xs sm:text-sm rounded-xl px-3 sm:px-4 py-2 font-bold capitalize bg-white/95 text-blue-700 shadow-sm`,
    textContainer: `px-2 sm:px-0 flex flex-col gap-3 sm:gap-4`,
    h3Styles: `whitespace-normal uppercase italic text-center font-bold text-blue-900 leading-snug`,
    textStyles: `whitespace-normal text-justify text-gray-600 text-sm sm:text-base leading-relaxed line-clamp-4`,
    linkComponentStyles: `flex justify-center`,
    bottomGradient: `absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10`,
    hoverOverlay: `
        absolute inset-0 
         bg-gradient-to-t from-[#2D2964]/50 to-transparent
         opacity-0 group-hover:opacity-100 
        transition-opacity duration-300
        z-20
`,
    centerText: `
      absolute inset-0 flex items-center justify-center 
      opacity-0 group-hover:opacity-100 
      transition-opacity duration-300
      text-white text-3xl font-medium
      z-30
    `
}

export default cardCarouselStyles;