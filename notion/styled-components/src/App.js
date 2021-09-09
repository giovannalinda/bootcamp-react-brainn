import { useEffect, useState } from 'react'
import Counter from './counter'
import Cep from './cep'

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

export default App
