import { useState, useEffect } from 'react'
import TextField from './components/TextField'
import { httpGet, httpPost, httpDelete } from './http';

const url = 'http://localhost:3333/cars'

function App() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    httpGet(url).then(setCars)
  }, []) 

  function handleSubmit(event) {
    event.preventDefault()

    const { image, brandModel, year, plate, color } = event.target

    const car = {
      image: image.value,
      brandModel: brandModel.value,
      year: year.value,
      plate: plate.value,
      color: color.value
    }

    httpPost(url, car)
      .then((response) => {
        if (response.error) {
          return alert(response.message)
        } 

        alert('Carro cadastrado com sucesso!')
        setCars([...cars, car])
      })
  
    event.target.reset()
  }

  function handleDelete(plate) {
    httpDelete(url, {plate})
      .then((response) => {
        if (response.error) {
          return alert(response.message)
        } 
        setCars(cars.filter(car => car.plate !== plate))
      }
    )
  }

  return (
    <main>
      <div className="register">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Registro de Carros</h1>

          <TextField 
            id="image"
            labelText="Imagem" 
            type="url"
            name="image"
          />

          <TextField 
            id="brandModel"
            labelText="Modelo"
            name="brandModel"
          />

          <TextField 
            id="year"
            labelText="Ano"
            name="year"
            type="number"
          />

          <TextField 
            id="plate"
            labelText="Placa"
            name="plate"
            pattern="[A-Z]{2,3}[0-9]{4}|[A-Z]{3,4}[0-9]{3}|[A-Z0-9]{7}"
          />

          <TextField 
            id="color"
            labelText="Cor"
            name="color"
            type="color"
          />

          <button 
            className="button-submit" 
            type="submit"
          >
            Cadastrar carro
          </button>
        </form>

        <table className="table">
          <thead>
            <tr>
              <th>Imagem</th>
              <th>Modelo</th>
              <th>Ano</th>
              <th>Placa</th>
              <th>Cor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.plate}>
                <td>
                  <img 
                    className="thumbnail"
                    src={car.image}
                    alt="carro"
                  />
                </td>
                <td>{car.brandModel}</td>
                <td>{car.year}</td>
                <td>{car.plate}</td>
                <td>{car.color}</td>
                <td> 
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(car.plate)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default App;
