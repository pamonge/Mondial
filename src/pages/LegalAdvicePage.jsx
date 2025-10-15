import React from 'react'
import legalAdvice from '../data/dataLegalAdvice'
import appStyles from '../styles/appStyles'

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