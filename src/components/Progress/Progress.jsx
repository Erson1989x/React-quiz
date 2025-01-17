import React from 'react'

const Progress = ({index, numberQuestions, points, maxPossiblePoints, answer}) => {
  return (
    <header className='progress'>
        <progress max={numberQuestions} value={index + Number(answer !== null)}></progress>
        <p>Question <strong>{index + 1}</strong> of <strong>{numberQuestions}</strong></p>
        <p>Points: <strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}

export default Progress