const navBarStyles = {
  navBarContainer: "p-2 flex justify-between items-center relative",
  logo: "h-15 w-auto cursor-pointer hover:opacity-80 transition-all duration-500 px-6",
  hamburgerButton: "lg:hidden flex flex-col w-8 h-8 justify-center items-end space-y-1.5 z-50 px-5", 
  hamburgerLine: "block w-6 h-0.5 bg-[#2D2964] rounded transition-all duration-300",
  mobileMenu: "fixed top-0 right-0 h-full w-64 bg-[#EBEBF5] opacity-95 z-40 transform transition-transform duration-300 lg:hidden shadow-lg",
  mobileLinksContainer: "flex flex-col space-y-4 p-4 mt-16 text-center", 
  mobileLink: "text-lg hover:text-[#50509D] transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-[#DADAE8] border-b border-[#C4C4E0]",
};

export default navBarStyles;