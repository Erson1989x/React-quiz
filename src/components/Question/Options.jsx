import React from 'react'

const Options = ( {questions} ) => {
  return (
    <div className='options'>
    {questions.options.map((option, index) => (
        <button className='btn btn-option' key={index}>{option}</button>
    ))}
</div>
  )
}

export default Options