const carouselComponentStyles = {
    componentContainer: "relative",
    mainContainer: "container mx-auto py-8 px-4 ",
    overflowContainer: "overflow-hidden",
    card: "flex transition-transform duration-500 ease-in-out space-x-1",
    data: "w-[50vw]  flex-shrink-0 py-4",
    getCenter: "max-w-md mx-auto",
    leftButton: "absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10  transition-all hover:scale-110 hidden md:block",
    rightButton: "absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 hidden md:block",
    indicators: "flex justify-center mt-6 space-x-3 pb-8",
}

export default carouselComponentStyles;