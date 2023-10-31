import React from 'react'

export const Template = ({title, elements}) => {
  return (
    <div className='template'>
        <div className="header">{title}</div>

        <div className="content">
            {elements.map((elem, index) => {
                return <div key={index}>{elem}</div>;
            })}
        </div>

    </div>
  )
}
