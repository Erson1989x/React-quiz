
import React, { useEffect, useReducer } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
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

    default:
      throw new Error('Unknown action')

  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);



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
        <p> 1 / 15</p>
        <p>Question?</p>
      </Main>
    </div>
  )
}

export default App