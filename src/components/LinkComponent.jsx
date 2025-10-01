import React from 'react'
import { Link } from 'react-router-dom'

export const LinkComponent = ({ src, desc, style = '' }) => {
  return (
    <div className={style} >
        <Link to={src} >{desc}</Link>
    </div>
  )
}
