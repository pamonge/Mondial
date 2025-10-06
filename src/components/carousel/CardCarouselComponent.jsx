// import React from 'react'

// export const CardCarouselComponent = ({ info }) => {
//   return (
//     <div className='h-full w-[480px] m-2 flex-shrink-0 cursor-pointer bg-gray-200 px-2 py-3 rounded-2xl ' >
//       <div className=' rounded-3xl overflow-hidden mb-4 relative h-[250px]  '>
//         <img src={`../../../public/carousel/image-carousel${info.id}.jpg`} alt={info.title} />
//         <span className='absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize ' >
//           {info.category}
//         </span>
//       </div>
//       <div className='px-4 flex flex-col gap-4'>
//         <h3 className='whitespace-normal uppercase italic text-center '>{info.title}</h3>
//         <p className='whitespace-normal text-justify ' >{info.description}</p>
//       </div>
//     </div>
//   )
// }

// FALTA RESPONSIVIDAD ------------------------------------------------------------------
// import React from 'react'

// export const CardCarouselComponent = ({ info, onClick }) => {
//   return (
//     <div 
//         className='h-full w-[480px] m-2 flex-shrink-0 cursor-pointer bg-gray-200 px-2 py-3 rounded-2xl hover:shadow-lg transition-shadow'
//         onClick={onClick}
//     >
//       <div className='rounded-3xl overflow-hidden mb-4 relative h-[250px]'>
//         <img 
//             src={`/carousel/image-carousel${info.id}.jpg`} 
//             alt={info.title} 
//             className="w-full h-full object-cover"
//         />
//         <span className='absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-white/90'>
//           {info.category}
//         </span>
//       </div>
//       <div className='px-4 flex flex-col gap-4'>
//         <h3 className='whitespace-normal uppercase italic text-center font-bold'>{info.title}</h3>
//         <p className='whitespace-normal text-justify text-gray-700'>{info.description}</p>
//       </div>
//     </div>
//   )
// }

// CardCarouselComponent.jsx - Versión con medidas relativas
import React from 'react'

export const CardCarouselComponent = ({ info, onClick }) => {
  return (
    <div 
        className='
            h-full 
            w-[85vw] max-w-[480px] 
            mx-auto
            flex-shrink-0 
            cursor-pointer 
            bg-white 
            px-4 sm:px-6 
            py-4 sm:py-6
            rounded-2xl 
            shadow-sm hover:shadow-xl 
            transition-all 
            duration-300
            border border-gray-100
            hover:border-blue-200
        '
        onClick={onClick} 
    >
      <div className='rounded-2xl overflow-hidden mb-4 sm:mb-6 relative h-[35vh] min-h-[200px] max-h-[280px]'>
        <img 
            src={`/carousel/image-carousel${info.id}.jpg`} 
            alt={info.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <span className='
            absolute top-3 left-4 
            border border-blue-300 
            text-xs sm:text-sm
            rounded-xl 
            px-3 sm:px-4 
            py-2 
            font-bold 
            capitalize 
            bg-white/95
            text-blue-700
            shadow-sm
        '>
          {info.category}
        </span>
      </div>
      
      <div className='px-2 sm:px-0 flex flex-col gap-3 sm:gap-4'>
        <h3 className='
            whitespace-normal 
            uppercase 
            italic 
            text-center 
            font-bold
            text-lg sm:text-xl
            text-gray-800
            leading-snug
        '>
          {info.title}
        </h3>
        <p className='
            whitespace-normal 
            text-justify 
            text-gray-600
            text-sm sm:text-base
            leading-relaxed
            line-clamp-4
        '>
          {info.description}
        </p>
        
        {/* Botón call to action */}
        <button className='
            mt-2
            bg-blue-600 
            hover:bg-blue-700 
            text-white 
            text-sm sm:text-base
            font-semibold
            py-2 sm:py-3
            px-4
            rounded-lg
            transition-colors
            duration-200
            w-full
        '>
          Ver más
        </button>
      </div>
    </div>
  )
}