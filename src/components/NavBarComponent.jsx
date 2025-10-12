import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuLinksComponent } from './MenuLinksComponent'
import logo from '../assets/logo/isotypeMondial.png'
import navBarStyles from '../styles/navBarComponentStyles'

export const NavBarComponent = () => {

  const [ isOpen, setIsOpen ] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    // <div className={`${navBarStyles.navBarContainer} `}>
    //   <div>
    //     <Link to='/' >
    //       <img className={navBarStyles.logo} src={logo} alt="Mondial Inmobiliaria" />
    //     </Link>
    //   </div>
    //   <MenuLinksComponent />
    //   <button 
    //     className={navBarStyles.hamburgerButton}
    //     onClick={toggleMenu}
    //     aria-label="Menú"
    //     aria-expanded={isOpen}
    //   >
    //     <span className={`${navBarStyles.hamburgerLine} ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
    //     <span className={`${navBarStyles.hamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
    //     <span className={`${navBarStyles.hamburgerLine} ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
    //   </button>

    //   <div className={`${navBarStyles.mobileMenuOverlay} ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeMenu}></div>

    //   <div className={`${navBarStyles.mobileMenu} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>   
    //     <MenuLinksComponent func={closeMenu} contStyles={navBarStyles.mobileLinksContainer} linkStyle={navBarStyles.mobileLink} />
    //   </div>

    // </div> 
        <div className={`${navBarStyles.navBarContainer} `}>
      <div>
        <Link to='/' >
          <img className={navBarStyles.logo} src={logo} alt="Mondial Inmobiliaria" />
        </Link>
      </div>
      
      <MenuLinksComponent />
      
      {/* Botón hamburguesa alineado a la derecha */}
      <button 
        className={navBarStyles.hamburgerButton}
        onClick={toggleMenu}
        aria-label="Menú"
        aria-expanded={isOpen}
      >
        <span className={`${navBarStyles.hamburgerLine} ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`${navBarStyles.hamburgerLine} ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`${navBarStyles.hamburgerLine} ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </button>

      {/* Menú móvil que se desliza desde la derecha */}
      <div className={`${navBarStyles.mobileMenu} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>   
        <MenuLinksComponent func={closeMenu} contStyles={navBarStyles.mobileLinksContainer} linkStyle={navBarStyles.mobileLink} />
      </div>

    </div> 
  )
}
