import React from 'react'
import dataMondial from '../../data/dataMondial.js'
import imgSlogan from '../../assets/img/mondial-slogan.png'
import imgBG from '../../assets/logo/isologo.png'
import appStyles from '../../styles/appStyles.js'
import { LinkComponent } from '../navigation/LinkComponent.jsx'

export const MondialSlogan = () => {
  return (
    <div className='relative bg-white m-10 rounded-2xl'>

      {/* Imagen de fondo */}
      <img
        className='absolute bottom-20 right-20 z-0 max-w-2xs h-auto opacity-15'
        src={imgBG}
        alt="BG slogan"
      />

      {/* Contenido - SIN bg-white aquí */}
      <div className='relative z-10 h-full flex flex-col px-6'>

        <h2 className={`lg:w-7/12 lg:mx-auto ${appStyles.mainTitle} ${appStyles.mainTitleColor} `}>
          Una vivienda es solo estructura, pero un hogar es
          donde late el corazón.
        </h2>

        <div className='flex max-lg:flex-col px-5 py-6 gap-10 justify-center'>

          <div className='flex justify-center' >
            <img className='rounded-2xl max-w-lg max-md:w-full' src={imgSlogan} alt="image mondial slogan" />
          </div>

          <div className='flex flex-col justify-center items-center lg:max-w-md gap-3'>
            <p className='text-justify'>
              Con 25 años de experiencia en el sector inmobiliario, colocamos tu hogar y tus intereses en el epicentro de todo lo que hacemos.
              No vendemos casas, <strong>creamos oportunidades, construimos confianza y entregamos resultados reales</strong>. Gracias a nuestra exclusiva red de compradores cualificados, estrategias de marketing de alto impacto y un enfoque 100% personalizado, transformamos la venta de tu propiedad en una experiencia fluida, transparente y, sobre todo, exitosa. Porque en Mondial Inmobiliaria, <strong>lo que importa para ti... nos importa de verdad</strong>.
            </p>
            <div className='self-start py-8 '>
              <LinkComponent src='/us' desc='Más sobre nosotros' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
