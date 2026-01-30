// const carouselComponentStyles = {
//     componentContainer: "relative w-full",
//     mainContainer: "container mx-auto py-8 px-4",
//     overflowContainer: "overflow-hidden",
//     card: "flex",
//     data: "min-w-full flex-shrink-0 px-2 md:px-4",
//     getCenter: "max-w-md mx-auto",
//     leftButton: "absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 text-2xl md:text-4xl font-bold text-gray-800",
//     rightButton: "absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 md:p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 text-2xl md:text-4xl font-bold text-gray-800",
//     indicators: "flex justify-center mt-6 space-x-2 pb-8 flex-wrap gap-2",
// }

// export default carouselComponentStyles;

const carouselComponentStyles = {
    componentContainer: "relative",
    mainContainer: "container mx-auto py-8 px-4",
    overflowContainer: "overflow-hidden",
    card: "flex transition-transform duration-500 ease-in-out space-x-1",
    data: "w-[55vw] flex-shrink-0 py-4",
    getCenter: "max-w-md mx-auto",
    leftButton: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 text-3xl font-bold text-gray-700",
    rightButton: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 text-3xl font-bold text-gray-700",
    indicators: "flex justify-center mt-6 space-x-3 pb-8",
}

export default carouselComponentStyles;