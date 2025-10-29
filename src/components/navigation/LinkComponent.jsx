import React from 'react'
import { Link } from 'react-router-dom'
import linkStyles from '../../styles/linkComponentStyles'

export const LinkComponent = ({ src, desc, style = linkStyles.baseStyles }) => {
  return (
    <div className={style}>
      <Link to={src} >{desc}</Link>
    </div>
  )
}
