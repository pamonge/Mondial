import React from 'react'
import pem from '../assets/logo/pem-webservice.webp'
import { LinkComponent } from './LinkComponent'
import copyRightStyles from '../styles/CopyRightComponentStyles'

export const CopyRightComponent = () => {
  return (
    <div className={copyRightStyles.copyRightContainer}>
        <div className={copyRightStyles.webDesignerContainer}>
            <img className={copyRightStyles.webDesignerImg} src={pem} alt="PEM web service" />
            <p className={copyRightStyles.webDesignerText} >Desarrollado por PEM - Web Service</p>
        </div>
        <div>
            <p>©2025 Mondial Inmobiliaria.  </p>
        </div>
        <div className={copyRightStyles.linkContainer}>
            <LinkComponent src='/legal' desc='Aviso legal' />|
            <LinkComponent src='/privacy' desc='Politicas de Privacidad' />|
            <LinkComponent src='/cookies' desc='Cookies' />
        </div>
    </div>
  )
}
