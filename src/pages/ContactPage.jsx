import React from 'react'

import appStyles from '../styles/appStyles'
import { ContactComponent } from '../components/contact/ContactComponent'

export const ContactPage = () => {
  return (
    <div className={appStyles.div}>
      <h1 className={`${appStyles.mainTitle} ${appStyles.mainTitleColor}`}>Contáctanos y te asesoramos</h1>
      <ContactComponent />
    </div>
  )
}
