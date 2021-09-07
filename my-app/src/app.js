import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  console.log('input (estado): ', inputValue)
  
  const obj = {
    a: 1
  }

  const obj2 = {
    ...obj,
    b: 2,
    c: 3,
    d: 4
  }

  const { c, ...obj3 } = obj2

  console.log('obj', obj)
  console.log('obj2', obj2)
  console.log('obj3', obj3)

  function handleChange(event) {
    console.log('input value', event.target.value)
    setInputValue(event.target.value)
  }

  return (
    <form>
      <input value={inputValue} onChange={handleChange}/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default App
