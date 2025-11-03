import React from 'react'
import socialNets from '../../data/dataContact'
import logo from '../../assets/logo/imagotipo.png'
import dataMondial from '../../data/dataMondial'
import iconMail from '../../assets/icons/icon-mail.png'
import iconPhone from '../../assets/icons/icon-phone.png'
import iconMarc from '../../assets/icons/icon-marc.png'
import appStyles from '../../styles/appStyles'

export const SocialMediaComponent = () => {

  const socialNetwork = socialNets;

  return (
    <div className='flex text-[#141230] gap-10 max-h-11/12 items-center p-8 max-sm:flex-col'>
      <div className='min-md:w-1/2 max-sm:w-11/12 max-sm:pt-3 h-auto justify-around'>
        <div className='max-h-1/2'>
          <img className='h-1/2' src={logo} alt="logo" />
        </div>
        {/* redes sociales */}
        <div className='flex justify-between py-3.5' >
            {
              socialNetwork.map((net) => (
                <a href={net.to} key={net.key} >
                  <img className='w-10' src={net.img} key={net.key} alt={`${net.key}`} />
                </a>
              ))
            }
        </div>
      </div>
      {/* Botones de tel y mail */}
      {/* <div className='flex flex-col justify-evenly min-md:w-1/2 h-full min-md:min-h-[30vh]' >
        <a href={`tel:${dataMondial.phone}`} className='flex items-center gap-3'>
          <img className='w-10' src={iconPhone} alt="Celular" /> {dataMondial.phone}
        </a>
        <a href={`mailto:${dataMondial.email}`} className='flex items-center gap-3 ' >
          <img className='min-md:w-10 max-sm:w-7 max-md:text-base' src={iconMail} alt="Correo" /> {dataMondial.email}
        </a>
      </div> */}
      <div className='flex flex-col justify-evenly md:w-1/2 h-full md:min-h-[30vh]'>
        <a href={`tel:${dataMondial.phone}`} className='flex items-center gap-3 text-sm md:text-base lg:text-lg'>
          <img className='w-7 md:w-8 lg:w-10' src={iconPhone} alt="Celular" /> 
          <span className='break-all'>{dataMondial.phone}</span>
        </a>
        
        <a href={`mailto:${dataMondial.email}`} className='flex items-center gap-3 text-sm md:text-base lg:text-lg'>
          <img className='w-7 md:w-8 lg:w-10' src={iconMail} alt="Correo" /> 
          <span className='break-all md:break-words'>{dataMondial.email}</span>
        </a>
      </div>
    </div>
  )
}
