import React from 'react'
import { NavLink } from 'react-router-dom'
import menuLinks from '../../data/data.links'
import menuLinksStyles from '../../styles/menuLinksComponentStyles'

export const MenuLinksComponent = ({ func = '', contStyles = menuLinksStyles.linksContainer, linkStyle = menuLinksStyles.link}) => {

  const menuItems = menuLinks;

  return (
    <nav className={contStyles}>    
      <NavLink to='/' >Inicio</NavLink>
      <NavLink to='/us' >Nosotros</NavLink>
      <NavLink to='/news' >Blog</NavLink>
      <NavLink to='/contact'>Contacto</NavLink>
    </nav>
  )
}
