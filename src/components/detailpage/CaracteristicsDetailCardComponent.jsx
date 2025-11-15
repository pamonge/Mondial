import React from 'react'

export const CaracteristicsDetailCardComponent = ({ data }) => {
  const listItem = data;
  return (
    <div className='bg-white rounded-2xl shadow-2xl py-4 mt-4 px-4'>
      <p className='font-semibold text-xl mb-4'>Características</p>
      <ul className="list-disc list-inside grid lg:grid-cols-2 grid-cols-1 gap-1">
        {
          listItem.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
