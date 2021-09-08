import { useEffect, useState } from 'react'

function getCepUrl(cep) {
  return 'https://ws.apicep.com/cep.json?code=[CEP]'
  .replace('[CEP]', cep)
}

function App() {
  const [counter, setCounter] = useState(0)
  const [cep, setCep] = useState(null)

  useEffect(() => {
    function searchCep() {
      if(cep === null) {
        return
      }
      fetch(getCepUrl(cep))
      .then(result => result.json())
      .then(result => console.log('resultado: ', result))
    }
    searchCep()

    return() => {
      console.log('clean app')
    }
// só funciona se for passado no input, caso contrario nada renderiza
// useEffect depende estritamente da atualização do cep
  }, [cep])

  return (
    <>
    <Counter counter={counter} setCounter={setCounter}/>
    <Cep cep={cep} setCep={setCep} />
    </>
  )
}

function Counter({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      <button onClick={() => setCounter((counter) => counter - 1)}>-</button>
    </>
  )
}

function Cep({ cep, setCep }) {
  function handleSubmit(event) {
    event.preventDefault()
    setCep(
      event.target.elements.campoCep.value
    )

  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='campoCep' />
        <button type='submit'>Buscar cep</button>
      </form>
    </>
  )
}

export default App
