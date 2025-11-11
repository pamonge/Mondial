import React from 'react'


export const DescriptionDetailCardComponent = ({ data }) => {
  const descInfo = data;
  return (
    <div>
      <p>
        {descInfo}
      </p>
    </div>
  )
}
