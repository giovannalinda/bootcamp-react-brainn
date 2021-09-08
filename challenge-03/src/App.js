import { useState, useEffect } from 'react'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/cars')
      .then(response => response.json())
      .then(setCars)
  }, []) 

  return (
    <h1>App</h1>
  )
}

export default App;
