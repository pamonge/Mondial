// import React from 'react'
// import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'

// export const DescriptionDetailCardComponent = ({ data }) => {
//   const paragraphs = data.description.split(/\n{2,}/).map(p => p.trim());
//   console.log(`Infor en DescriptionDetailCardCom ${info}`)
//   // if (!data || !Array.isArray(data)) return null; 
//   return (
//     <div className="bg-white rounded-2xl shadow-md mt-2 p-6">
//       <p className='font-semibold text-xl mb-4'>Descripción</p>

//       <div className={detailStyle.textBlock}>

//         {paragraphs.map((p, i) => (
//           <p key={i} className="mb-4">{p}</p>
//         ))}

//       </div>
//     </div>
//   )
// }

        {/* {data.map((paragraph, pIndex) => (

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
        ))} */}

import React from 'react'
import detailStyle from '../../styles/NewsStyles/DetailComponentStyle'

export const DescriptionDetailCardComponent = ({ data }) => {

  // 1) Proteger el acceso para evitar el TypeError
  if (!data || !data.description) {
    return (
      <div className="bg-white rounded-2xl shadow-md mt-2 p-6">
        <p className='font-semibold text-xl mb-4'>Descripción</p>
        <p className="text-gray-500">Cargando descripción...</p>
      </div>
    );
  }

  // 2) Cuando ya existe description, procesamos los párrafos
  const paragraphs = data.description
    .split(/\n{2,}/)
    .map(p => p.trim());

  return (
    <div className="bg-white rounded-2xl shadow-md mt-2 p-6">
      <p className='font-semibold text-xl mb-4'>Descripción</p>

      <div className={detailStyle.textBlock}>
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-4">{p}</p>
        ))}
      </div>
    </div>
  )
}