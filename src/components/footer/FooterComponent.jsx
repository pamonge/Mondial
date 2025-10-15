import React from 'react'
import { FormComponent } from './FormComponent'
import { SocialMediaComponent } from './SocialMediaComponent'

export const FooterComponent = () => {
  return (
    <div className='flex justify-center max-md:flex-col-reverse p-5 gap-5 lg:justify-around'>
      <div className='flex justify-center'>
        <FormComponent />
      </div>
      <div className='flex justify-center'>
        <SocialMediaComponent />
      </div>
    </div>
  )
}
