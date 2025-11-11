import React from 'react'

export const CaracteristicsDetailCardComponent = ({ data }) => {
  const listItem = data;
  return (
    <div>
      <ul>
        {
          listItem.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))
        }
      </ul>
    </div>
  )
}
