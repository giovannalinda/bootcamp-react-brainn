import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  /*
  const state = useState(0)
  const counter = state[0]
  const setCounter = state[1]
  */

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <>
      {counter === null 
      ? <h1>Contador zerado</h1> 
      : <h1>Contador: {counter}</h1>
      }
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
/*
const button = document.querySelector('button')
button.addEventListener('click', (event) => {

})
*/