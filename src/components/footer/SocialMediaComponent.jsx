import socialNets from '../../data/dataContact'
import logo from '../../assets/logo/imagotipo.png'
import dataMondial from '../../data/dataMondial'
import iconMail from '../../assets/icons/icon-mail.png'
import iconPhone from '../../assets/icons/icon-phone.png'

export const SocialMediaComponent = () => {

  const socialNetwork = socialNets;

  return (
    <div className='flex text-[#141230] gap-10 max-h-11/12 items-center p-8 max-md:flex-col'>
      <div className='min-md:w-1/2 max-sm:w-11/12 max-sm:pt-3 h-auto justify-around'>
        <div className='max-h-1/2'>
          <img className='max-h-1/3 min-xl:pt-8 min-xl:px-10' src={logo} alt="logo" />
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
      <div className='flex flex-col justify-center md:w-1/2 h-full md:min-h-[30vh]'>
        <a href={`tel:${dataMondial.phone}`} className='flex items-center gap-3 md:text-base lg:text-lg'>
          <img className='w-7 md:w-8 lg:w-10' src={iconPhone} alt="Celular" /> 
          <span className='break-all'>{dataMondial.phone}</span>
        </a>
        
        <a href={`mailto:${dataMondial.email}`} className='flex items-center gap-3 md:text-base lg:text-lg'>
          <img className='w-7 md:w-8 lg:w-10' src={iconMail} alt="Correo" /> 
          <span className='break-all md:break-words'>{dataMondial.email}</span>
        </a>
      </div>
    </div>
  )
}
