import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'

export const DescriptionDetailCardComponent = ({ data }) => {

  if (!data || !Array.isArray(data)) return null;

  return (
    <div className="bg-white rounded-2xl shadow-md mt-2 p-6">
      <p className='font-semibold text-xl mb-4'>Descripción</p>

      <div className={detailStyle.textBlock}>


        {data.map((paragraph, pIndex) => (

          <p key={pIndex} className={detailStyle.paragraph}>


            {paragraph.content.map((segment, sIndex) => {


              if (segment.type === 'bold') {
                return (
                  <strong key={sIndex} className="font-bold">
                    {segment.text}
                  </strong>
                )
              }


              return (
                <span key={sIndex}>
                  {segment.text}
                </span>
              )
            })}
          </p>
        ))}
      </div>
    </div>
  )
}