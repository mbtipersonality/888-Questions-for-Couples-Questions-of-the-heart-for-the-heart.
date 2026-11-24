import './App.css'
import React from 'react'
import questions from './search.js'

function App() {
  return (
    <div className='App' onClick={handleClick}>
      <ul>
        questions.map(q=>{
          <li>q</li>
        })
      </ul>
    </div>
  )
}

export default App
