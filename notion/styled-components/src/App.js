import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Counter from './counter'
import Cep from './cep'
import CapsLock from './CapsLock'
import Pagina from './CapsLock'

const GlobalStyle = createGlobalStyle`
// global aqui
  body{
    background: #f2f2f2;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`

function getCepUrl(cep) {
  return (
    'https://ws.apicep.com/cep.json?code=[CEP]'
    .replace('[CEP]', cep)
  )
  
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
      .then(result => console.log(result))
    }
    searchCep()

    return() => {
      console.log('clean app')
    }
    // só funciona se for passado no input, caso contrario nada renderiza
    // useEffect depende estritamente da atualização do cep
  }, [cep])

  function HandleClick() {
    return alert('Clicou!')
  }

  return (
    <>
    <CapsLock />
    <Pagina />
    <GlobalStyle />
    <Counter counter={counter} setCounter={setCounter}/>
    <Cep cep={cep} setCep={setCep} color='#000' />
    <div>{cep}</div>
    <button onClick={HandleClick}>Clique-me</button>
    </>
  )
}

export default App
