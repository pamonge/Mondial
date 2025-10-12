import React from 'react'
import { Link } from 'react-router-dom'
import menuLinks from '../data/data.links'
import menuLinksStyles from '../styles/menuLinksComponentStyles'

export const MenuLinksComponent = ({ func = '', contStyles = menuLinksStyles.linksContainer, linkStyle = menuLinksStyles.link}) => {

  const menuItems = menuLinks;

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
