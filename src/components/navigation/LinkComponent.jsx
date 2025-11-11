import React from 'react'
import { Link } from 'react-router-dom'
import linkStyles from '../../styles/linkComponentStyles'

// PARAMETROS QUE RECIVE
// src = link de destino 
// desc = Es la descripción del boton
// style = estilos de ser necesario
export const LinkComponent = ({ src, desc, state = null, style = linkStyles.baseStyles }) => {
  return (
    <div className={style}>
      <Link to={src} state={state} >
        {desc}
      </Link>
    </div>
  )
}
