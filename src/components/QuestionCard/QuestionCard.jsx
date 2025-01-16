import React from 'react'

const QuestionCard = ( {numberQuestions, dispatch} ) => {
  return (
    <div className='start'>
        <h2>Welcome to the React Quiz!</h2>
        <h3>{numberQuestions} question to test your React knowledge</h3>
        <button className='btn btn-ui' onClick={ () => dispatch({type: 'start'})}>Start</button>
    </div>
  )
}

export default QuestionCard