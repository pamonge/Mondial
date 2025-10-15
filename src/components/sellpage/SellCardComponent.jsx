import React from 'react'

export const SellCardComponent = ({ info }) => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-center' >
        <img src={`/cardsellpage/icon-sell${info.id}.png`} alt='icon'
        />
        </div>
      <div className='flex flex-col gap-3' >
        <h3 className='text-center font-bold text-blue-900' >{info.title}</h3>
        <p className='text-justify' >{info.description}</p>
      </div>
    </div>
  )
}
