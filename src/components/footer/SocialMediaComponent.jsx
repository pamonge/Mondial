import React from 'react'
import socialNets from '../../data/dataContact'
import logo from '../../assets/logo/imagotipo.png'
import dataMondial from '../../data/dataMondial'
import iconMail from '../../assets/icons/icon-mail.png'
import iconPhone from '../../assets/icons/icon-phone.png'
import appStyles from '../../styles/appStyles'

export const SocialMediaComponent = () => {

  const socialNetwork = socialNets;

  return (
    <div className='flex text-[#141230] gap-10 min-h-[40vh] items-center p-8'>
      <div className='w-1/2 min-h-[30vh] justify-around'>
        <div>
          <img src={logo} alt="logo" />
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
      <div className='flex flex-col justify-evenly w-1/2 h-full min-h-[30vh]' >
        <a href={`tel:${dataMondial.phone}`} className='flex items-center gap-3'>
          <img className='w-10' src={iconPhone} alt="Celular" /> {dataMondial.phone}
        </a>
        <a href={`mailto:${dataMondial.email}`} className='flex items-center gap-3 ' >
          <img className='w-10' src={iconMail} alt="Correo" /> {dataMondial.email}
        </a>
      </div>
   
    </div>
  )
}
