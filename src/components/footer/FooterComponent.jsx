import React from 'react'
import { FormComponent } from './FormComponent'
import { SocialMediaComponent } from './SocialMediaComponent'
import { MapComponent } from '../contact/MapComponent'
import footerCompStyles from '../../styles/footer/footerComponentStyles'

export const FooterComponent = () => {
  return (
    <div className={footerCompStyles.footContainer}>
      <div className='flex flex-col gap-8 max-w-1/2'>
        <FormComponent />
      </div>
      <div className='flex flex-col gap-5 max-w-1/2'>
        <div className='bg-white'>
          <MapComponent />
        </div>
        <div className='bg-white'>
          <SocialMediaComponent />
        </div>
      </div>
    </div>
  )
}
