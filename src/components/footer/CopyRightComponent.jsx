import React from 'react'
import pem from '../../assets/logo/pem-webservice.webp'
import { LinkComponent } from '../navigation/LinkComponent'
import copyRightStyles from '../../styles/footer/CopyRightComponentStyles'


export const CopyRightComponent = () => {
  return (
    <div className={copyRightStyles.copyRightContainer}>
        {/* Desarrollador */}
        <div className={copyRightStyles.webDesignerContainer}>
            <img className={copyRightStyles.webDesignerImg} src={pem} alt="PEM web service" />
            <p className={copyRightStyles.webDesignerText} >Desarrollado por PEM - Web Service</p>
        </div>
        <div>
            <p>©2025 Mondial Inmobiliaria.  </p>
        </div>
        {/* Aviso legal | Politicas de Privacidad | Cookies */}
        <div className={copyRightStyles.linkContainer}>
            <LinkComponent src='/legal' desc='Aviso legal' style=''/>|
            <LinkComponent src='/privacy' desc='Politicas de Privacidad' style=''/>|
            <LinkComponent src='/cookies' desc='Cookies' style=''/>
        </div>
    </div>
  )
}
