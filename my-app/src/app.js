import { useState } from 'react'

function App() {
  const [inputValue, setInputValue] = useState('')
  console.log('input (estado): ', inputValue)
  
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
