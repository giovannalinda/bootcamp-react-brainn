import { useEffect } from 'react'

const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App() {
  console.log('montando componente...')
  useEffect(() => {
    async function getCep() {
      console.log('buscando cep...')
      const response = await fetch(url.replace('[CEP]', '08344620'))
      const json = await response.json()
      console.log('cep', json)
    }
    getCep()
  })
  /*
    async function handleClick() {
    console.log('buscando cep...')
    const response = await fetch(url.replace('[CEP]', '08344620'))
    const json = await response.json()
    console.log('cep', json)
    }
    console.log('2) componente pronto para montar')
  */
  return (
    <>
      <button>Buscar CEP</button>
    </>
  )
}

export default App
