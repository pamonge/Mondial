import React from 'react'
import { FormComponent } from './FormComponent'
import { SocialMediaComponent } from './SocialMediaComponent'

export const FooterComponent = () => {
  return (
    <div className='flex max-md:flex-col-reverse p-5 gap-5'>
      <div >
        <FormComponent />
      </div>
      <div>
        <SocialMediaComponent />
      </div>
    </div>
  )
}
