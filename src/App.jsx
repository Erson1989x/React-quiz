
import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'



const App = () => {
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