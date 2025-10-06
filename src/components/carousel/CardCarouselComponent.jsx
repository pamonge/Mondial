import React from 'react'
import { LinkComponent } from '../LinkComponent'

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
            shadow-sm hover:shadow-2xl hover:shadow-blue-400
            transition-all 
            duration-300
            border border-gray-100
            hover:border-blue-800
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
        <div className='flex justify-center'>
          <LinkComponent src={info.linkData} desc='Ver más'/>  
        </div>
      </div>
    </div>
  )
}