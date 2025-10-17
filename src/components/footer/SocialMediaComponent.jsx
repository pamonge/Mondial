import React from 'react'
import socialNets from '../../data/dataContact'
import dataMondial from '../../data/dataMondial'
import iconMail from '../../assets/icons/icon-mail.png'
import iconPhone from '../../assets/icons/icon-phone.png'
import appStyles from '../../styles/appStyles'

export const SocialMediaComponent = () => {

  const socialNetwork = socialNets;

  return (
    <div className='flex flex-col max-w-96 gap-5'>
      <h3 className={appStyles.smTitle} >NUESTROS <strong>MEDIOS DE CONTACTO</strong></h3>
      <div className='flex flex-col justify-center items-center pb-5' >
        <a href={`tel:${dataMondial.phone}`} className='flex items-center gap-3'>
          <img className='w-10' src={iconPhone} alt="Celular" /> {dataMondial.phone}
        </a>
        <a href={`mailto:${dataMondial.email}`} className='flex items-center gap-3 ' >
          <img className='w-10' src={iconMail} alt="Correo" /> {dataMondial.email}
        </a>
      </div>
   
      <h3 className={appStyles.smTitle}>VISITE NUESTRAS <strong>REDES SOCIALES</strong></h3>
      <div className='flex justify-between py-3.5' >
          {
            socialNetwork.map((net) => (
              <a href={net.to} key={net.key} >
                <img className='w-10' src={net.img} key={net.key} alt={`${net.key}`} />
              </a>
            ))
          }
      </div>

      <p className='text-justify' >Contacta completando el formulario y descubre una forma distinta de hacer las cosas.</p>
    </div>
  )
}
