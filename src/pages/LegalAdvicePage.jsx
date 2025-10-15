import React from 'react'
import legalAdvice from '../data/dataLegalAdvice'
import appStyles from '../styles/appStyles'

// export const LegalAdvicePage = () => {
//   return (
//     <div className='flex flex-col gap-3 text-justify p-5'>
//       <h2 className={appStyles.title} >AVISO <strong>LEGAL</strong></h2>
//       <p className='flex text-justify p-5 min-md:max-w-3xl'>
//         Por favor, lea todos los apartados del presente Aviso Legal antes de utilizar este sitio web.
// Las siguientes condiciones son vinculantes para cualquier usuario del mismo. En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web. La razón de este texto es explicarle de manera detallada las funcionalidades de esta web y aportarle aquella información relacionada con el titular de la web y la finalidad de los contenidos incluidos en ella.
//       </p>
//       {
//         legalAdvice.map(reg => (
//           <div key={reg.titulo} className='flex flex-col gap-3'>
//             <h3 className='text-center p-3 text-blue-900 font-bold' >{reg.titulo}</h3>
//             <p className='flex text-justify p-5 min-md:max-w-3xl' >{reg.texto}</p>
//           </div>
          
//         ))
//       }
//     </div>
//   )
// }

export const LegalAdvicePage = () => {
  return (
    <div className='flex flex-col gap-6 text-justify p-5 max-w-4xl mx-auto'>
      <h2 className={appStyles.title}>AVISO <strong>LEGAL</strong></h2>
      
      <div className='bg-white rounded-lg shadow-md p-6'>
        <p className='mb-6 leading-relaxed'>
          Por favor, lea todos los apartados del presente Aviso Legal antes de utilizar este sitio web...
        </p>

        {legalAdvice.map(reg => (
          <div key={reg.titulo} className='mb-8 border-b border-gray-200 pb-6 last:border-b-0'>
            <h3 className='text-xl font-bold text-blue-900 mb-4 text-center'>
              {reg.titulo}
            </h3>
            
            {reg.contenido.map((item, index) => (
              <div key={index}>
                {item.tipo === 'parrafo' && (
                  <p className="mb-4 leading-7">{item.texto}</p>
                )}
                
                {item.tipo === 'lista' && (
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {item.items.map((listItem, idx) => (
                      <li key={idx} className="leading-6">{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}