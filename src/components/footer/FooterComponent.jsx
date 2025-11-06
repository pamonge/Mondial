import React from 'react'
import { FormComponent } from './FormComponent'
import { SocialMediaComponent } from './SocialMediaComponent'
import { MapComponent } from '../contact/MapComponent'
import footerCompStyles from '../../styles/footer/footerComponentStyles'
import iconMarc from '../../assets/icons/icon-marc.png'
import dataMondial from '../../data/dataMondial'
import appStyles from '../../styles/appStyles'

export const FooterComponent = () => {
  return (
    <div className={footerCompStyles.footContainer}>
      <div className='flex flex-col gap-5 min-lg:max-w-1/2 max-md:w-full'>
        <div className='flex flex-col gap-3'>
          <h3 className='text-3xl font-medium'>Contáctanos y te asesoramos</h3>
          <p className='satisfy-regular '>Descubre una nueva forma de hacer las cosas</p>
        </div>
        <div className='flex flex-col'>
          <FormComponent />
        </div>
      </div>

      <div className='flex flex-col gap-5 min-lg:max-w-1/2 max-md:w-full'>
        <div className='flex flex-col' >
            <h3 className='text-3xl font-medium' >Visítanos</h3>
            <div className='flex items-center gap-4'>
              <img className='w-10' src={iconMarc} alt="marquer" />
              <p>
                {dataMondial.address}
              </p>
            </div>
        </div>
        <div className='h-full flex flex-col gap-5'>
          <div className='bg-[#EBEBF5] h-2/3'>
            <MapComponent />
          </div >
          <div className='bg-[#EBEBF5] rounded-2xl overflow-auto '>
            <SocialMediaComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
