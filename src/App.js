import './App.css'
import React from 'react'
import questions from './search.js'

function App() {
  return (
    <div className='App'>
      <ul>
        {questions.map( (q, index) => {
          return <li key={index}>{index}. {q}</li>
        })}
      </ul>
    </div>
  )
}

export default App
