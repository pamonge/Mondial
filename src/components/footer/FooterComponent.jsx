import React from 'react'
import { FormComponent } from './FormComponent'
import { SocialMediaComponent } from './SocialMediaComponent'
import footerCompStyles from '../../styles/footer/footerComponentStyles'

export const FooterComponent = () => {
  return (
    <div className={footerCompStyles.footContainer}>
      <div className={footerCompStyles.formSocMedCont}>
        <FormComponent />
      </div>
      <div className={footerCompStyles.formSocMedCont}>
        <SocialMediaComponent />
      </div>
    </div>
  )
}
