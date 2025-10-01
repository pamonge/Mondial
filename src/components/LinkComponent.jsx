import React from 'react'
import { Link } from 'react-router-dom'

export const LinkComponent = ({ src, desc }) => {
  return (
    <div>
        <Link to={src} >{desc}</Link>
    </div>
  )
}
