import React from 'react'
import { Link } from 'react-router-dom'
import menuLinksStyles from '../styles/menuLinksComponentStyles'

export const MenuLinksComponent = ({ func = '', contStyles = menuLinksStyles.linksContainer, linkStyle = menuLinksStyles.link}) => {

  const menuItems = [
    {to: '/', label: 'Inicio'},
    {to: '/us', label: 'Nosotros'},
    {to: '/sell', label: 'Vender'},
    {to: '/buy', label: 'Comprar'},
    {to: '/rent', label: 'Alquilar'},
    {to: '/contact', label: 'Contacto'},
  ];

  return (
    <nav className={contStyles}>    
      {
        menuItems.map((item) => (
          <Link 
            key={item.label}
            to={item.to}
            className={linkStyle}
            onClick={func}
          >
            {item.label}
          </Link>
        ))
      }
    </nav>
  )
}
