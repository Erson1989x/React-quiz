
import React, { useEffect, useReducer } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Loader from './components/Loader/Loader'
import Error from './components/Error/Error'
import QuestionCard from './components/QuestionCard/QuestionCard'
import Question from './components/Question/Question'

const initialState = {
  questions: [],
  status: 'loading',
  index: 0, // 1, 2 ...
  answer: null,
  points: 0,
  highscore: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }
    case 'dataFailed':
      return {
        ...state,
        status: 'error'
      }
    case 'start':
      return {
        ...state,
        status: 'active',
      }

    default:
      throw new Error('Unknown action')

  }
}

const App = () => {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);

  const numberQuestions = questions.length;

useEffect(() => {
  const fetchQuestions = async () => {
    try {
      const response = await fetch('http://localhost:3001/questions')
      const data = await response.json()  
      dispatch({type: 'dataReceived', payload: data})  
    }
    catch (error) {
      dispatch({type: 'dataFailed'})
    }


  }
  fetchQuestions()
}, [])


  return (
    <div className='app'>
      < Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <QuestionCard numberQuestions={numberQuestions} dispatch={dispatch} />}
        {status === 'active' && <Question questions={questions[index]} />} 
      </Main>
    </div>
  )
}

export default App