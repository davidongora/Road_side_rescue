import React from 'react'

const Button = ({description}) => {
  return (
    <div>
      <button className='button bg-black text-white rounded-lg p-1'>{description}</button>
    </div>
  )
}

export default Button