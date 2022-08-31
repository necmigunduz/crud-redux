import React from 'react'

const TextArea = ({ label, id, placeholder, onKeyDown }) => {
    return (
      <div className='flex flex-col'>
          <label htmlFor={id} className='mb-2 text-base text-gray-800 font-bold'>{label}</label>
          <textarea 
              name={id}
              className='bg-gray-200 px-6 border-8 outline-none rounded-3xl'
              onKeyDown={onKeyDown}
              placeholder={placeholder}
          >
          </textarea>
      </div>
    )
  }

export default TextArea