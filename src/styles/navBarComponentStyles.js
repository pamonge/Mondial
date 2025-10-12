const navBarStyles = {
    navBarContainer: 'p-2 bg-blue-900 flex justify-between items-center text-white relative',
    logo: 'h-15 w-auto cursor-pointer hover:opacity-80 transition-all duration-500 rounded-4xl',
    hamburgerMenu: 'w-7 cursor-pointer transition-all ease-in-out duration-500 hover:scale-110',
    hamburgerButton: 'lg:hidden flex flex-col w-8 h-8 justify-center items-end space-y-1.5 z-500 px-5',
    hamburgerLine: 'block w-6 h-0.5 bg-white rounded transition-all duration-300',
    mobileMenu: 'fixed top-0 right-0 h-full w-64 bg-blue-900 opacity-90 z-50 transform transition-transform duration-300 lg:hidden',
    mobileLinksContainer: 'flex flex-col space-y-4 p-4 mt-16 text-center',
    mobileLink: 'text-lg hover:text-blue-200 transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-blue-800 border-b border-blue-700',
}

export default navBarStyles;